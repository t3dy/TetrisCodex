# Physics Lab Controls

This document describes the priority feature track for giving players direct control over Balance Tetris physics.

## Goal

The base Balance Tetris modes should feel like a playable laboratory. The user should be able to tune physical and quasi-physical parameters without editing code:

- gravity / fall speed
- soft drop multiplier
- hard-drop snap speed
- wind drift
- platform stiffness
- tilt limit
- block friction
- block slipperiness
- alchemical slide distance
- visual shake

## Current Implementation

The Balance Tetris settings menu has been renamed conceptually to **Physics Lab** and now includes preset controls for:

| Setting | Field | Effect |
|---|---|---|
| Fall Speed | `fallSpeed` | Auto-fall gravity in cells per second |
| Soft Drop | `softDropMul` | Down-arrow fall multiplier |
| Drop Snap | `hardDropSpeedMul` | Hard-drop animation speed |
| Wind | `windSpeed` | Horizontal drift while pieces are falling |
| Stiffness | `stiffnessMul` | Platform resistance to tilt |
| Tilt Limit | `maxTiltMul` | Game-over threshold multiplier |
| Friction | `blockFriction` | Resists alchemical group sliding |
| Slip | `blockSlipperiness` | Lowers effective alchemical slide threshold |
| Slide Steps | `slideSteps` | Maximum cells a loose group can slide per settle pass |
| Shake | `shakeMul` | Visual shake intensity |

These are persisted in `localStorage` under `bb_settings`.

## Why This Matters

The alchemical system needs players to feel the difference between:

- dry matter
- wet matter
- icy matter
- fixed matter
- volatile matter
- windy conditions
- heavy/rigid platforms
- loose/floppy platforms

Without user-facing physics controls, these are hidden tuning constants. With controls, they become playable world properties.

## Design Framing

The Physics Lab is not merely an options menu. It is a mode of authorship.

Players can create their own experiments:

- "wet platform, high wind, low stiffness"
- "rigid platform, high gravity, no shake"
- "icy alchemy, huge slide steps"
- "tar friction, strict tilt limit"

This supports both sandbox play and level design.

## Future Controls

Suggested next parameters:

- piece mass multiplier
- random heavy/light block rate
- fulcrum drift speed
- surface type: Dry / Wet / Ice / Tar / Magnetic
- wind gust randomness
- gravity direction
- bounce/restitution
- apparatus activation rate
- volatile evaporation chance
- Salt anchoring strength
- Sulphur burn radius
- Mercury slide multiplier

## UI Improvements Needed

The current implementation uses preset buttons. Future versions should add:

- actual sliders for continuous values
- reset-to-default button
- save/load physics presets
- named experiment cards
- randomize physics button
- export/import level config

## Suggested Preset Experiments

### Calm Bench

- normal stiffness
- no wind
- normal friction
- normal slip

Use:

- learning baseline play

### Wet Crucible

- normal stiffness
- high slipperiness
- low friction
- slide steps 2

Use:

- alchemical side-dumping practice

### Winter Platform

- low friction
- high slipperiness
- strict tilt
- high shake

Use:

- chaos challenge

### Bellows

- medium wind
- medium fall speed
- loose platform

Use:

- wind-assisted placement

### Tarred Beam

- high friction
- high stiffness
- low slide

Use:

- deliberate construction puzzle

## Implementation Notes

Current code hooks:

- `settings.windSpeed` applies horizontal drift during fall mode.
- `settings.hardDropSpeedMul` multiplies hard-drop animation speed.
- `settings.blockSlipperiness` lowers the effective alchemy slide threshold.
- `settings.blockFriction` reduces slide energy.
- `settings.slideSteps` caps slide movement.
- `settings.shakeMul` scales explosion, drop, and alchemy shake.

## Design Rule

Any physics parameter that matters to the alchemical fantasy should eventually be exposed as either:

1. a user setting,
2. a level modifier,
3. an apparatus effect,
4. a substance property.

Hidden constants are acceptable for prototypes, but the mature game should make the laboratory legible.
