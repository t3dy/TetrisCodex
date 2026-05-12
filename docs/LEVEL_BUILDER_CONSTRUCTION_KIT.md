# Level Builder Construction Kit

This document defines the WYSIWYG construction kit for creating levels across the alchemical game arcade: Balance Tetris, Alchemy Balance, Wild Hunt, VALIS Space Taxi, Moat Drawbridge, Rune Bloom, and later experiments.

## Goal

Players/designers should be able to create levels without editing code:

- place emoji blocks
- set physics parameters
- create platforms
- add landing pads and receiver bins
- place objectives
- choose a target game mode
- export/import JSON
- save locally

The first playable editor is `level-builder.html`.

## Editor Surface

The editor uses three working regions:

1. **Left palette**
   - Level name
   - Game mode
   - Platform type
   - Tool buttons
   - Emoji block palette

2. **Center WYSIWYG canvas**
   - Grid workspace
   - Placed blocks
   - Platform rectangles
   - Pads, receiver bins, and objectives
   - Selected asset preview

3. **Right physics/export panel**
   - Physics sliders
   - Save/load/import/export controls
   - Live JSON output

## Supported Tools

| Tool | Behavior |
| --- | --- |
| Block | Paints selected emoji block into a grid cell. |
| Erase | Removes blocks or layout objects at a grid cell. |
| Platform | Places a platform rectangle using the selected platform type. |
| Pad | Places spawn/delivery pads for ship or character modes. |
| Receiver | Places alchemical dump bins for profitable tipping. |
| Objective | Places goal markers such as delivery, reveal, bridge, or survive targets. |

Shift-click always erases.

## Initial Asset Palette

The first palette intentionally mixes assets needed by multiple game modes:

- Fixed Salt Vault
- Volatile Mercury Crate
- Oily Sulphur Tank
- VALIS Crystal
- Half-Life Patient
- Black Iron Ingot
- Wild Hunt Hound
- Hoofbeat Token
- Kipple Bale
- Electric Sheep Cell
- Moat Stone
- Prima Materia

Each block carries:

- `blockId`
- `emoji`
- `name`
- `family`
- `mass`
- `friction`
- `behavior`
- grid position

## Physics Controls

The first builder supports these fields:

| Field | Used By |
| --- | --- |
| `gravity` | Balance Tetris, VALIS Taxi, Rune Bloom variants |
| `wind` | Balance Tetris, Wild Hunt, VALIS Taxi |
| `stiffness` | Balance platforms |
| `tiltLimit` | Balance failure threshold |
| `friction` | Block sliding and platform grip |
| `slipperiness` | Wet/frozen/mercurial surfaces |
| `shipThrust` | VALIS Taxi |
| `beamHeat` | VALIS beam modes |
| `cascadeSensitivity` | Alchemy lab cascades |

Future versions should add:

- fulcrum drift
- gravity direction
- liquid level
- apparition rate
- beam range
- tractor strength
- zodiac/process activation rate
- block spawn queue
- win/loss scripts

## Shared Level Schema

```json
{
  "schema": "alchemical-level-kit/v1",
  "id": "valis-courier-sample",
  "name": "VALIS Courier Sample",
  "mode": "valis-taxi",
  "platformType": "wet-crucible",
  "grid": { "cols": 14, "rows": 12 },
  "physics": {
    "gravity": 0.85,
    "wind": 0.35,
    "stiffness": 0.75,
    "tiltLimit": 26,
    "friction": 0.7,
    "slipperiness": 1.7,
    "shipThrust": 1.15,
    "beamHeat": 1.2,
    "cascadeSensitivity": 1.4
  },
  "blocks": [],
  "platforms": [],
  "pads": [],
  "receivers": [],
  "objectives": []
}
```

## Mode Translation

### Balance Tetris

Uses:

- `blocks`
- `platforms`
- `receivers`
- `physics.gravity`
- `physics.wind`
- `physics.stiffness`
- `physics.tiltLimit`
- `physics.friction`
- `physics.slipperiness`

Ignores:

- ship-specific pad behavior unless a level explicitly uses taxi mechanics.

### Alchemy Balance

Adds:

- receiver bin side and accepted families
- block family, mass, friction, behavior
- cascade sensitivity
- platform surface type

### Wild Hunt

Uses:

- Wild Hunt Hound
- Hoofbeat Token
- apparition/objective markers
- wind and slipperiness
- chronicle/scoring objectives

### VALIS Space Taxi

Uses:

- pads as spawn/delivery zones
- cargo/passenger blocks
- ship thrust
- beam heat
- cascade sensitivity
- platform tilt and landing tolerance

Future schema addition:

- `ships`
- `routes`
- `beamTargets`
- `passengerRequirements`

### Moat Drawbridge

Uses:

- platform and bridge support rectangles
- moat stones
- receiver bins as water/fall zones
- objective markers as horse/coach crossing targets

Future schema addition:

- `crossingPath`
- `requiredFlatness`
- `trafficUnits`

### Rune Bloom

Uses the same grid and blocks but interprets:

- blocks as seeds/runes/blight
- platforms as garden beds
- objectives as bloom targets

Future schema addition:

- `growthRules`
- `blightSources`
- `bloomTargets`

## Implementation Roadmap

1. **First playable editor**
   - Done in `level-builder.html`.
   - Paint blocks, place rectangles, tune physics, export JSON.

2. **Mode-specific presets**
   - Add one-click templates for Balance Tetris, VALIS Taxi, Wild Hunt, and Moat Bridge.

3. **Import levels into games**
   - Teach each game page to read `?level=local` or pasted JSON.

4. **Object inspector**
   - Click any block/platform/pad and edit properties directly.

5. **Drag/resize**
   - Drag blocks and resize platforms instead of click-only placement.

6. **Playtest button**
   - Open the target game mode with the current exported level injected.

7. **Asset library**
   - Pull from alchemical database exports and QueryPat-derived PKD assets.

8. **Campaign authoring**
   - Chain multiple exported levels into a campaign file.

## Design Rule

The builder should stay WYSIWYG first. A designer should be able to glance at the canvas and understand the playable geometry before reading the JSON.
