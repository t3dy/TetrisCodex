# Balance Tetris: Mechanics & Modes Catalog

A long-form catalog of every mechanic and game mode designed for Balance Tetris, organized by what challenge they pose to the player and how they're implemented in code. This is the design-and-implementation reference doc.

---

## Part One: Core Mechanics

These are the fundamental interactions that everything else builds on.

### 1.1 Grid-snapped tetromino placement

**Player challenge**: Spatial reasoning under constraint. You don't choose where the piece goes physically — you choose a column and rotation, and the piece snaps to the lowest valid grid cell. The skill is reading the existing stack and finding placements that don't create overhangs or gaps you'll regret.

**How it challenges**: Forces forward planning. A perfect fit at the current piece is often a mistake if it makes the next 3 pieces awkward. The 7-bag randomizer (see 1.4) ensures you can semi-predict what's coming, rewarding multi-step planning.

**How it's coded**: A 2D array `grid[ROWS][COLS]` where each cell is either `null` or `{color, ...properties}`. Pieces are `{shape: number[][], col, color, ...}`. Placement runs `findLandingRow(shape, col)` which walks down from the top until a collision, then writes piece cells into the grid. Collision check: for each filled cell of the piece shape, verify in-bounds and the destination grid cell is `null`.

```js
function findLandingRow(shape, col) {
  let row = -shape.length;
  while (row < ROWS && !collides(shape, col, row + 1)) row++;
  return row;
}
```

Time complexity is O(ROWS × shape size) per placement — negligible.

### 1.2 Torque-based platform tilt

**Player challenge**: Center-of-mass intuition. You're not just stacking — you're managing where all the mass is, in real time. Two equal-weight stacks at columns 1 and 8 cancel out. One stack at column 1 with no counterweight will tip you. The challenge is balancing the entire structure while still placing pieces somewhere.

