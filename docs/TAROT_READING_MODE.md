# Tarot Reading Mode

Tarot Reading Mode is an interpretive writing game. The player chooses a prepared spread layout, walks through multiple-choice prompts about how to read each card in position, and receives a deterministic written reading generated from those choices.

## User Prompt

The user described a reading game mode:

- the player may eventually draw tarot cards
- the player chooses a spread to lay out the cards
- based on combinations that come up, the program prompts them to make interpretive choices
- choices are multiple choice
- the program deterministically feeds back a written reading based on their choices

Follow-up clarification:

- for the first mockup, the cards are not random
- the reading is already laid out
- the prototype tests the interface loop of walking through interpretive choices
- the page should include many ways to read card positions

## Interpretation

This mode is not fortune-telling automation. It is a structured interpretation game.

The player supplies interpretive stance through choices. The program turns those choices into a coherent reading, using card data, spread positions, attribution tags, and deterministic template writing.

The first prototype is a fixed mock reading, not a random deck simulation.

## Current Prototype Page

- `tarot-reading.html`

## Core Loop

1. Choose a prepared spread layout.
2. Load its pre-laid cards.
3. For each card and spread position, choose an interpretive angle.
4. The program records the choices as structured meaning tags.
5. The program composes a written reading from card meanings, positions, and chosen angles.
6. The reading can later be saved, cited, remixed into a level objective, or used as a source frame.

## Prepared Layouts

### Threefold Vessel

Positions:

- Salt / What is fixed
- Mercury / What moves
- Sulphur / What ignites

Use:

- alchemy-first readings
- short tutorials
- level seeds

### Operation Cross

Positions:

- Matter
- Vessel
- Heat
- Obstacle
- Projection

Use:

- medium-length challenge readings
- alchemy process diagnosis
- mode/level selection

### Seven Metals

Positions:

- Saturn / Lead
- Jupiter / Tin
- Mars / Iron
- Sun / Gold
- Venus / Copper
- Mercury / Quicksilver
- Moon / Silver

Use:

- planet/metal curriculum
- larger readings
- campaign frames

## Prompt Structure

Every drawn card should produce choices like:

```js
{
  cardId: 'tower',
  positionId: 'sulphur',
  prompt: 'How does The Tower behave as Sulphur, the igniting principle?',
  options: [
    { id: 'release', label: 'Necessary rupture', tags: ['release', 'heat'] },
    { id: 'warning', label: 'Unstable accident', tags: ['danger', 'overheat'] },
    { id: 'purge', label: 'Purifying break', tags: ['calcination', 'clarify'] }
  ]
}
```

## Ways To Read Position

Each spread position can ask the player to interpret the card through several lenses.

### Material Lens

Ask what the card is as matter:

- fixed body
- volatile spirit
- oily/fire-bearing soul
- heavy metal
- solvent
- vessel
- residue

### Operational Lens

Ask what process the card performs:

- burns
- dissolves
- fixes
- separates
- ferments
- projects
- clarifies
- obscures

### Dramatic Lens

Ask what role the card plays in the reading:

- helper
- obstacle
- warning
- hidden condition
- pressure
- release
- result

### Source Lens

Ask what interpretive tradition is being used:

- image symbolism
- elemental attribution
- planet/metmetal attribution
- alchemical process mapping
- project-specific game grammar

### Player-Agency Lens

Ask what the player chooses to do with the card:

- contain it
- intensify it
- cool it
- translate it
- dissolve it
- fix it
- project it
- wait and observe

## Deterministic Reading Model

The final text is deterministic. It should depend only on:

- selected spread
- prepared card ids
- spread positions
- selected option ids

No hidden randomness should be used after the player commits their choices.

Recommended data:

```js
{
  spreadId: 'threefold-vessel',
  cardIds: ['ten-pentacles', 'moon', 'tower'],
  choices: {
    'salt': 'skill',
    'mercury': 'uncertainty',
    'sulphur': 'purge'
  }
}
```

## Writing Output

The reading should include:

1. A title.
2. A short overview of the spread.
3. One paragraph per card/position.
4. A synthesis paragraph describing the combination.
5. An alchemical counsel/action sentence.

Example:

```text
The vessel begins with skilled fixation, but its moving spirit is lunar and uncertain.
The rupture appears in the fiery place, not as mere disaster but as calcination:
something brittle must break so the work can continue.
```

## Combination Rules

The prototype uses simple deterministic combination logic:

| Combination | Reading effect |
| --- | --- |
| Many danger tags | Warn about accident, haste, or overheat. |
| Many clarity/source tags | Emphasize interpretation, record, and source frame. |
| Many water/lunar tags | Emphasize uncertainty, dream, solvent, and reflection. |
| Many fire/Mars tags | Emphasize rupture, courage, heat, and risk. |
| Many earth/Salt tags | Emphasize fixity, body, structure, and patience. |
| Many Mercury tags | Emphasize motion, ambiguity, translation, and speed. |

## Historical / Scholarly Frame

This mode should label attribution systems. The current prototype is "project tarot/alchemy training data," not a claim about a single historical tarot tradition.

Future source layers can declare:

- Marseille imagery
- Golden Dawn-style correspondences
- Rider-Waite-Smith interpretive language
- Crowley/Harris-style attributions
- project-specific alchemical mapping

## Integration With Other Modes

Tarot readings can generate:

- a level seed for Balance Tetris
- a Snake starting power set
- a Minesweeper hazard distribution
- a Billiards table condition
- a Wild Hunt chronicle prompt
- a Tarot Atelier composite piece puzzle

## Implementation Notes

The first prototype should:

- use a small card deck
- support three spreads
- present three interpretation choices per card
- use pre-laid readings, not random card draws
- generate deterministic text
- keep a visible source/tradition caution
- avoid claiming predictive authority

## Future Work

1. Add full deck data.
2. Add source-labeled attribution systems.
3. Export readings as JSON.
4. Let readings seed playable levels.
5. Add a side-by-side "why this text was generated" explanation.
6. Connect card attributions to `TAROT_ATTRIBUTION_BLOCK_MODE.md`.
