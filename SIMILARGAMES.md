# Balance Tetris: Lessons from Similar Games

Research on contemporary games that share DNA with what we're building, with concrete features and implementation tricks worth borrowing.

---

## The Direct Comparables

### Tricky Towers (PC / consoles, 2016)

The closest existing game to what we're building. **Mandatory study material.**

> "Although there is visual similarity to Tetris, the gameplay is entirely different — falling blocks but the goal is to stack onto a tower rather than clear rows... towers are affected by gravity and topple if too much weight is on either side."

**Features worth stealing:**

| Feature | Why it matters | Implementation note |
|---|---|---|
| **Half-square placement** | Pieces move in 0.5-cell increments, not full cells. Lets you "nudge" into gaps. | Trivial change: `cur.col += 0.5` instead of `++`. Need sub-cell collision math. |
| **Nudge mechanic** | If a gap opens at the side of your tower, half-step lets you fill it. Sometimes succeeds, sometimes knocks tower down — that risk IS the gameplay. | The "sometimes fails" comes from non-deterministic physics. We'd need Matter.js or accept rare failure as "you placed badly." |
| **Magic spells (17 of them)** | Players use spells to help self / hinder opponent. Light blocks, heavy blocks, slippery blocks, fast drops, doubled-size blocks, removed blocks. | Maps directly to our PLATFORMS.md surface modifiers + block properties — but as **player-triggered powerups** rather than level constants. New axis: powerup deck. |
| **Mode triplet** | Race (build to height fastest), Puzzle (constraints), Survival (lasers rise from below). | Same engine, multiple modes = high replay value per unit of code. |
| **Non-deterministic physics** | "Even if you place things the same way, the results will not be the same." | This is intentional. Players accept/love the chaos. Direct opposite of our v1 deterministic torque. |

**Implementation lesson — half-square placement:**

```js
// Currently: cur.col is an integer
// Move in half-steps:
cur.col = Math.round(cur.col * 2) / 2;  // snap to halves
// Move/place validation: shape cells now at fractional columns
// Collision: round each cell column to nearest int OR test both adjacent cols
```

The cleanest implementation keeps a logical grid of integer cells, but the *piece* lives at a fractional column. When the piece locks, you split its cells into the two columns it overlaps and assign weighted contributions.

**Implementation lesson — spell system:**

A spell is just a **deferred modifier** applied to the next piece, the platform, or the existing tower. Same architecture as PLATFORMS.md surface/block modifiers — just with a player-controlled trigger and an energy/cooldown gate.

```js
{ id: 'lightblock',  applyTo: 'nextPiece',  effect: { weightMul: 0.5 } }
{ id: 'wind',        applyTo: 'platform',   effect: { tiltImpulse: -0.2 } }
{ id: 'slippery',    applyTo: 'opponent',   effect: { surface: 'frozen', duration: 3 } }
```

