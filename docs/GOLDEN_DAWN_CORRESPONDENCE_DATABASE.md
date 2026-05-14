# Golden Dawn Correspondence Database Plan

This document describes the correspondence database needed for Tarot Coin Journey, Tarot Numerology Breaker, Rose Cross Lamen Tapper, Tree of Life character sheet, and Tarot Tetris.

## Implemented Prototype

Current playable files:

- `golden-dawn-correspondences.js`
  - Shared browser data module exposed as `window.GD_CORRESPONDENCES`.
  - Covers elements, planets, zodiac signs, tarot suits, 10 sefirot, 22 Hebrew-letter paths, Golden Dawn-style tarot trump links, and grade unlock tiers.
  - Each symbol carries a gameplay effect phrase so modes can immediately turn a click, coin, or block collision into a narrated move readout.
- `golden-dawn-explorer.html`
  - Clickable TreeTapper-style Tree of Life map.
  - Clickable Rose Cross lamen pad with Mother, Double, and Single letter rings.
  - Unicode symbol bank for elements, planets, zodiac signs, and suits.
  - Grade unlock ladder for future progression.
  - Inspector and move-readout panel that logs every player input.
- `docs/ROSE_CROSS_LAMEN_GAMEPLAY_ATLAS.md`
  - Mode-by-mode explanation of how lamen clicks can become coins, powers, tarot cells, board rules, and creator-tool metadata.
- `docs/GOLDEN_DAWN_EXPLORER_IMPLEMENTATION_LOG.md`
  - Implementation choices, prompt interpretation, alternatives, and next steps.
- `tree-tapper-quiz.html`
  - Playable correspondence trainer for placing Hebrew letters, powers, tarot trumps, divine names, archangels, and angelic orders onto paths and sefirot.
- `docs/TREE_TAPPER_CORRESPONDENCE_QUIZ.md`
  - Mode design, user-prompt interpretation, implemented decks, and next steps.
- `gd-quiz-suite.html`
  - Multi-mode quiz prototype for pentagram quarters, zodiac wheels, tarot-card correspondences, Rose Cross lamen rings, magic squares, and knowledge-lecture topics.
- `docs/GD_SYMBOL_QUIZ_SUITE.md`
  - Design atlas for diagram-based Golden Dawn symbol drills.
- `docs/GD_KNOWLEDGE_LECTURE_QUIZ_ATLAS.md`
  - Source-linked atlas mapping online knowledge lecture topics to quiz families.
- `docs/GD_QUIZ_DATA_ARCHITECTURE.md`
  - Proposed schema for quiz prompts, target regions, source labels, and scoring tags.
- `magic-square-workbench.html`
  - Magic-square construction, sigil tracing, animation, and print-shop prototype.
- `docs/MAGIC_SQUARE_SIGIL_WORKBENCH.md`
  - Design notes for magic-square game modes and export/print-shop needs.
- `ritual-trainer.html`
  - Playable ritual-study stubs for LBRP, Middle Pillar, Hexagram, and Rose Cross training.
- `docs/GD_RITUAL_TRAINER.md`
  - Design notes for ritual graphics, click-through enactment, memorization tests, and print-shop drills.
- `gd-ritual-implements.html`
  - Ritual object and painted-diagram mode atlas for Vault, tablets, banners, lamens, color scales, and temple furniture.
- `docs/GD_RITUAL_DIAGRAM_AND_IMPLEMENT_MODES.md`
  - Design notes for Vault Painter, tablet construction, banner/lamen studio, grade diagram exams, and ritual furniture layouts.
- `sefer-yetzirah-lab.html`
  - Playable Sefer Yetzirah letter-combinatorics and Golden Dawn overlay trainer.
- `docs/SEFER_YETZIRAH_LAB.md`
  - Design notes for 231 Gates, recension comparison, world/year/body mapping, and GD quiz integration.

This is deliberately a prototype database rather than a final scholarly authority. The next pass should import or reconcile the user's local Tarot database and any reading-generator work, then attach explicit source labels to each correspondence.

