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

- `GAME_MODE_DESIGN_RATIONALE.md`  
  Original feature prompts, interpretation notes, choices made, and alternate design paths for each game mode and creator tool.

- `INPUT_FEEDBACK_READOUT.md`  
  Player-facing text readouts for inputs, movement, placement, tilt, beams, docking, and consequences.

- `ALCHEMICAL_POETRY_TIMELINE.md`  
  Timeline and anthology notes for turning alchemical poetry into source-grounded game feedback and codex material.

- `ALCHEMICAL_POETRY_RESPONSE_BANK.md`  
  Draft canned response families for alchemy block placements, tilt, receivers, VALIS Taxi, and Rune Bloom.

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

- `SHARED_ALCHEMY_BLOCK_ENGINE.md`  
  Common alchemical block ontology, physics properties, and adapters so modes can share matter without sharing Tetris controls.

- `GAME_MODE_ADAPTER_CONTRACTS.md`  
  Contracts for non-Tetris game modes that consume shared alchemy blocks through thin integration layers.

- `ALCHEMY_SNAKE_MODE.md`  
  BASIC-style Snake mode using shared alchemy blocks, digestion effects, and a narration parser.

- `SNAKE_ALCHEMICAL_POWERS.md`  
  Power expansion plan for snakes that begin with or digest Salt, Sulphur, Mercury, planetary, and apparatus abilities.

- `ROTATION_MECHANIC_CONTRACT.md`  
  Shared rotation intent for falling pieces, carried blocks, apparatus, platforms, and editor objects.

- `ALCHEMICAL_THREE_MODE.md`  
  Character-switching carry/rotate puzzle mode using the shared alchemy block engine.

- `ALCHEMICAL_BILLIARDS_MODE.md`  
  Planning stub for pool-shot alchemical cascades, apparatus furniture, scoring pockets, and a later dream-course 3D-ish branch.

- `ALCHEMICAL_BREAKOUT_MODE.md`  
  Planned Breakout-style lab disturbance mode where alchemical bricks react to ball impacts.

- `GRID_PUSH_AND_MINESWEEPER_MODES.md`  
  Plans for Sokoban-like block pushing and hidden lab accident exploration.

- `MEDIEVAL_SIEGE_ALCHEMY_MODES.md`  
  Plans for Bomber Alchemist, tower defense, turn-based siege, lob-shot artillery, and fire/ice arcade variants.

- `ALCHEMY_HISTORIOGRAPHY_ESSAY.md`  
  Website-facing essay on the scholarly values and topic areas of the new historiography of alchemy.

- `ALCHEMICAL_HISTORY_BY_MODE.md`  
  Commentary on how each game mode can explore alchemical history and chemistry while fudging physics honestly.

- `TWELVE_PROCESSES_MODE_ATLAS.md`  
  Mode-by-mode modeling ideas for the twelve zodiac-linked alchemical processes.

- `SYMBOL_INPUT_GRAMMAR.md`  
  Stable input grammar for zodiac processes, Tria Prima principles, and seven planetary/metmetal buttons.

## Documentation Rule Going Forward

Every substantial feature should get a Markdown note before or alongside implementation:

1. Mechanic definition
2. Asset class affected
3. Player-facing behavior
4. Data representation
5. Tuning parameters
6. Open questions

The point is not bureaucracy. The point is to keep the design legible while it grows.
