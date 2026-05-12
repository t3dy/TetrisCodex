# Input Feedback Readout

This document describes the player-facing feedback system added so inputs teach the player what just happened.

## Goal

Every significant player input should produce a short readable response:

- what action was taken
- where the piece/ship/cargo moved
- what the platform is doing
- whether the action was blocked
- what consequence changed the game state

The original example was:

> block to column 5, tipping to the right

## Balance Tetris Implementation

`balance-tetris.html` now has an **INPUT FEEDBACK** panel during play.

It reports:

- game start and mode/platform context
- keyboard movement left/right
- blocked movement
- rotation and wall-kicks
- step-down movement
- mouse aiming
- hard drop target
- piece placement column/row
- current tilt direction and angle
- alchemy palette arming/spawning
- palette timeout spawns

Examples:

- `Move left: T-piece to columns 4-6, above grid; platform nearly level.`
- `Step down: I-piece to columns 2-5, row 3; tipping right 8 deg.`
- `Placed O-piece at columns 5-6, row 9; tipping left 12 deg.`
- `Palette armed: ♈ Calcination. Choose Salt, Sulphur, or Mercury next.`

## VALIS Space Taxi Implementation

`valis-space-taxi.html` now has an **INPUT FEEDBACK** panel during routes.

It reports:

- route start
- thrust/strafe/brake inputs
- ship position and speed
- platform tilt
- docking denial or success
- cargo pickup and delivery
- beam reveal/miss/overheat
- hard landing effects
- cascade changes

Examples:

- `Main thrust: x 720, y 190, speed 42; platform tilt 0 deg.`
- `VALIS beam revealed Half-Life Patient. Beam heat 22%.`
- `Picked up unknown cargo; deliver it to the VALIS relay.`
- `Hard landing on platform; hull 82%, cascade 14%.`

## Design Rules

1. Feedback should be short enough to read mid-play.
2. The newest input should appear first.
3. The panel should keep a small history, usually 3-5 entries.
4. The feedback should state consequences, not only controls.
5. Blocking is information: blocked moves should be reported.
6. The text should teach the mechanic vocabulary over time.

## Future Work

### Level Builder

The level builder should preview what player feedback will say for custom assets:

- block placement feedback
- objective feedback
- receiver feedback
- cascade feedback

### Asset Studio

Asset definitions should include optional feedback strings:

```json
{
  "feedback": {
    "placed": "Salt vault fixed neighboring matter.",
    "revealed": "VALIS beam revealed the hidden support state.",
    "dumpedCorrect": "Mercury escaped through an acceptable side.",
    "dumpedWrong": "Sulphur spilled into the wrong receiver."
  }
}
```

### Balance Tetris Preview

Before lock-in, the game should eventually show projected feedback:

- projected column
- projected tilt
- projected safe/warning/game-over state
- projected alchemical dump score

### Website

The Game Guide should eventually include a "How feedback works" section so players understand that the text box is a learning aid, not just a log.
