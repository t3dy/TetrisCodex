# Balance Tetris: Parody Mechanics

Each of the games in `SIMILARGAMES.md` has a signature mechanic. This doc translates those mechanics into the vocabulary of *our* game — Balance Tetris with grid-snapped placement, torque-driven tilt, swappable platforms — so they slot into the existing architecture instead of demanding a rewrite.

Each entry lists: the parody name, its source, the core hook, the data we'd add, and how it composes with the Platform / Surface / Block system from `PLATFORMS.md`.

---

## 1. Tipsy Towers — *Tricky Towers, but the wizard is drunk*

**Source:** Tricky Towers (spell system + half-square nudge)
**Hook:** You draw spell cards as you survive. Each card is a one-shot block-property modifier. The catch: spells cost balance — playing one shifts the platform's "spell debt" toward whichever side cast it.

**Mechanics:**
- **Spell hand**: 3 active slots, hotkeys 1/2/3 (and clickable HUD)
- **Earn rate**: 1 spell drawn every 5 surviving pieces, capped at hand size
- **Spell list (v1):**
  - **Featherweight** — next piece weight × 0.5
  - **Anchor** — next piece weight × 2
  - **Glue** — next piece becomes Sticky (locks neighbors in place even on slippery surfaces)
  - **Telekinesis** — next piece can be placed in mid-air (no support required)
  - **Quake** — empties the spell debt to zero, but adds ±0.1 rad random tilt impulse
- **Half-square placement** as a setting (not a mode) — piece column moves in 0.5 increments with `←/→`, full integer with `Shift+←/→`

**Composes with:**
- Spells = our existing modifier system, just runtime-triggered. Same data shape as PLATFORMS.md Block Properties.
- Half-square placement is orthogonal to platform type — works on any platform.

**Implementation:** ~6 hours. Spell deck is JSON. Half-square is a 1-line change to movement + a small refactor to torque (cells contribute fractional torque when piece is at half-column).

---

## 2. Boom Tetris — *Spielberg called, he wants his bombs back*

**Source:** Boom Blox (bomb blocks, chemical fusion, chain reactions)
**Hook:** Two new piece types that violate Tetris orthodoxy in fun ways.

**Mechanics:**
- **Bomb tetromino** (rare, ~1 in 12 from the bag): on placement, ticks for 5 pieces, then explodes. Explosion clears a 3×3 area. Explosion creates an *instant* torque swing — players must rebuild the displaced mass somewhere.
- **Chemical tetromino**: same shape pool as standard, but cells are a "chemical color." When **5+ chemical cells form a contiguous group**, they all pop. (Soft line-clear analog — strategic relief valve.)
- **Chain reactions**: a bomb's explosion can trigger neighboring chemical groups. Cascade resolution runs as a settle pass after placement.

**Composes with:**
- Both new piece types are just bag entries with extra `onPlace` / `onTick` / `onAdjacent` hooks
- Settle pass is the same architecture we'd build for Wet/Frozen surfaces in Phase C
- Pairs especially well with **Wide Base** platform — explosions cause big swings, and Wide Base forgives the recovery

**Implementation:** ~4 hours. Bomb is straightforward. Chemical pop = flood-fill detection on placement.

---

## 3. World of Glue — *adhesive horror tetrominoes*

**Source:** World of Goo (different ball types with structural roles)
**Hook:** Three new block-cell properties that change the *shape* of how mass distributes torque.

**Mechanics:**
- **Glue cells** (visible as droplet-textured blocks): bond rigidly to all adjacent cells. A 5-cell glue group acts as a **single rigid body** for slide/melt rules — frozen surfaces won't slide it, hot surfaces won't melt cells inside it.
- **Balloon cells**: contribute *negative* torque proportional to height. The higher up they are, the more they reduce tilt. Visually they have a string and bob slightly. Strategic anchor for the late-game when towers get tall.
- **Rubber cells**: absorb 50% of torque-delta on placement, smearing the tilt impulse across 3 piece-turns instead of one. Smoothing buffer for reckless play.

**Composes with:**
- All three are cell-level properties. Per-cell rather than per-piece (a single tetromino can have 1 balloon cell + 3 normal cells — interesting design space)
- Balloon cells particularly synergize with **Narrow Pole** platform — a tall balloon-anchored tower on a hair-trigger pivot is a different game

**Implementation:** ~5 hours. Glue is a union-find. Balloon modifies torque calc to include a height term for those cells. Rubber is a torque smoothing filter.

