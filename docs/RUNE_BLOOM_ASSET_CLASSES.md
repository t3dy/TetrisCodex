# Rune Bloom Asset Classes

This document defines the types of assets Rune Bloom needs. "Asset" means both visible media and data-driven gameplay objects.

## 1. Rune Cell Assets

One occupied board cell.

Current runtime fields:

```js
{
  kind: 'rune',
  element: 0,
  seed: true,
  age: 0
}
```

Needed art variants:

- Aqua rune
- Ember rune
- Moss rune
- Star rune
- seed-highlight overlay
- newly placed glow
- blooming flash
- inactive/dimmed state

Future variants:

- wildcard Mercury rune
- anchored Salt rune
- combustible Sulphur rune
- cracked rune
- sleeping rune
- overgrown rune

## 2. Blight Cell Assets

One hazard cell.

Current runtime fields:

```js
{ kind: 'blight' }
```

Needed art variants:

- standard blight
- spreading pulse
- purified flash
- hardened blight
- dormant blight
- elemental blight

Visual direction:

Blight should contrast with runes by being pale, dry, rigid, or ash-like. It should feel like sealed possibility.

## 3. Glyph Piece Assets

A placeable shape made of multiple rune cells.

Current runtime fields:

```js
{
  shape: { id: 'sprig', cells: [[0,0], [1,0], [2,0], [1,1]] },
  element: 0,
  rot: 0
}
```

Current classes:

- sprig
- hook
- bar
- square
- step
- spire
- seed

Needed docs per glyph:

- silhouette
- intended tactical use
- difficulty
- spawn weight
- possible future upgrades

## 4. Element Assets

Element assets are color, rules, UI names, and sound identity.

Current elements:

| Element | Color Role | Current Function |
|---|---|---|
| Aqua | teal | match identity |
| Ember | orange | match identity |
| Moss | green | match identity |
| Star | violet | match identity |

Future identities:

- Aqua: flow, dissolve, connect
- Ember: burn, clear, risk
- Moss: grow, repair, spread
- Star: diagonal, distant, score multiplier

## 5. Reaction Assets

Reaction assets describe effects that fire from board state.

Examples:

- bloom
- purification
- calcination
- dissolution
- conjunction
- projection
- multiplication

Each reaction needs:

- trigger
- visual effect
- board mutation
- scoring
- sound cue
- explanation text

## 6. UI Assets

Current UI:

- score cards
- best card
- turn card
- goal card
- current piece preview
- next queue
- controls text
- overlay screens

Needed:

- mode selector
- codex/encyclopedia panel
- level select cards
- alchemy palette buttons
- tutorial callouts
- reaction log

## 7. Audio Assets

Not implemented yet.

Needed sound classes:

- place
- invalid place
- rotate
- bloom
- blight spread
- purify
- win
- loss
- chain
- palette craft

Style:

Small glass, bell, breath, low organic thumps. Avoid loud arcade clutter.

## 8. Level Assets

A level is a data asset.

Fields likely needed:

- id
- name
- intro text
- starting grid
- piece bag rules
- blight rules
- bloom rules
- score or objective target
- unlocks

## 9. Documentation Assets

Markdown itself is an asset class for this project.

Required docs per feature:

- design intent
- rules
- data fields
- visual notes
- tuning parameters
- tests
