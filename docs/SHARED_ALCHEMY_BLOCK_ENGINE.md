# Shared Alchemy Block Engine

This document defines the common code layer for alchemical blocks across the whole arcade. The point is to let new game modes use the same alchemical matter without inheriting Balance Tetris's tilting/tetromino assumptions.

Implemented seed module:

- `alchemy-block-engine.js`
- browser global: `AlchemyBlockEngine`
- schema: `alchemy-block-engine/v1`

## Why This Exists

The current project has several play styles:

- Balance Tetris: tilting platform, stack placement, side-dumping.
- VALIS Space Taxi: ship controls, cargo, pads, landing, beams.
- Rune Bloom: garden/grid tile placement, blooms, blight, chain reactions.
- Moat Drawbridge: construction puzzle, flatness, span strength.
- Future lab modes: alchemy pinball, reaction sandbox, non-tilting apparatus puzzles, dialogue/tutorial games.

All of those can share the same block ontology:

- mass
- friction
- volatility
- fixity
- combustibility
- beam affinity
- proper exit side
- process identity
- Tria Prima identity
- source/codex metadata

They should not share the same input scheme, board geometry, camera, scoring loop, or failure condition.

## Layer Model

```text
Layer 0: Source Records
  Timmermann, Ashmole, Maier, Ripley, Norton, Emerald Tablet, local database notes.

Layer 1: Alchemy Block Engine
  Defines blocks, physics properties, source tags, processes, principles, adapters.

Layer 2: Mode Adapter
  Converts a block into a Balance cell, Taxi cargo, Rune tile, Lab reagent, or UI card.

Layer 3: Mode Runtime
  Handles input, win/loss, level rules, camera, scoring, local feedback.

Layer 4: Presentation
  Canvas, DOM, sound, animation, response barks, codex pages.
```

## What Belongs In The Shared Engine

The shared engine owns stable alchemical facts and low-level behavior:

| System | Shared field / function |
| --- | --- |
| Tria Prima | `PRINCIPLES.salt`, `PRINCIPLES.sulphur`, `PRINCIPLES.mercury` |
| Zodiac process | `PROCESSES`, `processById(id)` |
| Planetary affinity | `PLANETS`, `planetForProcess(processId)` |
| Block creation | `makeAlchemyBlock({ processId, principleId })` |
| Mass | `calculateMass(block)` |
| Friction | `calculateFriction(block, surface)` |
| Volatility | `calculateVolatility(block, environment)` |
| Proper exit scoring | `scoreExit(block, side, groupSize)` |
| Sliding eligibility | `canSlide(block, surface, environment)` |
| Mode export | `adapters.toBalanceCell`, `toTaxiCargo`, `toRuneTile`, `toSnakeFood` |

## What Does Not Belong In The Shared Engine

These stay in individual modes:

- keyboard/mouse/touch controls
- piece queues
- tetromino geometry
- platform tilt simulation
- ship thrust and landing model
- Rune Bloom line/group detection
- level-specific objectives
- campaign progression
- UI layout
- animation timing
- exact scoring display

## Block Record

```js
const block = AlchemyBlockEngine.makeAlchemyBlock({
  processId: 'cancer',
  principleId: 'mercury',
  source: {
    family: 'Timmermann / Wind and Water',
    note: 'Dissolution plus volatile Mercury.'
  }
});
```

Produces:

```js
{
  schema: 'alchemy-block/v1',
  name: 'Dissolution Mercury',
  emoji: '♋☿',
  kind: 'substance',
  family: 'mercury',
  processId: 'cancer',
  processName: 'Dissolution',
  apparatus: 'Solvent Jar',
  principleId: 'mercury',
  principleName: 'Mercury',
  planetId: 'moon',
  tags: ['wet', 'loosen', 'moat', 'volatile', 'slippery', 'spirit', 'lunar', 'silver', 'left'],
  physics: {
    mass: 0.612,
    friction: 0.42,
    volatility: 0.4625,
    fixed: false,
    combustible: false,
    slippery: true,
    properExitSide: -1
  }
}
```

The exact numeric values may be tuned, but the structure should stay stable.

## Adapter Pattern

Each mode asks only for the shape it understands.

### Balance Tetris

```js
const cell = AlchemyBlockEngine.adapters.toBalanceCell(block);
```

Balance-specific integration:

- use `cell.weight` in torque
- use `cell.trait` for group matching
- use `cell.item` for Salt/Sulphur/Mercury behavior
- use `properExitSide` for side dumping

### VALIS Space Taxi

```js
const cargo = AlchemyBlockEngine.adapters.toTaxiCargo(block);
```

Taxi-specific integration:

- ship acceleration changes by `cargo.mass`
- landing/cascade risk changes by `volatility`
- beam reveal uses `beamAffinity`
- pads react to tags like `fixed`, `volatile`, `combustible`

### Rune Bloom

```js
const tile = AlchemyBlockEngine.adapters.toRuneTile(block);
```

Rune-specific integration:

- `element` maps to bloom color/family
- `tags` trigger blight, growth, copy, or purification rules
- source/codex metadata appears after the tile blooms

### Alchemy Snake

```js
const food = AlchemyBlockEngine.adapters.toSnakeFood(block);
```

Snake-specific integration:

- `fixed` slows and stabilizes the snake
- `combustible` can burn tail length for score
- `slippery` grants ghost-pass and speed effects
- `processName` drives apparatus narration
- `tags` let future maze/lab boards react to wet, heat, growth, projection, or separation

## Flexible Input Schemes

Input should be mode-owned, but it should produce shared intents.

| Input scheme | Example mode | Intent emitted |
| --- | --- | --- |
| Keyboard arrows + rotate | Balance Tetris | `move_piece`, `rotate_piece`, `drop_piece` |
| Arrow/WASD grid steering | Alchemy Snake | `turn_snake`, `digest_block`, `collide` |
| Zodiac + Tria Prima buttons | Alchemy modes | `create_block(processId, principleId)` |
| Mouse drag | Level Builder, lab modes | `place_block`, `move_apparatus` |
| Thrust controls | VALIS Taxi | `accelerate_ship`, `dock`, `drop_cargo` |
| Click-to-route | Future reaction puzzle | `route_substance`, `activate_apparatus` |
| Card/draft selection | Campaign puzzles | `select_reagent`, `queue_operation` |

The mode adapter consumes the intent and the shared block engine only supplies the matter.

## Integration Order

1. Keep existing games working.
2. Include `alchemy-block-engine.js` in one mode at a time.
3. Replace duplicated definitions with adapter output.
4. Move source metadata into JSON once the schema settles.
5. Add tests for common functions before deeper refactors.

## First Refactor Targets

1. Balance Tetris palette spawning:
   - replace local process/principle composition with `makeAlchemyBlock`.
   - convert via `toBalanceCell`.

2. Asset Studio:
   - export `alchemy-block/v1` records directly.
   - preview all mode adapters.

3. Level Builder:
   - store blocks as shared block ids or full `alchemy-block/v1` records.
   - let a level declare which adapter each mode should use.

4. VALIS Space Taxi:
   - cargo definitions should use `toTaxiCargo`.
   - landing pads should react to shared tags.

## Design Rule

The shared engine should know what alchemical matter is. A mode should know what the player is doing with it.
