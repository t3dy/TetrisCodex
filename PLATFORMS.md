# Balance Tetris: Platforms, Surfaces, and Block Properties

This document extends the v1 physics model (see SIMPLIFYPHYSICS.md) to support **varied platforms, surface modifiers, and block properties** as the basis for a level/challenge system.

## Design Philosophy

Each level is defined by three composable layers:

1. **Platform Type** — the underlying support geometry and physics constants
2. **Surface Modifier** — environmental conditions on the platform (wet, frozen, hot)
3. **Block Properties** — per-piece attributes (heavy, light, fragile, sticky)

By treating these as orthogonal data, we can compose hundreds of distinct level challenges from a small number of primitives. A level is a tuple `(Platform, SurfaceModifier?, [BlockModifiers])` plus win conditions.

---

## 1. Platform Types

Every platform implements the same physics interface but parameterizes it differently:

```
Platform {
  computeTorque(grid)  → number
  isStable(state)      → boolean
  applyTilt(state, dt) → state
  renderSupport(ctx)   → void   // visual fulcrum/base
}
```

### 1.1 Seesaw (v1 baseline)

Single pivot at center. 1D tilt left/right. Torque = sum of `(col - center)`.

- `stiffness: 25`, `maxTilt: 45deg`, `numFulcra: 1`, `fulcrumWidth: 0` (point)
- Difficulty: medium. The starting platform.

### 1.2 Wide Base

Single fulcrum but with a wide flat base. Tilt is suppressed below a threshold but engages sharply once exceeded.

- `stiffness: 40` below `8deg`, drops to `15` above. Forgiving small mistakes, punishes commitment.
- Difficulty: easy-medium. Tutorial platform.

### 1.3 Narrow Pole

Single point fulcrum with very low stiffness.

- `stiffness: 12`, `maxTilt: 30deg`. Every piece counts.
- Difficulty: hard. Late-game challenge.

### 1.4 Two-Fulcrum Bridge

Two pivots offset from center. Tilt is calculated relative to the **closer** fulcrum on each side, creating a "either-end-can-fail" structure.

- `numFulcra: 2`, `fulcrumOffsets: [-3, +3]` (in columns from center)
- Game over if torque around either fulcrum exceeds threshold
- Difficulty: hard. Forces center-mass play; the entire structure must stay over the bridge.

### 1.5 Sliding Base

Fulcrum can be moved by the player (or shifts on its own each turn). Adds a strategic dimension: re-balance by moving the support, not just the load.

- `fulcrumMobile: true`, `fulcrumShiftCost: 1 piece` (moving costs you a turn)
- Or `fulcrumDrift: true` — fulcrum drifts by 1 column every N pieces
- Difficulty: variable. Supports puzzle-style levels.

### 1.6 Suspended (Hanging)

Inverse seesaw. Platform hangs from a chain at top. Pieces below the chain attach upward (think upside-down stacking). Torque math identical, but rendering and intuition differ.

- Difficulty: medium. Cognitive twist on the same mechanics.

### 1.7 Fixed (No-Tilt)

Tutorial / puzzle mode. Platform doesn't tilt. Used for teaching piece controls and for scoring puzzles where balance isn't the failure mode.

- `maxTilt: 0`, balance is irrelevant. Failure = stack overflow only.

### 1.8 Two-Axis Disc (advanced/v3)

Platform tilts on both X and Y axes. 2D balance. Pieces have torque contributions on both axes.

- Difficulty: very hard. Reserved for late-game or expert mode.

---

## 2. Surface Modifiers

Surface modifiers are properties of the platform's top face that affect how blocks settle and interact after placement. They are runtime-resolvable: each turn, after a piece locks, surface effects are applied as a "settle" pass.

### 2.1 Dry (default)

Pieces lock in place. No post-placement movement.

### 2.2 Wet

Newly placed blocks have a chance to **slide one column** in the direction of tilt before settling, if there is empty space below or beside them.

```
slideChance = baseChance + (tiltAngle / maxTilt) * extraChance
// e.g. baseChance=0.15, extraChance=0.5 → up to 65% slide on max tilt
```

The slide affects only the piece that was just placed, and only for one cell. Implemented as a deterministic check: if `random() < slideChance` and the cell directly downhill is empty, the piece shifts.

### 2.3 Frozen

**All** blocks (not just the new one) check for sliding each turn. Frozen ice creates cascading slides — placing a piece can knock other pieces sideways. This is the "high chaos" surface and is best paired with forgiving platforms.

- Per-turn slide check on every block whose support directly downhill from it is empty
- Slides resolve in tilt-direction order (downhill blocks settle first, then uphill blocks fall into vacated space)

### 2.4 Hot

Blocks placed on a hot surface eventually **melt away** after N turns. Torque from melted blocks vanishes.

- `meltTurns: 5` (configurable)
- Visual: blocks darken and crack as their melt timer counts down
- Strategic: hot surfaces force you to keep placing fresh weight; you can't just balance once and stop

### 2.5 Sticky (Tar / Glue)

Pieces locked into a sticky surface **cannot slide** even if the platform tilts past slide thresholds. Effectively converts wet/frozen rules to dry for that surface.

- Useful for "rescue zones" — a strip of sticky in the middle of a wet platform creates a safe column

