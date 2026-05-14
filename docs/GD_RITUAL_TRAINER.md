# Golden Dawn Ritual Trainer Lab

## User Request

The user asked for game modes for rituals such as the LBRP and Middle Pillar. They wanted stubs and as many ideas as possible for how to graphically represent a ritual, let the reader click through it, enact the commands and actions, and test memorization.

## Interpretation

I interpreted this as a new branch of the Golden Dawn quiz suite: ritual knowledge is not only a list of correspondences, but an ordered performance grammar.

The game should eventually teach:

- sequence
- direction
- body points
- gesture/action type
- divine names and formulae
- angelic or elemental quarter placements
- visualization prompts
- when to move, draw, vibrate, seal, or pause
- source labels for each ritual version

The prototype page is:

- `ritual-trainer.html`

It is deliberately labeled as a study-game stub, not as ritual authority. The final version should import ritual text, variants, and source labels from the user's preferred Golden Dawn corpus.

## Current Playable Stubs

### Quarter Walk

The player clicks stations in a temple map.

Initial use:

- LBRP quarter circuit
- East/South/West/North orientation
- element and name labels
- immediate move readout

Future uses:

- hide labels and ask the player to restore them
- ask the player to walk clockwise/counter-clockwise for different operations
- switch between banishing/invoking patterns
- animate the path around the temple
- connect to pentagram drawing direction

### Gesture Conductor

The player clicks action/body nodes:

- brow
- heart
- base
- draw
- name
- seal

This is a placeholder for more embodied controls.

Possible interfaces:

- mouse-drawn pentagram tracing
- touch gestures for signs
- controller or keyboard rhythm prompts
- hold-to-vibrate name timing
- breath-count timers
- hide/reveal body-point names

### Middle Pillar Map

The player clicks a vertical stack of centers.

Prototype centers:

- Crown
- Throat
- Heart
- Foundation
- Feet

Future quizzes:

- order of centers
- divine names
- color scales
- breath counts
- visualization descriptions
- "which center is missing?" memory tests
- timed recitation drills

### Memorization Quiz

The page includes multiple-choice prompts for each ritual family.

Prompt categories:

- start direction
- mode recognition
- safe-source caveats
- diagram choice
- what data is needed before serious ritual modeling

Future quiz categories:

- fill-the-blank ritual text
- order restoration
- quarter attribution
- gesture-to-command matching
- name-to-center matching
- "spot the wrong version" source criticism

### Storyboard Builder

The player clicks cards in ritual order.

Future print-shop behavior:

- drag to reorder ritual cards
- hide the answer side
- print pocket-sized drill cards
- export teacher/student worksheets
- produce "performance strips" with only the first word of each instruction
- create custom ritual variants with source labels

## Ritual Families

### LBRP

Implemented as a stub with:

- temple quarter map
- gesture conductor
- quiz prompts
- ritual storyboard

Current simplification:

The prototype uses broad labels such as "East Pentagram" and "Archangels" instead of full ritual text.

Why:

This avoids prematurely freezing a specific text tradition before importing the user's Golden Dawn sources.

Potential future modes:

- Pentagram Direction Trainer: draw the correct pentagram form.
- Archangel Placement: drag angel names to quarters.
- Divine Name Reciter: choose the correct name for each quarter.
- Circle Builder: trace the ritual path from quarter to quarter.
- Error-Spotter: identify an intentionally wrong quarter/name/action.

### Middle Pillar

Implemented as a body-map stub.

Potential future modes:

- Sphere Lighting: click centers in order.
- Name Ladder: place divine names on each center.
- Breath Rhythm: hold/release keys in the correct count.
- Color Scale Toggle: switch between color systems or grade levels.
- Visualization Builder: choose words/images that match the current center.

### Hexagram Ritual Stub

Included as a placeholder because it connects naturally to:

- planetary forces
- magic-square workbench
- sigil drawing
- planet glyphs
- tarot and astrological coins

Potential future modes:

- Planet Selector: pick the planet before the ritual pattern.
- Hexagram Trace: draw the correct figure.
- Planetary Name Quiz: match the force to the name or symbol.
- Magic Square Bridge: print the square and sigil used in the working.

