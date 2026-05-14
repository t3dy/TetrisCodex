# Tarot Auto-Machine

## Purpose

`tarot-auto-reader.html` is a playable tarot reading prototype built around a stream-chat conceit. It sits between the more deliberate `tarot-reading.html` mockup and the score-heavy `tarot-coin-journey.html`.

The page tests whether a reading can feel like a lively public performance:

- the player places cards into a prepared spread
- each card mints elemental, planetary, or zodiacal symbols
- a simulated chat proposes interpretations
- the player chooses the most correspondence-faithful interpretation
- the system writes several reading styles from the accumulated choices

## Current Game Loop

1. The page initializes an **Operation Cross** spread.
2. The player receives a small tarot hand.
3. The player clicks cards into spread slots.
4. Each card contributes attribution symbols to the score bank.
5. Viewer-chat options appear after placements.
6. The player picks an interpretation.
7. Good choices score when their tags match the card, previous card, or global reading pattern.
8. The page generates career, love, and magic readings from the chosen interpretive tags.

## Implemented Spread

### Operation Cross

Positions:

- Matter: what substance is being worked
- Vessel: what contains or shapes the work
- Heat: what pressure changes it
- Obstacle: what resists the operation
- Projection: what result is cast outward

This keeps the tarot mechanic close to the alchemy block world: a spread position is not merely a fortune-telling slot, but a lab role.

## Card Data

The current prototype uses a compact sample deck:

- The Magician
- The Tower
- The Moon
- The Sun
- The Devil
- Ace of Cups
- Ace of Wands
- Ten of Pentacles
- King of Pentacles
- Queen of Cups
- Knight of Wands
- Page of Swords
- Temperance
- Five of Wands
- The Empress
- Justice
- Death

Each card has:

- emoji
- element
- planet or zodiac sign
- type
- tag list for scoring interpretations

## Scoring Model

Interpretations are tag-scored rather than free-text-scored.

Examples:

- Fire cards reward action, will, conflict, passion, heat, and rupture readings.
- Water cards reward emotion, dissolution, romance, uncertainty, and dream readings.
- Earth cards reward structure, business, materiality, salt, and practical stability.
- Air cards reward intellect, language, strategy, and communication.
- Court cards can reward relationship, rivalry, authority, or alliance readings.

Some chat suggestions are intentionally wrong. These teach the player that not every vivid interpretation respects the attribution grammar.

## Relationship To Other Modes

### Tarot Reading Lab

`tarot-reading.html` emphasizes deliberate choice prompts and generated prose.

`tarot-auto-reader.html` emphasizes rapid performance, chat pressure, and tag-scored interpretation.

### Tarot Coin Journey

`tarot-coin-journey.html` turns attributions into spendable attention coins.

`tarot-auto-reader.html` turns attributions into a live score bank and interpretation filter.

### Tarot Numerology Breaker

`tarot-numerology-breaker.html` is combo-heavy and roguelike.

`tarot-auto-reader.html` is more conversational: the "combo" is choosing a chat interpretation that correctly reads the visible correspondences.

## Next Steps

1. Add a Markdown side panel that explains why each chat interpretation scored.
2. Import the user's tarot database for richer card meanings.
3. Add multiple spreads.
4. Let the player choose reading frame before the spread begins.
5. Save generated readings to a session archive.
6. Add wrong-but-tempting interpretations for teaching.
7. Add source labels for Golden Dawn, RWS, Thoth, Marseille, and project-specific attribution systems.
