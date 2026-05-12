# Game Mode Design Rationale

This document preserves the original user prompts that shaped the arcade, then explains how those prompts were interpreted, what choices were made, and what other choices were available.

## Balance Tetris

Original prompt:

> "There is a board game version of tetris where the user stacks up tetris like blocks on a balancing platform. I'd like to create a digital version of this game."

Interpretation:

The central mechanic became a 2D balance-platform game with tetromino-like blocks, torque, tilt, and multiple platform geometries.

Choices made:

- Grid-snapped blocks.
- Deterministic torque math instead of full rigid-body physics.
- Mouse and keyboard controls.
- Multiple platforms with different failure behavior.
- Early-placement grace after playtest feedback.

Other choices:

- Full 3D physics.
- Real-time-only falling Tetris.
- Pure puzzle levels with no random queue.
- A tabletop simulation with loose tumbling pieces.

## Alchemy Balance

Original prompt:

> "I still want the balance tetris where you can profitably tip alchemical substances off the appropriate side of the platform."

Interpretation:

Tipping should become a scoring verb, not only a failure condition.

Choices made:

- Planetary/alchemical cells carry exit-side affinities.
- Groups sliding off the proper side score positively.
- Salt, Sulphur, and Mercury modify matter as fixed, combustible, and volatile.
- Wrong-side dumping or singleton loss can penalize the player.

Other choices:

- Treat all tipping as failure.
- Make alchemy cosmetic.
- Use recipes only, with no physical dumping.
- Put reactions on a separate board.

## Combinatorial Alchemy Palette

Original prompt:

> "The combinatorial system where the player clicks on a zodiac sign to get an alchemical furniture tile corresponding to the alchemical process associated with that sign, or adding a sulfur salt mercury button push..."

Interpretation:

The alchemical world needed a compact input grammar: zodiac signs choose processes/apparatus, while the Tria Prima chooses material quality.

Choices made:

- Zodiac-alone outputs become apparatus/process furniture.
- Zodiac plus Salt becomes fixed matter.
- Zodiac plus Sulphur becomes oily/combustive matter.
- Zodiac plus Mercury becomes volatile/mobile matter.

Other choices:

- Use seven planets only.
- Make all combinations card-based.
- Require multi-step recipe construction.
- Split apparatus and matter into separate inventories.

## Rune Bloom

Original prompt:

> "I like the idea of rune bloom but you can fire off dozens of game modes like that and just create separate buttons to push on the games landing page."

Interpretation:

Rune Bloom became a separate tile-placement experiment, not a replacement for Balance Tetris.

Choices made:

- Standalone page.
- Glyph placement.
- Bloom clearing.
- Blight pressure.
- Launcher card alongside other modes.

Other choices:

- Fold Rune Bloom into Balance Tetris.
- Make it a decorative garden with no failure.
- Prioritize many Rune Bloom variants before returning to Balance Tetris.

## Wild Hunt

Original prompts:

> "I'd like some ideas for a wild hunt gameplay mode situated in the legend as WILDHUNT.md."

> "Create a system of emoji graphics for the wild hunt blocks based on the legend that Trithemius documented and create conceits for game levels in that mode based on the scholarship."

Interpretation:

Wild Hunt became a folklore chronicle mode inside Balance Tetris. The player makes unstable apparitions legible through date tokens, hounds, hoofbeats, hosts, riders, and counter-apparatus.

Choices made:

- Hound, hoofbeat, apparition, dead host, date, mirror hunt, huntsman, and alembic tiles.
- Chronicle scoring.
- Omen beats.
- Credibility meter.
- Fairness tuning after early tests.

Other choices:

- Top-down chase game.
- Narrative visual novel.
- Strictly linear manuscript adaptation.
- VALIS Taxi night-flight route.

## PKD-Inspired Modes

Original prompt:

> "Search through my QueryPat database for ideas for balance tetris game modes inspired by Philip K Dick stories."

