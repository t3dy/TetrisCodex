# VALIS Space Taxi Mode

This mode mixes old-school Space Taxi-style ship handling with Balance Tetris, alchemical cascades, and PKDian alien-world blocks. The player pilots a small craft through variable gravity, lands on tilting alchemical platforms, fires a VALIS beam to reveal hidden properties, and transports strange passengers/cargo without setting off the wrong laboratory cascade.

## Core Fantasy

You are a taxi pilot working between occult laboratories, alien stations, ruined colonies, and unstable reality strata. Every landing pad is a balance platform. Every passenger is also a block with mass, volatility, allegiance, or hidden properties. The ship can rescue, deliver, reveal, nudge, destabilize, or transmute.

## Player Verbs

- **Thrust**: accelerate the ship against local gravity.
- **Rotate/strafe**: line up for controlled landing.
- **Land**: touch down gently on pads that may tilt or slide.
- **Dock**: pick up or drop off emoji passengers/cargo.
- **Fire VALIS beam**: reveal hidden block properties, stabilize cursed matter, or trigger revelation cascades.
- **Tow or tractor**: pull loose blocks or cargo in low gravity.
- **Vent alchemical exhaust**: push blocks, spread sulphur fire, freeze wet surfaces, or clear kipple.
- **Tip for profit**: deliberately cause the platform to dump the correct substance into the correct receiver.

## Control Model

This should feel more like careful vehicle handling than falling-block placement.

| Input | Ship Action | Notes |
| --- | --- | --- |
| Left / A | Rotate counterclockwise or strafe left | Mode setting can choose lunar-lander rotation or direct arcade strafe. |
| Right / D | Rotate clockwise or strafe right | Keep a toggle for classic vs accessible controls. |
| Up / W | Main thrust | Uses current level gravity and wind. |
| Down / S | Brake / landing gear assist | Consumes battery or heat budget. |
| Space | Fire VALIS beam | Reveals or transforms targeted blocks. |
| E | Dock / pick up / drop off | Requires stable landing or close hover. |
| Q | Tractor/tow pulse | Pulls a loose object toward the ship. |
| Shift | Precision thrust | Lower acceleration for landing. |
| Mouse move | Aim VALIS beam or tractor cone | Keyboard-only beam aim should snap to compass directions. |
| Mouse click | Fire selected tool | Beam, tractor, or exhaust depending on selected tool. |

## Physics Settings

The mode should reuse Physics Lab parameters and add ship-specific tuning.

| Parameter | Meaning | Gameplay Use |
| --- | --- | --- |
| `gravity` | Downward acceleration | Basic landing challenge. |
| `windSpeed` | Horizontal drift | Space storm / bellows / station exhaust. |
| `platformStiffness` | Resistance to tilt | Heavy stations vs rickety occult benches. |
| `blockFriction` | Surface grip | Determines whether cargo slides after landing. |
| `blockSlipperiness` | Slide tendency | Wet/frozen worlds, oil spills, mercury fields. |
| `shipThrust` | Acceleration from main engine | Level difficulty and ship class. |
| `shipMass` | How much the taxi affects landing pads | Heavy craft can tip platforms just by landing. |
| `landingTolerance` | Safe impact speed | Hard modes punish rough landings. |
| `beamHeat` | Beam overuse meter | Prevents spamming reveal/stabilize. |
| `tractorStrength` | Pull force | Moves loose blocks/cargo in low gravity. |
| `cascadeSensitivity` | How easily labs chain-react | Alchemy puzzle pressure. |

## Landing Pads And Platforms

The landing pad is not a static floor. It is a Balance Tetris platform with local physics.

| Platform Type | Taxi Challenge | Block Challenge |
| --- | --- | --- |
| Seesaw Pad | Ship landing changes tilt immediately. | Cargo must be dropped near counterweight zones. |
| Frozen Pad | Ship skids after touchdown. | Cargo slides unless fixed by Salt tiles. |
| Wet Crucible Pad | Gentle landing still causes chemical drift. | Mercury/oil cargo can leak into cascade channels. |
| Magnetic Pad | Ship metal hull is pulled off line. | Iron/star blocks snap into fields. |
| Low-G Moon Pad | Landing is easy but cargo floats away. | Tractor tool becomes central. |
| High-G Furnace Pad | Ship burns fuel fast and impacts hard. | Heavy sulphur blocks can ignite neighbors. |
| Suspended Lab Pad | Pad sways under ship mass. | VALIS beam can reveal safe anchor points. |
| Two-Fulcrum Bridge Pad | Landing must distribute weight between supports. | Overhang detection becomes taxi route planning. |

## VALIS Beam Rules

