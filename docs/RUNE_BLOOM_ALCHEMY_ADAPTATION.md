# Rune Bloom Alchemy Adaptation

The existing generated docs contain a rich alchemical system: zodiac signs, Tria Prima, Ripley's processes, Valentine's keys, and 40 item concepts. Rune Bloom can use these ideas without becoming the balance-platform game.

## Translation Principle

In Balance Blocks, alchemy mostly modified falling blocks, torque, sliding, weight, or platform behavior.

In Rune Bloom, alchemy should modify:

- placement permission
- cell identity
- bloom behavior
- blight interaction
- reaction cascades
- piece creation
- board topology

## Tria Prima as Core Modifier Classes

### Salt

Theme:

- body
- fixity
- preservation
- anchoring

Rune Bloom mechanics:

- Salt cells cannot be overwritten by blight.
- Salt can anchor a bloom so only non-Salt cells clear.
- Salt pieces may be placed without adjacency once per game because they "fix" a new seed.
- Salt can seal edge cells against blight spread.

### Sulphur

Theme:

- fire
- soul
- combustion
- transformation

Rune Bloom mechanics:

- Sulphur cells burn adjacent blight after placement.
- Sulphur blooms clear extra neighboring cells.
- Sulphur can overburn and remove friendly runes if chained too often.
- Sulphur pieces may convert their element to Ember.

### Mercury

Theme:

- spirit
- volatility
- fluidity
- wildcard

Rune Bloom mechanics:

- Mercury counts as any element in blooms.
- Mercury can slide to fill a gap after a bloom.
- Mercury can copy the most common adjacent element.
- Mercury can bridge diagonal adjacency.

## Zodiac Processes as Button Actions

The existing `BUTTONS_PALETTE.md` maps zodiac signs to alchemical processes. Rune Bloom can turn these into a future bottom-row palette.

| Zodiac | Process | Rune Bloom Verb |
|---|---|---|
| Aries | Calcination | destroy / ash / reduce |
| Taurus | Congelation | solidify / make permanent |
| Gemini | Fixation | bind two cells |
| Cancer | Dissolution | wildcard / dissolve blight |
| Leo | Digestion | delayed growth |
| Virgo | Distillation | extract a color from a line |
| Libra | Sublimation | lift / move / swap |
| Scorpio | Separation | split mixed regions |
| Sagittarius | Incineration | clear a burst |
| Capricorn | Fermentation | transform over turns |
| Aquarius | Multiplication | duplicate bloom value |
| Pisces | Projection | cast an effect across a row/column |

## Palette Input Concept

Future Lab Mode can use a two-click grammar:

1. Click a zodiac/process.
2. Click Salt, Sulphur, or Mercury.
3. Receive a crafted glyph or catalyst cell.

Examples:

- Aries + Sulphur: a fire glyph that clears a 3-cell burst on placement.
- Cancer + Mercury: a solvent glyph that turns adjacent cells wild.
- Taurus + Salt: a fixed seed that creates a new safe growth origin.
- Aquarius + Mercury: a duplicating wildcard that copies the next bloom.
- Pisces + Salt: a projected barrier that seals an edge against blight.

## Adapted Item Families

From `ALCHEMY_ITEMS_40.md`, the most useful Rune Bloom item families are:

### Apparatus

Board objects or one-cell catalysts:

- Athanor: slowly converts adjacent runes to Ember
- Alembic: extracts one element from a column
- Crucible: consumes adjacent cells for a stronger bloom
- Pelican: recycles a piece from the next queue
- Retort: splits a rune into two Mercury motes

### Magnum Opus Stages

Timed transformation states:

- Nigredo: decays into empty space unless purified
- Albedo: cleans adjacent blight
- Citrinitas: increases score multiplier
- Rubedo: transforms adjacent cells into a chosen element

### Creatures and Emblems

Rare event pieces:

- Dragon: occupies space, but gives huge points when encircled
- Salamander: lives in Ember blooms
- Toad: creates blight unless transformed
- Golden Apples: collectible bonus cells

## First Implementation Recommendation

Do not implement all 51 palette outputs immediately.

Build four proof-of-system catalysts first:

1. Salt Anchor
2. Sulphur Spark
3. Mercury Wild
4. Pisces Projection

These cover the four major rule effects:

- protect
- destroy
- wildcard
- cast across distance

Once those feel good, expand into the zodiac grid.
