# Tarot Numerology Breaker

Tarot Numerology Breaker is a Balatro-like tarot game concept. It takes tarot numerology, Golden Dawn correspondences, Tree paths, suits, elements, planets, zodiac signs, and spread positions, then lets the player "break" the system by stacking strange scoring exceptions.

The point is not to simulate Golden Dawn solemnly. The point is to make the correspondences fire like a pinball table while still teaching enough structure that the player can see why a combo happened.

## User Prompt

The requested mode:

- is like the roguelike poker game Balatro
- takes tarot and "breaks" it
- specifically breaks Golden Dawn numerology
- weird number correspondences should create scoring opportunities
- the fun should come from dazzling chains of correspondences going off
- high-scoring interpretations should be generated from those chains

## Core Loop

1. Draw a hand of tarot cards.
2. Choose a spread or scoring frame.
3. Play a subset of cards into positions.
4. Score base card values.
5. Trigger numerology correspondences.
6. Trigger Golden Dawn letter/path/planet/zodiac/suit correspondences.
7. Apply rule-breaking jokers, relics, lamen petals, Tree nodes, and color-scale modifiers.
8. Generate a short interpretation from the chain of scored correspondences.
9. Buy or choose a new rule mutation.
10. Continue through antes, ordeals, or grades.

## Card Values

Base values:

- Pip cards: printed number, Ace = 1
- Court cards: Page = 11, Knight = 12, Queen = 13, King = 14
- Trumps: 0-21 by card number, but count as high-scale cards for multipliers

Card scale:

- Pip: normal size
- Court: doubled authority
- Trump: archetypal scale

## Golden Dawn Combo Categories

### Number Runs

Examples:

- `4 -> 5`: development from structure to conflict
- `7, 8, 9`: ascent through assessment, mastery, fruition
- `10 + Ace`: completion folds into beginning

### Sephirotic Hits

Examples:

- all 2s trigger Chokmah
- all 3s trigger Binah
- all 6s trigger Tiphareth
- all 10s trigger Malkuth

### Suit Number Combos

Examples:

- `5 of Wands`: will in conflict
- `10 of Wands`: overburdened fire
- `6 of Swords`: analytical passage
- `4 of Cups`: emotional fixity

### Planetary Chains

Examples:

- Mars + Tower + Fire: rupture chain
- Sun + Tiphareth + Gold: clarity chain
- Moon + Yesod + Water: dream chain

### Zodiac Chains

Examples:

- Aries cards accelerate action
- Leo cards magnify dramatic visibility
- Scorpio cards unlock death/rebirth scoring
- Aquarius cards score for unexpected system rewiring

### Letter Chains

Examples:

- Mother letters score elemental foundations
- Double letters score planetary powers
- Single letters score zodiacal paths

## Rule-Breaking Relics

| Relic | Effect |
| --- | --- |
| Misnumbered Trump | One Trump can count as any adjacent number. |
| Broken Decan Wheel | Decan cards score their sign and neighboring sign. |
| False Sephirah | Once per hand, assign a card to the wrong Tree node for combo purposes. |
| Rose Cross Lens | Click a lamen petal to add its letter to the hand. |
| Numeral Fire | Every repeated number adds Fire, regardless of suit. |
| Saturn Lock | 3s and 10s become heavy but multiply structure scores. |
| Golden Dawn Footnote | Source-labeled combos score twice if explained in the generated text. |

## Generated Text

Every scoring burst should produce writing:

```text
The hand breaks open around the number 5: will leaves the stable frame and enters contest.
Mars answers through the Tower, so the reading treats rupture as ordeal rather than accident.
Because the Rose Cross Peh petal was lit, the path is read as a mouth of fire: speech becomes impact.
```

The generated writing must be saved with:

- hand
- spread
- score events
- player choices
- hidden/shown prompt state
- source/tradition labels

## UI Screens

- Draw Hand
- Play To Spread
- Combo Explosion
- Rule Shop
- Saved Reading Log
- Tree / Lamen / Correspondence Inspectors

## Prototype Page

- `tarot-numerology-breaker.html`

The first page should mock the experience:

- a small fixed hand
- several scoring buttons
- combo log
- generated text
- visible multipliers
- a "break rule" button that makes the next combo stranger

