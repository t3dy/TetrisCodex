# Tarot Attribution Block Mode

This document plans a tarot-attribution game mode and asset grammar for TetrisCodex. Tarot cards can become composite block units whose cells represent their occult attributions: element, planet, zodiac, decan, sephirah/path, court rank, suit, number, dignity, or alchemical process.

## User Prompt

The user asked for a game mode where blocks can have tarot card attributions represented by four blocks that represent their attributions, such as elemental, planetary, and zodiacal attributions. The user also suggested six- or nine-block units, or Tetris-like pieces with shapes based on the density of attributions.

## Interpretation

I interpret this as a symbolic construction mode where a "card" is not one tile. A card becomes a small, playable diagram.

Examples:

- Four-cell card unit: suit/element, planet, zodiac, alchemical process.
- Six-cell card unit: add decan and dignity.
- Nine-cell card unit: add sephirah/path, number, court rank, metal, and operation.
- Tetromino-style card piece: shape reflects attribution density or interpretive balance.

This mode should not claim a single universal tarot attribution system. Different traditions map cards differently. The game should let a level declare which attribution scheme it is using.

## Mode Titles

Possible names:

- Tarot Atelier
- Attribution Tetris
- Hermetic Trumps
- The Table Of Correspondences
- Tarot Furnace
- Arcana Blocks

Recommended title:

- Tarot Atelier

## Core Idea

A tarot card is a compound recipe.

Instead of dropping "The Tower" as one object, the player receives a micro-piece:

```text
[Mars] [Fire]
[Tower] [Calcination]
```

Or a richer nine-cell version:

```text
[Card]     [Planet]   [Zodiac/Path]
[Element]  [Process]  [Metal]
[Number]   [Dignity]  [Source]
```

The player places the whole unit into a grid, balances it on a platform, feeds it to a lab, pushes it, pockets it, breaks it, or uses it as a source frame depending on mode.

## Attribution Families

| Family | Example symbols | Gameplay role |
| --- | --- | --- |
| Card identity | Fool, Tower, Moon, Ace of Cups | Central label and scoring objective. |
| Element | Fire, Water, Air, Earth, Spirit | Base behavior: burn, flow, rise, fix, wildcard. |
| Planet | Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn | Metal affinity, receiver, weight, score side. |
| Zodiac | Aries through Pisces | Operation/process mapping and seasonal routing. |
| Decan | 36 decans | Fine-grained level/campaign curriculum. |
| Sephirah/path | Tree of Life positions/paths | Route, gate, or source-codex layer. |
| Suit | Wands, Cups, Swords, Pentacles | Elemental family and card deck organization. |
| Number/rank | Ace-10, Page/Knight/Queen/King | Size, charge, durability, or command role. |
| Dignity | exalted, detriment, fall, rulership | Modifier to power, instability, or score. |
| Alchemical process | calcination, dissolution, etc. | Apparatus behavior and reaction verb. |

## Important Historical Caution

Tarot correspondences are not timeless medieval givens. Many familiar elemental, planetary, zodiacal, and Kabbalistic mappings are early modern or modern occult constructions, especially in Golden Dawn, Thelemic, and later esoteric systems.

The game can use these systems, but every level frame should label the source tradition:

- "Golden Dawn-style attribution"
- "Marseille-style historical card family, no full occult overlay"
- "Rider-Waite-Smith-inspired imagery"
- "Crowley/Harris-style elemental and astrological emphasis"
- "Project-specific alchemical adaptation"

This protects the history-facing side of the project from flattening tarot into one monolithic system.

## Unit Sizes

### Four-Cell Unit

Best for first playable mode.

```text
[Card] [Element]
[Planet/Zodiac] [Process]
```

Use when the level wants quick recognition and small pieces.

### Six-Cell Unit

Good for medium complexity.

```text
[Card] [Element] [Planet]
[Suit] [Zodiac]  [Process]
```

Use for card families, suits, and zodiac/planet interplay.

### Nine-Cell Unit

Best for source-heavy levels and codex challenges.

```text
[Card]    [Element] [Planet]
[Suit]    [Zodiac]  [Decan]
[Number]  [Process] [Source]
```

Use when the player is meant to read a card as a table of correspondences.

## Tetromino-Like Attribution Shapes

Instead of fixed rectangles, cards can become Tetris-like silhouettes.

Shape logic:

| Shape driver | Example |
| --- | --- |
| Dense planetary/zodiac mix | T or plus-like cluster. |
| One dominant element | I-piece or bar. |
| Balanced dual attribution | O-piece/square. |
| Conflict or difficult dignity | S/Z piece. |
| Hierarchical major trump | L/J piece with central card cell and trailing attributions. |

This creates a bridge between tarot and the existing rotate/place mechanics.

## Example Card Units

These are illustrative and should later be tied to a declared attribution source.

### The Tower

Four-cell:

```text
[Tower] [Mars]
[Fire]  [Calcination]
```

Gameplay:

- explosive, destabilizing, breaks fixed structures
- useful in Breakout, Siege, Balance Tetris, and Lab Minesweeper hazards

