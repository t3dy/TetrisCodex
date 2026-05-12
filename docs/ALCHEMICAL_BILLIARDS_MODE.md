# Alchemical Billiards Mode

Alchemical Billiards is a planned pool-shot puzzle mode where the player aims a cue shot into an alchemical laboratory table. Balls, blocks, apparatus, vessels, pads, and reagents collide in zany cascading ways, using the shared alchemy block system.

This is a plan only. No prototype should be built until the basic collision/cascade vocabulary is stable.

## Original Prompt

The user asked for "a pool shot game mode where players make pool shots that will interfere with the system of alchemical lab furniture or blocks with whatever properties in various zany cascading ways." They also mentioned trying a Kirby's Dream Course 3D-ish environment later, but asked to leave that as a stub and not build yet.

## Interpretation

I interpret this as a physics puzzle mode with:

- pool/billiards aiming as the primary input
- alchemical furniture as bumpers, pockets, hazards, and reaction machines
- alchemical blocks as collision bodies or targets
- cascading reactions after impact
- readable feedback describing what the shot did
- optional later expansion into an isometric or 3D-ish dream-course environment

This should not be Balance Tetris with a pool skin. It should be a separate mode that uses shared `alchemy-block/v1` assets through a new collision adapter.

## Working Title

Primary title:

- Alchemical Billiards

Possible alternate titles:

- Hermetic Pool
- Athanor Billiards
- Philosopher's Table
- Cue of Projection
- The Green Table

## Core Player Loop

1. Survey the table.
2. Aim the cue ball.
3. Set force and optional spin.
4. Take the shot.
5. Watch collisions trigger apparatus and block reactions.
6. Score successful pockets, transformations, separations, or receiver deliveries.
7. Read the move feedback.
8. Plan the next shot from the altered lab state.

## Controls

Recommended first pass:

| Action | Mouse | Keyboard |
| --- | --- | --- |
| Aim | drag from cue ball | left/right arrows |
| Set power | drag distance or slider | up/down arrows |
| Add spin | small spin control | A/D or Q/E |
| Shoot | release mouse or click button | Space |
| Inspect block | hover/click | Tab cycle |
| Restart shot | button | R |

This mode should use the same feedback readout principle as the rest of the arcade: every shot reports what happened in plain language.

Example:

```text
Shot: cue ball struck Volatile Mercury at medium force.
Mercury slid into the Alembic, released vapor, and nudged Sulphur toward the furnace.
Table heat +2. Receiver progress: Projection 1/3.
```

## Shared Intent Events

Alchemical Billiards should translate controls into shared events:

```js
{
  type: 'strike_body',
  actorId: 'cue',
  targetId: 'cue_ball',
  angle: -0.42,
  force: 0.76,
  spin: { x: 0.1, y: -0.2 },
  source: 'mouse_drag_release'
}
```

Other events:

- `collide_body`
- `activate_apparatus`
- `pocket_substance`
- `route_substance`
- `transform_block`
- `tune_physics`
- `inspect_source`

## Proposed Adapter

Future shared engine adapter:

```js
AlchemyBlockEngine.adapters.toBilliardsBody(block)
```

Output fields:

```js
{
  id,
  name,
  emoji,
  color,
  radius,
  mass,
  friction,
  restitution,
  volatility,
  fixed,
  combustible,
  slippery,
  pocketAffinity,
  collisionTags,
  source,
  block
}
```

Adapter logic:

- Salt becomes heavy, high-friction, low-bounce, stable.
- Mercury becomes light, slippery, high-spin, wandering.
- Sulphur becomes medium mass, oily, heat/cascade prone.
- Zodiac apparatus becomes table furniture, bumpers, gates, channels, or pockets.
- Planetary affinity can decide scoring pockets or receiver colors.

## Apparatus Furniture

| Apparatus | Pool-table role | Cascade behavior |
| --- | --- | --- |
| Crucible | hot bumper | Adds heat to collided bodies; can ignite Sulphur. |
| Mold | catch tray | Freezes or fixes moving matter into a temporary obstacle. |
| Clamp | pin / stopper | Grabs a body for one turn, changing future shot geometry. |
| Solvent Jar | wet hazard | Reduces friction and makes later shots slippery. |
| Athanor | slow heater | Accumulates heat every time a ball passes nearby. |
| Alembic | vapor gate | Converts volatile hits into upward/sideways drift. |
| Sublimator | ramp / lift | Launches a body over low obstacles in the 3D-ish branch. |
| Separator | splitter | Divides a compound ball into two smaller bodies. |
| Censer | smoke pocket | Obscures predicted paths after collision. |
| Fermenter | growth bumper | Spawns a residue or bonus body after repeated hits. |
| Multiplier | cloning gate | Copies a small body with reduced mass. |
| Projector | scoring pocket | Transmutes properly routed matter into score. |

## Substance Behavior

| Substance | Collision personality | Design use |
| --- | --- | --- |
| Salt | heavy, stable, deadens rebounds | Create deliberate blockers and reliable bank shots. |
| Mercury | slick, spin-sensitive, hard to stop | Create trick shots and chain nudges. |
| Sulphur | oily, combustible, cascade-prone | Create risky high-score explosions. |
| Apparatus-only tile | table furniture | Create bumpers, gates, channels, pockets, switches. |
| Wild Hunt token | omen ball | Add moving targets, wind bursts, sound cues. |
| VALIS crystal | beam prism | Reveal hidden pocket affinities or split trajectories. |

