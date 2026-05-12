# VALIS Space Taxi Asset Pack

This pack defines emoji-style assets for the VALIS Space Taxi mode: ships, passengers, cargo, alien-world hazards, landing pads, alchemical apparatus, beam effects, and cascade triggers. These are game-design assets first; final implementation can render them as emoji, sprite tiles, canvas icons, or generated bitmap cutouts later.

## Asset Grammar

Every asset should have:

- **Readable emoji face**: quick recognition on canvas.
- **Gameplay property**: mass, volatility, support, truth state, friction, passenger need, cascade role.
- **Alchemical role**: Salt/fixed, Mercury/volatile, Sulphur/oily/combustive, apparatus/process, or prima materia.
- **PKDian role**: hidden reality, false identity, signal, decay, artificial life, prison, or revelation.

## Ship Classes

| ID | Name | Emoji | Mechanical Profile | Use |
| --- | --- | --- | --- | --- |
| `valis_cab` | VALIS Cab | 🚕✨ | Balanced thrust, medium mass, beam efficient | Default ship. |
| `lunar_hackney` | Lunar Hackney | 🚀 | High thrust, fragile landing gear | Low-gravity courier levels. |
| `black_iron_shuttle` | Black Iron Shuttle | ⛓️🛸 | Heavy, magnetic, can break locks | Prison/rescue levels. |
| `mercury_skiff` | Mercury Skiff | 🛶☿ | Slippery, low mass, great strafe | Wet/frozen platforms. |
| `sulphur_burner` | Sulphur Burner | 🔥🛸 | Strong exhaust, overheats fast | Cascade-trigger levels. |
| `salt_lander` | Salt Lander | 🧂🚀 | Heavy but stable landing, anchors cargo | Precision delivery. |
| `scanner_pod` | Scanner Pod | 👁️🚁 | Weak cargo capacity, strong reveal | Hidden-property puzzles. |
| `kipple_hauler` | Kipple Hauler | 🗑️🚚 | Slow, high tractor strength | Cleanup/towing mode. |
| `hexagram_sloop` | Hexagram Sloop | ☷🛸 | Physics changes on each delivery | High Castle/hexagram levels. |
| `cold_pac_ambulance` | Cold-Pac Ambulance | 🚑🧊 | Life-support aura, poor thrust | Half-life passenger rescue. |

## Passenger Classes

| ID | Name | Emoji | Mass | Behavior | Delivery Need |
| --- | --- | --- | --- | --- | --- |
| `runciter_signalman` | Signalman | 📻 | 1.0 | Emits warnings, may be noise | Deliver to antenna pad. |
| `half_life_patient` | Half-Life Patient | 🧊👤 | 0.8/1.4 phase | Support flickers | Keep inside life-support field. |
| `android_shepherd` | Android Shepherd | 🤖🐑 | Hidden | Authenticity uncertain | Scan before delivery for bonus. |
| `precog_child` | Precog Child | 🔮👶 | 0.7 | Shows next hazard | Deliver gently, no hard landings. |
| `gnostic_prisoner` | Gnostic Prisoner | ⛓️👁️ | 1.2 | Locked until beam hit | Break prison before pickup. |
| `perky_pat_doll` | Miniature Passenger | 🪆 | 0.3 | Light, fragile, high fare | Avoid shock/tilt. |
| `scramble_agent` | Scramble Agent | 🕶️ | Variable | Changes displayed identity | Scan or risk false fare. |
| `kipple_porter` | Kipple Porter | 🧹 | 1.0 | Cleans one debris cell per stop | Deliver to junk bay. |
| `fallout_oracle` | Fallout Oracle | ☢️🧠 | 1.1 | Mutates nearby cargo | Shield during flight. |
| `zodiac_pilot` | Zodiac Pilot | ♈ | 1.0 | Changes apparatus affinity | Match sign to station. |

## Cargo And Reagent Blocks