### Rose Cross Stub

Included as a placeholder because it connects to:

- Rose Cross lamen explorer
- Hebrew-letter placement
- name tracing
- sigil generation
- print-shop output

Potential future modes:

- Lamen Letter Path: trace a name through petals.
- Rose Petal Quiz: place Hebrew letters in the right class.
- Color Cross Builder: restore cross colors.
- Sealing Card Printer: export a ritual study card.

## Interface Experiments

### 1. Temple Floor

A top-down diagram where the operator stands in the center.

Good for:

- direction
- quarters
- movement
- angel placement
- ritual route memory

### 2. Body Map

A vertical arrangement for embodied rituals.

Good for:

- Middle Pillar
- Qabalistic Cross
- breath/visualization prompts
- "where do you touch next?" drills

### 3. Gesture Pad

Clickable action nodes or drawn paths.

Good for:

- pentagram drawing
- hexagram drawing
- signs
- sword/wand/dagger gestures
- controller and keyboard rhythm experiments

### 4. Storyboard Cards

A ritual as a sequence of cards.

Good for:

- print shop
- reordering puzzles
- memorization strips
- classroom/study mode
- comparing ritual versions

### 5. Readout Log

Every player input should produce a text readout.

Examples:

- "Correct: Face East. Begin at the East and establish orientation."
- "Not yet: expected East Pentagram, but you clicked West."
- "Hint: next action is Crown. Light at the crown."

This keeps ritual training legible even when the diagrams are still symbolic stubs.

## Print Shop Ideas

The user specifically mentioned print-shop-style functionality in nearby work.

Ritual print outputs could include:

- pocket drill cards
- one-page ritual scripts
- blank quarter diagrams
- answer-key overlays
- body-center flashcards
- "cut and arrange" storyboard strips
- teacher mode sheets with source labels and variant notes
- talisman-adjacent art cards, clearly marked as study aids

## Memorization Game Modes

### Order Drill

Click the next action in the sequence.

### Hidden Labels

Hide labels on quarters or centers; player restores them.

### Reverse Drill

Given an action, choose what immediately precedes or follows it.

### Error Spotter

Show a ritual sequence with one wrong action, direction, name, or symbol.

### Timed Recitation

Reveal one cue at a time and require quick response.

### Source Variant Compare

Show two variants and ask what changed.

### Build From Tokens

Player arranges commands like:

- face
- draw
- vibrate
- move
- visualize
- seal
- close

### Gesture Accuracy

Player draws a pentagram or hexagram; score angle, start point, and path order.

## Data Needs

Each ritual item should eventually be a structured record:

```js
{
  id: 'lbrp-east-pentagram',
  ritualId: 'lbrp',
  stepIndex: 3,
  actionType: 'draw_pentagram',
  direction: 'east',
  formula: 'source-labeled text here',
  symbols: ['pentagram', 'air/east depending source layer'],
  requiredMemory: ['direction', 'name', 'gesture'],
  source: {
    tradition: 'Golden Dawn-style',
    text: 'TBD from user corpus',
    confidence: 'placeholder'
  }
}
```

## Source Caution

The prototype currently uses broad Golden Dawn-style training categories and placeholder labels. It should not imply that every ritual version, order, name, or attribution is universal.

Before becoming a serious teaching tool, it needs:

1. User-approved source corpus.
2. Ritual text imported as data.
3. Version labels for Regardie, OSOGD, project house rules, or other traditions.
4. Citations or source notes displayed in the side panel.
5. A way to switch between variants.

## Next Steps

1. Add real drag-and-drop reorder mode for storyboard cards.
2. Add drawn pentagram/hexagram path scoring.
3. Add source-labeled data import for ritual text.
4. Add printable drill sheet templates.
5. Connect the Hexagram stub to `magic-square-workbench.html`.
6. Connect Rose Cross stub to `golden-dawn-explorer.html`.
7. Add "hide prompt" memorization mode.
8. Add keyboard shortcuts for ritual pacing.
