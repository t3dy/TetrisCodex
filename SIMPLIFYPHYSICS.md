# Balance Tetris: Physics Simplification Options

## The Core Problem

A real tilting platform has continuous rigid-body physics: pieces slide, topple, and interact with friction. Simulating that faithfully is expensive and produces chaotic, frustrating gameplay. We need a model that **feels** like a balancing act but stays deterministic and readable.

---

## Decision 1: When Does Tilt Resolve?

### Option A: Resolve After Every Placement (Recommended)

Player places a piece, it locks into the grid, then the platform calculates its new tilt angle and animates to it. The tilt is a **consequence** you observe, not a real-time obstacle during placement.

- Pros: Deterministic, easy to reason about, clean game loop
- Cons: Less "physical" feel

### Option B: Continuous Tilt (Real-Time)

The platform tilts in real-time as the player drags the piece around, previewing the effect before committing. Placement locks the piece and the tilt settles.

- Pros: More immersive, feels like a real balancing game
- Cons: Computationally heavier render loop, player can "game" the preview

### Option C: Tilt + Settle Phase

After placement, the platform tilts AND pieces on the surface are checked for "sliding" rules (e.g., unsupported pieces shift downhill). A brief settle phase resolves before the next turn.

- Pros: Most realistic
- Cons: Adds unpredictability, harder to plan, complex to implement

**Recommendation: Option A for v1.** Option B is a great v2 enhancement (live preview of tilt-on-hover). Option C is a trap -- it adds chaos without adding fun.

---

## Decision 2: What Determines Tilt Angle?

### Option A: Simple Torque (Recommended)

Each occupied grid cell contributes torque = `1 * (column - center)`. Net torque maps to tilt angle via `atan(netTorque / stiffness)`. Height of the cell is irrelevant.

```
torque_per_cell = (cell_column - platform_center)
net_torque = sum of all cell torques
tilt_angle = atan(net_torque / STIFFNESS)
```

- Pros: Intuitive (further from center = more tilt), deterministic, trivial to compute
- Cons: A tall tower at center and a tall tower at the edge produce very different torques, which is correct but height "leverage" is ignored

### Option B: Weighted Torque (Height Matters)

Each cell's torque includes a height multiplier: `torque = (column - center) * (1 + row * heightFactor)`. Pieces stacked higher have more leverage, like a real seesaw.

- Pros: More physically accurate, rewards low-and-centered play
- Cons: Harder for the player to intuit, punishes stacking (which is inevitable)

### Option C: Center-of-Mass Model

Track the aggregate center of mass of all placed pieces. Tilt is proportional to horizontal offset of CoM from the fulcrum.

- Pros: Elegant, single calculation
- Cons: Functionally identical to Option A (CoM horizontal offset IS net torque / total mass), just reframed

**Recommendation: Option A.** It's the simplest, most predictable, and it IS the center-of-mass model in disguise. Option B is interesting but adds a learning curve that doesn't pay for itself.

---

## Decision 3: What Happens on "Difficult Drops"?

A "difficult drop" is when the piece lands on a tilted surface and the resulting position is ambiguous or the grid is nearly full.

### Option A: Pieces Always Lock to Grid (Recommended)

Pieces snap to the grid regardless of tilt. The grid is the "true" game state; the tilt is a visual overlay that determines win/loss. A piece placed at column 3 always occupies column 3's cells, whether the platform is tilted 0 or 40 degrees.

- Pros: Completely deterministic, no ambiguity, easy to implement
- Cons: Visually, a piece "floating" on a heavily tilted platform looks odd

### Option B: Tilt Affects Landing Column

On a tilted platform, a dropped piece slides toward the low side before locking. The number of columns it slides is proportional to tilt angle.

```
slide = floor(tilt_angle / SLIDE_THRESHOLD)
final_column = placed_column + slide * tilt_direction
```

- Pros: Creates emergent strategy (use tilt to your advantage), more physical
- Cons: Much harder to predict, frustrating when a piece slides away from where you put it

### Option C: Tilt Blocks Placement

If the platform tilt exceeds a threshold, certain placements are rejected (piece would "slide off"). Player must first rebalance before placing on the high side.

- Pros: Creates interesting strategic tension
- Cons: Can softlock the player if the only available moves are on the rejected side

**Recommendation: Option A.** Grid-locked placement keeps the game readable. The visual tilt provides enough tension -- you don't need mechanical tilt effects to make the balance feel real. Option B could be a toggle-able "hard mode" later.

---

## Decision 4: Game Over Threshold

### Option A: Fixed Angle (45 degrees)

If `|tilt_angle| > 45deg`, the platform has tipped. Game over.

### Option B: Progressive Threshold

Threshold starts at 60 degrees and tightens over time or as more pieces are placed, eventually reaching 30 degrees. Creates natural difficulty curve.

### Option C: Momentum-Based

Track tilt velocity. If the platform is swinging too fast (large torque change in one move), it "overcorrects" and falls even if the final angle would be safe.

**Recommendation: Option A for v1.** Simple, predictable, easy to communicate. The stiffness constant controls difficulty: lower stiffness = easier to tip. Option B is a good v2 difficulty system.

---

## Decision 5: Does Stiffness Change?

### Option A: Constant Stiffness (Recommended for v1)

The platform's resistance to tilt stays the same throughout the game. A stiffness of 25 means:
- 1 piece on the far edge: ~25 degree tilt (safe)
- 2 pieces on the same edge unbalanced: ~44 degrees (danger!)
- 3 unbalanced: game over

### Option B: Degrading Stiffness

Platform gets "weaker" as more pieces are placed: `effective_stiffness = BASE - pieces_placed * decay_rate`. Creates a natural endgame crunch.

### Option C: Per-Level Stiffness

Stiffness resets and decreases with each "level" (e.g., every 10 pieces placed). Gives the player clear difficulty milestones.

**Recommendation: Option A.** Natural torque variance already increases difficulty as more pieces accumulate. Adding degrading stiffness on top feels punitive. Option C is good for a structured progression mode.

---

## Recommended v1 Physics Model

| Parameter | Value | Rationale |
|-----------|-------|-----------|
| Tilt resolution | After each placement | Clean game loop, deterministic |
| Torque model | Simple: `sum(col - center)` | Intuitive, fast, equivalent to CoM |
| Grid locking | Pieces always snap to grid | No ambiguity, no sliding |
| Game over | Tilt > 45 degrees | Clear threshold |
| Stiffness | 25 (constant) | ~2-3 unbalanced pieces before death |
| Tilt animation | Lerp to target angle | Smooth visual feedback |
| Piece weight | 1 per cell (uniform) | All tetrominoes weigh 4 |

This model is simple enough to explain in one sentence: *"Each block pushes the platform toward its side; stack too much weight on one side and it tips over."*

---

## Future Enhancements (v2+)

- **Live tilt preview** while hovering piece (Option B from Decision 1)
- **Height leverage** for hard mode (Decision 2, Option B)
- **Piece sliding** on steep tilt (Decision 3, Option B)
- **Degrading stiffness** for progression mode (Decision 5, Option B)
- **Wind/perturbation events** that temporarily shift the tilt
- **Two-player mode** where players try to tip the opponent's side