**How it challenges**: Creates a constant tradeoff between *good fit* (snug placement) and *good balance* (pieces where they don't fit perfectly but counter the tilt). Every piece is two decisions: where it fits, and where it should go for balance. Often these conflict.

**How it's coded**: Each occupied cell contributes torque proportional to its horizontal offset from the platform center: `torque = sum((col - center) * weight)`. Net torque maps to tilt angle: `angle = atan(torque / STIFFNESS)`. Stiffness is a tuning constant — higher = more forgiving. Game over when `|angle| > MAX_TILT` (typically 45°).

```js
function torque() {
  let t = 0;
  const c = (COLS - 1) / 2;
  for (let r = 0; r < ROWS; r++)
    for (let cc = 0; cc < COLS; cc++)
      if (grid[r][cc]) t += (cc - c) * (grid[r][cc].weight || 1);
  return t;
}
```

Computed fully on every placement (cheap: 80 cells max). Visual angle smoothly lerps toward the target via `currentAngle += (targetAngle - currentAngle) * 0.1` per frame. Game-over check uses `targetAngle` (deterministic), not the visual angle (animated), so a perfect placement can never lose to mid-animation values.

### 1.3 Frame-rate-independent animation

**Player challenge**: None directly — but its absence creates frustration. If drop speed depends on frame rate, players on slow machines get unfair gameplay.

**How it's coded**: Game loop captures `requestAnimationFrame` timestamps and computes `dt = (timestamp - lastTime) / 1000`. Drop speed is `pixels-per-second`, so `dropY += DROP_SPEED * dt`. Lerps use `1 - Math.pow(1 - factor, dt * 60)` — a frame-rate-independent equivalent of `factor`-per-frame. Clamped at `dt < 0.1` to prevent giant jumps after tab-switch.

### 1.4 7-bag randomizer

**Player challenge**: Knowing what's coming. Pure random would let you go 50 pieces without an I-piece (statistical possibility). The 7-bag promises that within every 7 pieces, you see each tetromino exactly once. So if you've seen 6 unique pieces, you know exactly what the 7th is.

**How it challenges**: Rewards memory + counting. Skilled players track which pieces of the bag have appeared and plan placements around the certainty of what's coming.

**How it's coded**:

```js
function nextFromBag() {
  if (bag.length === 0) bag = shuffle(['I','O','T','S','Z','J','L']);
  return bag.pop();
}
```

Fisher-Yates shuffle. The next-piece preview shows the next 1-3 pieces from the bag.

### 1.5 Wall-kick rotation

**Player challenge**: None — it removes a frustration. Without wall-kicks, rotating a piece adjacent to a wall would simply fail. With wall-kicks, the piece is bumped 1-2 cells inward to make room.

**How it's coded**: After computing the rotated shape, try placement at offsets `[0, -1, +1, -2, +2]` and use the first one that fits.

```js
const rotated = rotateCW(piece.shape);
for (const kick of [0, -1, 1, -2, 2]) {
  if (fits(rotated, piece.col + kick)) {
    piece.shape = rotated; piece.col += kick; break;
  }
}
```

---

## Part Two: Platform Variants

Platforms reuse the same physics interface but parameterize it differently. Each platform is a different fundamental challenge.

### 2.1 Seesaw (default)

**Player challenge**: Balanced beginner-friendly experience. Single pivot at center, max tilt 45°, stiffness 25. Two pieces on the same edge is a knife-edge survivor; three is game over.

**How it's coded**: `torque(grid) -> Math.atan(t / 25)`. Renders a triangular fulcrum at center.

### 2.2 Wide Base

**Player challenge**: Forgiveness with a sting. Below 8° of tilt, the platform is very stiff — you can be aggressive without consequence. Beyond 8°, stiffness drops sharply, and the platform slumps suddenly. Punishes overconfidence.

**How it challenges**: Encourages a play-style of "build big, then panic-balance late." The 8° threshold is a deceptive safety net.

**How it's coded**: Two-stage tilt function:

```js
tiltAngle(torque) {
  const linear = Math.atan(torque / 40);  // stiff
  if (Math.abs(linear) <= 8°) return linear;
  const sign = Math.sign(torque);
  const excess = Math.abs(torque) - tan(8°) * 40;
  return sign * (8° + Math.atan(excess / 15));  // soft beyond
}
```

Renders as a wide trapezoidal base.

### 2.3 Narrow Pole

**Player challenge**: Hair-trigger sensitivity. Stiffness 12, max tilt 30°. One I-piece on the far edge is already game over. Forces center-mass discipline.

**How it challenges**: Strips the game down to its purest form — every cell counts, no margin for error. Best for skilled players seeking a high score gauntlet.

**How it's coded**: Same torque formula, drastically different constants. Renders as a tall thin pole with a wide bottom plate (the plate is purely visual — physics still pivots from a point).

### 2.4 Two-Fulcrum Bridge

**Player challenge**: A different physical model — you're balancing on a SPAN, not a point. Mass that overhangs either fulcrum tries to tip the structure, even if the *center-of-mass* is over the bridge. Forces the player to think about local mass distribution, not just global balance.

**How it challenges**: Adds a second failure mode — overhang. You can be at 0° tilt and still lose if too much mass extends past either fulcrum.

**How it's coded**: `computeTorque` returns `{torque, leftFail, rightFail}` where `leftFail` is the sum of `(leftFulcrumCol - cellCol)` for all cells left of the left fulcrum, and similarly `rightFail`. Stability check fails if either overhang sum exceeds 8.

```js
isStable(angle, td) {
  if (Math.abs(angle) > MAX_TILT) return false;
  if (td.leftFail > 8 || td.rightFail > 8) return false;
  return true;
}
```

---

## Part Three: Surface Modifiers

Surfaces modify what happens AFTER placement — pieces don't just lock and stay, they may slide, melt, or break.

### 3.1 Dry (default)

No post-placement behavior. The placed piece stays exactly where it landed, forever.

### 3.2 Wet

**Player challenge**: Risk amplification on tilted platforms. When you place a piece on a tilted wet platform, there's a probabilistic chance it slides one column downhill before settling. The probability scales with tilt angle. Late-game, when the platform is leaning, every placement is a gamble.

**How it challenges**: Adds genuine randomness to placement consequences. Even a "safe" placement might worsen the tilt by sliding into a dangerous column. The player must factor probability into their decisions.

**How it's coded**:

```js
onPiecePlaced(g, piece, col, row) {
  const tiltPct = Math.abs(g.targetTilt) / MAX_TILT;
  const slideChance = 0.15 + tiltPct * 0.5;  // 15% baseline, up to 65%
  if (Math.random() < slideChance) {
    const dir = Math.sign(g.targetTilt);  // slide downhill
    if (canSlide(piece, col + dir, row)) shiftPiece(piece, col + dir);
  }
}
```

The slide is a single-cell shift — not arbitrary distance — to keep effects readable. Animated visually with a brief slide tween.

### 3.3 Frozen

**Player challenge**: Cascading instability. Unlike Wet (which only checks the just-placed piece), Frozen runs a slide check on EVERY block per turn. Place a piece on the high side, and the platform tilts toward equilibrium, but several existing blocks may slide downhill in the process — destabilizing further.

**How it challenges**: Makes the player responsible for the entire structure's stability, not just their current placement. Creates emergent chaos that's possible to plan around but hard to control.

**How it's coded**: After placement, settle pass:

```js
function frozenSettle(g) {
  let changed = true;
  while (changed) {
    changed = false;
    // Process from bottom to top, in tilt direction
    const dir = Math.sign(g.targetTilt);
    for (let r = ROWS - 1; r >= 0; r--) {
      for (let c = (dir > 0 ? COLS - 1 : 0); dir > 0 ? c >= 0 : c < COLS; c -= dir) {
        if (grid[r][c] && !grid[r][c+dir] && r === ROWS - 1 || !grid[r+1][c+dir]) {
          // Slide the cell one column downhill
          grid[r][c + dir] = grid[r][c];
          grid[r][c] = null;
          changed = true;
        }
      }
    }
  }
  recomputeTorque(g);
}
```

Iterative until convergence. Worst case O(ROWS × COLS²) but typically converges in 1-2 passes.

### 3.4 Hot

**Player challenge**: Time pressure. Every block placed on a hot surface has a melt timer (5 turns). When it expires, the cell vanishes. Sudden mass loss creates instant tilt. The player must constantly add new mass to replace what's evaporating, making "stop and balance" impossible.

**How it challenges**: Imposes a BPM on a normally untimed game. You can't hesitate — pieces don't wait.

**How it's coded**: Each cell has a `meltTimer`. On each placement, decrement all timers; cells at 0 vanish. Tilt recomputes after the vanishing pass.

```js
onPiecePlaced(g) {
  for (each cell) cell.meltTimer--;
  for (each cell) if (cell.meltTimer <= 0) grid[r][c] = null;
}
```

Visual: cells darken and crack as their timer approaches 0.

### 3.5 Sticky

**Player challenge**: Strategic safe zones. Sticky cells override slide rules on their column. Placing a sticky strip mid-platform creates a "rescue zone" where pieces won't slide regardless of platform state.

**How it's coded**: Sticky surface marks specific columns as `sticky=true`. The slide pass skips any cell in a sticky column.

### 3.6 Cracked

**Player challenge**: Structural integrity. Cells have an HP value reduced by the weight of cells stacked on top. When HP hits zero, the cell collapses and everything above falls. Encourages distributing mass horizontally rather than stacking columns.

**How it's coded**: Each cell has `hp`. After placement, recompute load on each cell (sum of weights of cells above it). If `load > hp`, cell breaks. Cells without support have a separate gravity pass that drops them.

---

## Part Four: Block / Piece Properties

Per-piece or per-cell properties that modify how that block behaves.

### 4.1 Heavy

**Player challenge**: A double-edged anchor. Heavy blocks (weight 2) contribute double torque. Placed at center: extremely stabilizing. Placed at edge: catastrophic. Forces decisive placement.

**How it's coded**: Cell carries `weight: 2`. Torque calc multiplies offset by weight.

### 4.2 Light / Hollow

**Player challenge**: A "freebie" — half-weight block lets you stack height without committing torque. But hollow blocks may have additional fragility (configurable).

**How it's coded**: `weight: 0.5`. Visual: lighter color, hatched pattern.

### 4.3 Slippery (Ice)

**Player challenge**: Localized chaos. A single slippery block triggers a slide check around itself even on dry platforms. Placing one in a column you care about is risky.

**How it's coded**: On placement, run a localized slide check on the surrounding 3×3 area. Otherwise behaves as a normal block.

### 4.4 Sticky (Glue)

**Player challenge**: Structural reinforcement. Glue blocks bond rigidly to all 4-adjacent neighbors. Frozen surfaces won't slide a glue group. Hot surfaces won't melt cells inside a glue group.

**How it's coded**: Union-find over the grid. After placement, compute connected components where edges are "adjacency between cells, where at least one is glue." Each component is treated as a single rigid body for slide/melt rules.

```js
function glueGroups(grid) {
  const id = Array.from({length: ROWS}, () => Array(COLS).fill(-1));
  let next = 0;
  function flood(r, c, gid) {
    if (r<0||r>=ROWS||c<0||c>=COLS||!grid[r][c]||id[r][c]!==-1) return;
    id[r][c] = gid;
    if (grid[r][c].glue) {
      flood(r-1,c,gid); flood(r+1,c,gid);
      flood(r,c-1,gid); flood(r,c+1,gid);
    }
  }
  for (each cell) if (grid[r][c] && id[r][c] === -1) flood(r, c, next++);
  return id;
}
```

### 4.5 Fragile (Glass)

**Player challenge**: High-score risk. Fragile blocks score double, but break if the platform exceeds 30° of tilt. Sudden mass loss on tilt can swing the platform back the other way violently.

**How it's coded**:

```js
onTilt(g, angle) {
  if (Math.abs(angle) > 30°) {
    for (each cell) if (cell.fragile) grid[r][c] = null;
    recomputeTorque(g);
  }
}
```

Visual: cracks appear as tilt approaches threshold.

### 4.6 Bomb

**Player challenge**: Spatial reasoning under timer pressure. Bomb cells tick down 5 turns then explode, clearing a 3×3 area. The explosion is mass loss = sudden tilt swing. Placement strategy: put bombs where their eventual explosion will help (clearing overhang on the opposite side).

**How it's coded**: Cell has `bomb: true, fuse: 5`. Each turn, decrement fuses. At 0, clear a 3×3 area centered on the cell. Multiple simultaneous explosions resolve in the same settle pass.

### 4.7 Balloon

**Player challenge**: Anti-intuitive structural element. Balloon cells have NEGATIVE weight that scales with height — placed near the top, they pull the platform UP on their side. Provides a counter-balance against deep-stacked heavy blocks.

**How it challenges**: Inverts the usual "place toward center" instinct. You actively WANT balloons on the heavy side, high up.

**How it's coded**:

```js
torque() {
  let t = 0;
  for (each cell) {
    if (cell.balloon) {
      const heightFactor = 1 + (ROWS-1 - row) * 0.4;
      t += (col - center) * (-1) * heightFactor;
    } else {
      t += (col - center) * cell.weight;
    }
  }
  return t;
}
```

### 4.8 Counterweight (Fulcrum-bonus)

**Player challenge**: A safe-zone freebie. If placed within 2 columns of the fulcrum, contributes ZERO torque. Allows risk-free height stacking near center.

**How it's coded**: `if (Math.abs(col - center) < 2 && cell.counterweight) skip torque contribution`.

---

## Part Five: Game Modes

Modes are higher-level configurations that combine pieces, surfaces, and rule changes into a coherent experience.

### 5.1 Standard (default)

Endless survival. 7-bag, dry surface, standard pieces, single platform. Score = pieces placed. Already shipped.

### 5.2 Spells (Tipsy Towers parody)

**Player challenge**: Tactical resource management. You earn spell cards as you survive. Each spell modifies the next piece (Featherweight halves weight, Anchor doubles it, Telekinesis lets you place mid-air, etc.). Spells are bursty: hold them for crisis moments or spend them aggressively for long stacks.

**How it challenges**: Adds a meta-decision layer ON TOP of placement: when to use what. Late-game crises become survivable if you've been hoarding the right spell.

**How it's coded**:

```js
const spellHand = []; // array of spell objects, max 3
const SPELLS = [
  {id:'feather', apply: p => p.weight = 0.5},
  {id:'anchor',  apply: p => p.weight = 2},
  {id:'flip',    apply: p => p.shape = p.shape.map(r => r.slice().reverse())},
  {id:'tk',      apply: p => p.tk = true},  // ignore landing rules
  {id:'quake',   apply: () => bag = shuffle(TYPES)},
];
let modOnNextPiece = null;

// On 1/2/3 keypress:
modOnNextPiece = spellHand.splice(idx, 1)[0];

// On spawn:
if (modOnNextPiece) modOnNextPiece.apply(currentPiece);

// Earn a spell every 5 pieces:
if (piecesSinceLastSpell >= 5 && spellHand.length < 3) {
  spellHand.push(SPELLS[random]);
  piecesSinceLastSpell = 0;
}
```

Each spell is a one-line transformation. The whole system is ~30 lines.

### 5.3 Bombs (Boom Tetris)

**Player challenge**: Anticipating chaos. Bomb pieces (1 in 6) carry a 5-turn fuse on every cell. You're constantly tracking multiple bomb timers across the grid. When one detonates, a 3×3 area clears, creating a sudden torque swing.

**How it challenges**: Adds explicit time pressure (counters everywhere) and forced restructuring (you can't build a perfect tower because parts of it will detonate). Strategy: place bombs where their cleared area will *help* (remove overhang on opposite side).

**How it's coded**: See section 4.6. Cells carry `bomb: true, fuse: int`. Placement decrements all fuses. Settle pass clears 3×3 around any cell at fuse=0. Tilt recomputes after.

### 5.4 Balloons (World of Glue)

**Player challenge**: Counter-intuitive anchoring. ~20% of pieces are balloons that contribute negative torque — and the higher you place them, the stronger the lift. The mental model flips: place balloons on the heavy side, near the top.

**How it challenges**: Forces players to maintain an internal "torque budget." A torque readout helps, but the skill is feeling when a balloon is needed and where.

**How it's coded**: See section 4.7.

### 5.5 JenGone (Inverted Tetris)

**Player challenge**: Pure deconstruction reasoning. Tower starts pre-built. You drop anti-pieces that DELETE cells. Every removal shifts torque. Must reduce the tower without tipping. Inverts every reflex from regular Tetris.

**How it challenges**: Same physics, inverted action. Tests whether players UNDERSTAND torque or were just spatially-reasoning their way through stacking.

**How it's coded**: Anti-pieces have `mode: 'subtract'`. Placement loops through piece cells and sets `grid[r][c] = null` if the cell exists. No collision check (anti-pieces pass through).

```js
function landAntiPiece(piece, col) {
  // Anti-piece "lands" at the highest row where any cell touches a filled cell
  let row = -piece.shape.length;
  while (row < ROWS - piece.shape.length) {
    if (anyOverlap(piece, col, row + 1)) break;
    row++;
  }
  return row;
}
```

Pre-built tower: a procedural generator that creates a near-balanced starting state, then nudges cells off the heavier side until torque is within ±2.

### 5.6 Zen (Stacky Boi)

**Player challenge**: None mechanical — it's a pure focus mode. Stripped UI, monochrome, no score during play. The challenge is *attention*: with all noise removed, you become aware of placement quality without numerical feedback.

**How it's coded**: Pure render-layer change. Same engine, alternate `RenderMode`. No score display, no tilt meter, no piece queue, no fulcrum triangle (just a tiny dot). Score appears only after game-over, in large serif type. Single accent color randomized per session. CSS sets `cursor: none` on the canvas.

### 5.7 Bridge to Nowhere

**Player challenge**: Span construction. Two-fulcrum platform with VOID between fulcra — pieces falling into the void are lost. You must build a bridge across the gap, then stack on top.

**How it challenges**: Forces a load-bearing first phase (bridge construction) before normal stacking can begin. Bombs, melting, or fragile blocks become catastrophic if they affect bridge cells.

**How it's coded**: Platform variant. Grid columns between fulcrum offsets are void columns: pieces falling there don't lock — they're destroyed. Once a row spans both fulcra (i.e., contains a continuous filled row from left fulcrum column to right fulcrum column), that row becomes the bridge. Bridge integrity check: if any cell on the original bridge row becomes null (e.g., bomb), all cells above fall.

### 5.8 Crayon Kinematics

**Player challenge**: Self-imposed constraints. Each turn, you DRAW the next piece's shape on a small canvas. The drawn cells become the piece, capped at 5 cells. Now you can't blame the bag — every awkward shape is your own creation.

**How it challenges**: Tests strategic thinking about *piece design*. A safe play is to draw a square (compact, predictable). A daring play is to draw an L-shape that fits a specific gap. The constraint becomes the play.

**How it's coded**: Drawing UI that captures mouse-down + drag, marking grid cells. Validation: shape must be contiguous (4-connected flood-fill check) and within the cell budget. The shape is then converted to a normalized 2D array (trim padding).

### 5.9 Catherine Cascade

**Player challenge**: Forgiveness mechanic. After placement, you have a "shove budget" (3 shoves to start, regenerates 1 every 3 placements). Each shove pushes a single placed cell up by one row, displacing anything above. Lets you correct mistakes — but the resource is finite.

**How it challenges**: Adds an undo-like layer that doesn't trivialize the game. Players must judge when a placement is bad enough to spend a shove on.

**How it's coded**:

```js
function shove(r, c) {
  if (shoveBudget <= 0) return;
  if (!grid[r][c]) return;
  // Push the column upward starting from row r
  for (let i = 0; i < r; i++) {
    grid[i][c] = grid[i+1][c];
  }
  grid[r][c] = null;
  shoveBudget--;
  recomputeTorque();
}
```

A click on a placed cell during the brief between-pieces window triggers a shove on that cell.

### 5.10 Tetris Effect (rhythm parody)

**Player challenge**: Multi-modal coordination. A backing music loop plays at fixed BPM. Placing a piece *on a beat* multiplies your score for that piece. Strong beats (every 4th) give a 2× multiplier. Off-beat placement plays a discordant sound and earns 1×.

**How it challenges**: Adds a temporal axis to placement. You may want to wait a beat for a 2× — but waiting means the piece is positioned, exposing you to whatever next thing the platform does. Auditory feedback also amplifies tilt awareness.

**How it's coded**: Web Audio API. Maintain a `beatClock` based on `audioContext.currentTime % beatLength`. On placement:

```js
const phase = (audioContext.currentTime % beatLength) / beatLength;
const onBeat = phase < 0.1 || phase > 0.9;
const isStrong = (beatCount % 4 === 0);
const mult = onBeat ? (isStrong ? 2 : 1.5) : 1;
score += mult;
```

Each piece type maps to a pitched note. Tilt direction sets a synthesized filter cutoff: leaning hard distorts the mix. Total Web Audio code: ~80 lines.

---

## Part Six: How Modes Compose

Several modes are designed to stack:

| Combo | Combined Challenge |
|---|---|
| **Spells + Bombs** | Cast Featherweight on a Bomb piece — light bomb that tilts the platform less when it lands, but still detonates. Cast Anchor on a Bomb — heavy bomb causes massive impact, then massive relief. |
| **Balloons + Hot surface** | Balloons can't melt (gas, not solid) → reliable counter-anchors in a melting environment. |
| **Bombs + Bridge** | Bombs detonating on bridge cells = total collapse. Forces bomb placement OFF the bridge row. |
| **JenGone + Frozen surface** | Removing a cell creates a slope; remaining cells slide downhill, removing more support, cascading failure. |
| **Spells + JenGone** | Spell deck includes "Refill" (places a random tetromino back into the tower) — temporary recovery. |
| **Catherine + Narrow Pole** | The shove budget makes Narrow Pole survivable. Combo for skilled players seeking high scores with safety net. |

The composition rule is **mode + platform + surface + block-set is independent**, so any mode runs on any platform with any surface and any block distribution — provided the data shapes are compatible. The Mode interface explicitly hooks `onPiecePlaced`, `onTorqueAdjust`, `onUpdate` to allow stacking effects.

---

## Part Seven: Coding Patterns

These patterns appear across multiple mechanics. Build them once, well.

### 7.1 The Settle Pass

Used by: Bombs (cascade detonations), Frozen (cascade slides), Cracked (cascade collapses), Glue (groups stay rigid through other settle effects).

```js
function settle(g) {
  let changed = true;
  let safety = 100;  // prevent infinite loops
  while (changed && safety--) {
    changed = false;
    for (each effect type in priority order) {
      changed = applyEffect(g, type) || changed;
    }
  }
  recomputeTorque(g);
}
```

Priority order matters. Detonations first (instant mass loss). Then sliding (mass redistribution). Then collapses (gravity). Glue groups are *resolved before* slides/collapses are applied, so groups move as units.

### 7.2 The Modifier Stack

Used by: Spells, Block properties, Surface effects.

Treat every modifier as an object with the same shape:

```js
{
  id: 'feather',
  scope: 'piece' | 'cell' | 'platform' | 'global',
  trigger: 'onPlace' | 'onTick' | 'always',
  apply: (target) => { target.weight = 0.5 },
  duration: number | 'permanent',
}
```

The same data shape powers spells (player-triggered, single-use), block properties (cell-attached, permanent), and surface effects (platform-attached, runtime). Trivial to add new ones.

### 7.3 Pure Game State

Game state is one object. No globals, no hidden state. Everything that affects gameplay is in `g`:

```js
g = {
  phase, grid, current, next, bag,
  platform, mode, surface,
  score, piecesPlaced,
  tilt, target, tiltVelocity,
  spellHand, modOnNext,
  shoveBudget,
  // ...
}
```

This is the discipline that makes modes composable: a mode can read/write `g` without worrying about hidden state. It also makes save/load, replay, and (eventually) multiplayer trivial — N games are N `g` objects.

### 7.4 The Render Hook

Each mode can extend rendering without duplicating the base render code:

```js
function render(g) {
  drawBackground();
  drawPlatform(g);
  drawGrid(g);
  drawPieces(g);
  if (g.mode.onRender) g.mode.onRender(g, ctx);  // ← here
  drawHUD(g);
  if (g.phase === 'over') drawGameOver(g);
}
```

Modes use this hook for their specific UI (spell hand, shove counter, bomb timers).

### 7.5 Deterministic vs. Visual

A consistent rule: **game-state changes are deterministic; visual state lerps toward game state.** The player can never lose because of a frame where the visual was mid-lerp. The visual lags the truth, never leads it.

Specifically:
- `g.targetTilt` is the truth (computed from `torque(grid)`)
- `g.tiltAngle` is what's drawn (lerps toward target each frame)
- Game-over check uses `g.targetTilt`
- Wobble/shake effects offset the visual but never the truth

---

## Part Eight: What's Built, What's Next

**Built into main game (`index.html`):**
- Core mechanics 1.1–1.5
- Platform variants 2.1–2.4

**Built as standalone prototypes (`prototypes/`):**
- Mode 5.2 (Spells)
- Mode 5.3 (Bombs)
- Mode 5.4 (Balloons)
- Mode 5.5 (JenGone)
- Mode 5.6 (Zen)

**Designed but not built:**
- All Surface modifiers (3.2–3.6)
- All non-prototyped Block properties (4.1, 4.2, 4.4, 4.5, 4.8 — 4.6, 4.7 are in their respective prototypes)
- Modes 5.7–5.10

**Implementation order recommended in `MODESPLAN.md`:**
1. Mode infrastructure refactor (route current game through Mode interface)
2. Port Zen (lowest risk validation)
3. Pick favorite prototype, port to main game
4. Iterate

The prototypes exist specifically to validate which modes are fun BEFORE committing engine integration cost. Five minutes of play tells you more than five hours of design discussion.