## Scope

The database should cover:

- 78 tarot cards
- Hebrew letters
- 22 Tree paths
- 10 sefirot
- 3 Mothers
- 7 Doubles
- 12 Singles
- 4 elements
- 7 classical planets
- 12 zodiac signs
- Golden Dawn-style tarot attributions
- color scales
- god names, angel names, and grade-gated ritual material
- later unlocks such as Enochian, magic squares, and spirit diagrams

## Unicode Symbol Strategy

| Family | Symbols |
| --- | --- |
| Elements | `🔥` Fire, `💧` Water, `🌬` Air, `🜃` Earth or `🪨` Earth |
| Planets | `☉` Sun, `☽` Moon, `☿` Mercury, `♀` Venus, `♂` Mars, `♃` Jupiter, `♄` Saturn |
| Zodiac | `♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓` |
| Hebrew | `א ב ג ד ה ו ז ח ט י כ ל מ נ ס ע פ צ ק ר ש ת` |
| Suits | `🕯️` Wands, `🏆` Cups, `🗡️` Swords, `🪙` Pentacles |
| Processes | use alchemical emoji pairs until we choose exact symbols |
| Tree Nodes | numbered circles plus names |
| Paths | Hebrew letter + trump number + planet/sign/element |

## Core Tables

### `gd_symbols`

Fields:

- id
- family
- name
- unicode
- alternate_unicode
- keywords
- source_note

### `gd_hebrew_letters`

Fields:

- letter
- transliteration
- class: Mother / Double / Single
- element_planet_or_sign
- tarot_trump
- tree_path
- unicode
- note

### `gd_tarot_cards`

Fields:

- id
- name
- number
- arcana
- suit
- rank
- element
- planet
- zodiac
- hebrew_letter
- tree_path
- sephirah
- numerology
- golden_dawn_title
- color_scale_refs
- source_refs

### `gd_tree_regions`

Fields:

- node_or_path_id
- name
- kind: sefirah / path
- unicode
- attributions
- unlocked_grade
- gameplay_effects

### `gd_unlocks`

Fields:

- grade
- unlock_family
- unlocked_symbols
- UI_panel
- gameplay_meaning

## Grade Unlock Ladder

| Stage | Unlock |
| --- | --- |
| Beginner | Elements, suits, numbers |
| Student | Planets, zodiac signs |
| Neophyte | Tree nodes and simple paths |
| Zelator style | Earth/Salt mechanics and Malkuth-focused work |
| Theoricus style | Air/Moon/Yesod mechanics |
| Practicus style | Water/Mercury/Hod mechanics |
| Philosophus style | Fire/Venus/Netzach mechanics |
| Adept style | Tiphareth, Rose Cross lamen, full pathwork |
| Advanced | color scales, god names, angel names |
| Experimental | Enochian, magic squares, conjuring diagrams |

## Game Effects

### Elements

- Fire: ignition, multiplier, rupture
- Water: dissolve, reflect, soften
- Air: swap, lift, communicate
- Earth: fix, weigh, anchor

### Planets

- Sun: reveal, synthesize, crown
- Moon: mirror, dream, uncertainty
- Mercury: translate, swap, mediate
- Venus: attract, harmonize
- Mars: cut, break, ignite
- Jupiter: expand, bless, multiply
- Saturn: lock, limit, structure

### Zodiac

- Aries: initiate
- Taurus: stabilize
- Gemini: split/connect
- Cancer: contain
- Leo: magnify
- Virgo: sort/refine
- Libra: balance
- Scorpio: transform
- Sagittarius: aim/project
- Capricorn: bind/climb
- Aquarius: rewire
- Pisces: dissolve/complete

## Safety And Scholarship Notes

The database should distinguish:

- historical Golden Dawn correspondences
- modern occult tarot convention
- project-specific game mechanics
- user-created house rules

The game may be dazzling and playful, but the inspectable database should always tell the player whether something is historical, traditional, speculative, or invented for fun.