| ID | Name | Emoji | Alchemical Family | Physics | Cascade Role |
| --- | --- | --- | --- | --- | --- |
| `volatile_mercury_crate` | Volatile Mercury Crate | ☿📦 | Mercury | Light, slippery, exits either side | Spreads volatility. |
| `fixed_salt_vault` | Fixed Salt Vault | 🧂🔒 | Salt | Heavy, high friction | Anchors adjacent cells. |
| `oily_sulphur_tank` | Oily Sulphur Tank | 🟡🔥 | Sulphur | Medium, leaks, combustible | Ignites fire chain. |
| `prima_materia_capsule` | Prima Materia Capsule | ⚫✨ | Prima materia | Unknown until beamed | Converts by apparatus. |
| `ubik_aerosol` | Ubik Aerosol | 🧴 | Restorative | Light, fragile | Reverses entropy. |
| `kipple_bale` | Kipple Bale | 🗑️📦 | Residue | Annoying ballast | Profitable disposal target. |
| `android_spare_parts` | Android Parts | ⚙️🤖 | Synthetic | Magnetic, medium | Repairs synthetic passengers. |
| `dream_resin` | Dream Resin | 💭🧪 | Delusion | Sticky, false support | Spreads hallucination. |
| `time_tape_reel` | Time Tape Reel | 🎞️ | Timeline | Rolls downhill | Edits next physics segment. |
| `valis_crystal` | VALIS Crystal | 💎👁️ | Revelation | Brittle, high value | Powers beam upgrades. |
| `black_iron_ingot` | Black Iron Ingot | ▦⛓️ | Prison | Very heavy | Locks platform cells. |
| `electric_sheep_cell` | Electric Sheep Cell | 🐑⚡ | Artificial life | Light, empathy-linked | Bonus if protected. |

## Landing Pad Assets

| ID | Name | Emoji | Platform Rule | Taxi Rule |
| --- | --- | --- | --- | --- |
| `runciter_radio_pad` | Radio Pad | 📻▭ | Mild seesaw | Gives next signal after landing. |
| `cold_pac_dock` | Cold-Pac Dock | 🧊▭ | Frozen low friction | Preserves half-life passengers. |
| `black_iron_gate` | Black Iron Gate | ⛓️▭ | Locked support cells | Requires beam unlock. |
| `mercury_puddle_pad` | Mercury Puddle Pad | ☿▭ | Slippery/wet | Ship skids on touchdown. |
| `sulphur_furnace_pad` | Sulphur Furnace Pad | 🔥▭ | Heat cascade | Exhaust may ignite tanks. |
| `salt_anchor_pad` | Salt Anchor Pad | 🧂▭ | High friction | Stabilizes ship/cargo. |
| `hexagram_pad` | Hexagram Pad | ☷▭ | Random modifier each landing | Changes gravity/wind. |
| `kipple_dump_pad` | Kipple Dump Pad | 🗑️▭ | Tilts toward disposal side | Pays for junk. |
| `moat_bridge_pad` | Drawbridge Pad | 🌉▭ | Two-fulcrum bridge | Must land flat enough for crossing. |
| `valis_relay_pad` | VALIS Relay | 👁️▭ | Reveals hidden supports | Recharges beam. |

## Alien-World Hazard Assets

| ID | Name | Emoji | Behavior | Counterplay |
| --- | --- | --- | --- | --- |
| `kipple_cloud` | Kipple Cloud | 🌫️🗑️ | Drifts with wind, adds debris | Tractor, dump pad, cleanup passenger. |
| `black_iron_field` | Black Iron Field | ▦ | Locks ship/cargo trajectory | Beam disrupt, heavy shuttle. |
| `false_pad` | False Pad | 🎭▭ | Looks landable, collapses after scan/landing | Scan before landing. |
| `half_life_fog` | Half-Life Fog | 🧊🌫️ | Phases blocks between support states | Life-support route. |
| `sulphur_plume` | Sulphur Plume | 🔥🌋 | Heat gust plus ignition | Salt shield, precision thrust. |
| `mercury_squall` | Mercury Squall | ☿💨 | Slides cargo horizontally | Anchor pad, Salt cargo. |
| `hexagram_weather` | Hexagram Weather | ☷🌦️ | Changes physics by line draw | Preview and adapt. |
| `scanner_noise` | Scanner Noise | 📺🌀 | Beam reveals false readings | Wait, authenticate, use relay. |
| `fallout_sleet` | Fallout Sleet | ☢️🌨️ | Mutates one exposed block | Shield or exploit. |
| `dream_gravity` | Dream Gravity | 💭⬇️ | Gravity direction may lie | Beam reveals true vector. |

## Beam Effect Assets

| ID | Name | Emoji | Effect |
| --- | --- | --- | --- |
| `beam_reveal` | Reveal Beam | 👁️ | Shows true mass/property. |
| `beam_stabilize` | Stabilizing Beam | 💡 | Raises friction/support briefly. |
| `beam_unmask` | Unmask Beam | 🎭 | Removes false emoji overlay. |
| `beam_unlock` | Prison-Break Beam | ⛓️✨ | Frees locked cell/passenger. |
| `beam_transduce` | Transduction Beam | ⚗️ | Converts alchemical family near apparatus. |
| `beam_purify` | Purifying Beam | 🧴✨ | Reverses entropy or contamination. |
| `beam_overheat` | Overheat Burst | 🔥👁️ | Causes cascade if abused. |
| `beam_refraction` | Crystal Split | 💎 | Beam forks through VALIS crystal. |

