# Emoji Block Property Taxonomy

This document classifies alchemical emoji blocks by gameplay property.

## Property Class 1: Weight and Balance

Relevant to Balance Tetris.

Examples:

- Saturn: heavy, sinking
- Albedo: light, sublimating
- Ash: low weight
- Gold/Sun: valuable, stable
- Balloon-like vapors: negative or reduced weight

Parameters:

- `weight`
- `torqueMultiplier`
- `properExitSide`
- `slideValueMul`

## Property Class 2: Fixity

Salt family.

Effects:

- cannot slide
- protects neighbors
- resists transmutation
- creates stable foundations

Fields:

- `item: 'salt'`
- `fixed: true`
- `resistsProcess: true`

## Property Class 3: Volatility

Mercury family.

Effects:

- wildcard trait
- can profitably exit either side
- spreads volatility to neighbors
- may slide more readily

Fields:

- `item: 'mercury'`
- `wildcard: true`
- `properExitSide: 0`
- `slippery: true`

## Property Class 4: Combustion

Sulphur family.

Effects:

- burns adjacent matter
- converts cells to Mars/fire
- creates ash
- may trigger sudden mass loss

Fields:

- `item: 'sulphur'`
- `burnRadius`
- `ashOutput`

## Property Class 5: Process Furniture

Zodiac-alone apparatus tiles.

Examples:

- Crucible
- Alembic
- Athanor
- Pelican
- Retort
- Fermenter

Effects:

- persistent rule field
- modifies adjacent cells
- changes slide scoring
- transforms pieces over turns

Fields:

- `alchemyKind: 'apparatus'`
- `paletteProcess`
- `apparatus`
- `_paletteFired`

## Property Class 6: Timed Transformation

Magnum Opus and fermentation family.

Examples:

- Nigredo -> Albedo -> Citrinitas -> Rubedo
- fermenting matter
- digesting matter

Fields:

- `timer`
- `nextState`
- `age`
- `processRate`

## Property Class 7: Exit-Side Affinity

Balance Tetris alchemical dumping.

Effects:

- proper side gives positive score
- wrong side costs score
- Mercury exits either side

Fields:

- `properExitSide: -1 | 0 | 1`
- `exitMultiplier`
- `wrongExitPenalty`

## Property Class 8: Source Identity

Every mature block should have source metadata.

Fields:

```js
{
  sourceTerm: 'Athanor',
  tradition: 'Latin alchemy',
  sourceNote: 'slow furnace used for digestion/coction',
  bibliographyKey: 'principe_secrets_2013'
}
```

The game should eventually let the player inspect this as an in-game codex.