### The Moon

Four-cell:

```text
[Moon]  [Luna]
[Water] [Dissolution]
```

Gameplay:

- obscures, wets, reveals hidden paths poorly at first
- strong in Minesweeper, Wild Hunt, Snake, and Billiards

### Ace Of Cups

Four-cell:

```text
[Ace]   [Water]
[Cups]  [Dissolution]
```

Gameplay:

- opens fluid flow, fills vessels, softens fixed matter
- good tutorial card for water and solvent mechanics

### Ten Of Pentacles

Six-cell:

```text
[Ten]      [Earth] [Pentacles]
[Saturn?]  [Salt]  [Fixation]
```

Gameplay:

- heavy, stable, high-value, hard to move
- good for Balance Tetris and Push mode

## Mode Concepts

### Tarot Atelier

The player places composite tarot units into a correspondence grid. Match or balance the attributions to complete spreads, recipes, or lab operations.

Core verbs:

- draft card
- inspect attributions
- rotate unit
- place unit
- align correspondences
- complete spread

### Tarot Balance

Composite card pieces fall or are placed on a balancing platform. Their cells carry different weights:

- Saturn/earth cells are heavy
- fire/Mars cells destabilize
- water/Moon cells slide
- air/Mercury cells lighten or drift

The player scores by arranging card attributions into stable, meaningful spreads.

### Tarot Lab Cascade

The card unit becomes a lab recipe. Apparatus cells inside or adjacent to the card trigger transformations.

Example:

- The Tower card enters a Crucible and calcines brittle matter.
- The Moon enters a Solvent Jar and reveals hidden water hazards.

### Tarot Minesweeper

Hidden cells are card attributions. The player reveals a spread without triggering difficult combinations.

Example:

- Mars + Tower + Sulphur nearby increases accident number.
- Moon + Water nearby increases obscurity/vapor number.

### Tarot Breakout

Bricks are card cells. Hitting the "card" cell activates the attached attribution cells.

Example:

- Hit The Tower core: all adjacent Mars/fire cells erupt.
- Hit Temperance: water/fire cells moderate one another.

### Tarot Snake

Eating a card unit grants a bundle of powers rather than one power.

Example:

- Eat Ace of Cups: water movement, dissolution lens, short healing.
- Eat Tower: burn obstacle, but add instability.

## Data Shape

```js
{
  schema: 'tarot-attribution-unit/v1',
  cardId: 'tower',
  cardName: 'The Tower',
  tradition: 'golden-dawn-inspired',
  unitSize: 4,
  footprint: [
    ['card', 'planet'],
    ['element', 'process']
  ],
  cells: [
    { slot: 'card', label: 'Tower', emoji: '🗼', tags: ['rupture', 'fall'] },
    { slot: 'planet', label: 'Mars', glyph: '♂', tags: ['fire', 'iron', 'force'] },
    { slot: 'element', label: 'Fire', emoji: '🔥', tags: ['heat', 'calcine'] },
    { slot: 'process', label: 'Calcination', glyph: '♈', tags: ['ash', 'reduce'] }
  ],
  source: {
    family: 'tarot attribution placeholder',
    note: 'Declare exact attribution source before source-facing release.'
  }
}
```

## Adapter Needs

Future adapters:

```js
toTarotUnit(cardRecord, options)
toAttributionCell(attribution)
toSpreadPuzzlePiece(tarotUnit)
toBalanceTarotPiece(tarotUnit)
```

Mode-specific outputs should include:

- footprint
- cell weights
- cell reactions
- source/tradition label
- card core location
- rotate permissions
- scoring affinity

## Level Ideas

### Four Cells Of The Tower

Teach composite pieces with a single explosive card. Player must place Mars/fire/calcination safely before activating the Tower core.

### The Lunar Pool

Use Moon/Water/Dissolution cards to reveal hidden lab hazards without flooding the board.

### The Seven Planetary Trumps

A series where each level introduces one planetary attribution as a metal/receiver/power.

### Twelve Zodiac Gates

Cards with zodiac cells unlock process gates. Player must route the right card piece to the right operation.

### Dense Card, Difficult Shape

High-attribution cards become six- or nine-cell pieces. The challenge is spatial: dense symbolic material is harder to place cleanly.

## Open Questions

1. Which tarot attribution tradition should the first level set use?
2. Should the first playable version use four-cell units only?
3. Should card identity be the center cell or a separate label outside the piece?
4. Should tarot units be player-created from buttons or drawn from a deck?
5. Should players be able to rotate individual attribution cells, or only the whole unit?
6. Should dense cards be physically heavier, more reactive, or simply larger?

## Recommendation

Start with **Tarot Atelier** as a plan-only mode, then prototype a four-cell unit system. Use a source label from the beginning, even if the first values are placeholders. The first playable test should avoid the full deck and use only 6-10 cards with highly legible attributions: Tower, Moon, Sun, Temperance, Devil, Magician, Ace of Cups, Ace of Wands, Ten of Pentacles.