The beam is the signature mechanic. It should be useful, risky, and visually satisfying.

Beam modes:

- **Reveal**: exposes hidden mass, exit-side affinity, volatility, authenticity, or curse state.
- **Stabilize**: briefly increases support and friction of a lit block cluster.
- **Unmask**: turns false emoji overlays into their true properties.
- **Transduce**: converts one alchemical family into another when paired with zodiac apparatus.
- **Disrupt**: breaks Black Iron Prison locks or synthetic camouflage.
- **Ignite**: in high-energy levels, beam heat can start sulphur cascades.

Beam constraints:

- Beam builds heat.
- Beam can only reveal in a narrow cone unless upgraded.
- Overheated beam causes hallucinated readings.
- Some alien-world blocks react violently to revelation.

## Core Loop

1. A destination requests a passenger, cargo block, or alchemical reagent.
2. Player flies from depot to platform.
3. Player lands or hovers near the pickup.
4. Player scans/reveals uncertain blocks with VALIS beam.
5. Player picks up cargo/passenger.
6. Player navigates wind, gravity, moving platforms, and lab hazards.
7. Player lands at delivery pad.
8. Dropping cargo shifts balance and may trigger cascades.
9. Player earns fare, alchemical profit, revelation bonus, and hazard bonus.

## Win/Loss Conditions

Win conditions:

- Complete required deliveries.
- Keep platform tilt within safe bounds.
- Dump specified substances off the correct side.
- Reveal hidden truth targets with the beam.
- Keep passengers alive/awake/real.

Loss conditions:

- Ship crash from high impact.
- Platform tips beyond limit.
- Passenger/cargo falls into wrong receiver.
- Laboratory cascade reaches forbidden apparatus.
- Beam overheats and corrupts the whole pad.
- Fuel, oxygen, or reality-integrity meter reaches zero.

## Mode Variants

### Taxi Dispatch

Open-ended fare mode. Pick up passengers, deliver them to pads, survive increasingly strange physics.

### Laboratory Courier

Puzzle mode. Deliver exact reagents to exact apparatus tiles without triggering the wrong cascade.

### VALIS Rescue

Beam-focused mode. Locate hidden passengers trapped inside false blocks or Black Iron Prison cells.

### Kipple Cleanup

Debris-hauling mode. Tow junk out of low-gravity cavities and tip it off the profitable disposal side.

### Cold-Pac Evacuation

Half-life passengers phase between solid and ghost states. The ship must keep them in support fields long enough to deliver.

### Hexagram Flight Control

Each delivery begins with a hexagram physics modifier. Gravity, wind, friction, and destination authenticity may branch.

### Moat Airlift

Bridge-building puzzle hybrid. The taxi drops blocks onto a drawbridge platform, then must fly horses/royal cargo across once the bridge is balanced.

## First Playable Slice

Build the smallest fun version first:

1. Single screen with ship, one tilting platform, and one pickup/dropoff pad.
2. Arrow/WASD thrust controls.
3. One passenger block with mass.
4. Landing impact changes platform tilt.
5. Space fires a reveal beam.
6. E picks up/drops off passenger.
7. Deliver three passengers without tipping the pad or crashing.

This is enough to prove the hybrid before adding large campaign systems.

## Data Shape

```js
const valisTaxiLevel = {
  id: 'cold_pac_airport',
  title: 'Cold-Pac Airport',
  world: 'half_life_terminal',
  platform: {
    type: 'seesaw',
    stiffness: 0.82,
    maxTilt: 24,
    surface: 'frozen'
  },
  physics: {
    gravity: 0.52,
    windSpeed: 0.18,
    shipThrust: 1.1,
    shipMass: 1.4,
    landingTolerance: 0.28,
    tractorStrength: 0.7,
    cascadeSensitivity: 0.45
  },
  tools: ['valis_reveal', 'tractor_pulse', 'precision_thrust'],
  objectives: [
    { type: 'deliver', cargoClass: 'half_life_passenger', count: 3 },
    { type: 'reveal', targetClass: 'hidden_support', count: 2 },
    { type: 'avoidTilt', maxTilt: 24 }
  ]
};
```

## Integration With Existing Systems

- Reuse Physics Lab sliders for gravity, wind, friction, and slipperiness.
- Reuse Balance Tetris platform types for landing pads.
- Reuse emoji block property taxonomy for cargo/passengers.
- Reuse alchemical exit-side scoring for dumping cargo into receivers.
- Reuse PKD mode assets for hidden properties, VALIS beam, kipple, half-life, synthetic blocks, and hexagram modifiers.
- Reuse Wild Hunt apparition logic for false passengers and phantom landing pads.

