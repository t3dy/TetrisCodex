# Golden Dawn Correspondence Database Plan

This document describes the correspondence database needed for Tarot Coin Journey, Tarot Numerology Breaker, Rose Cross Lamen Tapper, Tree of Life character sheet, and Tarot Tetris.

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

