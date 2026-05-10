# Alchemy Lab Mode — Design

The user's vision:

> "A game mode where the user is playing a sort of alchemy pinball in the environments we are creating to do this next idea: the player is placing tetris blocks that represent alchemical furniture and substances, and can click a button to decide what the next piece they drop will be, in an alchemy lab represented by configurations of blocks in the base. This can be tilting or non[-tilting]."

This document designs that mode in three parts: the **lab as a configurable starting platform**, the **piece selection (player picks the next drop)**, and the **pinball reactions** (chain effects when pieces interact with the lab apparatus).

---

## The three pillars

### 1. The Lab is a configurable starting grid

Unlike standard Balance Tetris (start empty) or puzzle levels (start with a pre-built tower), the **Lab** is a fixed configuration of *apparatus blocks* that act as the physical alchemy laboratory.

A lab is built from these block types (all from `ALCHEMY_ITEMS_40.md`):

- **Athanor** 🜫 — the central furnace
- **Alembic** ⚗ — distillation apparatus
- **Crucible** 🫙 — high-heat vessel
- **Pelican** 🦩 — circular distillation
- **Bain-Marie** 🜜 — gentle water bath
- **Mortar & Pestle** 🪨 — manual grinding
- **Glass Vessel** 🜼 — sealed Hermetic vessel
- **Retort** 🜬 — beaked distiller

Apparatus cells behave like **platform-contour cells**: indestructible, contribute 0 torque, but they have **active effects** on adjacent cells (where contour cells just sit there).

A complete lab might look like (visualization, top-down):

```
                                       (10 cols, 10 rows)
  . . . . . . . . . .         row 0    (open work area)
  . . . . . . . . . .
  . . . . . . . . . .
  . . . . . 🜜 . . . .         row 4    (Bain-Marie)
  . . . ⚗ . 🜫 . 🦩 . .         row 5    (Alembic - Athanor - Pelican line)
  . . . . . 🜫 . . . .         row 6
  . . 🪨 . . 🫙 . . 🜬 .         row 7    (Mortar - Crucible - Retort)
  . . . . . 🜼 . . . .         row 8    (Glass Vessel)
  . . . . . . . . . .         row 9    (base — empty for stacking)
```

Lab configurations are **declarative**: each lab is a 10×10 character grid stored in JSON. Different labs offer different chain-reaction possibilities. The user (or designer) can create custom labs.

Sample lab specifications:

```js
const LABS = {
  starter: {
    name: "Apprentice's Bench",
    description: "A simple lab: Athanor, Crucible, Alembic.",
    grid: [
      '          ',
      '          ',
      '          ',
      '          ',
      '          ',
      '   ⚗ 🜫    ',
      '     🜫    ',
      '     🫙    ',
      '          ',
      '          '
    ],
    legalItems: ['salt', 'sulphur', 'mercury', 'philStone']
  },
  rosicrucian: {
    name: "The Rosicrucian Vault",
    description: "Full instrumentation. Many chain reactions possible.",
    grid: [...], // 10 apparatus blocks
    legalItems: 'all'
  },
  // ...
};
```

### 2. Player chooses the next piece

Unlike normal Tetris where pieces come from a 7-bag, in Lab Mode the player **selects** the next piece from a palette.

**UI:** A row of selectable piece types at the bottom of the screen:

```
[Salt ✶] [Sulphur 🜍] [Mercury ☿] [Nigredo 🜔] [Alembic ⚗] [Stone 🜔]   [SPAWN]
```

Each button shows:
- The item emoji + color
- Its current stock (how many of this piece type the player can spawn)
- A tooltip with description

The player clicks a button to **select**, then clicks SPAWN (or presses Enter) to drop that piece into play.

**Stock mechanics:** Each lab session starts with a fixed supply of each piece type (e.g., 10 Salt, 5 Sulphur, 1 Stone). Pieces are consumed when spawned. Some apparatus produce more (e.g., the Pelican Recycles → adds 1 random piece back to stock).

**No piece queue:** Unlike the other modes, there's no "next piece preview" — the player chooses, so they always know what's coming.

