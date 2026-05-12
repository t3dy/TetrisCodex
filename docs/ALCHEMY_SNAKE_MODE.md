# Alchemy Snake Mode

This mode is an old-school grid Snake game using the shared alchemical block engine.

The important experiment is architectural: the mode has no tilting platform and no Tetris placement, but it still consumes `alchemy-block/v1` matter and interprets the outcomes with alchemical narration.

## User Prompt

> I want a snake game where the player controls a snake like in the old school BASIC snake game that people learn as a first game project, where the snake can have interactions with alchemy blocks. There will be a narration parser that watches the events of the game and interprets them with canned responses with alchemy flavor. I will want some copy that could be examples of these sorts of messages built on all the various combinatorials and outcomes in our existing mechanics ideas.

## Interpretation

I interpreted this as:

- a playable Snake prototype
- arrow/WASD grid movement
- alchemical food generated from zodiac process plus optional Tria Prima
- different digestion outcomes for Salt, Sulphur, Mercury, and apparatus
- narration parser watching movement, denial, digestion, wall passage, self-collision, and game-over events
- canned response copy that can later be extracted into data

## Current Playable Page

- `snake-alchemy.html`

## Shared Engine Integration

The shared engine now includes:

```js
AlchemyBlockEngine.adapters.toSnakeFood(block)
```

Snake food consumes:

- `name`
- `emoji`
- `display.color`
- `display.symbol`
- `family`
- `processId`
- `processName`
- `principleId`
- `principleName`
- `tags`
- `mass`
- `friction`
- `volatility`
- `fixed`
- `combustible`
- `slippery`
- `properExitSide`
- `source`

This proves that a mode can use the same block matter without using Tetris cells.

## Rules

### Salt

Salt is fixed matter.

Effects:

- grows the snake more
- slows the snake slightly
- grants short stability/wall forgiveness

Example narration:

> Salt fixes the body; the line grows heavier and steadier.

### Sulphur

Sulphur is oily, fiery matter.

Effects:

- gives bonus score
- trims the tail
- increases heat
- repeated heat quickens the game dangerously

Example narration:

> Sulphur oils the work and remembers the flame; score rises, tail shortens.

### Mercury

Mercury is volatile and slippery.

Effects:

- gives score
- increases pace
- grants ghost-passes through wall/self collisions

Example narration:

> Mercury refuses the cage; the serpent gains ghost-passes and speed.

### Apparatus

Zodiac-only blocks become apparatus.

Effects:

- no principle material
- sets a temporary process lens for future digestions
- next few swallowed substances receive process-specific narration and bonus effects

Example narration:

> Solvent Jar becomes apparatus; the next digestions pass through Dissolution.

## Narration Parser Events

| Event | Watches | Example |
| --- | --- | --- |
| `ready` | New game initialized. | "The serpent wakes in a clean vessel." |
| `start` | Player starts movement. | "The work begins: head, tail, hunger, and doctrine all move as one line." |
| `turn` | Direction input accepted. | "Turned east; the head seeks Dissolution Mercury at column 12, row 4." |
| `turn_denied` | Direct reversal rejected. | "The serpent cannot bite yesterday without making poison of memory." |
| `digest` | Food consumed. | Principle/process-specific. |
| `wall_phase` | Mercury/Salt grace allows boundary crossing. | "The boundary thinned like glass." |
| `self_phase` | Ghost pass through own body. | "Mercury lent a ghost-body." |
| `game_over` | Wall/self failure. | "Ouroboros without wisdom: the head found its own body too soon." |

## Canned Copy Combinatorials

### Salt + Process

| Combination | Draft line |
| --- | --- |
| Calcination Salt | "Calcined Salt keeps only what survives the ash." |
| Congelation Salt | "Congelation Salt doubles down on fixity; the serpent becomes masonry." |
| Fixation Salt | "Fixation Salt: body binds body, and the coil steadies." |
| Dissolution Salt | "Salt enters water reluctantly; the knot loosens but does not flee." |
| Digestion Salt | "Slow heat teaches Salt patience." |
| Distillation Salt | "The Alembic lifts impurity, but Salt remembers the bottom." |
| Sublimation Salt | "Fixed matter dreams upward without abandoning the vessel." |
| Separation Salt | "The Separator finds the body and leaves the vapor aside." |
| Ceration Salt | "Wax softens the crystal edge." |
| Fermentation Salt | "Dead length grows useful under fixed earth." |
| Multiplication Salt | "One crystal teaches another to hold." |
| Projection Salt | "Fixed matter takes the cast and makes it durable." |

