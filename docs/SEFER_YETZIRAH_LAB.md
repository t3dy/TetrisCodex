# Sefer Yetzirah Lab

## User Request

The user asked for a game mode where the reader can play with Sefer Yetzirah correspondences and combinatorial systems through multiple visualization modes. They also asked for a digital edition that can compare various recensions, and for quizzes on the Sefer Yetzirah knowledge that the Golden Dawn cares about.

## Local Sources Found

I found prior local work outside this repo:

- `C:\Dev\Claude Data\docs\ideas\Sefer_Yetzirah_Gates_Spec.md`
  - Describes a 231/232 Gates puzzle game with a radial wheel, clickable Hebrew letters, gate connections, gematria HUD, discovery/campaign/meditation modes, and SVG path animation.
- `C:\Dev\megabase\chats_2026\2026-02-11_SY as Memory Art.md`
  - Contains a large design conversation treating Sefer Yetzirah as a combinatorial art of memory, connected to Bruno-style memory wheels, Golden Dawn ritual architecture, the Rose Cross lamen, and the 231 Gates.
- `C:\Dev\megabase\chats_2025\2025-11-30_Digital Sefer Yetzirah project.md`
  - Contains notes contrasting Jewish letter mysticism with Golden Dawn and Crowley overlays, including cautions about where later ceremonial magic inherits, transforms, or departs from earlier kabbalistic sources.
- `C:\Dev\EmeraldTablet\docs\texts\sefer_yetzirah.html`
  - A sparse HermeticDB entry identifying Sefer Yetzirah as a primary source.

The playable page created from this pass is:

- `sefer-yetzirah-lab.html`

## Core Design Principle

The game should not flatten Sefer Yetzirah into Golden Dawn tarot correspondences.

Instead, each clicked symbol should be able to show multiple lenses:

- Sefer Yetzirah letter class
- letter-pair/gate combinatorics
- world/year/body mapping
- Jewish commentary and recension context
- later Golden Dawn overlay
- tarot/path/ritual game usage

This lets the player learn how the Golden Dawn uses Sefer Yetzirah material while still seeing that the GD layer is a later Hermetic transformation.

## Implemented Prototype Modes

### 1. 231 Gates Wheel

The player clicks two Hebrew letters on a radial wheel.

The page records an opened gate and shows:

- the two letters
- their names
- gematria-style value sum
- class mixture
- either SY class lens or Golden Dawn overlay lens

Current simplification:

- Any unordered pair of distinct letters is treated as a valid gate.
- The page does not yet distinguish 231 vs. 232 interpretive variants.
- Meanings are generated from class and overlay metadata, not from an imported edition.

Future development:

- curved animated SVG gates
- gate catalog with commentary
- mirror/inverse gate toggle
- save/export completed gate diagrams
- gate puzzles that require specific combinations

### 2. Mothers / Doubles / Singles

The player selects a Hebrew letter token and places it in the correct class bucket.

This trains:

- 3 Mothers: Aleph, Mem, Shin
- 7 Doubles: Beth, Gimel, Daleth, Kaph, Peh, Resh, Tau
- 12 Singles: the zodiacal letters

This is the bridge to:

- Rose Cross lamen petals
- Golden Dawn knowledge lecture quizzes
- tarot path attributions
- ritual and symbol memorization

### 3. World / Year / Body Matrix

This is a visualization stub for a major Sefer Yetzirah pattern: the same letter can be distributed across multiple domains.

The prototype displays three mapping domains:

- World
- Year
- Body

Future development:

- import edition-specific mappings
- click a letter and show all three domains
- compare how commentaries interpret body/faculty assignments
- connect body mappings to the Middle Pillar and ritual trainer

### 4. Recension Comparator

The page includes comparison cards for:

- Short Recension
- Long Recension
- Saadya Version
- Donnolo Commentary
- Golden Dawn Overlay

This is not a full edition yet. It is a UI skeleton for one.

The user-facing goal is a digital edition where a reader can:

- compare recensions side by side
- inspect variant order and wording
- see commentary layers
- keep Jewish source traditions and later Hermetic adaptations separate
- view Golden Dawn quiz hooks only as a labeled later overlay

