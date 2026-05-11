# Rune Bloom Mechanic Taxonomy

This document defines the major classes of mechanics Rune Bloom can grow into. Each class can produce many concrete features.

## 1. Placement Mechanics

Placement mechanics define where a glyph may go.

Current:

- Must be inside the 9x9 board
- Must not overlap occupied cells
- Must touch the rune network orthogonally

Future variants:

- diagonal adjacency allowed for Star pieces
- roots can bridge one empty cell
- blight-adjacent placements are forbidden unless purified
- special glyphs can overwrite blight
- pieces must connect to matching element

Player challenge:

- frontier management
- avoiding self-isolation
- preserving legal future placements

## 2. Shape Mechanics

Shape mechanics define the piece vocabulary.

Current shape classes:

- bar
- square
- hook
- step
- sprig
- spire
- seed

Future shape classes:

- ring fragments
- diagonal constellations
- hollow shapes with internal gaps
- single-cell catalysts
- large ritual pieces
- unstable pieces that must be placed quickly in arcade variants

Player challenge:

- spatial packing
- rotation planning
- fitting around blight and holes

## 3. Element Mechanics

Elements define color identity and reaction rules.

Current elements:

- Aqua
- Ember
- Moss
- Star

Future element behaviors:

- Aqua flows into gaps after blooming
- Ember burns adjacent blight but also consumes nearby runes
- Moss grows a bonus cell after placement
- Star connects diagonally or teleports effects

Player challenge:

- planning by color
- deciding whether to chase a bloom or save a color for later

## 4. Bloom Mechanics

Bloom mechanics define how matches resolve.

Current:

- 4+ same-element runes in horizontal or vertical lines clear
- adjacent blight is purified
- score scales by cleared count squared

Future variants:

- 5-rune bloom creates a seed
- cross bloom triggers row and column pulses
- loop bloom if a shape surrounds empty space
- mixed bloom via Mercury/wildcard cells
- delayed bloom that resolves after a turn

Player challenge:

- maximizing chains
- choosing between immediate clear and setup

## 5. Blight Mechanics

Blight is the pressure system.

Current:

- spreads every 3 turns
- can spawn on edge or adjacent to existing blight
- blocks placement
- is removed by adjacent blooms

Future variants:

- creeping blight that prefers the largest empty region
- hard blight requiring two purifications
- elemental blight weak to specific elements
- dormant blight hidden until adjacent
- blight flowers that score if purified

Player challenge:

- territorial defense
- risk triage
- timing blooms near danger

## 6. Reaction Mechanics

Reactions are non-line-clear effects triggered by adjacency, elements, items, or palette choices.

Sources from existing generated docs:

- Calcination: destroy or reduce
- Dissolution: convert to wildcard/fluid
- Coagulation: fix/anchor
- Sublimation: lift or move
- Distillation: extract from a row/column
- Multiplication: duplicate score/effects
- Projection: cast an effect outward
- Conjunction: merge two unlike runes

Player challenge:

- learning a reaction grammar
- building intentional cascades

## 7. Economy Mechanics

Economy mechanics govern resources beyond board cells.

Current:

- score
- best score
- turn count

Future:

- mana by element
- limited catalysts
- draft currency
- ritual charges
- blight debt
- campaign unlocks

Player challenge:

- choosing between board efficiency and resource generation

## 8. Mode Mechanics

Modes change the whole ruleset while preserving the core placement verb.

Candidates:

- Garden: current score-attack baseline
- Lab: player crafts pieces through alchemy buttons
- Siege: aggressive blight
- Constellation: diagonal Star-based scoring
- Fermentation: delayed transformations
- Puzzle: hand-authored boards with exact goals

Player challenge:

- replayability through different constraints
