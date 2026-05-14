# Golden Dawn Symbol Quiz Suite

## Purpose

The Tree Tapper quiz trains Tree of Life placement. The larger quiz suite should train every major symbolic scheme that can become a playable input surface in the project.

Current playable file:

- `gd-quiz-suite.html`

Shared data:

- `golden-dawn-correspondences.js`

## User Request

The user asked for many quiz modes where the player is tested on Golden Dawn symbolism and the project's Unicode/emoji symbol vocabulary.

Requested examples included:

- decorating a pentagram with appropriate elemental symbols for the banishing ritual of the pentagram
- placing zodiac signs on the zodiac
- placing symbols that correspond to tarot cards
- magic-square and sigil systems from Agrippa
- Rose Cross lamen sigil systems
- placing Hebrew letters on the Rose Cross lamen
- quizzes for the Golden Dawn knowledge lectures

## Implemented Prototype Modes

### Pentagram Element Drill

The player places element symbols on ritual quarters.

Prototype convention:

- East: Air / Raphael
- South: Fire / Michael
- West: Water / Gabriel
- North: Earth / Auriel

This is the seed of a banishing-pentagram ritual diagram quiz. Later versions can ask for direction of tracing, color, divine names, archangel names, and spoken formulae.

### Zodiac Wheel Drill

The player places the 12 zodiac signs in order around a wheel.

The next layer should add:

- triplicities
- modalities
- planetary rulers
- decans
- zodiac-to-Hebrew-letter correspondences

### Tarot Correspondence Card

The player fills slots on a tarot card:

- Hebrew letter
- element / planet / zodiac power
- Tree path

This is the prelude to Tarot Tetris, where cards become physical pieces made out of attribution cells.

### Rose Cross Lamen Letters

The player places Hebrew letters onto exact Rose Cross lamen petals.

The class rings are still visually cued:

- Mother petals are red
- Double petals are gold
- Single petals are blue

The first version only checked class membership. The current version checks exact-petal placement, so Aleph, Beth, Gimel, and the other letters must go to their own specific petal targets.

### Agrippa Magic Square Drill

The player matches planets to magic square orders and planetary figures.

Prototype mapping:

- Saturn: 3x3 / Triangle
- Jupiter: 4x4 / Square
- Mars: 5x5 / Pentagram
- Sun: 6x6 / Hexagram
- Venus: 7x7 / Heptagram
- Mercury: 8x8 / Octagram
- Moon: 9x9 / Enneagram

The next layer should support drawing a sigil path across the square by number sequence.

### Knowledge Lecture Sampler

The player matches terms to the knowledge lecture where the topic is trained.

Implemented sample groups:

- First / Neophyte: elements, zodiac, planets, Hebrew alphabet, sefirot
- Second / Zelator: Mother/Double/Single letters, alchemy, four worlds, astrology
- Third / Theoricus: soul parts, tarot suits, caduceus, tattvas
- Fourth / Practicus: magic squares, planetary figures, tarot paths, geomancy
- Fifth / Philosophus: Azoth, veils, four worlds/suits, advanced element names

## Interaction Model

The prototype uses click-place interaction:

1. The system picks a target symbol or term.
2. The player clicks that token in the symbol bank.
3. The player clicks the appropriate diagram region.
4. The game gives immediate feedback.
5. Correct answers add score and streak.

This can become drag-and-drop later, but click-place is easier to verify and works on mobile.

## Design Rationale

The suite should not only test recall. It should teach the player to think visually:

- correspondences belong on diagrams
- diagrams become input pads
- input pads generate game powers
- game powers become tarot/alchemy mechanics

The same symbol can appear in several schemes. A zodiac sign is a wheel position, a tarot decan reference, a Hebrew-letter path power, an alchemical-process key, and a block property.

## Next Steps

1. Add a true sigil-drawing mode for magic squares.
2. Add a zodiac wheel with houses, triplicities, modalities, rulers, and decans.
3. Add a ritual-order quiz for the Lesser Banishing Ritual of the Pentagram.
4. Add a tarot spread quiz where the player places all attributions on the card before interpreting it.
5. Add source labels per item: Golden Dawn, OSOGD adaptation, Agrippa, Regardie, project house rule.
6. Store mastery per symbol family and feed it into Tarot Coin Journey scoring.
