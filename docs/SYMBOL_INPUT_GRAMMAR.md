# Symbol Input Grammar

This document clarifies the core symbol input system: zodiac processes, Tria Prima principles, and seven planetary/metmetal glyphs must be visually and mechanically distinct.

## User Prompt

The user emphasized that the player should be able to click:

- 12 zodiac symbols representing alchemical processes
- 3 alchemical principles: Sulphur, Salt, Mercury
- 7 planet glyphs, which can map to metals
- tarot cards whose attributions can bundle element, planet, zodiac, process, suit, number, decan, or path cells

The Tria Prima Mercury must be distinct from planetary Mercury. Each game mode may define what "Mercury" or "Sulphur" of an operation means in context: volatile, oily, fixed, or philosophical matter being worked on.

## Three Symbol Families

| Family | Count | Meaning | UI design |
| --- | --- | --- | --- |
| Zodiac/process | 12 | What operation is happening. | Ring/season band, colored by process. |
| Tria Prima | 3 | What philosophical quality matter has. | Large triangular principle buttons. |
| Planets/metals | 7 | Which metal/planetary affinity is involved. | Circular celestial/metal buttons. |
| Tarot cards | 22/56/78 | Bundled attribution object: card identity plus element/planet/zodiac/process/etc. | Card-shaped buttons that expand into composite block units. |

## Distinguishing Mercury

| Button | Meaning | UI treatment |
| --- | --- | --- |
| Tria Prima Mercury | volatile principle/spirit, slippery matter | triangular principle button, blue-white quicksilver styling, label "Principle Mercury" |
| Planet Mercury | planet/metmetal affinity, Mercury/quicksilver as planetary metal | circular planet button, celestial glyph ring, label "Planet Mercury" |

Never rely on the glyph alone. The button family shape, label, tooltip, and color frame must disambiguate it.

## Grammar

### Zodiac Alone

Creates apparatus/process furniture:

```text
Cancer -> Solvent Jar / Dissolution furniture
```

### Zodiac + Tria Prima

Creates matter shaped by operation and principle:

```text
Cancer + Principle Mercury -> volatile dissolving matter
Leo + Sulphur -> oily heating matter
Taurus + Salt -> fixed coagulated matter
```

### Planet Alone

Creates metal/planetary material or target affinity:

```text
Saturn -> leaden/heavy metal block
Sun -> gold/solar target
Moon -> silver/lunar receiver
```

### Zodiac + Planet

Creates operation applied to a metal/planet:

```text
Pisces + Saturn -> projection applied to lead
Virgo + Moon -> distillation of silver/lunar matter
```

### Zodiac + Tria Prima + Planet

Advanced compound:

```text
Pisces + Sulphur + Saturn -> oily/projective work on lead/Saturn matter
```

### Tarot Card

Creates a compound attribution unit rather than a single cell:

```text
The Tower -> [Tower] [Mars] [Fire] [Calcination]
Ace of Cups -> [Ace] [Water] [Cups] [Dissolution]
```

Tarot output can be:

- four-cell teaching unit
- six-cell medium unit
- nine-cell source-heavy unit
- tetromino-like shape whose footprint reflects attribution density

Tarot mappings must declare their source tradition, because historical and esoteric decks do not all use the same correspondences.

## Mode-Specific Meaning

| Mode | What the symbols do |
| --- | --- |
| Balance Tetris | Spawn blocks, apparatus cells, scoring affinities, side receivers. |
| Snake | Food, powers, process lenses, starting constitution. |
| Breakout | Brick family, collision reaction, score pocket. |
| Billiards | Ball substance, apparatus bumper, pocket affinity. |
| Push | Movable block, floor hazard, receiver rule. |
| Minesweeper | Hidden hazard type, clue family, player resistance. |
| Siege | Bomb chemistry, tower process, projectile material. |
| Tarot Atelier | Composite card pieces with element/planet/zodiac/process cells. |

## Design Rule

The player should learn:

```text
zodiac = process
Tria Prima = philosophical matter quality
planet = metal/celestial affinity
```

Every mode can reinterpret the output, but the input grammar should remain stable.