### 5. Golden Dawn Knowledge Quiz

This quiz focuses on what the Golden Dawn curriculum tends to care about:

- Mother letters
- Double letters
- Single letters
- elemental/planetary/zodiacal family assignments
- tarot/path overlays
- source-label caution

The quiz is deliberately easy in the first version because it is a teaching surface.

## Why A Separate Page?

This mode deserves its own page because it is both:

- a game mode
- a scholarly interface

It touches Golden Dawn quizzes, the Rose Cross lamen, tarot paths, ritual training, and magic-square print-shop logic, but it also needs digital-edition affordances that do not belong in a pure arcade mode.

## Game Mode Variants To Add

### Gate Discovery

Open all 231 gates over time.

Possible scoring:

- new gate: points
- gate involving Mother letter: board-wide effect
- gate involving Double letter: planetary modifier
- gate involving Single letter: zodiac/process key
- repeated gate: no score or memory penalty

### Sealing Directions

Use letters or divine-name fragments to seal six spatial directions.

This connects naturally to:

- ritual trainer
- temple maps
- world/year/body mapping
- Golden Dawn orientation drills

### Letter Forge

Combine two letters and receive a symbolic "compound" tile.

This can feed:

- Balance Tetris blocks
- Rune Bloom glyphs
- Tarot Tetris attribution cells
- Alchemy Snake powers

### Recension Detective

Given a passage summary or structural clue, choose whether it belongs to the Short, Long, Saadya, Donnolo, or later Hermetic layer.

### Bruno Memory Wheel

Build a rotating memory wheel out of letters, zodiac signs, planets, body domains, and game effects.

This comes directly from the local "SY as Memory Art" thread.

### Rose Cross Gate Printer

Trace a name through the Rose Cross lamen and compare that path to the same letters arranged as a 231 Gates wheel.

This would connect:

- `golden-dawn-explorer.html`
- `magic-square-workbench.html`
- `ritual-trainer.html`

## Digital Edition Data Model

Future edition records should look something like:

```js
{
  id: 'sy-short-1-1',
  work: 'Sefer Yetzirah',
  recension: 'short',
  chapter: 1,
  section: 1,
  hebrew: '',
  translation: '',
  paraphrase: '',
  themes: ['thirty-two paths', 'letters', 'numbers'],
  variantLinks: ['sy-long-1-1', 'sy-saadya-1-1'],
  gameHooks: ['quiz_thirty_two_paths', 'gate_wheel_intro'],
  sourceNotes: [
    {
      source: 'Hayman critical edition',
      note: 'placeholder until imported'
    }
  ]
}
```

## Source Cautions

Important distinction:

- Sefer Yetzirah is a Jewish mystical/cosmological text with its own transmission, commentarial history, and philosophical/magical debates.
- Golden Dawn, Crowley, Paul Christian, and other occult tarot systems reuse or transform parts of that material in later Western esoteric contexts.

The game should teach the later overlays, but it should label them as overlays.

## How This Connects To Existing TetrisCodex Pages

### Golden Dawn Explorer

Supplies Hebrew-letter path data and Rose Cross lamen affordances.

### Tree Tapper Quiz

Tests letter/path placement on the Tree of Life.

### GD Symbol Quiz Suite

Already tests Mother/Double/Single rings and knowledge lecture topics.

### Ritual Trainer

Can use SY directional sealing and body mapping as ritual memory material.

### Magic Square Workbench

Shares print-shop and sigil-tracing logic.

### Tarot Coin Journey / Tarot Numerology Breaker

Can mint or score SY-class coins:

- Mother = elemental foundation
- Double = planetary power
- Single = zodiac process

### Balance Tetris / Alchemy Blocks

Gate pairs can become compound blocks with two letter-attribution cells.

## Next Steps

1. Import a real edition data table from the user's Sefer Yetzirah work.
2. Add a side-by-side passage comparator.
3. Add SVG animation for gate lines.
4. Add 231-gate progress map and export.
5. Add exact Golden Dawn quiz prompts from the knowledge lecture atlas.
6. Add source labels to every attribution.
7. Add a Rose Cross lamen / gate-wheel comparison tool.
8. Add a "recension detective" quiz mode.
