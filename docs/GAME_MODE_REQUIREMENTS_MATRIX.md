# Game Mode Requirements Matrix

This matrix turns every current and requested mode into a concrete build checklist. It is deliberately redundant with mode-specific docs so the project has one place to see what each branch still needs.

## Shared Requirements For Every Playable Mode

Every game mode should eventually provide:

- **Landing card** on `index.html`
- **Guide entry** on `game-guide.html`
- **README entry**
- **Mode design doc** in `docs/`
- **Move readout** for every player input
- **Instructions panel** describing goal and good first move
- **Source frame** when historical/esoteric content is used
- **Asset schema** for blocks, symbols, cards, or level pieces
- **Level-builder compatibility** or a reason it cannot use the shared builder
- **Save/export plan** for generated writing, level data, or study sheets
- **Verification notes** after browser testing

## Implemented Or Playable Modes

| Mode | Core input | Shared systems used | Missing next layer |
|---|---|---|---|
| Balance Tetris | Keyboard/mouse placement and rotation | Physics, platforms, alchemy palette, readout | More campaign templates and source sidebars |
| Wild Hunt Balance | Balance Tetris plus campaign goals | Balance physics, Wild Hunt blocks, chronicle scoring | More Trithemius-sourced levels |
| Rune Bloom | Tile/glyph placement | Alchemy adaptation docs, bloom cascades | More selectable fast variants |
| Alchemy Snake | Arrow/key movement | Alchemy blocks, narration parser | Starting powers and power drafting |
| Alchemical Three | Character switching, pickup, rotation | Shared block rotation contract | Tool inventory and richer puzzles |
| VALIS Space Taxi | Thrust/landing controls | Vehicle physics, cargo blocks, beam reveal | Station campaign and cargo cascade depth |
| Tarot Reading Lab | Multiple-choice interpretation | Tarot prompts, generated writing | Hideable prompts and export archive |
| Tarot Auto-Machine | Card placement, chat interpretation picks | Tarot tags, attribution bank | Save generated streams/readings |
| Tarot Coin Journey | Draw/spend attribution coins | Tarot, Tree map, lamen pad | Long-term journey persistence |
| Tarot Numerology Breaker | Card combo scoring | Tarot numerology, GD correspondences | More relics/rules/deck breadth |
| Golden Dawn Explorer | Clickable diagrams | GD correspondence data | Better data import and source labels |
| Tree Tapper Quiz | Token placement | GD correspondences, Tree map | More quiz decks and progress tracking |
| GD Symbol Quiz Suite | Token placement and diagrams | Zodiac, lamen, magic squares | More exact knowledge lecture quizzes |
| Magic Square Workbench | Square construction, sigil tracing | Planetary squares, print-shop preview | Drawn path scoring and export templates |
| Ritual Trainer Lab | Quarter/body/action clicks | GD ritual stubs, readout, storyboard | Source-labeled ritual records |
| GD Implements Atlas | Ritual object cards and filters | Vault/tablet/banner/color-scale mode atlas | Build Vault Painter first playable slice |
| Sefer Yetzirah Lab | Letter/gate clicks, quiz answers | Hebrew letters, SY classes, GD overlays | Real recension comparator |
| Level Builder | WYSIWYG placement | Level JSON schema, physics knobs | Templates for each mode |
| Asset Studio | Form-based asset creation | Asset JSON schema | Import/export libraries and source links |

## Planned Modes Still Needing Playable Pages

| Mode | First playable slice | Required docs already present |
|---|---|---|
| Alchemical Billiards | 2D cue shot into reagent balls and apparatus bumpers | `ALCHEMICAL_BILLIARDS_MODE.md` |
| Alchemical Breakout | Paddle/ball breaks alchemical bricks with reactions | `ALCHEMICAL_BREAKOUT_MODE.md` |
| Push Mode | Sokoban-like lab block pushing with matter properties | `GRID_PUSH_AND_MINESWEEPER_MODES.md` |
| Lab Minesweeper | Reveal hidden accident tiles with property readouts | `GRID_PUSH_AND_MINESWEEPER_MODES.md` |
| Medieval Siege Alchemy | Choose Bomber, Tower Defense, Turn-Based, Lob-Shot, or Fire/Ice version | `MEDIEVAL_SIEGE_ALCHEMY_MODES.md` |
| Tarot Atelier | Compose a card from 4 attribution cells | `TAROT_ATTRIBUTION_BLOCK_MODE.md` |
| Tarot Tetris | Falling/placing card-symbol stacks | `TAROT_TETRIS_SYMBOL_STACKS.md` |
| Moat Drawbridge | Balance-platform puzzle to make a bridge across a moat | `MOAT_DRAWBRIDGE_PUZZLES.md` |
| PKD Balance Modes | VALIS beam already started; next is Ubik/Scanner/Minority queue | `PKD_BALANCE_TETRIS_MODES.md` |

## Asset Families That Need Shared Data

| Asset family | Used by | Data fields needed |
|---|---|---|
| Alchemy blocks | Balance, Snake, Three, Taxi, Breakout, Push, Minesweeper | emoji, family, mass, friction, volatility, heat, fixity, source |
| Platforms/surfaces | Balance, Taxi, Moat, level builder | geometry, pivot, friction, slipperiness, wind, failure thresholds |
| Zodiac process buttons | Balance, Rune Bloom, process atlas, future modes | sign, process, apparatus output, Tria Prima variants |
| Tarot cards | Reading, Auto, Coin, Numerology, Atelier, Tetris | card id, tradition, suit/type, number, element, planet, zodiac, path |
| Golden Dawn symbols | Explorer, Tree Tapper, GD Suite, Ritual, SY Lab | symbol id, class, glyph, source, quiz decks, unlock tier |
| Magic squares/sigils | GD Suite, Magic Square Workbench, Ritual, Hexagram | planet, order, square values, figure, path drawing rules |
| Ritual actions | Ritual Trainer | action type, direction, body point, formula, source, sequence |
| Ritual diagrams and implements | GD Implements Atlas, Vault Painter, Tablet Constructor | object id, region, color scale, inscription, version, source note |
| Sefer Yetzirah records | SY Lab, GD Suite, lamen, tarot | recension, section, letter class, world/year/body, variant links |
| Source excerpts | Historiography, poetry, Wild Hunt, SY, tarot | source id, summary, citation, allowed quote, game hooks |

## Cross-Mode Engineering Tasks

1. `mode-registry.json`
   - Single source of truth for mode name, status, page, docs, core input, and next build step.
2. `move-readout.js`
   - Shared event logging, canned responses, source-flavor messages.
3. `alchemy-palette.js`
   - Shared zodiac + Tria Prima button grammar.
4. `source-frame.js`
   - Level side panel for scholarly source summaries and citations.
5. `asset-schema.json`
   - Shared block/card/symbol schema.
6. `level-schema.json`
   - Mode-aware level builder export schema.
7. `generated-writing-archive.js`
   - Save generated tarot, ritual, and interpretation writing.

## Recommended Build Order

1. Mode registry page and JSON data.
2. Shared move readout module.
3. Level-builder templates for Balance, Snake, Taxi, Magic Square, Ritual, SY Lab.
4. Playable Alchemical Breakout.
5. Playable Push/Minesweeper split.
6. Tarot Atelier four-cell prototype.
7. Source-frame sidebars fed by local database imports.
