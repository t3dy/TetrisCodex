# Prompt Coverage Audit

This audit consolidates the user's accumulated feature requests and maps them to implemented pages, design documents, and remaining gaps. It is meant to prevent mode ideas from disappearing as the project grows.

## Status Legend

- **Playable**: a browser page or in-game mode exists.
- **Stub**: a playable or linked interface exists, but the system is still a prototype.
- **Documented**: a Markdown design output exists, but no playable mode yet.
- **Gap**: the request needs a fuller implementation or clearer doc.

## Core Balance Tetris And Alchemy Requests

| User desire | Current coverage | Status | Next need |
|---|---|---:|---|
| Digital version of a balancing Tetris board game | `balance-tetris.html`, `SIMPLIFYPHYSICS.md`, `PLATFORMS.md` | Playable | Keep tuning fairness and level goals. |
| Both mouse and keyboard controls | `balance-tetris.html` | Playable | Add explicit controls reference in every mode screen. |
| Multiple platform types with different physics | `PLATFORMS.md`, `balance-tetris.html`, `TESTING.md` | Playable | Add more level-authored platform presets. |
| Wet/frozen/slippery surfaces | `PHYSICS_LAB.md`, `PLATFORMS.md`, `balance-tetris.html` | Partial | Surface modifiers should become first-class level-builder fields. |
| Player controls for gravity, slipperiness, wind, physics parameters | `PHYSICS_LAB.md`, `balance-tetris.html` | Playable | Mirror all parameters into `level-builder.html` export schema. |
| Avoid first-placement tip-over and give player a chance | `BALANCE_FAIRNESS_AND_INSTRUCTIONS.md`, `balance-tetris.html` | Playable | Continue testing every campaign mode with first-move grace. |
| Mode instructions explaining what to do and what a good move is | `BALANCE_FAIRNESS_AND_INSTRUCTIONS.md`, mode guide text | Partial | Add a shared instruction-card component across all pages. |
| Every player input gets a convenient text readout | `INPUT_FEEDBACK_READOUT.md`, many pages' Move Readout panels | Partial | Add a standard `moveReadout` adapter to every playable page. |
| Profitably tip alchemical substances off appropriate platform side | `balance-tetris.html`, `COMBINATORIAL_ALCHEMY_PALETTE_SPEC.md` | Playable | Add more receiver-side level goals. |

## Combinatorial Alchemy World

| User desire | Current coverage | Status | Next need |
|---|---|---:|---|
| Click 12 zodiac signs for alchemical processes | `COMBINATORIAL_ALCHEMY_PALETTE_SPEC.md`, `process-atlas.html`, `balance-tetris.html` | Playable/Documented | Make this palette reusable in non-Balance modes. |
| Salt/Sulphur/Mercury buttons define substance class | `COMBINATORIAL_ALCHEMY_PALETTE_SPEC.md`, `SYMBOL_INPUT_GRAMMAR.md`, `balance-tetris.html` | Playable | Extract shared button grammar to JS module. |
| Distinguish philosophical Mercury from planetary Mercury | `SYMBOL_INPUT_GRAMMAR.md`, Golden Dawn docs | Documented | UI should visually separate Tria Prima buttons from planet glyphs. |
| Organize game world around emoji blocks with sourced properties | `EMOJI_BLOCK_PROPERTY_TAXONOMY.md`, `ALCHEMICAL_GAME_WORLD_BIBLE.md`, `asset-studio.html` | Playable/Documented | Add source-import pipeline into Asset Studio. |
| Canned alchemical response text and poetry flavor | `ALCHEMICAL_POETRY_RESPONSE_BANK.md`, `alchemical-poetry.html` | Documented/Website | Wire response bank into every Move Readout. |
| Historical/theoretical source side frame | `alchemy-historiography.html`, `ALCHEMICAL_HISTORY_BY_MODE.md` | Website/Documented | Add level-specific source sidebars. |
| 12 processes modeled across every mode | `process-atlas.html`, `TWELVE_PROCESSES_MODE_ATLAS.md` | Website/Documented | Add examples into each playable mode's tutorial. |

## Game Mode Requests

| Mode / request | Current coverage | Status | Next need |
|---|---|---:|---|
| Rune Bloom plus many variants | `rune-bloom.html`, Rune Bloom doc suite | Playable | Add mode select variants in-page. |
| Wild Hunt from Trithemius scholarship | `balance-tetris.html#wildhunt-campaign`, `WILDHUNT*.md` | Playable | Add more campaign levels and source sidebars. |
| Wild Hunt emoji graphics and level conceits | `WILDHUNT_EMOJI_BLOCK_SYSTEM.md`, `WILDHUNT_LEVEL_CONCEITS.md` | Documented | Move more block classes into game data. |
| PKD-inspired balance game modes | `PKD_BALANCE_TETRIS_MODES.md`, `QUERYPAT_PKD_BALANCE_TETRIS_SOURCE_NOTES.md` | Documented | Implement first PKD mode selector. |
| VALIS beam + Space Taxi hybrid | `valis-space-taxi.html`, `VALIS_SPACE_TAXI*.md` | Playable | Add richer station/cargo campaign. |
| Moat drawbridge puzzle | `MOAT_DRAWBRIDGE_PUZZLES.md` | Documented | Implement as Balance Tetris campaign family. |
| Snake with alchemical powers | `snake-alchemy.html`, `ALCHEMY_SNAKE_MODE.md`, `SNAKE_ALCHEMICAL_POWERS.md` | Playable | Add selectable starting powers. |
| Alchemical Three / character block rotation | `alchemical-three.html`, `ALCHEMICAL_THREE_MODE.md`, `ROTATION_MECHANIC_CONTRACT.md` | Playable | Add more tools and character-specific levels. |
| Pool-shot / billiards lab cascade | `ALCHEMICAL_BILLIARDS_MODE.md` | Documented | Build playable 2D cue-shot prototype. |
| Kirby Dream Course-ish 3D-ish stub | `ALCHEMICAL_BILLIARDS_MODE.md` | Documented | Keep plan-only until 2D mode works. |
| Breakout alchemical lab disturbance | `ALCHEMICAL_BREAKOUT_MODE.md` | Documented | Build first paddle-and-ball prototype. |
| Block pushing grid game | `GRID_PUSH_AND_MINESWEEPER_MODES.md` | Documented | Build Sokoban-like block push prototype. |
| Minesweeper alchemical lab accident mode | `GRID_PUSH_AND_MINESWEEPER_MODES.md` | Documented | Build grid reveal prototype with readouts. |
| Medieval siege alchemy | `MEDIEVAL_SIEGE_ALCHEMY_MODES.md` | Documented | User requested plans first; choose version before build. |

