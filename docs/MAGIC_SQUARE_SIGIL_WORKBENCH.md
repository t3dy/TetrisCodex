# Magic Square Sigil Workbench

## Purpose

The Golden Dawn quiz suite needs a richer magic-square branch. This workbench experiments with several interfaces for learning, constructing, drawing, animating, and printing planetary square sigils.

Playable page:

- `magic-square-workbench.html`

## User Request

The user asked for several magic-square game modes where players can:

- construct magic squares
- draw sigils on the squares
- experiment with different interfaces
- animate the sigil-drawing process
- eventually use print-shop functionality

## Prototype Interfaces

### Construct Square

The player fills hidden cells in a planetary square.

Current behavior:

- Some cells are hidden based on a deterministic pattern.
- The player types numbers into blanks.
- Correct cells trigger readout feedback.
- The panel shows the square's row/column constant.

Future variants:

- timed construction
- row-sum hints
- drag-number tiles into cells
- "repair the corrupted square" puzzle mode

### Trace Sigil

The player clicks cells to append their numbers to a sigil path.

Current behavior:

- The sequence is displayed as pills.
- The line is drawn across the square.
- The same sequence updates the print-shop preview.

Future variants:

- validate a known sigil sequence
- draw by dragging directly across cells
- compare freehand draw to computed line
- make sigil drawing part of a spellcraft mini-game

### Animate Path

The player can replay the current sequence as an animated trace.

Current behavior:

- The active trace reveals point-by-point.
- The print preview shows the complete path once animation ends.

Future variants:

- variable speed
- glowing trail
- sound or pulse ticks
- step-by-step teaching mode that names each number aloud in the readout

### Print Shop

The page generates a talisman-like preview card.

Current behavior:

- Shows planet glyph, square order, lineal figure, constant, path sequence, square grid, and sigil path.
- Uses browser print output through `window.print()`.

Future variants:

- export PNG
- export SVG
- add title bands, color scales, seals, captions, and source notes
- choose "study sheet", "game card", or "talisman poster" templates

## Planetary Square Set

The prototype includes:

- Saturn: 3x3 / Triangle
- Jupiter: 4x4 / Square
- Mars: 5x5 / Pentagram
- Sun: 6x6 / Hexagram
- Venus: 7x7 / Heptagram
- Mercury: 8x8 / Octagram
- Moon: 9x9 / Enneagram

These match the mappings already used in the Golden Dawn quiz suite's Practicus/magic-square drill.

## Game Mode Ideas

### Printer's Devil

The print shop has mis-set a planetary square. The player must restore the square before printing the talisman.

### Sigil Race

The game calls out a number sequence and the player traces it quickly. Mistakes add kinks or ink blots.

### Astral Engraver

The player watches a sigil path animate, then must reproduce it from memory.

### Planetary Typesetter

The player selects colors, glyphs, line weights, captions, and seals while preserving correct correspondences.

### Agrippa Apprentice

The player is quizzed on which planet uses which square order, lineal figure, and traditional magic-square grid.

## Data Needs

Each magic-square puzzle should eventually store:

```json
{
  "id": "saturn-3x3-construct-basic",
  "planet": "Saturn",
  "order": 3,
  "constant": 15,
  "square": [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
  "task": "construct",
  "hiddenCells": [[0, 0], [1, 1], [2, 2]],
  "source": {
    "label": "Fourth / Practicus Knowledge Lecture",
    "status": "Golden Dawn-style curriculum item"
  }
}
```

## Next Steps

1. Add SVG export.
2. Add PNG export through canvas rendering.
3. Add drag-to-draw input in addition to click-to-append.
4. Add named sample sigil sequences.
5. Add quiz scoring against hidden target sequences.
6. Add source/status labels per planetary square and template.
7. Integrate print-shop assets into Asset Studio.