Interpretation:

PKD material became mechanics: entropy, hidden reality, split perception, queue prophecy, kipple, artificial life, revelation beams, and alternate timelines.

Choices made:

- QueryPat source notes.
- Ubik anti-entropy.
- Scanner scramble.
- High Castle hexagrams.
- Minority Report queue play.
- Androids/kipple and VALIS beam concepts.

Other choices:

- A direct PKD adaptation.
- Text-heavy story mode.
- Hidden modifiers only.
- No PKD branch.

## VALIS Space Taxi

Original prompt:

> "I like the idea of the valis beam and I'm reminded of a space taxi old school game..."

Interpretation:

This became a thrust-and-landing game where a ship docks with alchemical cargo on tilting pads and uses a VALIS beam to reveal hidden properties.

Choices made:

- Standalone prototype.
- Gravity, wind, hull, fuel, docking, and beam heat.
- Emoji cargo/passengers.
- Cascade risk.
- Landing affects platform tilt.

Other choices:

- Pure lunar lander.
- Beam weapon game.
- Balance Tetris skin with no flight model.
- Wait for full level-builder integration before prototyping.

## Moat Drawbridge

Original prompt:

> "There could be puzzles like get across the moat where the player has to build a stack tall enough and flat enough for the king's horses to ride across the drawbridge they just tipped over the moat."

Interpretation:

This became a Balance Tetris puzzle family where the stack must become a functional bridge surface.

Choices made:

- Flatness objective.
- Span/crossing concept.
- Moat stone assets.
- Two-fulcrum bridge logic.

Other choices:

- Separate bridge-building game.
- Freeform beam construction.
- Scripted bridge animation.
- Make the crossing purely decorative.

## Physics Lab

Original prompt:

> "I also want to prioritize giving the user controls in the base balance tetris game modes to play with the physics parameters like gravity or slipperiness of the blocks or wind speed or whatever."

Interpretation:

Physics settings are a creative surface, not just options.

Choices made:

- Fall speed, wind, stiffness, tilt limit, friction, slipperiness, slide steps, and shake controls.
- Shared fields for Level Builder.
- Roadmap for more physics presets.

Other choices:

- Hide constants in code.
- Use only difficulty presets.
- Build a separate physics sandbox first.

## Level Builder

Original prompt:

> "I want a construction kit where the user can create levels for each of our game modes, placing blocks setting physics parameters and creating platforms etc with a WYSIWYG interface."

Interpretation:

The arcade needs shared authoring tools and stable JSON before each mode has a bespoke editor.

Choices made:

- `level-builder.html`.
- Block painting.
- Platforms, pads, receivers, objectives.
- Physics sliders.
- Import/export JSON.
- `alchemical-level-kit/v1`.

Other choices:

- Code-only schema.
- Separate editors per mode.
- Drag-and-drop first.
- Backend database storage.

## Asset Studio And Website

Original prompt:

> "We'll also need to build other dev tools for creating the sorts of assets the game needs, and a website explaining all the game modes and assets."

Interpretation:

Assets need definitions, source notes, and gameplay properties; users need a website explaining modes and asset families.

Choices made:

- `asset-studio.html`.
- `game-guide.html`.
- `alchemical-asset/v1`.
- Dev tools roadmap.

Other choices:

- Markdown-only docs.
- Full CMS.
- Generated pages first.
- Delay tools until all modes were finished.

## Fairness And Instructions

Original prompt:

> "The game modes should all have instructions explaining what the player is expected to do so they can understand what a good move might be."

Interpretation:

Difficulty was not only a tuning problem; modes needed onboarding and actionable first-move guidance.

Choices made:

- Early-placement grace.
- Mode instruction cards.
- Help overlay guidance.
- Wild Hunt torque softening.

Other choices:

- Only lower difficulty.
- Remove early failure entirely.
- Put all instruction in a separate manual.