---

## 4. Bad Pieces — *the green pigs took up engineering*

**Source:** Bad Piggies (vehicle building + sandbox mode)
**Hook:** Two new modes that reuse all existing assets.

**Mode A: Sandbox**
- Infinite pieces, no game-over, no score
- Toggle gravity off (place pieces anywhere)
- Toggle "show torque" debug overlay
- Camera pan/zoom
- Cost: ~3 hours, mostly UI

**Mode B: Pig Drop**
- A "pig" (a single round 1×1 cell) sits at the top of the platform at the start
- Build a structure. When you press Enter, the platform pivots dramatically and the pig **rolls**, following gravity along the surface of your structure
- Win condition: pig reaches one of the two edges of the platform without falling into a hole
- Adds path/slope reasoning to a placement game

**Composes with:**
- Sandbox is just `createGame({ mode: 'sandbox' })` — disables piece queue, disables game-over check
- Pig Drop reuses tilt rendering + needs a simple 1D-along-surface walker. Could share code with future Wet/Frozen "slide" rules.

**Implementation:** Sandbox 3 hours. Pig Drop 8 hours (ball physics on the tilted surface).

---

## 5. JenGone — *deconstruction is also creation*

**Source:** Jenga (and Boom Blox's defense levels) — *removing* mass
**Hook:** Pure inversion of the core loop. The platform starts pre-stacked. You drop **anti-pieces** that *remove* cells.

**Mechanics:**
- Platform begins with a tower the engine has procedurally pre-built (or a hand-designed level)
- The piece queue contains "anti-tetrominoes" — same shapes, but they delete cells they overlap when placed
- Any cell deletion triggers a cascade: cells with no support fall, contributing instant torque change
- Win: reduce tower to N cells without tipping. Lose: tilt exceeds threshold during cascade.

**Composes with:**
- Reuses everything: same grid, same piece shapes, same tilt physics
- The anti-piece is a `Piece` with `mode: 'subtract'` — single field on the piece data
- Cascade falling = same engine you'd write for cracked surfaces in PLATFORMS.md
- Particularly fun on **Two-Fulcrum Bridge** — removing the wrong cell and dumping mass overhang is brutal

**Implementation:** ~6 hours including procedural pre-tower generator. Could ship a hand-tuned puzzle pack first (no generator needed).

---

## 6. Stacky Boi — *mobile-game minimalism is a vibe*

**Source:** Tower of Hexagons / Stack Toys (mobile minimalism)
**Hook:** A "zen mode" with all UI stripped out. Lo-fi music optional.

**Mechanics:**
- Black background, monochrome blocks (or single accent color per session, randomized)
- No score visible during play. No tilt meter. No piece queue.
- After game-over, briefly shows "X" (the score) in huge type, then resets
- Single-action input: tap/click anywhere to drop the piece at the cursor's column
- Optional ambient piano loop

**Composes with:**
- Pure render-layer change: same engine, different `RenderMode`
- The "minimal" rendering is its own theme/skin

**Implementation:** ~2 hours. It's mostly subtraction.

---

## 7. Crayon Kinematics — *draw your own demise*

**Source:** Crayon Physics Deluxe (draw-to-play)
**Hook:** Skip the bag. Draw your next piece.

**Mechanics:**
- Each turn, instead of being given a tetromino, you draw a shape on the grid (mouse drag). Cells under the drag become the piece, capped at 5 cells.
- The drawn shape becomes the next piece. Tilt physics react to its actual cell positions, including weird shapes (3-cell L, single dot, plus-sign, etc.)
- Add a "sketch budget": each turn allows N total cells drawn. Late-game shrinks the budget.

**Composes with:**
- Piece shape is already arbitrary in our representation (`shape: number[][]`)
- Just need a different `nextPiece()` that opens a draw overlay
- Validation: shape must be contiguous + within budget

**Implementation:** ~4 hours. Drawing UI is the main effort.

---

## 8. Bridge to Nowhere — *Poly Bridge is judging your structural integrity*

**Source:** Poly Bridge (load-bearing engineering)
**Hook:** A new platform type that's just a chasm.

**Platform: The Chasm**
- Two fulcra, far apart (offsets ±4 columns)
- Between the fulcra: **no platform surface** — pieces falling between the fulcra fall into the void (game over)
- You must literally bridge the gap with placed pieces, then stack on the bridge
- Once a row spans both fulcra, that row becomes the new "ground" for pieces above

**Bonus:** Bridge integrity check — if any cell on the bridge row is removed (e.g., by a bomb piece, or a hot-surface melt), the bridge collapses and all cells above fall.

**Composes with:**
- It's a Platform variant — just a different `computeTorque` and `isStable` (with chasm void check)
- Pairs viciously with Bomb Tetris (#2)
- Pairs amazingly with Glue cells (#3) — glue your bridge solid

**Implementation:** ~3 hours. Mostly bookkeeping for the void.

---

## 9. Catherine Cascade — *block puzzle but you're falling up*

**Source:** Catherine (push/pull blocks, vertical mobility)
**Hook:** A non-Tetris movement mode where pieces can be MOVED after placement.

**Mechanics:**
- After placing a piece, you have a small "shove budget" — you can push placed pieces up by 1 cell each, costing budget
- A pushed piece displaces anything above it (cascading lift)
- The new mechanic: rebuilding existing structure to recover from a bad placement
- Budget regenerates slowly (1 per 3 pieces placed)

**Composes with:**
- Reverses the "you can't undo a bad placement" rigidity that makes Balance Tetris stressful
- Adds a forgiveness layer that pairs well with hard platforms (Narrow Pole becomes more approachable)

**Implementation:** ~5 hours. Movement mode is straightforward; cascade-lift is union-find again.

---

## 10. Tetris Effect (the parody, not the game) — *synesthesia overload*

**Source:** Tetris Effect / Lumines (audio-visual synthesis)
**Hook:** Every action triggers a sound + particle. Score is multiplied by rhythm.

**Mechanics:**
- An ambient music loop plays at a fixed BPM
- Placing a piece on the beat = ×1.5 score
- Placing a piece on a strong beat (every 4th) = ×2 score
- Wrong-beat placement plays a discordant sound and gives ×1.0
- Visual: each piece type has its own pitched note; the platform's tilt direction sets a synth filter cutoff
- A tilted platform = a wobbly distorted track

**Composes with:**
- Pure additive layer — game logic untouched
- An accessibility win too: audio cue for tilt is one more channel for players who can't easily read the tilt meter

**Implementation:** ~6 hours, mostly Web Audio API plumbing. Use a simple BPM clock and gate scoring on `currentTime % beatLength < tolerance`.

---

## Composition Matrix

A few of these explicitly stack on each other:

| Combo | What you get |
|---|---|
| Tipsy Towers + Bridge to Nowhere | Wizard bridge-builder. Telekinesis spell + Glue spell = absurdly fun |
| Boom Tetris + JenGone | "Demolition Derby" — bombs destroy a pre-built tower, you control where |
| World of Glue + Narrow Pole | Tall balloon-anchored spires on a hair-trigger pivot — peak art-installation Balance Tetris |
| Bad Pieces (Sandbox) + Crayon Kinematics | Drawing tool with infinite canvas. Free creative play. |
| Stacky Boi + Tetris Effect | Minimal visuals + lush audio = the meditation app version of our game |
| Catherine Cascade + Hot surface | The shove budget lets you escape melting cells. Survival horror Tetris. |

---

## Recommended Build Order

If we're picking a few to actually build:

1. **Tipsy Towers** (#1) — highest value/effort. Spells slot directly into the modifier system we've been designing. Half-square placement is a cheap quality-of-life win.
2. **Boom Tetris** (#2) — bomb + chemical pieces add texture without changing the core loop. The settle-pass code is a prerequisite for Phase C surfaces anyway.
3. **JenGone** (#5) — total content reuse, totally different feel. Best ROI per line of code.
4. **Stacky Boi** (#6) — basically free. Ship it as a "Zen" toggle on the menu.
5. **World of Glue** (#3) — opens a deep design space (cell-level properties enable everything in PLATFORMS.md §3).

The rest are strong v3+ ideas. Bridge to Nowhere and Tetris Effect would each make great anchor features for a "season 2" content drop.

---

## Restraint Notes

A few of these would individually take Balance Tetris in very different directions. Building all 10 would produce a game that doesn't know what it is.

The framework: **pick a coherent triple.** E.g.:
- *Strategy version*: Tipsy Towers + JenGone + Bridge to Nowhere
- *Arcade version*: Boom Tetris + Stacky Boi + Tetris Effect
- *Toybox version*: Bad Pieces (Sandbox) + Crayon Kinematics + World of Glue

Each triple is internally consistent. Mixing across triples is where the game becomes incoherent.
