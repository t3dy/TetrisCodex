# Local Tarot Database Survey

This document records the tarot material found locally and how it can be adapted into TetrisCodex.

## Found Projects And Files

### Tarot Dev

Location:

- `C:\Dev\Tarot Dev\`

Memory note:

- `C:\Users\PC\.claude\projects\C--Dev-NSFRIPPER\memory\project_tarot_dev.md`

Live site recorded in memory:

- `https://t3dy.github.io/Ted-s-Tarot-App/`

Core assets recorded:

- `data/tarot.db`
- 29 database tables
- 78 cards with Golden Dawn correspondences
- 234 card meanings
- RWS upright and reversed meanings
- Thoth upright meanings
- Fiebig 5-domain meanings
- 18 historical figures
- 23 texts
- 29 dictionary terms
- 33 timeline events
- 9 reading methods
- 10 Celtic Cross positions
- 30 spread-position prompts
- 220 Major Arcana position prompts
- 859 card relation heuristics
- 9 sources with 230+ source references

Stated philosophy:

- non-mystical and dialectical
- structural patterns before individual card meanings
- multi-tradition cards and meanings should not be collapsed
- per-position reflection prompts, not pronouncements
- evidence-based tarot history in the Dummett-school style

Useful adaptation:

- import `tarot.db` later as the canonical source for card records, meanings, relation heuristics, and source references
- expose Golden Dawn correspondences as one selectable tradition rather than the only truth
- use card relation heuristics as the engine behind high-scoring "correspondence fireworks"
- use Celtic Cross position prompts as the basis for hideable quiz questions
- preserve the source-reference structure in generated reading logs

### Antigravity Scratch Tarot App

Location:

- `C:\Users\PC\.gemini\antigravity\scratch\tarot-app\`

Important files:

- `src\data\tarot-deck.ts`
- `src\data\correspondences.ts`
- `src\data\spreads.ts`
- `src\features\Reading\ReadingSession.tsx`
- `src\features\Reading\ReadingSynthesis.tsx`
- `src\features\Designer\SpreadDesigner.tsx`
- `src\features\Library\CorrespondenceExplorer.tsx`
- `src\systems\interpretation.ts`

Observed features:

- React/Vite-style app
- classic and outline deck style selector
- Celtic Cross and three-card spread support
- shuffle and deal flow
- hidden/revealed card state
- elemental balance analysis
- Major/Minor split analysis
- spread coordinate data
- Tarot card type definitions with correspondences
- basic element, numerology, and zodiac correspondence tables

Useful adaptation:

- `SpreadLayout` and spread coordinate concepts map well to our reading screens
- `ReadingSynthesis` already models a compact analysis panel
- `correspondences.ts` gives simple elemental and numerological meanings we can turn into quiz answers and scoring tags
- `SpreadDesigner` suggests future WYSIWYG spread creation
- `TarotDeckBrowser` and `CorrespondenceExplorer` suggest a later "database gallery" screen for all unlocked attributions

## TetrisCodex Adaptation Plan

### Phase 1: Keep Current Static Prototype

Use the current single-file pages as fast design surfaces:

- `tarot-reading.html`
- `tarot-coin-journey.html`
- `tarot-numerology-breaker.html`

Add durable saved writing and hideable prompt panels here first.

### Phase 2: Import Database Exports

Export from `C:\Dev\Tarot Dev\data\tarot.db` into JSON:

- `tarot_cards.json`
- `tarot_meanings.json`
- `golden_dawn_correspondences.json`
- `relation_heuristics.json`
- `spread_positions.json`
- `source_references.json`

### Phase 3: Build Shared Tarot Engine

Create a shared JS module:

- card lookup
- attribution lookup
- spread position lookup
- relation heuristic scoring
- generated text fragments
- source labels
- tradition labels

### Phase 4: Game-Mode Adapters

Use the shared engine for:

- Tarot Reading Lab
- Tarot Coin Journey
- Tarot Numerology Breaker
- Tarot Tetris
- Rose Cross Lamen Tapper
- Tree of Life character sheet

## Design Rules Learned From The Local Projects

1. Do not collapse traditions.
2. Always label Golden Dawn / RWS / Thoth / Marseille when it matters.
3. Treat readings as reflection prompts and game choices rather than predictions.
4. Let structural patterns score before isolated card meanings.
5. Save the generated writing, questions, choices, and score evidence.
6. Make correspondence explosions fun, but preserve inspectable explanation.

