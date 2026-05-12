# Alchemical Three Mode

Alchemical Three is a character-switching puzzle mode that uses the shared alchemy block engine and the reusable rotation mechanic. It is inspired by the broad design pattern of old three-character puzzle games: each character has different abilities, and the player solves a room by switching between them.

## Original Prompt

The user asked for game modes that plug into the Tetris rotate mechanic. They suggested a "3 vikings sort of game" where players control characters that can pick up blocks and sometimes rotate them depending on their power and tools.

## Interpretation

I interpreted the request as:

- keep rotation as a central inherited verb from Tetris
- detach rotation from falling pieces
- let characters, tools, and alchemical matter decide whether rotation is possible
- use the same emoji alchemy blocks that Balance Tetris, Snake, Rune Bloom, and VALIS Taxi can use
- make a playable prototype that proves the input model is different from Balance Tetris but the block data is shared

I avoided copying a licensed character concept directly. The implementation is a new alchemical puzzle mode called Alchemical Three.

## Playable Prototype

Page:

- `alchemical-three.html`

Core controls:

- `1`, `2`, `3`: switch character
- Arrow keys or WASD: move
- `E`: pick up or drop a block
- `R`: rotate the carried block
- `Space`: wait
- On-screen buttons mirror the important actions

Goal:

- Place each alchemical block on its matching receiver pad.
- Move all three characters to the exit after the receivers are satisfied.

## The Three Characters

| Character | Emoji | Role | Can carry | Can rotate | Puzzle meaning |
| --- | --- | --- | --- | --- | --- |
| Salt-Bearer | 🛡️ | Strong porter | Heavy/fixed Salt slabs | Fixed bridge pieces | Makes stable structure possible |
| Mercury-Runner | ☿️ | Agile scout | Slippery Mercury blocks | Slick/volatile pieces | Handles narrow routes and mobile matter |
| Sulphur-Smith | 🔥 | Tool user | Hot Sulphur blocks | Combustible furnace pieces | Turns dangerous matter safely |

## Block Classes

| Class | Comes from | Behavior in this mode |
| --- | --- | --- |
| Heavy | Salt/fixed substances | Requires Salt-Bearer or a heavy tool |
| Slippery | Mercury/volatile substances | Mercury-Runner handles it best |
| Hot | Sulphur/oily substances | Sulphur-Smith can safely carry and rotate |
| Standard | Apparatus or neutral matter | Any actor can move it if mass allows |

## Rotation Rules

A character may rotate a carried block when:

1. The block is flagged as `rotatable`.
2. The current character's `canRotate` list includes the block's `carryClass`.
3. The rotated footprint fits in the level.
4. The rotated footprint does not collide with walls, pads, other blocks, or the other two characters.

Failure produces a readout rather than a silent refusal.

Examples:

- `Salt-Bearer rotated Congelation Salt into a vertical brace.`
- `Mercury-Runner cannot rotate fixed Salt; the body refuses to become spirit.`
- `Rotation blocked: the slab would strike stone.`

## Why This Matters For The Larger Arcade

This mode proves that alchemical blocks do not need to be falling tetrominoes. The same substance can be:

- a Balance Tetris cell
- a Snake food item
- a VALIS Taxi cargo crate
- a Rune Bloom tile
- a carried puzzle block

The mode also lets future levels use source-driven constraints. A Trithemius Wild Hunt apparition could rotate only in moonlight. A Ripley-inspired vessel could require heat before it can be turned. A PKDian VALIS block could rotate only after being revealed by a beam.

## Level Conceits

### Bridge Of Salt

The Salt-Bearer carries fixed Salt slabs to make a low bridge. The Mercury-Runner retrieves a volatile key from the other side.

### The Slippery Alembic

Mercury blocks slide if dropped in wet corridors. The runner must rotate them into receiving alcoves before they escape the room.

### Furnace Tongs

The Sulphur-Smith can rotate combustible blocks without taking damage. Other characters can pick them up only after cooling them on a pad.

### Threefold Door

Salt, Sulphur, and Mercury receivers each need their own block. The exit opens only when all three principles are correctly placed.

### Omen Room

A Wild Hunt variant where hound and hoofbeat blocks rotate the wind direction each time they are moved.

## Other Choices We Could Have Made

- Make the characters literal Vikings with shield/sword/helmet roles.
- Use real-time platforming rather than grid movement.
- Use two-character cooperative lifting for every large block.
- Make rotation continuous and physics-based instead of discrete grid turns.
- Let tools be picked up and exchanged between characters.
- Add traps and enemies before the block interaction rules are stable.

The current choice is deliberately small: grid movement, clear ability gates, readable feedback, shared block data.

## Next Steps

1. Add more sample rooms.
2. Add editor support in the Level Builder for actor starts and receiver pads.
3. Add a tool inventory layer: gloves, tongs, crank, mirror, fulcrum.
4. Add source-specific rules from alchemical texts and scholarship.
5. Add a tutorial ladder that teaches one character at a time.
