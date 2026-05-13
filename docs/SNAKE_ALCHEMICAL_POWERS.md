# Snake Alchemical Powers

This document expands Alchemy Snake so the snake can gain powers either from the start of a level or by eating alchemical blocks during play.

## User Prompt

Players should be able to play an alchemy version of Snake where their snake gains alchemical powers either granted from the start or acquired by eating along the way.

## Design Goal

The snake should not merely eat score pellets. It should become an alchemical body whose powers change according to substance, process, planet, and current level frame.

## Power Sources

| Source | Meaning | Use case |
| --- | --- | --- |
| Starting endowment | Level grants powers at spawn. | Tutorial levels, character classes, challenge variants. |
| Digestion | Eating a block grants temporary or permanent powers. | Core arcade progression. |
| Apparatus lens | Eating process furniture modifies later digestion. | Teaches the 12 processes. |
| Planetary metal | Eating a planet/metmetal block grants affinity. | Metal/planet lessons and receiver puzzles. |
| Level aura | The room imposes heat, wetness, darkness, wind, or poison. | Minesweeper/lab accident crossovers. |

## Starting Classes

| Class | Initial powers | Weakness | Lesson |
| --- | --- | --- | --- |
| Salt Serpent | Stability, wall grace, slower pace | Hard to turn quickly | Fixity, body, preservation |
| Mercurial Serpent | Ghost pass, fast turn, volatile scoring | Speed danger | Spirit, volatility, evasive matter |
| Sulphur Serpent | Burns obstacles, bonus heat score | Overheats | Soul, oil, combustion |
| Lunar Serpent | Seeks left/wet receivers | Weak to heat | Moon/silver/water |
| Solar Serpent | Scores projection and gold goals | Draws hazards | Sun/gold/radiance |
| Leaden Serpent | Heavy and slow, immune to some accidents | Low score pace | Saturn/lead and melancholy weight |

## Digestion Powers

| Eaten block | Power gained | Duration |
| --- | --- | --- |
| Salt | `stabilize`: ignore one wall/self collision, slow down | 8 turns |
| Sulphur | `ignite`: burn one obstacle or trim tail for score | 5 turns |
| Mercury | `phase`: pass through own body or wall once | 6 turns |
| Crucible | Next digestion is calcined: remove impurity, gain ash score | 3 meals |
| Solvent Jar | Wet trail: nearby hazards dissolve or slip | 6 turns |
| Alembic | Distill: extract a bonus from next principle | 2 meals |
| Separator | Split tail: sacrifice length to dodge danger | 1 use |
| Multiplier | Double next power but add instability | 1 meal |
| Projector | Cast current power into a row/column | 1 use |

## Power State Object

```js
{
  powers: {
    stabilize: { turns: 8, charges: 1 },
    ignite: { turns: 5, charges: 2 },
    phase: { turns: 6, charges: 1 },
    processLens: { processId: 'virgo', meals: 2 }
  },
  constitution: {
    salt: 2,
    sulphur: 1,
    mercury: 3
  },
  currentPlanet: 'moon'
}
```

## Narration Examples

| Event | Example readout |
| --- | --- |
| Start with Salt | "The serpent begins as fixed body: slow, durable, and reluctant to vanish." |
| Eat Mercury | "Mercury loosens the outline; one wall may become a veil." |
| Eat Sulphur while hot | "Sulphur finds old heat and fattens it. The lab warms dangerously." |
| Use phase | "The spirit slips through the body that would have ended it." |
| Use projection | "The current virtue is cast down the row like tincture through a vessel." |

## Level Ideas

### Salt Garden

Start with Salt stability. Eat heavy fixed blocks without losing shape.

### Mercurial Maze

Start with one phase charge. Use volatile food to cross impossible corridors.

### Sulphur Furnace

Burn obstacles, but avoid overheating the room.

### Alembic Lessons

Eat process furniture before principle food to learn how processes modify substance.

## Implementation Plan

1. Add a `snake.powers` record to `snake-alchemy.html`.
2. Add starting class selection.
3. Add temporary power timers to the update loop.
4. Route digestion through a `grantSnakePower(food)` function.
5. Add power icons and charges to the HUD.
6. Add Level Builder fields for starting powers.
7. Move narration into the response bank.

## Rule

Snake powers should remain short and legible. A player should be able to read the HUD and know exactly what the next dangerous collision will do.
