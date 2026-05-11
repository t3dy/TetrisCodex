# Rune Bloom Next Steps

This is the recommended build order after the current prototype.

## Step 1: Make Docs Match Code

Status: in progress.

Actions:

- create documentation index
- capture core design
- capture asset classes
- capture mechanic taxonomy
- capture alchemy adaptation
- capture data schema

Done when:

- all current gameplay systems are described in Markdown
- future systems have a place to land

## Step 2: Add Element-Specific Bloom Powers

Goal:

Make the four colors mechanically distinct.

Implementation:

- Aqua bloom pulls one same-color rune from the queue preview into the board as a bonus mote
- Ember bloom burns adjacent blight
- Moss bloom regrows one cleared cell as a seedling
- Star bloom also checks diagonals

Risk:

Too many effects at once. Implement one at a time and document each.

## Step 3: Add Four Catalyst Cells

Goal:

Create the first alchemy layer.

Catalysts:

- Salt Anchor
- Sulphur Spark
- Mercury Wild
- Pisces Projection

Implementation:

- add `modifier` or `item` field to cells
- add spawn chance
- draw cell marker
- add reaction resolution pass after placement and after bloom

## Step 4: Add Level Data

Goal:

Move from endless score attack to authored challenges.

Implementation:

- add `LEVELS` registry
- add level select overlay
- add objective checker
- add starting grid parser

## Step 5: Add Lab Palette Prototype

Goal:

Use ideas from `BUTTONS_PALETTE.md` in Rune Bloom.

Minimum version:

- 12 zodiac buttons visible only in Lab Mode
- 3 Tria Prima buttons
- click zodiac then principle to create one catalyst piece

Do not implement all 51 outputs yet.

## Step 6: Split Code

Only after mechanics stabilize:

- `index.html`
- `src/game.js`
- `src/render.js`
- `src/data.js`
- `src/input.js`

Current single-file structure is fine for fast prototyping.

## Step 7: Sound Pass

Add small audio cues:

- placement
- invalid move
- rotate
- bloom
- blight
- purify
- win/loss

Keep it subtle.

## Step 8: Daily Challenge

Use seeded RNG:

- same piece sequence for everyone
- one board per day
- score comparison

This is a good replayability feature once core systems are stable.
