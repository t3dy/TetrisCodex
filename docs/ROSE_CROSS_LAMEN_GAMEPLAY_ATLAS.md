# Rose Cross Lamen Gameplay Atlas

## Purpose

The Rose Cross lamen should become more than an image on the tarot page. In this project it is an input surface, a progress map, a power palette, and a visual explanation of why a tarot or alchemy block has the properties it has.

This document turns the lamen into game mechanics that can plug into Tarot Coin Journey, Tarot Numerology Breaker, Tarot Tetris, Balance Tetris, Alchemy Snake, and future creator tools.

## Player-Facing Concept

The player sees the lamen as a clickable magical control pad.

- The outer ring supplies the 12 zodiac signs and their process-like powers.
- The middle ring supplies the 7 planetary powers.
- The inner ring supplies the 3 elemental Mother letters.
- The center acts as synthesis, confirmation, or a final spending point.

Clicking a petal means: "spend attention on this correspondence and let the current game mode interpret it."

## Letter Classes

### Mother Letters

Mother letters are large, rare, and board-shaping.

| Letter | Power | Game Role |
| --- | --- | --- |
| Aleph | Air | Swap, lift, translate, make space |
| Mem | Water | Dissolve, suspend, reflect, slow |
| Shin | Fire | Ignite, awaken, multiply, rupture |

Mother letters should often affect the whole board, a whole reading, or an entire level condition.

### Double Letters

Double letters are planetary and should often behave as paired alternatives, toggles, or fate-modifiers.

| Letter | Planet | Game Role |
| --- | --- | --- |
| Beth | Mercury | Translation, tool use, exchange |
| Gimel | Moon | Reflection, secrecy, dream state |
| Daleth | Venus | Attraction, harmony, binding |
| Kaph | Jupiter | Expansion, blessing, multiplier |
| Peh | Mars | Rupture, impact, tower event |
| Resh | Sun | Revelation, synthesis, scoring clarity |
| Tau | Saturn | Boundary, lock, weight, completion |

Double letters are ideal for roguelike relics, rule breaks, and player powers that have a cost.

### Single Letters

Single letters are zodiacal and should often act as precise process keys.

| Letter | Sign | Game Role |
| --- | --- | --- |
| Heh | Aries | Start, force, command |
| Vav | Taurus | Stabilize, teach, thicken |
| Zayin | Gemini | Split, choose, pair |
| Cheth | Cancer | Contain, carry, shield |
| Teth | Leo | Strengthen, magnify, heat |
| Yod | Virgo | Sort, refine, isolate |
| Lamed | Libra | Balance, judge, weigh |
| Nun | Scorpio | Transform, decay, regenerate |
| Samekh | Sagittarius | Aim, mix, temper |
| Ayin | Capricorn | Bind, compress, climb |
| Tzaddi | Aquarius | Rewire, signal, renew |
| Qoph | Pisces | Dissolve, dream, complete |

Single letters are excellent for level objectives, apparatus tiles, and process-specific challenge rules.

## Mode Interpretations

### Tarot Coin Journey

When a card is drawn, its correspondences mint coins. A lamen click spends a coin or asks the player to justify a relationship.

Example:

- Card: The Tower
- Petal: Peh / Mars
- Spend: connect the card to rupture, interruption, pressure, or a forced change
- Reward: score for a supported reading paragraph

### Tarot Numerology Breaker

The lamen is a combo surface. Matching a card's number, path, planet, element, or zodiac sign lights petals and creates scoring chains.

Example:

- Draw Strength, The Sun, and 5 of Wands.
- Teth/Leo and Resh/Sun light.
- The player buys a "Solar Beast" rule break that lets Fire and Sun multipliers count twice.

### Tarot Tetris

Each tarot card becomes a composite piece. The lamen supplies one or more printed cells.

Example:

- The Tower contains Mars, Peh, Trump 16, and a rupture cell.
- The piece falls as a jagged block.
- If the Peh cell touches a Saturn cell, the rupture is contained; if it touches Fire, it detonates.

### Balance Tetris

The lamen can set the next block's physical property or scoring receiver.

Example:

- Venus attracts nearby oily Sulphur blocks.
- Saturn fixes a block to the platform for one turn.
- Libra adjusts the platform toward level but reduces profit.

### Alchemy Snake

The lamen becomes a power wheel. Eating a block with a symbol lights the matching petal, and clicking a lit petal spends it.

Example:

- Eat Mercury: snake may pass through one wall of the lab grid.
- Eat Capricorn: snake may push one heavy block.
- Eat Mem: snake dissolves one accident tile.

### Creator Tools

The lamen can tag assets, levels, campaigns, and response text.

Example:

- An asset tagged with Peh/Mars can use rupture behavior.
- A level tagged with Libra can require a balance condition.
- A canned response tagged with Moon can be used when the player reveals hidden information.

## Visual Unlock Scheme

The unlock ladder should be visible rather than hidden in backend data.

| Tier | Visible Unlock |
| --- | --- |
| Beginner | Elements and suits |
| Student | Planets and zodiac |
| Neophyte | Tree nodes and simple paths |
| Adept | Full lamen input pad |
| Advanced | Color scales and names |
| Experimental | Enochian, magic squares, spirit diagrams |

The key design rule is that advanced material should not be required to enjoy the basic puzzle. It should enrich interpretation and scoring once the player wants the deeper system.

## Implementation Notes

Current prototype files:

- `golden-dawn-correspondences.js`
- `golden-dawn-explorer.html`

The next useful implementation step is to let the explorer export a selected correspondence as:

```json
{
  "schema": "tetriscodex-correspondence-click/v1",
  "symbol": "Peh",
  "family": "Double",
  "power": "Mars",
  "modeHooks": ["rupture", "impact", "tower-event"]
}
```

That same payload could be accepted by the Asset Studio, Level Builder, Tarot Coin Journey, and Tarot Tetris prototypes.
