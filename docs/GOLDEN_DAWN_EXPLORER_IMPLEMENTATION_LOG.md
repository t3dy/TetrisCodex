# Golden Dawn Explorer Implementation Log

## User Prompt Context

The user asked for a TreeTapper-like Rose Cross lamen interface and a database of Golden Dawn correspondences that could later support:

- tarot reading games
- tarot tetris pieces made from attribution blocks
- a Balatro-like tarot numerology breaker
- a Tree of Life character sheet
- clickable Hebrew letters
- planets, zodiac signs, elements, suits, color scales, names, Enochian, magic squares, and other advanced unlocks

The immediate goal was not to finish every occult or scholarly detail. The immediate goal was to create a clickable, reusable surface that makes the correspondence system feel like a game control panel.

## Interpretation

I interpreted the request as two linked tasks:

1. Build a shared data object that other pages can consume.
2. Build an explorer page that makes the data interactive now.

This lets the project continue without waiting for the final Tarot database import. The game can already click, inspect, narrate, and test mode hooks, while the scholarly database can get deeper later.

## Files Created

### `golden-dawn-correspondences.js`

Shared prototype data module exposed as `window.GD_CORRESPONDENCES`.

It currently covers:

- 4 elements
- 7 classical planets
- 12 zodiac signs
- 4 tarot suits
- 10 sefirot
- 22 Tree paths
- Hebrew letters
- Mother / Double / Single letter classes
- tarot trump links
- grade unlock tiers

### `golden-dawn-explorer.html`

Playable browser page with:

- clickable Tree of Life map
- clickable Rose Cross lamen pad
- Unicode symbol bank
- grade unlock selector
- inspector panel
- move readout log
- mode hook cards explaining how the clicked symbol could behave in several game modes

## Design Choices

### Use A Prototype Data Module Instead Of A Hard Database

The project does not yet have a reconciled local Tarot database import. A plain browser JS object is lightweight, inspectable, and works with the static-site architecture.

Later, this can be generated from a fuller JSON/SQLite import.

### Keep Scholarship And Game Mechanics Distinct

The explorer labels the current data as Golden Dawn-style prototype data. It should not pretend that all tarot or esoteric systems agree.

The long-term data model should mark whether each attribution is:

- historical Golden Dawn
- modern occult convention
- user house rule
- project-specific game mechanic
- speculative or playful extension

### Make Every Click Generate Feedback

The page follows the user's broader request that every player input should produce a useful text readout. Clicking a path, node, petal, symbol, or grade writes a concise explanation of what just happened.

## Mode Hook Layer

The second pass added a Mode Hooks section. It translates a selected symbol into possible consequences for:

- Balance Tetris
- Tarot Coin Journey
- Tarot Numerology Breaker
- Tarot Tetris
- Alchemy Snake
- Creator Tools

This matters because the lamen should not just be an inert reference chart. It should be a live switchboard that each mode can interpret differently.

## Other Choices We Could Have Made

### Full Image Webification First

We could have tried to trace the supplied lamen image exactly. I did not do that yet because the first useful game step is clickable semantic regions, not perfect visual fidelity.

Future pass: create an SVG or canvas lamen whose hit regions visually match the supplied image more closely.

### Import The Local Tarot Database First

We could have paused to search the whole C drive and import every Tarot database artifact. That is still important, but it would slow the UI prototype. The current module gives us a working contract for whatever the importer eventually produces.

### Build Tarot Tetris First

We could have started with falling card pieces. I chose the correspondence explorer first because Tarot Tetris needs these symbols, powers, and hooks to exist as reusable data.

## Next Steps

1. Add an export button that writes the selected correspondence payload as JSON.
2. Let Asset Studio import a correspondence payload into a new emoji-block asset.
3. Let Tarot Coin Journey consume `golden-dawn-correspondences.js` instead of its embedded path data.
4. Create a closer SVG recreation of the lamen image with semantic click regions.
5. Add source labels and citations after importing the local Tarot database.
6. Add color scale tables as optional advanced unlocks.
7. Add a Tarot Tetris prototype where card pieces are composed from correspondence cells.