[Tricky Towers on Steam](https://store.steampowered.com/app/437920/Tricky_Towers/) | [Wikipedia](https://en.wikipedia.org/wiki/Tricky_Towers)

---

### Boom Blox (Wii, 2008) — Steven Spielberg / EA

The user's reference point. Less directly Tetris-shaped, but the **block-property and chain-reaction systems** are directly applicable.

> "Different types of blocks possess different physical properties; their mass and the amount of friction they exert alter the way they will respond to contact. Bomb blocks explode when hit. Chemical blocks fuse and pop when pressed together. The goal is to create incredible chain reactions."

**Features worth stealing:**

| Feature | Why it matters | Map to our system |
|---|---|---|
| **Bomb blocks** | Explode on impact, sending neighbors flying. | New block property: `onPlace: 'explode'` clears N adjacent cells. Massive torque swing. |
| **Chemical blocks** | Two adjacent same-color blocks fuse and pop. | Line-clear analog: 4+ adjacent same-color blocks dissolve. Adds a rare relief mechanic. |
| **Jeweled / score blocks** | High-value blocks worth points if surviving. | Adds risk/reward: fragile high-score block at center vs. safe edge placement. |
| **300+ levels with progression** | Each level introduces ONE new mechanic before combining. | Critical pacing lesson — see "Progression" section below. |
| **Defense mode** | Same engine, opposite goal: keep your tower UP while opponent tries to topple it. | Could become a 2-player mode where each player drops pieces on the other's side. |
| **Velocity-sensitive input** | Wii remote detects 4 distinct throw speeds. | Mouse equivalent: drag-and-release with velocity affects drop speed/angle. Adds skill ceiling. |

**Implementation lesson — chain reactions:**

After placement, run a "settle pass" that resolves cascading effects:

```js
function settlePass(g) {
  let changed = true;
  while (changed) {
    changed = false;
    for each block triggered (bomb, fusion, etc.):
      apply effect
      changed = true
  }
}
```

This is the same pattern as Match-3 cascade resolution. Borrow from `Bejeweled` / `Candy Crush` cascade implementations — they're well-documented.

[Boom Blox on Wikipedia](https://en.wikipedia.org/wiki/Boom_Blox) | [splitbrain.org review](https://www.splitbrain.org/blog/2008-10/25-boom_blox)

---

## The Wider Family

### World of Goo (2008)

> "Different types of goo balls. Removable balls force you to climb and restructure. Balloon goos create aerial acrobatics. Sticky goos make the structure mobile."

**Lessons:**
- **Block taxonomy as level design grammar.** Each new block type IS a new puzzle shape. Don't pile features in — release one block per "world" of levels.
- **Reversibility creates strategy.** Removable goo balls = the player can correct mistakes by climbing the structure. A "remove last placement" mechanic costing 1 point would make our game more forgiving without trivializing it.

[World of Goo on Wikipedia](https://en.wikipedia.org/wiki/World_of_Goo) | [Game Design Analysis](https://www.jonashietala.se/blog/2010/06/01/game_design_analysis_world_of_goo/)

### Bad Piggies (2012)

> "Sandbox mode contains large open environments where players can freely build any custom vehicle."

**Lessons:**
- **Sandbox mode is cheap to build, high replay value.** Same engine, no win condition. Great for sharing screenshots and word-of-mouth.
- **Grid-based attachment over free placement.** They use grid snapping despite being a physics game — because free placement frustrates players. We're already doing this; this validates the choice.

[Bad Piggies on Wikipedia](https://en.wikipedia.org/wiki/Bad_Piggies)

### Mobile stackers (Stack Toys, Tower of Hexagons, Find The Balance)

**Lessons:**
- **Minimalism wins on small screens.** Single color palette per level. Clean shadows. No clutter.
- **One-tap controls.** A single-action input (place where the cursor is) is sufficient for entire categories of stacking games.
- **Endless mode > campaign mode** for casual audiences. Cheap to build, high session count.

[Stack Toys on Google Play](https://play.google.com/store/apps/details?id=com.KhoGames.StackToys&hl=en_US) | [Find The Balance](https://play.google.com/store/apps/details?id=com.dmg.findthebalance&hl=en_US)

---

## Coding Toolkits

### Matter.js — the obvious choice for "real" physics

> "Matter.js is a 2D rigid body physics engine for the web, using JavaScript and HTML5. It's known for simplicity without compromising power."

If we want non-deterministic physics like Tricky Towers (and the user's request for "wetness" / "frozen" surfaces with sliding), we have a choice:

**Option 1: Stay deterministic (current).** Hand-rolled torque math. Predictable, replayable, snappy. Surfaces affect placement via discrete rules ("70% slide chance").

**Option 2: Adopt Matter.js.** Real friction, real mass, real momentum. Surfaces become friction values (`friction: 0.05` for ice, `friction: 0.9` for sticky). Pieces wobble physically as the platform tilts. Massive gain in feel; cost is non-determinism and significantly heavier code.

**Option 3 (recommended): Hybrid.** Keep deterministic torque for game-over check (so the player can't lose to RNG). Use Matter.js purely for *visual* settle: after locking a piece, run a brief Matter.js simulation showing pieces visually wobbling, then snap back to grid for the next placement. Best of both worlds — readable game state + physical feel.

[Matter.js homepage](https://brm.io/matter-js/) | [Matter.js GitHub](https://github.com/liabru/matter-js)

### Phaser Box2D / Planck.js

If we want determinism + realism, **Box2D** has deterministic mode. Planck.js is its JS port. Heavier setup, but replays work bit-for-bit across machines. Matters if we ever do leaderboards with replay verification.

[Phaser Box2D](https://phaser.io/box2d) | [Planck.js (Box2D port)](https://github.com/shakiba/planck.js)

---

## Concrete Recommendations for Our Roadmap

Based on the above, here's how I'd amend the PLATFORMS.md roadmap:

### Insert Phase B.5: Half-square placement option

Add a per-platform setting `subCellPlacement: true | false`. Narrow Pole and Two-Fulcrum become much more interesting with this — the half-cell wiggle room creates real strategy. Implementation: 1-2 hours.

### Re-frame Phase D (block properties) as "spells + properties"

Don't just have static block properties — let the player **earn spells** by surviving N pieces, then spend them on the next piece. This adds a meta-layer without much code. Spells are just one-shot block property modifiers.

```
Spells you can earn (5 pieces survived = 1 spell):
  - Featherweight: next piece weight = 0.5
  - Anchor: next piece weight = 2 (negative torque amplifier!)
  - Glue: next piece becomes Sticky (locks neighbors)
  - Crystal: next piece is Fragile (high score if survives)
  - Telekinesis: place next piece anywhere ignoring stack rules
```

### Add Endless mode AND Levels mode

- **Endless**: current gameplay, single platform, score = pieces survived. (Already shipped.)
- **Levels**: hand-tuned challenges combining platform + surface + block set. Aim for **30 levels with one new mechanic per level** (Boom Blox model).

### Adopt the Hybrid physics model in Phase C

When we add Wet/Frozen surfaces:
- **Game state stays grid-snapped.** A piece is always at integer (or half-integer) (col, row).
- **Visual layer uses a brief Matter.js settle.** When you place a piece on ice, run 0.5 seconds of Matter sim showing the piece visually slide/wobble, but snap back to a deterministic grid result.
- This gives the *feel* of Tricky Towers without the *frustration* of Tricky Towers.

### Spell/powerup HUD

Borrow from card games: 3 spell slots at the bottom. Click or hotkey 1/2/3 to apply to the next piece. Spells regenerate slowly. Visual: glowing icons, with cooldown radial fill.

### Multiplayer (long-term)

The Tricky Towers multiplayer model is exactly what we'd want: shared physics, side-by-side towers, spells that cross between players. Can wait until v4+, but the engine should NOT preclude it. Specifically: keep all game state in a single `GameState` object that could be one of N parallel states.

---

## Anti-Patterns (Things These Games Got Wrong)

- **Tricky Towers' inconsistent physics** is divisive. Players who love it call it "the chaos." Players who hate it bounced off. **Mitigation**: hybrid model above keeps the game-over check deterministic so a perfect placement can never lose to RNG.
- **Boom Blox's level count (300+)** is impressive but creates content debt. Most players quit by level 50. **Mitigation**: ship 20-30 hand-tuned levels + procedurally-generated endless mode.
- **Mobile stackers' lack of depth.** They're addictive for 10 minutes then forgotten. **Mitigation**: spells + multiple platforms + level objectives gives ours a longer tail than pure mobile stackers.
- **World of Goo's difficulty cliff** in late chapters. **Mitigation**: tag levels by difficulty, give players a non-linear path (4 levels available at any time, pick one, complete unlocks more).

---

## Two Things We Already Got Right

1. **Grid-snap placement.** Bad Piggies validates this even within physics-heavy games. We avoid the placement-frustration problem by keeping placement discrete.
2. **Multiple platform types.** Boom Blox's variety of structures and Tricky Towers' three modes both prove that *one mechanic, many configurations* is high ROI.

---

## Sources

- [Tricky Towers - Wikipedia](https://en.wikipedia.org/wiki/Tricky_Towers)
- [Tricky Towers on Steam](https://store.steampowered.com/app/437920/Tricky_Towers/)
- [Boom Blox - Wikipedia](https://en.wikipedia.org/wiki/Boom_Blox)
- [Boom Blox review on splitbrain.org](https://www.splitbrain.org/blog/2008-10/25-boom_blox)
- [World of Goo - Wikipedia](https://en.wikipedia.org/wiki/World_of_Goo)
- [Game Design Analysis: World of Goo](https://www.jonashietala.se/blog/2010/06/01/game_design_analysis_world_of_goo/)
- [Bad Piggies - Wikipedia](https://en.wikipedia.org/wiki/Bad_Piggies)
- [Matter.js homepage](https://brm.io/matter-js/)
- [Matter.js GitHub](https://github.com/liabru/matter-js)
- [Phaser Box2D](https://phaser.io/box2d)
- [Planck.js](https://github.com/shakiba/planck.js)
- [Stack Toys on Google Play](https://play.google.com/store/apps/details?id=com.KhoGames.StackToys)
- [Find The Balance on Google Play](https://play.google.com/store/apps/details?id=com.dmg.findthebalance)