## Scoring Families

### Pocket Scoring

Sink the right matter into the right receiver:

- lunar/left pocket
- solar/right pocket
- mercury/either pocket
- planetary pockets
- process-specific apparatus pockets

### Cascade Scoring

Score by causing desired reaction chains:

- dissolve then separate
- heat then project
- fix volatile matter
- multiply a reagent then pocket both copies

### Laboratory Preservation

Score by getting results without destroying the lab:

- avoid overheating
- avoid contaminating receivers
- leave furniture intact
- finish under a shot limit

### Trick Shot Scoring

Score style:

- bank shots
- multi-collisions
- precise low-force touch shots
- spin shots
- long chains

## Failure Conditions

Possible loss states:

- table heat exceeds threshold
- important apparatus breaks
- wrong substance enters a forbidden receiver
- cue ball falls into the void/moat
- cascade continues too long and contaminates the lab
- shot limit runs out

For early prototypes, failure should be forgiving. The player should get a chance to learn before the lab detonates.

## Example Level Concepts

### The First Projection

Goal: pocket a Sun-aligned Sulphur ball into the Projector after one Crucible bounce.

Teaches:

- aiming
- power
- simple apparatus scoring

### Wet Table Of Dissolution

Goal: use a Solvent Jar to reduce friction, then slide Mercury into a lunar receiver.

Teaches:

- surface wetness
- slippery cascade
- soft shots

### The Clamp And The Alembic

Goal: pin a Salt ball with a Clamp so Mercury can bank off it into an Alembic.

Teaches:

- temporary obstacles
- volatility routing
- planned geometry changes

### Sulphur Chain

Goal: ignite Sulphur just enough to open a gate, then pocket it before heat exceeds the limit.

Teaches:

- risky cascade timing
- heat threshold
- emergency containment

### Multiplication Rack

Goal: split and multiply a reagent, then pocket exactly three copies.

Teaches:

- controlled copying
- avoiding clutter
- shot planning over multiple turns

## Dream-Course 3D-ish Stub

The user mentioned a Kirby's Dream Course 3D-ish environment. This should remain a later branch, not the first build.

Possible future direction:

- isometric or low-poly 3D lab table
- ramps, bowls, gutters, bridges, and elevated apparatus
- the ball can hop, arc, or roll along sloped alchemical furniture
- Sublimation and Projection become vertical mechanics
- wind, vapor, and occult beams bend motion in 3D-ish space
- camera rotates around the table

Risks:

- much higher implementation cost
- harder to author levels in the current WYSIWYG builder
- harder to make collisions feel fair
- more visual polish required before it feels good

Recommended sequence:

1. Build 2D top-down billiards first.
2. Make collision and cascade rules readable.
3. Add level-builder support for table furniture.
4. Then prototype a tiny 3D-ish table as a separate experiment.

## Asset Classes Needed

| Asset class | Examples | Needed for first build |
| --- | --- | --- |
| Cue tools | cue, power meter, spin marker | yes |
| Balls | Salt, Sulphur, Mercury, planetary balls | yes |
| Apparatus furniture | crucible, alembic, clamp, projector | yes |
| Pockets/receivers | lunar, solar, planetary, process pockets | yes |
| Surfaces | dry, wet, frozen, oily, magnetic | yes |
| Cascades | vapor, flame, residue, crystal, beam | yes |
| 3D-ish ramps | ramp, bowl, gutter, jump pad | later |

## Implementation Plan

### Phase 0: Documentation

Current phase. Define the mode without building it.

Deliverables:

- this document
- adapter-contract entry
- README and guide references

### Phase 1: Physics Spike

Build a private prototype with:

- cue ball
- one target ball
- cushion bounce
- friction
- pocket detection
- readout text

No alchemy cascades yet.

### Phase 2: Alchemy Body Adapter

Add `toBilliardsBody(block)`.

Use:

- mass
- friction
- volatility
- combustibility
- fixed/slippery tags
- planetary receiver affinity

### Phase 3: Apparatus Furniture

Add:

- bumpers
- pockets
- gates
- wet/oily/frozen surfaces
- heat and vapor triggers

### Phase 4: Cascade Rules

Add:

- collision reaction queue
- heat/wet/volatile fields
- chain limit
- scoring outcomes
- move readout summaries

### Phase 5: Level Builder Integration

Support:

- table size
- ball starts
- apparatus placement
- surface zones
- receivers
- shot limits
- cascade thresholds

### Phase 6: Dream-Course Branch

Only after the 2D version is satisfying:

- isometric rendering
- slopes and ramps
- vertical launch mechanics
- camera control

## Open Questions

1. Should the first playable prototype use simple canvas physics or a small physics library?
2. Should balls be circular only, or can alchemical blocks be rectangular obstacles?
3. Should the player shoot only a cue ball, or can they choose which substance to strike?
4. Should pockets score immediately, or should pocketed matter continue reacting in receiver vessels?
5. Should surfaces be level-authored zones or properties of furniture pieces?

## Recommendation

Build the first version as a 2D top-down pool table with simple deterministic physics. Keep the zany cascade layer, but make every reaction explain itself in the readout. Once that feels legible, then consider the 3D-ish dream-course experiment.
