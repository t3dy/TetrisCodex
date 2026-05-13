# Combinatorial Alchemy Palette Spec

This document defines the high-priority zodiac plus Tria Prima button system.

## Input Surface

The player has access to:

- 12 zodiac/process buttons
- 3 Tria Prima modifier buttons
- 7 planetary/metmetal buttons

This creates:

- 12 pure process apparatus tiles
- 3 pure principle substance tiles
- 36 process-plus-principle compound substances
- 7 pure planetary/metmetal selections
- additional advanced process-plus-planet and process-plus-principle-plus-planet outputs
- 51 first-layer outputs from the 12 zodiac plus 3 principle buttons

The original 51-output grammar remains the first teachable layer. Planet buttons are a second layer and should be visually distinct from Tria Prima buttons.

## Three Button Families

| Family | Meaning | UI treatment |
| --- | --- | --- |
| Zodiac/process | Operation: calcination, dissolution, projection, etc. | Ring or seasonal band. |
| Tria Prima | Philosophical matter quality: fixed, oily/combustible, volatile. | Triangular principle buttons. |
| Planet/metmetal | Metal and celestial affinity: Sun/gold, Moon/silver, Saturn/lead, etc. | Circular planet buttons. |

### Mercury Disambiguation

There are two different Mercury buttons:

- **Principle Mercury**: volatile/spiritual matter quality.
- **Planet Mercury**: planetary/metmetal affinity.

Do not rely on the glyph alone. Use different button shapes, labels, color frames, and hover text.

## Two-Step Grammar

### Zodiac Alone

Clicking a zodiac without a modifier creates an alchemical furniture tile corresponding to the process.

Example:

```text
Aries -> Crucible -> Calcination
```

### Zodiac + Tria Prima

Clicking a zodiac, then Salt/Sulphur/Mercury, creates a substance whose process is determined by the zodiac and whose quality is determined by the principle.

Example:

```text
Cancer + Mercury -> volatile dissolving solvent
```

## Zodiac Process Table

| Zodiac | Process | Apparatus Tile | Emoji | Core Verb |
|---|---|---|---|---|
| Aries | Calcination | Crucible | 🔥 | reduce to ash |
| Taurus | Congelation | Mold | 🧱 | solidify |
| Gemini | Fixation | Clamp | 🔗 | bind |
| Cancer | Dissolution | Solvent Jar | 💧 | dissolve |
| Leo | Digestion | Athanor | ♨ | warm/ripen |
| Virgo | Distillation | Alembic | ⚗ | extract |
| Libra | Sublimation | Sublimator | 🪶 | lift/lighten |
| Scorpio | Separation | Separator | ✂ | divide |
| Sagittarius | Incineration | Censer | 🕯 | burn |
| Capricorn | Fermentation | Fermenter | 🍞 | transform over time |
| Aquarius | Multiplication | Multiplier | ✶ | multiply |
| Pisces | Projection | Projector | 🌊 | cast outward |

## Tria Prima Modifier Table

| Principle | Quality | Mechanical Family |
|---|---|---|
| Salt | fixed/stable | anchor, preserve, resist, crystallize |
| Sulphur | combustible | burn, heat, transform, ignite |
| Mercury | volatile/oily | wildcard, flow, slide, dissolve |

## Current Balance Tetris Implementation

Current status in `balance-tetris.html`:

- zodiac buttons already exist
- Tria Prima buttons already exist
- zodiac-only spawns now carry `alchemyKind: 'apparatus'`
- zodiac + principle spawns carry `alchemyKind: 'substance'`
- spawned cells retain:
  - `paletteZodiac`
  - `paletteProcess`
  - `palettePrima`
  - `paletteQuality`
  - `paletteName`
  - `apparatus`
- Salt marks cells as anchored
- Sulphur burns adjacent matter to ash
- Mercury volatilizes adjacent matter
- apparatus process effects fire once after placement

## First Mechanical Pass

Implemented process effects are intentionally simple:

- Calcination: adjacent cells become ash
- Dissolution: adjacent cells become Mercury
- Digestion / Incineration: adjacent cells become Mars
- Congelation / Fixation: adjacent cells become Salt-anchored
- Sublimation: cell weight is reduced
- Multiplication: slide-off value is doubled
- Projection: row becomes the tile's trait
- Distillation: column matter becomes lighter

These are placeholders, but they express the correct rule grammar.

## Next Implementation Pass

The next pass should:

1. Show the generated tile name in the UI.
2. Add hover/click explanation panels.
3. Add a reaction log.
4. Make apparatus persistent furniture with ongoing effects.
5. Add source citations per tile from the local database.
6. Make each of the 36 compounds distinct.

## Design Constraint

The palette should remain learnable. The player should be able to infer:

```text
process = what happens
principle = how it behaves
```

That is the whole elegance of the system.
