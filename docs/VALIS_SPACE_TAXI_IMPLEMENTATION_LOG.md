# VALIS Space Taxi Implementation Log

## First Playable Slice

Created `valis-space-taxi.html` as a standalone canvas game so the Space Taxi mechanics can evolve without destabilizing the existing Balance Tetris page.

Implemented:

- Menu screen with Start Route button.
- Keyboard controls:
  - WASD / arrow keys for thrust, strafe, and brake.
  - Space for VALIS beam.
  - E for dock/pickup/dropoff.
  - R for retry.
  - Enter for start/next route.
- Mouse controls:
  - Mouse aim for VALIS beam.
  - Click to fire beam.
  - Click Start Route on menu.
- Ship physics:
  - gravity
  - wind drift
  - thrust
  - brake/landing assist
  - fuel
  - hull damage
- Tilting Balance Tetris platform:
  - cargo mass affects torque
  - ship mass affects torque while landed
  - slippery surface drift
  - failure when platform tilt exceeds safe threshold
- VALIS beam:
  - reveals hidden cargo
  - builds heat
  - overheat increases lab cascade
- Cargo/passenger loop:
  - pick up cargo from the tilting pad
  - deliver it to the VALIS relay pad
  - hidden cargo gives better rewards when revealed before delivery
- Alchemical cascade pressure:
  - rough landings and beam overheat raise cascade
  - runaway cascade fails the route
- Three initial routes:
  - Cold-Pac Terminal
  - Mercury Squall
  - Sulphur Furnace Yard

## Current Asset Coverage

The playable slice uses assets from `VALIS_SPACE_TAXI_ASSET_PACK.md`:

- Half-Life Patient
- Ubik Aerosol
- Black Iron Ingot
- Volatile Mercury Crate
- Dream Resin
- Electric Sheep Cell
- Oily Sulphur Tank
- VALIS Crystal
- Prima Materia Capsule
- VALIS Relay pad

## Next Implementation Targets

1. Add visible selectable ship classes from the asset pack.
2. Add a Physics Lab panel with sliders for gravity, wind, thrust, slipperiness, landing tolerance, and beam cooling.
3. Add tractor/tow pulse on `Q`.
4. Let VALIS beam stabilize tilting supports, not only reveal hidden cargo.
5. Add alchemical receiver bins to make profitable side-tipping part of the taxi route.
6. Add cascade-specific visual reactions: flame, vapor, ashfall, coagulation locks.
7. Add station cards for the world sets in `VALIS_SPACE_TAXI_ASSET_PACK.md`.
8. Add a launcher route from Balance Tetris mode selection as well as the arcade landing page.

## Design Notes

The mode already feels distinct from falling-block play: the player manages momentum, docking, and landing impact. The next major design step is to make cargo properties more materially active while in transit, especially wetness, frozen surfaces, volatile mercury sliding, sulphur ignition, and Salt anchoring.
