# Alchemical Breakout Mode

Alchemical Breakout is a planned paddle-and-ball mode where bouncing balls disturb an alchemical laboratory. It is the faster arcade cousin of Alchemical Billiards: less careful aiming, more repeated collisions, more escalating cascade pressure.

## User Prompt

The user asked for a Breakout game mode where hitting alchemically themed blocks causes physical reactions, or where the ball bounces around disturbing a lab like the pool shot version.

## Interpretation

This should be a separate mode using the same collision/cascade ideas as Alchemical Billiards, but with Breakout inputs:

- paddle movement
- ball angle control
- rows of alchemical blocks
- apparatus bricks
- volatile chain reactions
- lab accident warnings in the readout

## Core Loop

1. Serve the ball.
2. Keep it alive with the paddle.
3. Hit alchemical blocks.
4. Trigger reactions, cascades, vapors, crystallizations, flames, and transformations.
5. Clear the required lab structure without overheating, flooding, poisoning, or contaminating receivers.

## Controls

| Action | Input |
| --- | --- |
| Move paddle | mouse, A/D, left/right |
| Serve ball | Space/click |
| Nudge angle | paddle edge contact |
| Activate held reagent | E or click reagent button |
| Inspect block | hover or pause/codex |

## Block Families

| Brick type | Effect when hit |
| --- | --- |
| Salt brick | High durability, slows ball, stabilizes nearby bricks. |
| Mercury brick | Ball accelerates or slips through at odd angles. |
| Sulphur brick | Adds heat, may explode adjacent bricks. |
| Crucible | Converts nearby weak bricks into ash. |
| Alembic | Redirects ball upward as vapor. |
| Separator | Splits the ball into two smaller balls. |
| Fermenter | Regrows a brick after several bounces. |
| Projector | Casts damage along a row or column. |
| Philosopher's Stone | Transmutes lead/Saturn bricks into gold/Sun score. |

## Historical-Chemical Frame

Breakout can teach that alchemy is not just "magic transformation" but a sequence of operations on matter:

- heating can calcine or ruin
- solution can dissolve useful structure
- distillation separates volatile from fixed
- sublimation moves material upward
- projection is a late-stage application of tincture

The physics can be exaggerated: a ball can "distill" through an Alembic bumper, but the level frame should explain the historical metaphor.

## Adapter Need

Future adapter:

```js
AlchemyBlockEngine.adapters.toBreakoutBrick(block)
```

Fields:

- durability
- restitution
- mass/impact resistance
- cascade tags
- heat/wet/volatile output
- score family
- source/codex note

## Example Levels

| Level | Goal | Lesson |
| --- | --- | --- |
| Calcination Wall | Burn weak matter into ash without igniting Sulphur. | Fire and residue. |
| Alembic Ladder | Bounce upward through volatile gates. | Distillation and ascent. |
| Saturn To Sun | Strike lead bricks, then Projector/Stone. | Transmutation fantasy. |
| Wet Lab | Mercury bricks flood the lower field. | Dissolution and slipperiness. |
| Fermentation Return | Bricks regrow unless purified in order. | Time and putrefaction. |

## Implementation Plan

1. Plan only for now.
2. Build a tiny paddle/ball proof.
3. Add `toBreakoutBrick`.
4. Add 5 brick families.
5. Add reaction readout.
6. Add level frames with source notes.
7. Integrate with Level Builder.
