# Moat / Drawbridge Puzzle Mode

Puzzle ideas for Balance Tetris where the goal is not merely to avoid tipping. Instead, the player intentionally tips or lowers a platform to create a usable bridge across a moat.

## Core Fantasy

The castle drawbridge has fallen, jammed, or been replaced by an unstable alchemical platform. The player must stack blocks so the platform tips into a bridge position, then make the top surface flat and strong enough for the king's horses to ride across.

This turns Balance Tetris from a survival game into an engineering puzzle.

## One-Sentence Pitch

Build a stack tall enough, flat enough, and stable enough that when the platform tips over the moat, it becomes a rideable drawbridge.

## Why This Works

The existing game already has:

- platform tilt
- stacked block geometry
- surface contours
- physics parameters
- alchemical materials
- intentional side dumping

The moat puzzle adds:

- destination geometry
- a target tilt angle
- passability checks
- load-bearing tests
- scenario goals beyond score

## Basic Puzzle Loop

1. Start with a platform on one side of a moat.
2. Place blocks to shape the top surface.
3. Use weight distribution to tip the platform toward the far bank.
4. Lock the platform when it reaches the target drawbridge angle.
5. Run a crossing test: can the horses ride across?
6. Win if the bridge is tall, flat, connected, and stable under hoof load.

## Win Conditions

A moat puzzle can require several checks.

### 1. Reach Angle

The platform must tip into the bridge zone.

Example:

```js
targetTilt: 32deg
tolerance: 5deg
```

Too flat:

- bridge does not reach the far bank

Too steep:

- horses cannot climb

### 2. Span The Moat

The tipped platform plus stack must touch or overlap the far bank.

Fields:

```js
moatWidth: 7 cells
nearBankHeight: 0
farBankHeight: 2
```

### 3. Flat Enough Surface

The top walkable path must not vary too much in height.

Example:

```js
maxStepHeight: 1 cell
minPathWidth: 2 cells
```

### 4. Strong Enough

The bridge must survive horse load.

Example:

```js
horseWeight: 4
hoofImpacts: [left, right, left, right]
```

If the surface includes fragile glass, loose Mercury, or unsupported overhangs, the crossing may fail.

### 5. Clear Passage

No towers, spikes, flames, or volatile hazards may block the path.

## Loss Conditions

- bridge tips beyond safety threshold
- path has a gap
- path is too steep
- horse load collapses a support
- alchemical hazard injures the procession
- drawbridge falls short of far bank
- wrong-side dumping releases a hostile substance into the moat

## Puzzle Types

### 1. Get Across The Moat

Baseline puzzle.

Goal:

- tip platform into a bridge and pass one horse.

Mechanics:

- ordinary blocks
- wide base
- forgiving tilt tolerance

### 2. The King's Horses

Load-bearing test.

Goal:

- pass several horse tokens in sequence.

Mechanics:

- each horse applies weight along the path
- weak supports crack
- bridge can sag or slip

### 3. Royal Coach

Flatness puzzle.

Goal:

- create a path smooth enough for a wheeled coach.

Mechanics:

- stricter max step height
- path width must be 2+ cells

### 4. Alchemical Moat

The moat itself reacts.

Goal:

- cross without dropping forbidden substances into the water.

Mechanics:

- Mercury in water becomes fog
- Sulphur in water creates steam burst
- Salt in water crystallizes stepping stones

### 5. Siege Night

Wild Hunt / siege crossover.

Goal:

- build and cross before the Hunt passes.

Mechanics:

- hounds shake the bridge
- wind pushes falling pieces
- hoofbeats test surface stability

### 6. Flooded Drawbridge

Rising water pressure.

Goal:

- finish bridge before water rises too high.

Mechanics:

- every N turns, moat level rises
- lower cells become submerged
- submerged Salt crystallizes; submerged Sulphur extinguishes

### 7. The Broken Portcullis

Height puzzle.

Goal:

- bridge path must pass under a low gate.

Mechanics:

- too tall fails
- too low fails
- ideal arch/flat path required

### 8. The King's Funeral

Slow procession puzzle.

Goal:

- pass a heavy procession of dead/ghostly riders.

Mechanics:

- connects to Wild Hunt / Nachtvolk
- phantom horses only weigh something during hoofbeat turns

## Alchemical Block Roles

### Salt

Use:

- stabilizes walkway
- crystallizes in moat
- prevents sliding

Puzzle role:

- best for bridge deck and anchor points

