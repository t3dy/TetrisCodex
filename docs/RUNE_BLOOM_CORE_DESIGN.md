# Rune Bloom Core Design

## One-Sentence Pitch

Rune Bloom is a crystalline tile-placement puzzle where the player grows a magical garden from a central seed, creating same-color runs that bloom, clear space, and purify spreading blight.

## Player Fantasy

You are not stacking blocks. You are cultivating a living geometric spell. The board should feel like a garden, circuit, mandala, and laboratory at the same time.

## Core Loop

1. Receive a glyph-shaped piece.
2. Move and rotate it over the 9x9 grid.
3. Place it adjacent to the existing rune network.
4. Same-color horizontal or vertical runs of 4+ bloom and clear.
5. Every 3 turns, blight spreads from the edge or existing blight.
6. Continue until the score goal is reached or no legal placement remains.

## Current Rules

- Board size: 9x9
- Starting cell: one central Aqua seed
- Placement: every new piece must touch at least one existing rune orthogonally
- Occupancy: pieces cannot overlap rune cells or blight cells
- Bloom: 4+ same-element rune cells in a row or column clear
- Blight: spreads every 3 placements
- Purification: bloom-cleared runes remove adjacent blight
- Win: reach 220 points
- Lose: current piece has no legal placement

## Core Verbs

- **Place**: commit a glyph to the garden
- **Rotate**: reshape spatial fit
- **Bloom**: create clearing lines
- **Purify**: remove blight indirectly
- **Grow**: expand the legal placement frontier
- **Plan**: preserve future space and color patterns

## Current Controls

- Mouse move: aim the glyph preview
- Click: place
- Mouse wheel: rotate
- Right-click: rotate clockwise
- Arrow keys: move cursor
- `Q` / `E`: rotate
- `Space` / `Enter`: place/start/retry
- `R`: reset

## What Makes It Different From Balance Blocks

Balance Blocks is about mass, risk, and physical instability. Rune Bloom is about adjacency, color runs, infection pressure, and cascades. It can reuse the earlier alchemical idea corpus while becoming a different kind of game.

## Design Pillars

### 1. Spatial Garden

The board should gradually look cultivated, not merely filled.

### 2. Readable Cascades

Bloom chains should feel satisfying but understandable. The player should know why a clear happened.

### 3. Gentle Pressure

Blight creates urgency without real-time stress. It is turn-based pressure.

### 4. Alchemical Personality

Future mechanics should use alchemical terms as functional game rules, not decorative names.

## Open Questions

- Should the game stay score-attack, or become level-based?
- Should pieces be random, drafted, or player-crafted via the alchemy palette?
- Should blight be a single hazard, or have elemental variants?
- Should blooms clear cells, transform cells, or both depending on element?
