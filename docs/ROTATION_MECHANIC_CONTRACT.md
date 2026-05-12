# Rotation Mechanic Contract

This document defines rotation as a reusable game verb across TetrisCodex modes. The point is to let Balance Tetris, character puzzles, construction kits, lab machines, and future vehicle modes share the idea of turning alchemical matter without sharing the same input scheme.

## User Prompt

The user asked for various game modes to plug into the Tetris rotate mechanic. One example was a three-character puzzle mode, like old multi-character puzzle games, where players control characters who can pick up blocks and sometimes rotate them depending on their power and tools.

## Interpretation

I am treating rotation as a shared intent, not as a property of falling tetrominoes alone.

In Balance Tetris, rotation means turning the active falling piece. In a character puzzle, rotation can mean a strong character turning a carried slab, a clever character spinning a slippery block, or a tool-user turning a hot apparatus without touching it. In a construction kit, rotation is an editor transform. In a lab mode, rotation might aim a furnace, alembic, prism, mirror, or conveyor.

## Shared Intent Event

```js
{
  type: 'rotate_block',
  actorId: 'salt-bearer',
  blockId: 'taurus_salt_bridge',
  source: 'keyboard:R',
  direction: 1,
  pivot: 'held',
  before: { x: 8, y: 6, w: 3, h: 1, orientation: 0 },
  after: { x: 8, y: 6, w: 1, h: 3, orientation: 1 },
  allowed: true,
  reason: 'Salt-Bearer has the strength to turn fixed matter.'
}
```

## Rotation Forms

| Form | Meaning | Example mode |
| --- | --- | --- |
| `rotate_piece` | Turn the active falling shape. | Balance Tetris |
| `rotate_carried_block` | Actor turns a block held in their hands or tool. | Alchemical Three |
| `rotate_adjacent_block` | Actor braces against a neighboring block and turns it in place. | Sokoban/lab puzzle |
| `rotate_apparatus` | Aim or reconfigure a machine tile. | Lab cascade |
| `rotate_platform` | Change the world, bridge, drawbridge, or landing pad angle. | Moat, VALIS Taxi |
| `rotate_editor_object` | WYSIWYG authoring transform. | Level Builder |

## Preconditions

A mode should check rotation through these gates:

1. Actor permission: Does the current actor/tool have the strength, heat-resistance, slipperiness control, or ritual authority?
2. Block permission: Is the block fixed, volatile, oily, hot, fragile, large, or locked by source rule?
3. Space clearance: Would the rotated footprint collide with walls, characters, other blocks, or forbidden terrain?
4. Pivot rule: Is the block rotating around its center, an edge, a hinge, a held origin, or an apparatus socket?
5. Cost: Does rotation spend time, heat, fuel, balance, stamina, omen, beam charge, or move count?
6. Consequence: Does a failed rotation merely refuse, crack the block, slide it, ignite it, tip a platform, or trigger narration?

## Block Adapter

The shared engine now exposes:

```js
AlchemyBlockEngine.adapters.toCarryBlock(block)
```

The adapter emits:

- `mass`
- `friction`
- `volatility`
- `fixed`
- `combustible`
- `slippery`
- `carryClass`
- `rotatable`
- `tags`
- `source`

Modes should not inspect Balance Tetris cells when they need carry/rotate behavior. They should start from `alchemy-block/v1` and adapt with `toCarryBlock`.

## Character Ability Model

```js
{
  id: 'mercury-scout',
  canCarry: ['standard', 'slippery'],
  canRotate: ['standard', 'slippery'],
  tools: ['gloves', 'quickstep'],
  maxMass: 1.25
}
```

The current recommended first pass uses three specialists:

| Actor | Strength | Rotation Specialty | Weakness |
| --- | --- | --- | --- |
| Salt-Bearer | Heavy and fixed blocks | Stable bridge slabs | Slow, cannot handle volatile slick blocks well |
| Mercury-Runner | Slippery and volatile blocks | Quick turns, narrow corridors | Cannot lift heavy Salt |
| Sulphur-Smith | Hot and combustible blocks | Tool-assisted furnace turns | Dangerous with volatile Mercury |

## Feedback Readout

Every rotation attempt should emit readable feedback:

- `Salt-Bearer rotated Congelation Salt into a vertical brace.`
- `Mercury-Runner cannot hold the fixed Salt slab; it is too heavy.`
- `Sulphur-Smith turned the Calcination Sulphur block; heat rises along the edge.`
- `Rotation blocked: the Alembic would strike the north wall.`

## Design Alternatives

Other choices we could make later:

- Momentum rotation where large blocks keep swinging unless braced.
- Two-character cooperative rotation where one actor lifts and another pivots.
- Tool inventories: crank, fulcrum, gloves, tongs, mirror, frost-salve.
- Alchemical permissions keyed to zodiac process rather than Tria Prima.
- Grid rotation only in puzzle modes, continuous rotation in physics modes.
- Editor mode that previews all possible legal rotations for a selected block.

## Implementation Rule

Rotation is a shared intent. The local mode owns the exact physics, input timing, animation, and failure consequence.
