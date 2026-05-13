# Balance Fairness And Instructions Pass

This pass addresses a recurring problem: some Balance Tetris-derived modes, especially Wild Hunt and harder platform variants, could punish the first placement so severely that the player did not get a meaningful chance to learn the mode.

## Problem

Instant first-placement failure is bad feedback:

- The player cannot infer what a good move would have been.
- Mode-specific mechanics feel arbitrary.
- The platform reads as broken rather than challenging.
- Wild Hunt is especially vulnerable because tiles have special weights, omen beats, and rider torque layered on top of base balance physics.

## Changes Implemented

### 1. Early Placement Grace

Added a shared stability helper:

- `isStableEnoughAfterPlacement(g)`

The platform still uses its real stability rules, but the first placement gets a small teaching grace if the tilt is not catastrophically beyond the limit.

### 1A. 2026-05-12 Opening Grace Expansion

Playtesting still showed first-placement tip-overs in harder platform and special-mode combinations. The previous grace only applied inside a moderate over-tilt band, which meant a player could still lose before receiving useful guidance.

Updated rule:

- `openingGracePlacements` is now a player-facing physics setting.
- Default is 3 early placements.
- Narrow Pole and Two-Fulcrum Bridge get one extra grace placement.
- Wild Hunt gets one extra grace placement.
- During grace, unstable placements warn instead of ending the run.
- The visible target tilt is capped to a recoverable warning angle.
- After the grace window, the normal platform stability rule returns.

Design intent:

- The player should always get at least one correction opportunity.
- Hard platforms can still be hard after the opening.
- The game should teach "counterweight near center or high side" instead of simply saying "you lost."

Mode-specific grace:

- Standard/alchemy/other modes: first placement can survive a moderate over-tilt.
- Wild Hunt: first two placements can survive a moderate over-tilt.

When grace is used, the game shows a **Balance Warning** card telling the player to counterweight or move toward center.

Design intent:

- Prevent first-move gotchas.
- Preserve real failure after the player has had a chance to respond.
- Avoid hiding serious instability forever.

### 2. Wild Hunt Torque Softening

Wild Hunt blocks now use a `cellTorque` mode hook that scales their base torque down:

- Wild Hunt tile torque is multiplied by `0.72`.
- Rider torque and omen beat effects still matter.

Design intent:

- Omens should feel uncanny and mobile, not like every tile is a deadweight.
- The mode should still become dangerous through beats, hounds, wind, and rider torque.

### 3. Intro Instruction Cards

Added `MODE_GUIDES` and a small in-game instruction card at the start of each run.

Each mode now defines:

- `goal`
- `goodMove`
- `watch`

The card explains what the player is trying to do and what a good opening move looks like.

### 4. Help Overlay Improvements

The full help overlay now includes mode-specific "Good First Moves" guidance, not just controls and flavor text.

Wild Hunt still includes its special chronicle rules:

- date tokens chronicle adjacent omens/hosts/riders/apparitions
- gold-framed cells are chronicled
- deceptive cells can be revealed
- every third placement fires an omen beat
- credibility is the intellectual footing meter

### 5. Campaign Description Updates

The Wild Hunt campaign level descriptions now give more actionable advice:

- place near center
- connect date cells to apparition/omen blocks
- keep volatile blocks low in the bowl
- keep mass between the two fulcrums on bridge levels

## Design Rule Going Forward

Every mode should answer these questions in-game:

1. What am I trying to do?
2. What is a good first move?
3. What danger should I watch?
4. Which special rule can suddenly change the board?
5. How can I recover from an early lean?

## Future Work

### Per-Level Opening Examples

Campaign levels should eventually show a small ghost recommendation:

- "Try your first piece here."
- "Keep mass inside the safe zone."
- "Date token wants an apparition neighbor."
- "This bridge fails from overhang before tilt."

### Better Preview Of Risk

Before locking a piece, draw a projected tilt meter:

- green = safe
- yellow = recoverable
- orange = grace-warning zone
- red = game over

This would let the player learn before committing.

### Mode-Specific Tutorial Levels

Each mode needs a first tutorial level with:

- forgiving platform
- no sudden event before placement three
- explicit objective
- one visible example of the scoring mechanic

### Authoring Tool Support

The Level Builder should expose:

- `openingGrace`
- `recommendedFirstCells`
- `tutorialText`
- `dangerText`
- `projectedTiltPreview`

These fields can become part of `alchemical-level-kit/v1`.