## Tarot And Golden Dawn Requests

| User desire | Current coverage | Status | Next need |
|---|---|---:|---|
| Tarot attribution blocks with 4/6/9 cells | `TAROT_ATTRIBUTION_BLOCK_MODE.md` | Documented | Build Tarot Atelier prototype. |
| Tarot reading quiz with correct/wrong interpretations | `tarot-reading.html`, `TAROT_READING_MODE.md`, `TAROT_QUIZ_VARIANTS.md` | Playable/Documented | Add more quiz variations and scoring explanations. |
| 4 then 5 of Wands softball quiz style | `TAROT_READING_MODE.md`, `TAROT_QUIZ_VARIANTS.md` | Documented | Add to playable prompt bank. |
| Trump as forces outside player's control | `TAROT_READING_MODE.md` | Documented | Add to playable prompt bank. |
| Save writing generated by reading choices, prompts hideable | `tarot-reading.html`, `TAROT_READING_MODE.md` | Playable/Partial | Add export/session archive. |
| Tarot Coin Journey / attention coins | `tarot-coin-journey.html`, `TAROT_COIN_ATTENTION_MODE.md` | Playable | Add more spreads and stored journey progress. |
| Tree of Life automap character sheet | `tarot-coin-journey.html` | Playable | Reuse in other tarot modes. |
| Rose Cross lamen as clickable input pad | `golden-dawn-explorer.html`, `tarot-coin-journey.html`, `ROSE_CROSS_LAMEN_GAMEPLAY_ATLAS.md` | Playable | Improve image-derived lamen fidelity. |
| Golden Dawn correspondence database | `golden-dawn-correspondences.js`, `GOLDEN_DAWN_CORRESPONDENCE_DATABASE.md` | Playable/Documented | Import authoritative local sources. |
| Tree Tapper quiz | `tree-tapper-quiz.html`, `TREE_TAPPER_CORRESPONDENCE_QUIZ.md` | Playable | Add more knowledge lecture decks. |
| GD symbol quizzes: pentagram, zodiac, tarot, magic squares, sigils | `gd-quiz-suite.html`, `magic-square-workbench.html`, docs | Playable/Stub | Add drawn sigil scoring. |
| Ritual modes: LBRP, Middle Pillar, Hexagram, Rose Cross | `ritual-trainer.html`, `GD_RITUAL_TRAINER.md` | Stub | Import ritual source data and drawn gesture scoring. |
| Sefer Yetzirah combinatorics and recensions | `sefer-yetzirah-lab.html`, `SEFER_YETZIRAH_LAB.md` | Stub | Build real digital edition comparator. |
| Tarot Balatro-like numerology breaker | `tarot-numerology-breaker.html`, `TAROT_BALATRO_NUMEROLOGY_BREAKER.md` | Playable | Add more rule relics and card sets. |
| Tarot Auto-Machine / stream reading | `tarot-auto-reader.html`, `TAROT_AUTO_MACHINE.md` | Playable | Add saved reading archive. |
| Tarot Tetris symbol stacks | `TAROT_TETRIS_SYMBOL_STACKS.md` | Documented | Build falling/placing prototype. |

## Creator Tool Requests

| User desire | Current coverage | Status | Next need |
|---|---|---:|---|
| Construction kit / WYSIWYG level editor | `level-builder.html`, `LEVEL_BUILDER_CONSTRUCTION_KIT.md` | Playable | Add per-mode templates and validation. |
| Dev tools for assets | `asset-studio.html`, `DEV_TOOLS_AND_WEBSITE_ROADMAP.md` | Playable | Export/import shared JSON bundles. |
| Website explaining all modes and assets | `index.html`, `game-guide.html`, README, docs | Playable | Add central mode registry page. |
| Detailed README with all modes and website link | `README.md` | Done | Keep updated with each new mode. |
| Prompt interpretation docs per game mode | many docs with User Prompt/Interpretation sections | Partial | Add central prompt-to-doc coverage table. |

## Coverage Gaps To Prioritize

1. Shared move readout module used by all playable pages.
2. Shared alchemy palette module used outside Balance Tetris.
3. Source sidebars per level, not just standalone essays.
4. A real mode registry on the website with implemented/planned status.
5. Playable Breakout and Push/Minesweeper prototypes.
6. Tarot Atelier/Tarot Tetris prototype for composite attribution blocks.
7. Digital edition importer for Sefer Yetzirah, tarot database, alchemy poetry, Trithemius, and Golden Dawn sources.
8. Export/session archive for generated tarot and ritual writing.
