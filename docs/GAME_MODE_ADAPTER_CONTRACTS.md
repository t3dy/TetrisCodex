# Game Mode Adapter Contracts

This document defines how new modes can use alchemy blocks without becoming Tetris clones.

## Core Principle

A game mode is a second layer of integration logic over shared alchemical blocks.

The shared engine answers:

- What is this block?
- What does it weigh?
- Is it fixed, volatile, oily, slippery, combustible, or revelatory?
- What source tradition does it come from?
- What tags should other systems react to?

The game mode answers:

- How does the player control it?
- What space does it inhabit?
- What counts as success?
- What counts as failure?
- How do reactions become visible?

## Mode Contract

Every mode should be describable with:

```js
{
  id: 'alchemy-pinball',
  name: 'Alchemy Pinball',
  inputModel: 'flippers_and_launch',
  spaceModel: 'continuous_2d',
  blockAdapter: 'pinballBody',
  reactionModel: 'collision_cascade',
  objectiveModel: 'recipe_score',
  feedbackModel: 'poetry_barks'
}
```

## Shared Intent Events

Modes can have wildly different controls, but they should translate controls into common intent events where possible.

| Intent | Meaning | Example controls |
| --- | --- | --- |
| `create_block` | Create or select an alchemical block. | Zodiac/Tria Prima buttons, draft card, lab recipe. |
| `place_block` | Put matter into a space. | Mouse click, drag/drop, keyboard drop. |
| `move_actor` | Move player-controlled actor. | Ship thrust, character movement, cursor. |
| `activate_apparatus` | Trigger a process/furniture tile. | Click alembic, beam crucible, push lever. |
| `route_substance` | Direct flow or falling matter. | Pipe switch, flipper, conveyor, drawbridge. |
| `inspect_source` | Open source/codex metadata. | Hover, right-click, codex button. |
| `tune_physics` | Change world parameters. | Physics sliders, level presets. |

## Candidate Non-Tetris Modes

### Alchemy Pinball

Player launches volatile matter into a lab table. Apparatus bumpers distill, calcine, dissolve, or fix the ball. The same `alchemy-block/v1` matter can set mass, bounce, slipperiness, combustion, and source barks.

Adapter needs:

- `toPinballBody(block)`
- radius, restitution, density, surface reaction tags

### Lab Cascade Sandbox

Player places apparatus and substances freely, then starts the reaction. No tilting platform required. The puzzle is whether the cascade reaches the desired final state without contamination.

Adapter needs:

- `toLabReagent(block)`
- adjacency reactions, timers, heat/wet/dry fields

### Alchemical Flow / Pipe Puzzle

Substances flow through pipes, vessels, alembics, and receivers. Mercury flows quickly, Salt crystallizes and blocks channels, Sulphur ignites vapors.

Adapter needs:

- `toFluidPacket(block)`
- viscosity, phase, contamination tags

### Alchemical Sokoban

The player pushes emoji blocks around a lab floor. Heavy Salt needs leverage, Mercury slides until stopped, Sulphur must not touch fire unless intended.

Adapter needs:

- `toPushBlock(block)`
- push weight, slide rule, hazard contact rules

### Reaction Tactics

A turn-based board where apparatus tiles project fields and substances transform over turns. Useful for teaching source systems slowly.

Adapter needs:

- `toTacticsUnit(block)`
- action tags, resistances, transformation timers

### Bubble / Vapor Platformer

The player rides or herds alchemical vapors. Mercury floats and slips, Salt anchors platforms, Sulphur provides burst propulsion.

Adapter needs:

- `toPlatformerObject(block)`
- gravity scale, collision layer, burst behavior

### Poetry Puzzle Codex

The player solves source-driven puzzles by matching poem lines, apparatus, and block behavior. This mode may be mostly UI and text, but it should still use the shared block ontology.

Adapter needs:

- `toCodexCard(block)`
- source metadata, response tags, glossary terms

## Adapter Checklist

Every new adapter should define:

1. What block fields it consumes.
2. What local game object it emits.
3. What fields are ignored.
4. How source/codex metadata is preserved.
5. How response barks are triggered.
6. What tests or sample levels prove it works.

## Anti-Pattern To Avoid

Do not copy Balance Tetris cells into every mode.

Balance Tetris cells are a mode-local representation. The reusable object is `alchemy-block/v1`.