### Sulphur + Process

| Combination | Draft line |
| --- | --- |
| Calcination Sulphur | "Fire met oil and called it doctrine." |
| Congelation Sulphur | "The oily soul resists the mold, then hardens at the rim." |
| Fixation Sulphur | "Clamp the flame before it becomes appetite." |
| Dissolution Sulphur | "The solvent carries a yellow spark." |
| Digestion Sulphur | "The Athanor fattens the flame slowly." |
| Distillation Sulphur | "Sulphur rises as a sharp perfume." |
| Sublimation Sulphur | "The oily part climbs faster than prudence." |
| Separation Sulphur | "The Separator saves heat from smoke." |
| Ceration Sulphur | "Wax and oil agree too easily." |
| Fermentation Sulphur | "Rot warms itself and asks for more time." |
| Multiplication Sulphur | "One spark tutors a crowd of sparks." |
| Projection Sulphur | "Cast fire carefully; profit has teeth." |

### Mercury + Process

| Combination | Draft line |
| --- | --- |
| Calcination Mercury | "Mercury laughs at the ash and slips through the grate." |
| Congelation Mercury | "The mold catches the spirit for one breath only." |
| Fixation Mercury | "Fixation names the fugitive and slows it." |
| Dissolution Mercury | "Water recognizes its quicksilver cousin." |
| Digestion Mercury | "Slow heat makes Mercury confess its route." |
| Distillation Mercury | "The Alembic gives Mercury a lawful ascent." |
| Sublimation Mercury | "Volatile matter finds the high road." |
| Separation Mercury | "The subtle part chooses its own corridor." |
| Ceration Mercury | "Oily Mercury softens every turn." |
| Fermentation Mercury | "The spirit stirs the dead matter awake." |
| Multiplication Mercury | "One quick sign becomes many." |
| Projection Mercury | "The cast is swift, bright, and hard to keep." |

### Non-Principle Apparatus

| Apparatus | Draft line |
| --- | --- |
| Crucible | "The Crucible waits for what can survive heat." |
| Mold | "The Mold asks loose matter to become shape." |
| Clamp | "The Clamp makes a promise against drift." |
| Solvent Jar | "The Solvent Jar loosens old certainty." |
| Athanor | "The Athanor rewards patience over appetite." |
| Alembic | "The Alembic gives ascent a neck and a law." |
| Sublimator | "The Sublimator lifts what was too literal." |
| Separator | "The Separator makes difference useful." |
| Censer | "The Censer perfumes the coil with oily softness." |
| Fermenter | "The Fermenter lets dead length grow again." |
| Multiplier | "The Multiplier teaches one virtue to echo." |
| Projector | "The Projector casts small virtue into large consequence." |

## Outcome Copy

| Outcome | Draft line |
| --- | --- |
| Safe start | "The serpent wakes in a clean vessel." |
| High score | "The corpus lengthens without losing the head." |
| Speed too high | "Mercury has made appetite faster than judgment." |
| Tail trimmed | "Sulphur buys profit with body." |
| Wall death | "The vessel wall holds." |
| Self death | "Ouroboros without wisdom." |
| Ghost pass | "Mercury lent a ghost-body." |
| Recovery | "The fugue resolves; head and tail remember order." |
| Apparatus combo | "The process colors the digestion." |

## Future Work

1. Move narration lines into JSON.
2. Add source-family tags from `ALCHEMICAL_POETRY_RESPONSE_BANK.md`.
3. Add custom level presets: Salt Garden, Mercury Maze, Sulphur Furnace, Apparatus Lesson.
4. Add mobile swipe controls.
5. Add codex unlocks for every first-time digestion.
6. Add walls/apparatus obstacles so the snake routes through a lab rather than an empty vessel.

