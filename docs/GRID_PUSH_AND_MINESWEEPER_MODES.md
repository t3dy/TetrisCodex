# Grid Push And Lab Minesweeper Modes

This document plans two grid modes that use alchemy blocks without falling pieces, tilting platforms, or vehicle physics.

## User Prompt

The user asked for a block-pushing game on a grid and a Minesweeper-type game where the player explores the alchemical lab without setting off accidents. Onscreen text should warn players about what they are stepping into and how reactions relate to the player character icon's own properties.

## Mode A: Alchemical Push

Alchemical Push is a Sokoban-like grid puzzle. The player moves a character icon through a lab, pushing alchemical blocks onto receivers, apparatus, vents, furnaces, solvents, or planetary stations.

### Player Loop

1. Inspect the room.
2. Move one tile at a time.
3. Push or pull blocks if the character has the right property.
4. Trigger apparatus deliberately.
5. Place substances on correct pads.
6. Avoid blocking the lab or causing accident chains.

### Push Rules

| Block | Push behavior |
| --- | --- |
| Salt | Heavy, may require leverage or two pushes. |
| Mercury | Slides until stopped unless on dry/rough floor. |
| Sulphur | Can be pushed, but heat/contact may ignite. |
| Crucible | Stationary unless using a crank/tool. |
| Solvent Jar | Breaks if pushed into stone; wets floor. |
| Alembic | Fragile, must be moved slowly or rotated. |

### Player Properties

| Icon/property | Gameplay |
| --- | --- |
| Salt worker | Can push heavy blocks, resists accidents, slow. |
| Mercurial worker | Can cross wet tiles, slips on ice, moves fast. |
| Sulphur worker | Can ignite/heat, vulnerable to volatile fumes. |
| Lunar worker | Safer in wet/cold rooms. |
| Solar worker | Can activate projection/gold goals. |

### Feedback Examples

- "Pushed Mercury east: it will slide until blocked."
- "Salt worker braced the fixed block; one more push will move it."
- "Sulphur block touched furnace heat. Accident risk rises."
- "The Alembic cracked; volatile vapor leaks north."

## Mode B: Alchemical Minesweeper

Alchemical Minesweeper is an exploration puzzle. The lab grid contains hidden hazards, reagents, apparatus, and safe clues. The player uncovers cells while reading warnings about what the cell suggests.

### Core Difference From Standard Minesweeper

The goal is not only "avoid mines." It is "interpret the lab safely."

Cells can hide:

- explosive Sulphur pockets
- Mercury vapor
- acid/solvent pools
- fixed Salt deposits
- unstable apparatus
- philosophical-stone clue trails
- false emblems or deceptive Wild Hunt apparitions

### Clue Numbers

Numbers can count accident pressure:

| Clue | Meaning |
| --- | --- |
| Heat number | Adjacent combustible risk. |
| Vapor number | Adjacent volatile risk. |
| Corrosion number | Adjacent solvent/acid risk. |
| Fixity number | Adjacent stable Salt/safe anchor. |
| Planet glyph | Nearby metal/planet hazard or opportunity. |

### Player Property Interaction

The player icon matters:

- Salt character can step on low corrosion without dying.
- Mercury character can survive vapor but may slip into adjacent unknown tiles.
- Sulphur character can set off heat cells but also neutralize cold/frozen hazards.
- Lunar character reads wet clues more accurately.
- Solar character reveals projection lines.

### Feedback Examples

- "You stepped onto a damp clue: two volatile cells touch this square."
- "Salt constitution resists the acid bite, but the next solvent will pierce it."
- "Mercury property lets you breathe this vapor; warning converted to speed."
- "Flag placed: suspected Sulphur accident."

## Shared Adapter Needs

Future adapters:

```js
toPushBlock(block)
toHazardClue(block)
toPlayerProperty(block)
```

## Implementation Plan

1. Keep as docs until core UI patterns settle.
2. Build Alchemical Push first because it shares grid movement with Alchemical Three.
3. Add Lab Minesweeper second because it needs clue generation and hidden-state UI.
4. Add player constitution/powers shared with Snake.
5. Add source notes to each level frame.
