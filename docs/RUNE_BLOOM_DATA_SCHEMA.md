# Rune Bloom Data Schema

This document proposes data structures for making Rune Bloom more data-driven.

## Element

```js
{
  id: 'aqua',
  name: 'Aqua',
  color: '#2dd4bf',
  light: '#99f6e4',
  dark: '#0f766e',
  bloomRule: 'standard',
  tags: ['water', 'flow']
}
```

## Shape

```js
{
  id: 'sprig',
  name: 'Sprig',
  cells: [[0,0], [1,0], [2,0], [1,1]],
  spawnWeight: 1,
  difficulty: 2,
  tags: ['branching', 'starter']
}
```

## Piece

```js
{
  shapeId: 'sprig',
  elementId: 'aqua',
  modifiers: [],
  rot: 0
}
```

## Board Cell

```js
{
  kind: 'rune',
  elementId: 'aqua',
  modifiers: ['salt'],
  age: 0,
  seed: false
}
```

Blight:

```js
{
  kind: 'blight',
  variant: 'standard',
  strength: 1,
  age: 0
}
```

## Reaction

```js
{
  id: 'sulphur_spark',
  name: 'Sulphur Spark',
  trigger: {
    type: 'placement',
    requiresModifier: 'sulphur'
  },
  effect: {
    type: 'clearRadius',
    radius: 1,
    affects: ['blight']
  },
  score: {
    perCell: 8
  },
  visual: {
    particleColor: '#f97316',
    flash: 'ember'
  }
}
```

## Level

```js
{
  id: '1-1-first-seed',
  chapter: 1,
  name: 'First Seed',
  boardSize: 9,
  startGrid: [
    '.........',
    '.........',
    '.........',
    '.........',
    '....A....',
    '.........',
    '.........',
    '.........',
    '.........'
  ],
  pieceRules: {
    elements: ['aqua', 'ember'],
    shapes: ['bar', 'square', 'hook'],
    draftSize: 1
  },
  blightRules: {
    enabled: false,
    interval: 0
  },
  objective: {
    type: 'score',
    target: 60
  }
}
```

## Mode

```js
{
  id: 'garden',
  name: 'Garden',
  rules: {
    adjacency: 'orthogonal',
    bloomLength: 4,
    blightInterval: 3
  },
  ui: {
    showQueue: true,
    showGoal: true,
    showPalette: false
  }
}
```

## Save Data

```js
{
  version: 1,
  bestScore: 280,
  unlockedLevels: ['1-1-first-seed'],
  completedChallenges: [],
  settings: {
    reducedMotion: false,
    colorAssist: false
  }
}
```

## Implementation Note

The current prototype keeps these structures inline for speed. The next refactor should move registries into clearly named constants:

- `ELEMENTS`
- `SHAPES`
- `REACTIONS`
- `LEVELS`
- `MODES`

Only when those become large should they move to separate `.js` or `.json` files.
