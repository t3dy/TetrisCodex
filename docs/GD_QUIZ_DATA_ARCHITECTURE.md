# Golden Dawn Quiz Data Architecture

## Purpose

The Golden Dawn quiz pages are starting to cover many symbolic schemes: Tree paths, lamen petals, zodiac wheels, pentagram quarters, tarot-card cells, magic squares, and knowledge-lecture topics. This document defines the data shape those modes should converge on.

The goal is simple: every quiz prompt should be a structured object with source labels, target geometry, scoring tags, and a reusable feedback sentence.

## Current Prototype Files

- `tree-tapper-quiz.html`
- `gd-quiz-suite.html`
- `golden-dawn-correspondences.js`

## Core Quiz Item Schema

```json
{
  "id": "gd-lamen-aleph",
  "family": "hebrew-letter",
  "deck": "rose-cross-lamen",
  "grade": "Zelator",
  "prompt": "Place Aleph on the Rose Cross lamen.",
  "token": {
    "label": "Aleph",
    "glyph": "א",
    "secondary": "Air / Mother"
  },
  "target": {
    "board": "rose-cross-lamen",
    "id": "lamen-11",
    "kind": "petal"
  },
  "answerText": "Aleph belongs on the Air Mother-letter petal.",
  "source": {
    "label": "OSOGD Second Knowledge Lecture",
    "url": "https://osogd.org/education/the-second-or-zelator-knowledge-lecture/",
    "status": "OSOGD presentation of Golden Dawn-style curriculum"
  }
}
```

## Board Schema

Each visual quiz board should declare its target regions.

```json
{
  "id": "rose-cross-lamen",
  "targets": [
    {
      "id": "lamen-11",
      "kind": "petal",
      "label": "Aleph",
      "x": 0,
      "y": -54,
      "radius": 42
    }
  ]
}
```

## Families To Support

### Basic Symbol Families

- elements
- planets
- zodiac signs
- tarot suits
- Hebrew letters
- Tree paths
- sefirot

### Ritual Diagram Families

- pentagram quarters
- hexagram planets
- Rose Cross lamen petals
- Tree of Life paths
- Tree of Life sefirot
- zodiac wheel sectors

### Advanced Knowledge Families

- divine names
- archangels
- angelic orders
- elemental beings
- geomantic figures
- magic squares
- planetary lineal figures
- tattvas
- alchemical principles
- veils of negative existence

## Source Status Tags

Every item should carry one or more source-status tags:

- `traditional-golden-dawn`
- `osogd-adaptation`
- `agrippa`
- `regardie`
- `crowley`
- `project-house-rule`
- `unicode-display-choice`
- `game-mechanic-extension`

This lets the game stay playful without confusing scholarly source claims with our own mechanics.

## Feedback Template

Every input should produce a readout:

```text
Correct: Aleph belongs on the Air Mother-letter petal. This trains the Second / Zelator lecture's Mother, Double, and Single letter scheme.
```

Misses should explain the expected target:

```text
Not quite: Aleph was placed on the Double-letter ring. Expected the Aleph / Air Mother petal.
```

## Scoring Tags

Suggested scoring tags:

- `recall`: simple symbol recognition
- `placement`: correct diagram placement
- `classification`: correct family or class
- `sequence`: correct order
- `synthesis`: connection across two systems
- `source-literacy`: knowing which lecture or tradition teaches it

## Implementation Roadmap

1. Extract `gd-quiz-suite.html` inline data into `gd-quiz-data.js`.
2. Store all board targets as data instead of rendering-only geometry.
3. Add localStorage mastery by `family`, `deck`, and `source`.
4. Add source panel beside each answer.
5. Let Tarot Coin Journey and Tarot Numerology Breaker read mastery as scoring modifiers.
6. Add editor support so the Level Builder can author quiz boards.