## Alchemy Lab Cascade Assets

| ID | Name | Emoji | Trigger | Result |
| --- | --- | --- | --- |
| `athanor_heat_chain` | Athanor Heat Chain | 🔥⚗️ | Sulphur/exhaust near furnace | Burns adjacent volatile cells. |
| `alembic_vapor_chain` | Alembic Vapor Chain | 🧪💨 | Mercury cargo shaken hard | Creates buoyant vapor blocks. |
| `pelican_reflux_loop` | Pelican Reflux Loop | 🔁⚗️ | Beam transduction on vessel | Recycles cargo into upgraded reagent. |
| `crucible_overflow` | Crucible Overflow | ⚗️🌊 | Wet pad plus heavy landing | Spills slippery surface. |
| `retort_pressure_pop` | Retort Pressure Pop | 🧪💥 | Heat plus sealed Salt vault | Launches cargo upward. |
| `calcination_ashfall` | Calcination Ashfall | 🔥🌫️ | Burn chain completes | Adds ash ballast. |
| `coagulation_lock` | Coagulation Lock | 🧂🧱 | Salt cargo delivered correctly | Freezes local supports. |
| `rubedo_profit_dump` | Rubedo Profit Dump | 🔴💰 | Correct side exit | High-value completion. |

## Station And World Sets

### Ubik Cold-Pac Terminal

Assets:

- Cold-Pac Dock
- Half-Life Patient
- Ubik Aerosol
- Runciter Signalman
- Half-Life Fog

Mechanic identity:

- Keep passengers real enough to deliver.
- Use Ubik aerosol and relay pads to restore support states.

### VALIS Relay Monastery

Assets:

- VALIS Relay
- VALIS Crystal
- Gnostic Prisoner
- Black Iron Field
- Beam Refraction

Mechanic identity:

- Beam puzzles, hidden supports, prison locks, revelation bonuses.

### Android Kipple Port

Assets:

- Electric Sheep Cell
- Android Shepherd
- Kipple Bale
- Kipple Cloud
- Kipple Dump Pad

Mechanic identity:

- Tow, clean, identify synthetic cargo, manage nuisance ballast.

### Hexagram Border Station

Assets:

- Hexagram Pad
- Hexagram Weather
- Zodiac Pilot
- Time Tape Reel
- Mercury Squall

Mechanic identity:

- Physics changes per route; player previews or edits timelines.

### Sulphur Furnace Yard

Assets:

- Sulphur Furnace Pad
- Oily Sulphur Tank
- Sulphur Plume
- Athanor Heat Chain
- Retort Pressure Pop

Mechanic identity:

- Controlled cascades, exhaust discipline, profitable fire dumping.

### Moat Drawbridge Airfield

Assets:

- Drawbridge Pad
- Salt Anchor Pad
- Kipple Hauler
- Fixed Salt Vault
- Moat bridge target markers

Mechanic identity:

- Drop bridge components, balance the span, then ferry living cargo across.

## Asset Data Fields

```js
const taxiAsset = {
  id: 'half_life_patient',
  name: 'Half-Life Patient',
  emoji: '🧊👤',
  assetClass: 'passenger',
  pkdMotifs: ['half-life', 'reality flicker'],
  alchemy: {
    family: 'mercury',
    volatility: 0.7,
    fixity: 0.2,
    sulphur: 0.1
  },
  physics: {
    mass: 0.8,
    phaseMass: 1.4,
    friction: 0.4,
    supportFactor: 0.35
  },
  taxi: {
    pickupRequires: ['life_support_field'],
    deliveryRequires: ['cold_pac_dock'],
    maxImpact: 0.2,
    fare: 120
  },
  beam: {
    reveal: 'phase_timer',
    stabilizeCost: 20,
    destabilizesOnOverheat: true
  }
};
```

## Implementation Notes

- Begin with emoji-only rendering on canvas.
- Treat multi-emoji labels as overlay badges, not full text labels.
- Keep ship collision simple: circle or triangle body with landing-foot contact points.
- Cargo/passenger can be represented as a carried block attached under the ship.
- Landing pads should reuse platform tilt angle so ship footing and cargo drop feel integrated.
- Beam should be line/cone geometry first, then visual polish later.

