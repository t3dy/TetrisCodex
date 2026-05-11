# Alchemy Source Pipeline

The user wants the alchemical game world organized around emoji blocks with properties sourced from extant alchemical texts and scholarship in the local database.

This document defines that pipeline.

## Existing Source Material In Workspace

Already present:

- `ALCHEMY_ITEMS_40.md`
- `ALCHEMY_LORE.md`
- `BUTTONS_PALETTE.md`
- `ALCHEMY_LAB.md`

These mention or derive from:

- Basilius Valentinus, *The Twelve Keys*
- Michael Maier, *Atalanta Fugiens*
- H. M. E. De Jong, *Michael Maier's Atalanta Fugiens*
- Hereward Tilton, *The Quest for the Phoenix*
- Lawrence M. Principe, *The Secrets of Alchemy*
- the local Claudiens / AtalantaClaudiens corpus

## Desired Data Flow

```text
source corpus -> extracted alchemical term -> design interpretation -> emoji block -> gameplay property -> test level
```

## Block Source Record

Each sourced block should eventually get a record:

```js
{
  id: 'athanor',
  name: 'Athanor',
  emoji: '♨',
  class: 'apparatus',
  sourceTerms: ['athanor', 'furnace', 'coction'],
  sourceRefs: [
    {
      work: 'The Secrets of Alchemy',
      author: 'Lawrence M. Principe',
      note: 'modern scholarly account of furnaces and laboratory practice'
    }
  ],
  mechanicalReading: 'slow heat, digestion, gradual transformation',
  mechanics: ['timer', 'fireTraitConversion']
}
```

## Extraction Categories

### Apparatus

Physical tools:

- Athanor
- Alembic
- Retort
- Crucible
- Pelican
- Bain-Marie
- Mortar

### Substances

Materials and principles:

- Salt
- Sulphur
- Mercury
- Aqua Regia
- Aqua Vitae
- Ash
- Gold
- Lead

### Operations

Processes:

- Calcination
- Dissolution
- Coagulation / Congelation
- Sublimation
- Distillation
- Separation
- Fermentation
- Projection

### Emblems

Figurative image language:

- Dragon
- Toad
- Salamander
- Pelican
- Phoenix
- Golden Apples
- Green Lion

## Implementation Plan

1. Keep using hand-authored Markdown first.
2. Convert the best 40-80 blocks into a structured JS registry.
3. Add source metadata fields.
4. Add a codex/inspection UI.
5. Build small test modes around each property family.

## Rule For Scholarly Translation

The source does not need to be reduced to literal simulation. It needs to become a playable analogy.

Examples:

- Distillation -> extract one trait from a column
- Calcination -> reduce weight and color to ash
- Fixation -> prevent sliding
- Projection -> cast an effect across a row
- Fermentation -> delayed transformation