### 3. Pinball cascade reactions

Once a piece is placed, its interactions with the apparatus and other pieces produce **chain reactions** that the player can predict if they know alchemical lore.

Examples (from `ALCHEMY_ITEMS_40.md` interaction matrix):

- Place **Salt** next to **Mercury** in the lab → Coagulation: Mercury fixes to neighbor trait
- Place **Sulphur** in the **Crucible** → Calcination: both become ash, weight dramatically reduced
- Place **Aqua Vitae** next to **Athanor** → both vaporize; platform tilts because mass was lost there
- Place **Stone** next to a row of Mercury cells → Multiplication chain: all Mercury cells become gold

**This is the "pinball":** placing a piece sets off a cascade that *bounces through the lab*, transmuting cells, removing mass, redistributing weight, eventually settling. The player's strategy: predict the cascade, place to maximize score.

### Settle pass

After each placement, run the **lab settle pass**:

1. **Item-triggered effects** fire in priority order (Calcination first, then Solutio, then Coagulatio, etc. — following Valentine's Twelve Keys order)
2. **Adjacency reactions** scan the grid for any pair of items that have a defined interaction
3. **Mass redistribution**: torque is recomputed after every effect
4. **Visual**: each effect flashes briefly, with delay between cascading steps so the player can see the chain happening
5. **Scoring**: each transmutation, each successful operation grants points

```js
function labSettlePass(g) {
  let changed = true;
  let pass = 0;
  while (changed && pass < 10) {  // safety cap
    changed = false;
    // Process effects in canonical order (the Twelve Keys)
    for (const op of ['calcination','solutio','coagulatio','putrefactio',
                       'sublimatio','distillatio','coctio','multiplicatio',
                       'projectio','fermentatio','exaltatio','coniunctio']) {
      changed = applyOperation(g, op) || changed;
    }
    pass++;
    g.cascadeStep = pass;
    g.flashTimer = 30;  // visual delay between cascade steps
  }
  recomputeTorque(g);
}
```

---

## Tilting vs non-tilting variants

The user asked: "This can be tilting or non[-tilting]."

Two sub-modes:

### Lab — Tilting (default)
Same physics as Balance Tetris: pieces add torque, the platform tilts, tip past max angle = game over.
- Lab apparatus cells contribute 0 torque (they're part of the immutable lab)
- Pieces placed/cascaded contribute normal torque
- **Tension**: mass loss from cascades shifts torque dramatically — a Phoenix detonating in your lab can swing the balance.

### Lab — Free (non-tilting)
Pure puzzle mode: no tilt, no game over from mass distribution.
- The lab is a static physics environment
- The player explores cascade chains for the highest score
- Win conditions: reach a target score within a piece budget, or fill specific "goal cells" with specific traits

The non-tilting variant is the most direct realization of "alchemy pinball" — the lab is the table, the pieces are the balls, the cascades are the bouncing.

---

## Lab editor (future)

The user can create their own labs via a **Lab Editor** screen:

- 10×10 canvas
- Drag apparatus blocks from a palette onto cells
- Save/load via JSON in localStorage
- Share labs via URL parameter (base64-encoded grid)
- Try the lab in Lab Mode

This becomes user-generated content: players share interesting lab configurations, and others test their cascade ideas.

---

## Win conditions for Lab Mode

Each lab has one or more **goals**:

| Goal type | Example |
|---|---|
| **Score target** | Reach 50 points within 20 piece spawns |
| **Transmutation target** | Produce N cells of trait X (e.g., 5 Sun/gold cells) |
| **Operation target** | Perform N successful Calcinations |
| **Cascade target** | Trigger a cascade of length ≥ 5 |
| **Survival** | Place all 20 pieces without tipping the platform |
| **Codex unlock** | Trigger every operation type at least once |

Mixing these creates rich level design: "Score 30, trigger 3 Calcinations, with no more than 10 pieces. Don't tip the platform past 30°."

---

## Piece palette: starter set

For the v1 starter Lab, the player has access to:

| Piece | Stock | Notes |
|---|---|---|
| Salt ✶ | 8 | Stabilizer |
| Sulphur 🜍 | 5 | Combustible |
| Mercury ☿ | 5 | Wildcard |
| Nigredo 🜔 | 3 | First-stage seed |
| Aqua Vitae 💧 | 2 | Powerful dissolver |
| Philosopher's Stone 🜔 | 1 | Endgame piece |

Plus the lab cells themselves are immovable apparatus — not in the player's palette.

Total budget: 24 pieces. Player must use them strategically. Some pieces (Pelican) can regenerate stock.

---

## Interaction with existing modes/mechanics

Lab Mode is a **new game mode**. It coexists with the existing 5 modes (Standard, Zen, Balloons, Bombs, Alchemy):

- Lab uses Alchemy's item registry and cascade infrastructure
- Lab disables Tetris-style line clearing (would conflict with the cascade focus)
- Lab disables auto-fall (player picks pieces, places them deliberately)
- Lab DOES support hot-seat 2P: players alternate selecting pieces, racing to score targets or sabotaging each other's cascades

---

## Implementation roadmap

### Phase 1: Plumbing (~1 day)
- Add `mode: 'lab'` to MODES registry
- Add LABS registry with 1-2 starter labs
- Lab cells are platform-marker cells with extra `item` flag (so apparatus has effects)
- Disable line clear / fall mode / auto-spawn when in lab mode

### Phase 2: Player-chosen pieces (~1 day)
- Replace next-piece queue with a piece palette UI at the bottom
- Stock tracking per piece type
- SPAWN button or Enter to commit a selection
- Disable mouse-Y dragging during palette phase; re-enable for placement

### Phase 3: Cascade engine (~2 days)
- Generic `applyOperation(g, opName)` that iterates the grid looking for adjacency triggers
- Per-pass visual flash with brief delay so players see chains step by step
- Score per operation, per transmutation
- Cascade step counter shown in HUD

### Phase 4: Lab editor (~2 days)
- Editor screen
- Drag-drop apparatus palette
- Save/load to localStorage
- URL-encoded sharing

### Phase 5: Lab campaign (~ongoing)
- 10+ hand-designed labs with goals
- Tutorial labs that introduce one apparatus at a time
- "Master labs" that combine 5+ apparatus types

---

## Why this works

This mode realizes three things the user has explicitly asked for:

1. **The alchemy lore is the gameplay** — knowing what an Athanor does in real alchemy directly tells you what it does in the game (heats neighbors, transmutes them to Mars over time).
2. **Cascading effects** — the lab is engineered to produce chains. Place the right piece in the right spot and one move ripples through five operations.
3. **Player agency on piece selection** — the user explicitly said "click a button to decide what the next piece they drop will be." This is core to the design.

It also serves as a sandbox where the player tests cascade theories without time pressure, which is exactly the kind of pedagogical playground the user wants to anchor the alchemy curriculum.

---

## Connection to Atalanta Fugiens emblems

The Lab can be themed after specific Maier emblems. Each emblem has a visual that suggests a particular lab configuration:

| Emblem | Lab theme |
|---|---|
| I — "His nurse is the earth" | Earth-focused: Mortar, Crucible, Salt-heavy |
| IV — "Oedipus and the Sphinx" | Riddle lab: Hermaphrodite + Coniunctio centerpiece |
| VIII — "Take the egg and pierce it with a fiery sword" | Vas Hermeticum (Egg) + Sword apparatus |
| XIV — "The Dragon does not die if not killed by its brother" | Dragon-pair lab (two Dragons, must annihilate) |
| XXIV — "The wolf devours the king and burns to ashes" | Calcination focus: Sulphur + Crucible |
| XXIX — "The Salamander lives in the fire" | Athanor-dominant lab |
| XXX — "Like the Hermaphrodite, the Rebis is born from two mountains" | Hermaphrodite + Coniunctio + double-trait challenge |
| XXXIII — "He is received into the bath" | Bain-Marie centered |
| XL — "Make one water out of two waters" | Two Alembics + Coniunctio |

This creates a direct bridge between Lab levels and the actual Atalanta Fugiens emblems, which the user's AtalantaClaudiens project documents in depth.