### 2.6 Magnetic

Blocks adjacent to magnetic cells stick together strongly — sliding rules ignore magnetic-locked groups. Creates structural opportunities.

### 2.7 Cracked / Decaying

Cells on the surface have a "health" value. Heavy blocks placed on cracked cells reduce health; at zero, the cell collapses and blocks above fall.

- Surface inverse of "hot": instead of disappearing on a timer, cells fail under load

---

## 3. Block Properties

Block properties are per-piece (or per-cell) modifiers that override the default `weight=1, slippery=false, fragile=false` baseline.

### 3.1 Standard

`weight: 1`, no special behavior. The default for all v1 pieces.

### 3.2 Heavy

`weight: 2` (or higher). Contributes more torque but also more stability when placed at center. Often colored gray or with a metallic texture.

### 3.3 Light / Hollow

`weight: 0.5`. Easier to balance, but stacks higher with less effect. Wood or balloon visuals.

### 3.4 Slippery (Ice Block)

The block itself triggers a slide check **even on dry surfaces**. Effectively a portable wet block.

### 3.5 Sticky (Glue Block)

Locks adjacent blocks regardless of surface modifier. Acts as a "rivet" connecting unstable structures.

### 3.6 Fragile (Glass)

Breaks if the platform tilt exceeds a per-block threshold. When broken, all cells of the block disappear — sudden mass loss can swing the tilt the other way violently.

- `fragileTilt: 30deg` per cell
- Visual: cracks appear as tilt approaches threshold

### 3.7 Sticky-Surface (Magnet)

When placed, this block "magnetizes" cells in its column for the rest of the level. Future blocks landing in that column treat the surface as Sticky.

### 3.8 Wildcard / Wild Color

Counts as any color for line-clear bonuses (if line clear is added in v2). Otherwise standard weight.

### 3.9 Counterweight (Free-Slide)

Doesn't contribute to torque calculation if placed within 2 columns of the fulcrum — designed as a "bonus" piece that can be safely dropped at center to add height without weight.

---

## 4. Level Composition

A level is defined declaratively:

```js
{
  id: "level-7-frozen-bridge",
  name: "Slippery Bridge",
  platform: { type: "TwoFulcrumBridge", offsets: [-3, 3], stiffness: 20, maxTilt: 35 },
  surface: { type: "Frozen", slideChance: 0.3 },
  blockSet: {
    standard: 0.7,    // 70% normal pieces
    fragile: 0.2,     // 20% fragile glass pieces
    heavy: 0.1        // 10% heavy
  },
  win: { piecesPlaced: 25 },
  lose: { tilt: 35, structureCollapse: true }
}
```

The game engine reads this config and instantiates the appropriate physics, surface, and piece distribution. New levels = new JSON, no engine changes.

---

## 5. Implementation Roadmap

### Phase A: Refactor v1 to abstract Platform

Pull the existing seesaw logic behind a `Platform` interface with `computeTorque`, `isStable`, `renderSupport`. The current implementation becomes `SeesawPlatform`. **No gameplay change.**

### Phase B: Add three more platforms

Implement Wide Base, Narrow Pole, Two-Fulcrum Bridge. Add a level selector menu showing 4 platform options. Same pieces, same surface (dry).

### Phase C: Surface modifiers (Wet, Frozen)

Implement post-placement slide pass. Add Wet and Frozen as surface options. Keep block set standard.

### Phase D: Block properties (Heavy, Fragile)

Add per-piece properties. Modify torque calculation to use `cell.weight`. Add visual treatments for property classes.

### Phase E: Level system

Wire up declarative level configs. Ship a campaign of 10 hand-tuned levels covering a variety of combinations.

### Phase F: Hot / Sticky / Magnetic / Cracked

Round out the surface modifier set. By this phase, the engine should handle arbitrary modifier combinations.

### Phase G: Two-Axis Disc

Final boss platform. Requires a 3D-aware renderer (or clever 2D projection).

---

## 6. Combinations to Avoid (Anti-Patterns)

Some combinations produce unfun chaos:

- **Frozen + Hot**: every turn, blocks both slide AND melt. Player has no agency. **Skip.**
- **Cracked + Suspended**: cells fail upward, which is visually confusing and physically nonsensical. **Skip.**
- **Sliding Base + Two-Fulcrum Bridge**: too many moving variables. **Use only one mobility source per level.**
- **Heavy blocks + Narrow Pole**: nearly impossible. Reserve for masocore mode only.

Levels should generally pair **one** chaos source (mobile fulcrum, slippery surface, fragile blocks) with **stable** companions to keep the strategy space readable.

---

## 7. Open Questions for the User

1. **Per-level scoring**: do levels have distinct win conditions (survive 30 pieces, fill row, etc.) or is it always "survive longest"?
2. **Campaign vs. arcade**: structured progression with cutscenes/story, or pick-any-level menu?
3. **Block visuals**: realistic textures (ice, glass, wood) or color-coded geometric (different shape outlines)?
4. **Cell-level properties**: can a single piece have mixed-property cells (e.g., one fragile cell in a normal T)? More expressive but more complex.
5. **Level editor**: ship one for v3? Lots of replay value if levels are pure JSON.
