# Alchemical Game Arcade

A browser-based arcade of alchemical block games, balance puzzles, creator tools, and source-driven design experiments.

Live site: [https://t3dy.github.io/TetrisCodex/](https://t3dy.github.io/TetrisCodex/)

The project is organized around emoji blocks with physical and symbolic properties: mass, friction, volatility, fixity, beam affinity, exit-side value, apparatus effects, source notes, and mode-specific behaviors.

## Playable Pages

- [Arcade Launcher](index.html)  
  Main entry point for games, tools, and guide pages.

- [Balance Tetris](balance-tetris.html)  
  The priority branch. Stack tetromino-like matter on a tilting platform. Alchemy mode adds zodiac/process buttons, Tria Prima compounds, side-dumping profits, sliding matter, and physics lab controls.

- [Rune Bloom](rune-bloom.html)  
  A separate crystalline tile-placement game. Place glyph pieces, bloom same-color runs, clear rune cells, and prevent blight from sealing the garden.

- [Alchemy Snake](snake-alchemy.html)  
  Old-school grid Snake using shared alchemy blocks. Salt, Sulphur, Mercury, and zodiac apparatus change growth, speed, collision grace, heat, and narration.

- [Alchemical Three](alchemical-three.html)  
  Character-switching rotation puzzle. Three specialists pick up, carry, and rotate alchemical blocks depending on strength, tools, fixity, slipperiness, and heat.

- [VALIS Space Taxi](valis-space-taxi.html)  
  A vehicle/landing mode inspired by old-school Space Taxi handling. Pilot a small craft through variable gravity, land on tilting alchemical pads, reveal hidden cargo with a VALIS beam, and prevent lab cascades.

- [Level Builder](level-builder.html)  
  WYSIWYG construction kit for authoring levels. Place blocks, platforms, pads, receivers, objectives, and tune physics parameters, then export JSON.

- [Asset Studio](asset-studio.html)  
  Dev tool for creating emoji-block assets with alchemical family, class, mode, mass, friction, volatility, beam affinity, behavior, and source notes.

- [Block Engine Architecture](engine-architecture.html)  
  Shared alchemy block physics and adapter contracts for non-Tetris modes, alternate input schemes, and reusable source metadata.

- [Game Guide](game-guide.html)  
  Public-facing overview of game modes, asset families, and creator tools.

- [12 Processes Atlas](process-atlas.html)  
  Website tab mapping zodiac-linked alchemical processes to grid verbs across the arcade.

- [New Historiography Of Alchemy](alchemy-historiography.html)  
  Website tab framing the scholarly values, source topics, and level side-panel logic for historical alchemy.

- [Design Rationale](design-rationale.html)  
  Website section preserving original feature prompts, interpretations, choices made, and alternate design paths.

- [Alchemical Poetry Codex](alchemical-poetry.html)  
  Website section for alchemical poetry timelines, anthology summaries, and source-flavored canned response text for game feedback.

## Game Modes

### Balance Tetris

The core physical puzzle: blocks stack on a balancing platform. The platform tilts according to mass distribution, stiffness, wind, friction, and surface settings.

Current and planned variants include:

- Standard balance stacking
- Zen/sandbox stacking
- Balloons and bombs variants
- Alchemy mode with planetary/zodiac substances
- Wild Hunt campaign levels
- Moat Drawbridge puzzles
- PKD-inspired variants such as Ubik anti-entropy, VALIS beam reveal, Scanner scramble, and Minority Report queue play

### Alchemy Balance

The main alchemical branch. The player creates or receives matter with properties tied to zodiac processes and the Tria Prima:

- Salt: fixed, heavy, stabilizing
- Sulphur: oily, combustible, cascade-prone
- Mercury: volatile, mobile, slippery
- Zodiac/process alone: apparatus and alchemical furniture

The most important scoring idea is profitable tipping: substances should fall off the appropriate side of the platform into the proper receiver.

### Wild Hunt

A Balance Tetris mode based on Trithemius/Wild Hunt scholarship notes. It uses hounds, hoofbeats, apparition routes, wind, date tokens, chronicle scoring, and omen-like blocks.

### VALIS Space Taxi

A hybrid vehicle-and-balance mode. The ship has thrust, wind drift, hull damage, fuel, docking, and beam controls. Cargo blocks have alchemical and PKDian properties, and landing on platforms affects tilt.

### Moat Drawbridge

A puzzle family where the player builds a stack tall and flat enough to become a drawbridge across a moat for horses, coaches, or royal cargo.

### Rune Bloom

A separate original tile-placement experiment with blooms, blight, glyph placement, and many future fast mode variants.

### Alchemy Snake

A BASIC-style Snake mode that proves the alchemical block system can work outside tilting or Tetris placement. The snake digests shared `alchemy-block/v1` matter, and a narration parser converts inputs, collisions, and outcomes into alchemical feedback.

Planned power expansion: snakes can start with or digest alchemical powers such as Salt stability, Mercury phase, Sulphur ignition, planetary constitutions, and apparatus process lenses.

### Alchemical Three

A grid puzzle mode that treats Tetris rotation as a shared action characters can perform. The Salt-Bearer, Mercury-Runner, and Sulphur-Smith move blocks differently, proving that `alchemy-block/v1` matter can power character puzzles as well as falling-block games.

### Alchemical Billiards

A planned pool-shot cascade mode. Players aim cue shots into alchemical balls, blocks, furniture, pockets, and apparatus so collisions trigger zany laboratory reactions. The 3D-ish dream-course idea is documented as a later branch, not a current build.

### Alchemical Breakout

A planned paddle-and-ball lab disturbance mode. Hitting alchemical bricks can calcine, dissolve, split, ferment, project, ignite, crystallize, or reveal hidden properties.

### Alchemical Push And Lab Minesweeper

Planned grid modes. Push mode treats alchemical matter as movable lab blocks with weight, slipperiness, heat, and fragility. Minesweeper mode turns hidden laboratory accidents into readable clues and player-property interactions.

### Medieval Siege Alchemy

Planned only until a version is chosen. Options include Bomber Alchemist, Tower Defense Athanor, Turn-Based Siege Laboratory, Lob-Shot Artillery, and Flamethrower/Ice Arcade.

## Creator Tools

### Level Builder

The level builder exports `alchemical-level-kit/v1` JSON. It currently supports:

- Mode selection
- Platform type selection
- Emoji block painting
- Platform, pad, receiver, and objective placement
- Physics sliders
- Local save/load
- Import/export JSON
- Sample VALIS Taxi level

### Asset Studio

The asset studio exports `alchemical-asset/v1` JSON. It currently supports:

- Emoji asset preview
- Asset class and mode tagging
- Alchemical family
- Mass, friction, volatility, and beam affinity
- Behavior notes
- Source notes
- Sample asset library

### Planned Tools

- Physics Preset Lab
- Platform Forge
- Shared Alchemy Block Engine integration
- Cascade Editor
- Source Annotation Tool
- Campaign Planner
- Asset Gallery Builder
- Mode Explainer Builder

## Run Locally

No build step or dependencies are required. Open [index.html](index.html) directly in a browser, or serve the folder with any static file server.

Example:

```bash
python -m http.server 8008
```

Then open:

```text
http://127.0.0.1:8008/index.html
```

## Documentation

The project has a living Markdown design trail in `docs/`.

Start here:

- [docs/RUNE_BLOOM_DOC_INDEX.md](docs/RUNE_BLOOM_DOC_INDEX.md)
- [docs/ALCHEMICAL_GAME_WORLD_BIBLE.md](docs/ALCHEMICAL_GAME_WORLD_BIBLE.md)
- [docs/COMBINATORIAL_ALCHEMY_PALETTE_SPEC.md](docs/COMBINATORIAL_ALCHEMY_PALETTE_SPEC.md)
- [docs/LEVEL_BUILDER_CONSTRUCTION_KIT.md](docs/LEVEL_BUILDER_CONSTRUCTION_KIT.md)
- [docs/DEV_TOOLS_AND_WEBSITE_ROADMAP.md](docs/DEV_TOOLS_AND_WEBSITE_ROADMAP.md)
- [docs/SHARED_ALCHEMY_BLOCK_ENGINE.md](docs/SHARED_ALCHEMY_BLOCK_ENGINE.md)
- [docs/GAME_MODE_ADAPTER_CONTRACTS.md](docs/GAME_MODE_ADAPTER_CONTRACTS.md)

Mode and asset docs:

- [docs/EMOJI_BLOCK_PROPERTY_TAXONOMY.md](docs/EMOJI_BLOCK_PROPERTY_TAXONOMY.md)
- [docs/PHYSICS_LAB.md](docs/PHYSICS_LAB.md)
- [docs/BALANCE_FAIRNESS_AND_INSTRUCTIONS.md](docs/BALANCE_FAIRNESS_AND_INSTRUCTIONS.md)
- [docs/GAME_MODE_DESIGN_RATIONALE.md](docs/GAME_MODE_DESIGN_RATIONALE.md)
- [docs/INPUT_FEEDBACK_READOUT.md](docs/INPUT_FEEDBACK_READOUT.md)
- [docs/ALCHEMICAL_POETRY_TIMELINE.md](docs/ALCHEMICAL_POETRY_TIMELINE.md)
- [docs/ALCHEMICAL_POETRY_RESPONSE_BANK.md](docs/ALCHEMICAL_POETRY_RESPONSE_BANK.md)
- [docs/ALCHEMY_SNAKE_MODE.md](docs/ALCHEMY_SNAKE_MODE.md)
- [docs/SNAKE_ALCHEMICAL_POWERS.md](docs/SNAKE_ALCHEMICAL_POWERS.md)
- [docs/ROTATION_MECHANIC_CONTRACT.md](docs/ROTATION_MECHANIC_CONTRACT.md)
- [docs/ALCHEMICAL_THREE_MODE.md](docs/ALCHEMICAL_THREE_MODE.md)
- [docs/ALCHEMICAL_BILLIARDS_MODE.md](docs/ALCHEMICAL_BILLIARDS_MODE.md)
- [docs/ALCHEMICAL_BREAKOUT_MODE.md](docs/ALCHEMICAL_BREAKOUT_MODE.md)
- [docs/GRID_PUSH_AND_MINESWEEPER_MODES.md](docs/GRID_PUSH_AND_MINESWEEPER_MODES.md)
- [docs/MEDIEVAL_SIEGE_ALCHEMY_MODES.md](docs/MEDIEVAL_SIEGE_ALCHEMY_MODES.md)
- [docs/ALCHEMY_HISTORIOGRAPHY_ESSAY.md](docs/ALCHEMY_HISTORIOGRAPHY_ESSAY.md)
- [docs/ALCHEMICAL_HISTORY_BY_MODE.md](docs/ALCHEMICAL_HISTORY_BY_MODE.md)
- [docs/TWELVE_PROCESSES_MODE_ATLAS.md](docs/TWELVE_PROCESSES_MODE_ATLAS.md)
- [docs/SYMBOL_INPUT_GRAMMAR.md](docs/SYMBOL_INPUT_GRAMMAR.md)
- [docs/MOAT_DRAWBRIDGE_PUZZLES.md](docs/MOAT_DRAWBRIDGE_PUZZLES.md)
- [docs/WILDHUNT.md](docs/WILDHUNT.md)
- [docs/WILDHUNT_EMOJI_BLOCK_SYSTEM.md](docs/WILDHUNT_EMOJI_BLOCK_SYSTEM.md)
- [docs/WILDHUNT_LEVEL_CONCEITS.md](docs/WILDHUNT_LEVEL_CONCEITS.md)
- [docs/PKD_BALANCE_TETRIS_MODES.md](docs/PKD_BALANCE_TETRIS_MODES.md)
- [docs/VALIS_SPACE_TAXI_MODE.md](docs/VALIS_SPACE_TAXI_MODE.md)
- [docs/VALIS_SPACE_TAXI_ASSET_PACK.md](docs/VALIS_SPACE_TAXI_ASSET_PACK.md)

Source and implementation docs:

- [docs/ALCHEMY_SOURCE_PIPELINE.md](docs/ALCHEMY_SOURCE_PIPELINE.md)
- [docs/INSPIRATIONS.md](docs/INSPIRATIONS.md)
- [docs/QUERYPAT_PKD_BALANCE_TETRIS_SOURCE_NOTES.md](docs/QUERYPAT_PKD_BALANCE_TETRIS_SOURCE_NOTES.md)
- [docs/WILDHUNT_IMPLEMENTATION_LOG.md](docs/WILDHUNT_IMPLEMENTATION_LOG.md)
- [docs/VALIS_SPACE_TAXI_IMPLEMENTATION_LOG.md](docs/VALIS_SPACE_TAXI_IMPLEMENTATION_LOG.md)

Rune Bloom docs:

- [docs/RUNE_BLOOM_IMPLEMENTATION_LOG.md](docs/RUNE_BLOOM_IMPLEMENTATION_LOG.md)
- [docs/RUNE_BLOOM_CORE_DESIGN.md](docs/RUNE_BLOOM_CORE_DESIGN.md)
- [docs/RUNE_BLOOM_MECHANIC_TAXONOMY.md](docs/RUNE_BLOOM_MECHANIC_TAXONOMY.md)
- [docs/RUNE_BLOOM_ASSET_CLASSES.md](docs/RUNE_BLOOM_ASSET_CLASSES.md)
- [docs/RUNE_BLOOM_ALCHEMY_ADAPTATION.md](docs/RUNE_BLOOM_ALCHEMY_ADAPTATION.md)
- [docs/RUNE_BLOOM_LEVEL_AND_MODE_ROADMAP.md](docs/RUNE_BLOOM_LEVEL_AND_MODE_ROADMAP.md)
- [docs/RUNE_BLOOM_DATA_SCHEMA.md](docs/RUNE_BLOOM_DATA_SCHEMA.md)
- [docs/RUNE_BLOOM_NEXT_STEPS.md](docs/RUNE_BLOOM_NEXT_STEPS.md)
- [docs/RUNE_BLOOM_MODE_ATLAS.md](docs/RUNE_BLOOM_MODE_ATLAS.md)

## Project Direction

The long-term goal is a source-driven alchemical game world where:

- scholarship and local databases become asset definitions
- assets become playable emoji blocks
- blocks behave according to alchemical and physical properties
- levels are authored visually
- game modes share schemas and creator tools
- the website explains the whole system for players and designers
