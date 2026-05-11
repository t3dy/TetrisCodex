# Rune Bloom Mode Atlas

This document records the first broad mode expansion. The landing screen now acts as a mode launcher: each button starts a different ruleset built from the same Rune Bloom engine.

## Implementation Pattern

Modes are data objects, not separate hard-coded games.

Each mode can define:

- `id`
- `name`
- `tag`
- `goal`
- `blightEvery`
- `blightCount`
- `bloomLength`
- `elements`
- `elementCount`
- `shapes`
- `adjacency`
- `diagonalBloom`
- `chainBonus`
- `purifyBonus`
- `projection`
- `startSeeds`
- `startBlight`
- `desc`

This lets the game create many variants quickly while keeping maintenance sane.

## Shipped Landing Modes

### 1. Garden

Baseline Rune Bloom.

- Goal: 220
- Bloom length: 4
- Blight: every 3 turns

### 2. Zen Garden

No blight. Softer, more meditative.

- Goal: 180
- Blight: off

### 3. Blight Siege

Pressure mode.

- Goal: 260
- Blight: every 2 turns
- Blight count: 2

### 4. Ember Orchard

Two-color elemental garden.

- Elements: Ember, Moss
- Goal: 210

### 5. Aqua Channels

Cool-color channel planning.

- Elements: Aqua, Star
- Blight: every 4 turns

### 6. Moss Thicket

Longer match requirements.

- Bloom length: 5
- Elements: Moss, Aqua, Ember

### 7. Star Lines

Diagonal bloom mode.

- Diagonal bloom: on
- Elements: Star, Aqua, Ember

### 8. Small Bed

Compact-feeling mode through corner pressure.

- Starting blight: corners
- Goal: 150

### 9. Wildfront

Looser growth topology.

- Diagonal adjacency counts for placement

### 10. Monastery

Strict color connection.

- Pieces must touch a rune of their own element
- Bloom length: 5

### 11. Line Choir

Shape-restricted line-making.

- Shapes: Bar, Seed

### 12. Knotwork

Awkward angular shapes.

- Shapes: Hook, Step, Sprig, Spire

### 13. Mosaic

Chunky tile-packing.

- Shapes: Square, Step

### 14. Cascade Rite

Rewards chain blooms.

- Chain bonus: 36 instead of 18

### 15. Purifier

Blight cleansing matters more.

- Blight: every 2 turns
- Purify bonus: 28
- Starting blight: edges

### 16. Projection

Bloom effects cast farther.

- Blooming cells purify blight along their row and column

### 17. Four Seeds

Multi-origin expansion.

- Starting seeds: four corners

### 18. Crossroads

Central cross setup.

- Starting seeds: cross shape

### 19. Ash Scar

Blocked-board setup.

- Starting blight: diagonal scar

### 20. Rush Bloom

Short, sharp mode.

- Goal: 120
- Bloom length: 3
- Blight: every 2 turns

### 21. Longform

Long score climb.

- Goal: 500
- Blight: every 4 turns

### 22. Duet

Random two-element run.

- Element count: 2

### 23. Triad

Random three-element run.

- Element count: 3

### 24. Lab Seed

Early alchemy-flavored setup.

- Starting seeds: three aligned principle-like seed cells

## Mode Classes

### Pressure Modes

- Blight Siege
- Purifier
- Rush Bloom
- Ash Scar

These change blight timing, starting blight, or blight scoring.

### Shape Modes

- Line Choir
- Knotwork
- Mosaic

These restrict the piece vocabulary.

### Element Modes

- Ember Orchard
- Aqua Channels
- Moss Thicket
- Star Lines
- Duet
- Triad

These restrict or emphasize color identity.

### Topology Modes

- Wildfront
- Monastery
- Four Seeds
- Crossroads

These change where growth can begin or how adjacency works.

### Scoring Modes

- Cascade Rite
- Projection
- Longform

These reward chain play or larger strategic arcs.

## Next Mode Ideas

These are not implemented yet:

- Daily Seed
- Puzzle Scrolls
- Draft Garden
- Alchemy Lab Palette
- No Rotation
- One Shape Only
- Blight Queen
- Rubedo Chain
- Mercury Wildcards
- Salt Wall
- Sulphur Burn
- Virgo Distillation
- Pisces Ray Garden
- Memory Garden
- Fog of Soil
- Timed Arcade

## Documentation Rule For Future Modes

Every new mode should document:

1. What changes
2. What it teaches
3. Why it is distinct
4. Its data fields
5. Its likely tuning risks
