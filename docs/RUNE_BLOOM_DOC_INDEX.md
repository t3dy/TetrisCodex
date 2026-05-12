# Rune Bloom Documentation Index

This folder is the living design record for Rune Bloom. The game is intentionally separate from the balance-platform project, but it can still harvest ideas from the existing generated design corpus: alchemy, zodiac processes, challenge structures, prototype habits, and mechanic taxonomy.

## Current Docs

- `RUNE_BLOOM_IMPLEMENTATION_LOG.md`  
  What was built, why, and what changed in each pass.

- `RUNE_BLOOM_CORE_DESIGN.md`  
  The rules, player fantasy, loop, verbs, win/loss state, and control model.

- `RUNE_BLOOM_MECHANIC_TAXONOMY.md`  
  Classes of mechanics available for the game, with what they ask of the player.

- `RUNE_BLOOM_ASSET_CLASSES.md`  
  Visual, audio, UI, data, and gameplay asset families.

- `RUNE_BLOOM_ALCHEMY_ADAPTATION.md`  
  Translation of the existing alchemy/zodiac generated material into Rune Bloom mechanics.

- `RUNE_BLOOM_LEVEL_AND_MODE_ROADMAP.md`  
  Level types, campaign structure, mode ideas, and challenge arcs.

- `RUNE_BLOOM_DATA_SCHEMA.md`  
  Proposed JSON-style data shapes for pieces, runes, reactions, levels, and unlocks.

- `RUNE_BLOOM_NEXT_STEPS.md`  
  Practical build order from the current playable prototype onward.

- `RUNE_BLOOM_MODE_ATLAS.md`  
  The landing-page mode catalog, mode classes, tuning knobs, and future mode ideas.

- `ALCHEMICAL_GAME_WORLD_BIBLE.md`  
  Shared world organization for Balance Tetris, Rune Bloom, and future alchemical games.

- `COMBINATORIAL_ALCHEMY_PALETTE_SPEC.md`  
  High-priority zodiac plus Tria Prima button grammar.

- `EMOJI_BLOCK_PROPERTY_TAXONOMY.md`  
  Gameplay property classes for alchemical emoji blocks.

- `ALCHEMY_SOURCE_PIPELINE.md`  
  How local database/source scholarship becomes game blocks and mechanics.

- `INSPIRATIONS.md`  
  Puzzle-game mechanical inspirations mapped onto alchemical processes.

- `WILDHUNT.md`  
  Trithemius / Wild Hunt gameplay mode ideas focused on chronology, apparition, sound, and sensory deception.

- `WILDHUNT_EMOJI_BLOCK_SYSTEM.md`  
  Emoji graphics, block classes, alchemical counters, and data fields for the Trithemius Wild Hunt mode.

- `WILDHUNT_LEVEL_CONCEITS.md`  
  Level families and a campaign sequence based on chronology, localization, phantom armies, cursed hunters, aerial sorcerers, and sensory deception.

- `WILDHUNT_IMPLEMENTATION_LOG.md`  
  Build log for the first playable Wild Hunt slice in Balance Tetris.

- `PHYSICS_LAB.md`  
  Balance Tetris user-facing physics controls for gravity, wind, friction, slipperiness, and slide behavior.

- `BALANCE_FAIRNESS_AND_INSTRUCTIONS.md`  
  Fairness pass for avoiding first-placement tip-overs and adding mode-specific instruction cards.

- `MOAT_DRAWBRIDGE_PUZZLES.md`  
  Balance Tetris puzzle mode where players tip a platform into a bridge across a moat for horses and coaches.

- `QUERYPAT_PKD_BALANCE_TETRIS_SOURCE_NOTES.md`  
  QueryPat source pass for Philip K. Dick motifs that can become Balance Tetris mechanics.

- `PKD_BALANCE_TETRIS_MODES.md`  
  Concrete PKD-inspired Balance Tetris mode designs: Ubik entropy, Scanner scramble, High Castle hexagrams, Minority Report queue play, Androids/kipple, VALIS beams, and more.

- `VALIS_SPACE_TAXI_MODE.md`  
  Space Taxi-style Balance Tetris mode with thrust controls, tilting landing pads, VALIS beam reveals, alchemical cascades, and cargo delivery.

- `VALIS_SPACE_TAXI_ASSET_PACK.md`  
  Emoji asset classes for ships, passengers, cargo, alien hazards, landing pads, beam effects, and alchemy-lab cascades.

- `VALIS_SPACE_TAXI_IMPLEMENTATION_LOG.md`  
  Build log for the first playable VALIS Space Taxi slice.

- `LEVEL_BUILDER_CONSTRUCTION_KIT.md`  
  WYSIWYG construction kit for authoring levels across Balance Tetris, Alchemy, Wild Hunt, VALIS Taxi, Moat Drawbridge, Rune Bloom, and future modes.

- `DEV_TOOLS_AND_WEBSITE_ROADMAP.md`  
  Roadmap for Asset Studio, Physics Preset Lab, Platform Forge, Cascade Editor, source annotation, campaign planning, and website pages.

## Documentation Rule Going Forward

Every substantial feature should get a Markdown note before or alongside implementation:

1. Mechanic definition
2. Asset class affected
3. Player-facing behavior
4. Data representation
5. Tuning parameters
6. Open questions

The point is not bureaucracy. The point is to keep the design legible while it grows.
