# Dev Tools And Website Roadmap

The arcade needs a toolchain, not just isolated game pages. This roadmap defines the creator tools and explanatory website needed to support the growing alchemical game world.

## Toolchain Goals

- Create and edit levels visually.
- Create and edit emoji asset definitions.
- Attach source notes from alchemical texts, QueryPat, Trithemius scholarship, and other local databases.
- Build physics presets and platform templates.
- Compose campaigns from levels.
- Explain every mode and asset family on a public-facing website.
- Export data in stable JSON schemas that the games can consume.

## Current Tools

### Level Builder

File:

- `level-builder.html`

Purpose:

- WYSIWYG grid editor for blocks, platforms, pads, receivers, objectives, and physics parameters.

Output schema:

- `alchemical-level-kit/v1`

### Asset Studio

File:

- `asset-studio.html`

Purpose:

- Create emoji assets with class, alchemical family, primary mode, mass, friction, volatility, beam affinity, behavior notes, and source notes.

Output schema:

- `alchemical-asset/v1`

### Game Guide Website

File:

- `game-guide.html`

Purpose:

- Player/designer-facing guide explaining game modes, asset families, and creator tools.

## Needed Dev Tools

### 1. Physics Preset Lab

Creates named physics profiles:

- wet crucible
- frozen platform
- high wind
- lunar taxi
- sulphur furnace
- black iron prison
- calm teaching bench

Fields:

- gravity
- wind
- stiffness
- tilt limit
- friction
- slipperiness
- cascade sensitivity
- beam heat
- tractor strength
- landing tolerance

Output:

- `alchemical-physics-preset/v1`

### 2. Platform Forge

Creates platform templates:

- seesaw
- wide base
- narrow pole
- two-fulcrum bridge
- wet/frozen/magnetic/suspended variants
- moving/swaying pads
- drawbridge spans

Fields:

- platform type
- support points
- width/height
- surface material
- failure angle
- overhang rules
- slide rules
- visual treatment

Output:

- `alchemical-platform/v1`

### 3. Cascade Editor

Creates reaction chains for alchemical lab behavior:

- sulphur heat chain
- alembic vapor chain
- crucible overflow
- retort pressure pop
- calcination ashfall
- coagulation lock
- rubedo profit dump

Fields:

- trigger asset/family
- trigger condition
- affected radius
- output assets
- score effect
- visual effect
- failure risk

Output:

- `alchemical-cascade/v1`

### 4. Source Annotation Tool

Connects assets/mechanics to scholarship and local databases.

Inputs:

- local markdown excerpts
- PDF notes
- QueryPat archive IDs
- Trithemius/Wild Hunt notes
- alchemy database entries

Fields:

- source title
- author
- date
- local path/doc id
- excerpt/paraphrase
- mechanic translation
- confidence level

Output:

- `alchemical-source-note/v1`

### 5. Campaign Planner

Chains levels into mode campaigns.

Fields:

- campaign title
- mode
- level list
- unlock conditions
- tutorial notes
- asset progression
- physics progression
- scoring requirements

Output:

- `alchemical-campaign/v1`

### 6. Asset Gallery Builder

Generates website/gallery pages from the asset JSON library.

Features:

- filter by family
- filter by mode
- show emoji tile
- show behavior and physics stats
- show source note
- link to levels using that asset

Output:

- static HTML page or JSON-driven gallery section

### 7. Mode Explainer Builder

Generates website pages for each game mode.

Fields:

- mode name
- one-sentence promise
- controls
- win/loss
- core mechanics
- asset families
- creator-tool links
- sample levels

Output:

- static guide pages

## Website Structure

Current:

- `index.html`: arcade launcher
- `game-guide.html`: overview guide

Needed:

- `modes.html`: all mode cards with deeper explanations
- `assets.html`: asset gallery
- `tools.html`: creator tools guide
- `sources.html`: source pipeline and scholarship map
- `campaigns.html`: playable and planned campaigns
- `changelog.html`: human-readable build history

## Shared Data Schemas

### Asset

```json
{
  "schema": "alchemical-asset/v1",
  "id": "valis-crystal",
  "name": "VALIS Crystal",
  "emoji": "💎👁️",
  "class": "cargo",
  "primaryMode": "valis-taxi",
  "alchemy": {
    "family": "revelation",
    "mass": 0.7,
    "friction": 0.9,
    "volatility": 0.25,
    "beamAffinity": 2.4
  },
  "behavior": "Reveals hidden supports and powers beam upgrades.",
  "sourceNote": "PKD/VALIS motif translated into a gameplay reveal crystal.",
  "tags": ["revelation", "valis-taxi", "cargo"]
}
```

### Level

Uses the existing `alchemical-level-kit/v1` schema from `LEVEL_BUILDER_CONSTRUCTION_KIT.md`.

### Physics Preset

```json
{
  "schema": "alchemical-physics-preset/v1",
  "id": "wet-crucible",
  "name": "Wet Crucible",
  "physics": {
    "gravity": 1,
    "wind": 0,
    "stiffness": 0.8,
    "tiltLimit": 24,
    "friction": 0.55,
    "slipperiness": 2.1,
    "cascadeSensitivity": 1.4
  }
}
```

## Build Order

1. Asset Studio
   - Done as first slice in `asset-studio.html`.

2. Game Guide Website
   - Done as first slice in `game-guide.html`.

3. Connect Asset Studio to Level Builder
   - Let the level builder import an asset JSON library.

4. Physics Preset Lab
   - Extract physics editing out of the level builder into reusable named presets.

5. Cascade Editor
   - Needed for richer alchemy lab modes and VALIS Taxi hazards.

6. Campaign Planner
   - Needed once several authored levels exist per mode.

7. Generated Website Pages
   - Use asset/campaign JSON to populate mode and asset galleries.

## Design Rule

Every creator tool should produce visible, editable JSON. The JSON is the contract between tools, docs, and games.