### Sulphur

Use:

- burns away obstructions
- dangerous near wood/horse path
- reacts with water

Puzzle role:

- useful demolition tool, risky surface material

### Mercury

Use:

- fluid, slippery, wildcard
- can fill small gaps
- dangerous for hoof traction

Puzzle role:

- bridge lubricant / gap filler / trap

### Saturn / Lead

Use:

- heavy counterweight
- helps tip the platform down

Puzzle role:

- ballast, not walkway

### Sun / Gold

Use:

- valuable royal road material
- stable but heavy

Puzzle role:

- bonus path material

### Moon / Silver

Use:

- reflective, slippery, night bridge

Puzzle role:

- interacts with Wild Hunt / moonlit crossing

## Horse Crossing Simulation

Simple version:

1. Find the highest occupied cell in each bridge column.
2. Convert the tilted platform to a walkable path approximation.
3. Check adjacent height differences.
4. Move horse token across one step at a time.
5. Apply temporary load at current hoof cell.
6. Recompute tilt and support after each step.

Fields:

```js
horse = {
  weight: 4,
  maxStep: 1,
  requiresWidth: 1,
  panicIfTiltAbove: 35deg
}
```

Coach version:

```js
coach = {
  weight: 8,
  maxStep: 0,
  requiresWidth: 2,
  wheelbase: 3
}
```

## Bridge Quality Scoring

Potential score components:

- +10 for reaching target tilt
- +5 per continuous walkable cell
- +20 for no gaps
- +20 for Salt-anchored deck
- +30 for crossing all horses
- +50 for royal coach crossing
- -10 per dangerous material on path
- -20 if bridge overshoots tilt zone
- -30 if any horse falls

## Level Examples

### Level 1: First Crossing

Platform:

- Wide Base

Goal:

- reach 25-35 degrees
- pass one horse

Special:

- no alchemy

### Level 2: Counterweight Lesson

Platform:

- Seesaw

Goal:

- use heavy Saturn blocks as ballast to lower bridge.

Special:

- Saturn pieces appear frequently

### Level 3: Salt Deck

Goal:

- make at least 4 walkable Salt cells.

Special:

- non-Salt blocks can slide during crossing.

### Level 4: Mercury Gap

Goal:

- fill a one-cell gap with Mercury without making the whole bridge too slippery.

Special:

- Mercury counts as path but lowers traction.

### Level 5: Sulphur Demolition

Goal:

- burn away a prebuilt obstruction before lowering the bridge.

Special:

- Sulphur near the final path fails the horse safety check.

### Level 6: Far Bank High

Goal:

- build tall enough to reach an elevated far bank.

Special:

- bridge must not exceed max slope.

### Level 7: Coach Road

Goal:

- two-cell-wide flat path.

Special:

- Royal Coach load test.

### Level 8: Night Ride

Goal:

- cross during Wild Hunt beats.

Special:

- hoofbeats shake the platform every third turn.

## UI Elements Needed

- moat and far bank render
- target tilt arc
- bridge reach indicator
- walkable path overlay
- horse/coach token
- crossing test button
- pass/fail report
- path flatness meter
- structural load meter

## Integration With Physics Lab

Moat levels should expose or lock certain physics settings.

Examples:

- Windy Siege: wind fixed to Right+
- Frozen Drawbridge: friction low, slip high
- Tarred Planks: friction high
- Loose Beam: stiffness low
- Royal Inspection: shake low, strict tilt

## Implementation Roadmap

### Phase 1: Design-only

Status: this document.

### Phase 2: Static Moat Renderer

Add a mode that visually shows:

- near bank
- moat
- far bank
- target tilt zone

### Phase 3: Bridge Goal Check

Implement:

- target tilt check
- bridge reach check
- flatness check

### Phase 4: Horse Token

Implement:

- crossing animation
- height step validation
- simple load test

### Phase 5: Alchemical Materials

Implement:

- Salt path bonus
- Mercury slipperiness penalty
- Sulphur hazard
- Saturn ballast

### Phase 6: Campaign

Build 8-12 hand-authored moat puzzles.

## Why This Is Strong

This puzzle family changes the emotional goal of Balance Tetris:

- not survival but construction
- not avoiding tilt but using tilt
- not score alone but functional architecture
- not abstract physics but a story problem

It also gives alchemical properties a concrete engineering purpose. Salt, Mercury, Sulphur, Saturn, and Gold stop being flavor labels and become bridge materials with consequences.
