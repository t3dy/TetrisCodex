# Wild Hunt Implementation Log

This document records the first playable implementation pass for the Trithemius Wild Hunt mode.

## 2026-05-10: First Playable Slice

Files changed:

- `balance-tetris.html`
- `index.html`

Docs used:

- `docs/WILDHUNT.md`
- `docs/WILDHUNT_EMOJI_BLOCK_SYSTEM.md`
- `docs/WILDHUNT_LEVEL_CONCEITS.md`

## What Shipped

### Landing Page Button

The arcade launcher now includes a **Wild Hunt** card linking to:

```text
balance-tetris.html#wildhunt
```

Opening that URL initializes the Balance Tetris menu with Wild Hunt selected.

### New Mode: `wildhunt`

Wild Hunt is now a real Balance Tetris mode beside Standard, Zen, Balloons, Bombs, and Alchemy.

Mode description:

> Trithemius mode: hounds, wind, hoofbeats, apparitions, and date tokens. Chronicle the Hunt before the platform throws it into rumor.

### Emoji Block System In Code

The first implemented Wild Hunt tiles are:

| ID | Emoji | Role |
|---|---|---|
| `hounds` | 🐕 | volatile omen; hound shove motif |
| `wind` | 🌬️ | volatile omen; temporary drift motif |
| `hoofbeat` | 🐎 | heavy omen; shake motif |
| `date878` | 878 | chronicle token; dates nearby apparitions |
| `apparition` | 🫥 | volatile apparition; valuable if chronicled |
| `deadHost` | 💀 | processional dead-host pressure |
| `huntsman` | 🏇 | heavy Huntsman token; boss material |
| `mirrorHunt` | 🪞 | deceptive illusion token |
| `alembic` | ⚗️ | counter tile; reveals deceptive cells |

Each tile carries:

- `wildId`
- `wildName`
- `wildClass`
- `wildVolatile`
- `wildDeceptive`
- `chronicleValue`
- weight and color fields for physics/rendering

### Hunt Meter

Wild Hunt mode now tracks:

```js
g.hunt = {
  dawn,
  meter,
  credibility,
  chronicleEntries,
  lastBeat,
  beatBag,
  spawnBag,
  windDir,
  windFrames,
  riderTorque,
  riderFrames
}
```

Every three placements, the Hunt fires an omen beat.

### Implemented Omen Beats

| Beat | Effect |
|---|---|
| `hounds` | Shoves volatile apparitions/illusions one cell toward an edge |
| `wind` | Temporarily drifts the current piece sideways |
| `hoofbeat` | Shakes the platform |
| `horn` | Forces a Huntsman tile into the next spawn and adds temporary rider torque |
| `deadHost` | Seeds dead-host cells on one side of the board |

### Chronicle Mechanics

Date tokens now stabilize adjacent Hunt matter.

When a `date878` cell is adjacent to an apparition, host, Huntsman, illusion, or omen:

- the neighboring tile becomes `chronicled`
- deception is removed
- credibility rises
- chronicle entry count rises
- the player receives Wild Hunt score

This is the first mechanical translation of Trithemius's chronographic move: the marvel is not simply destroyed; it becomes profitable when dated.

### Alchemical Counterplay

Wild Hunt mode can reuse the existing zodiac and Tria Prima palette.

Implemented first-pass effects:

- **Distillation / Dissolution / Alembic Lens** reveals deceptive cells in a column.
- **Calcination / Incineration** burns revealed illusion cells into ash.
- **Fixation / Congelation / Salt** stabilizes adjacent Hunt cells.

This connects the Wild Hunt mode to the high-priority combinatorial alchemy palette instead of making it a disconnected spooky variant.

### HUD

Wild Hunt mode now shows a compact HUD with:

- Dawn meter
- Credibility meter
- Last omen beat
- Chronicle entry count
- Placements until the next omen

### Scoring

Score now includes:

```js
piecesPlaced + lineBonus + alchemyBonus + wildBonus
```

Wild Hunt scoring currently rewards:

- chronicling apparitions and omens
- revealing deception
- burning revealed illusions
- safely losing chronicled matter off the edge

It penalizes losing undated volatile matter.

## Verification

Performed:

- JavaScript syntax check with `node --check`
- In-app browser reload of `http://127.0.0.1:8008/balance-tetris.html`
- In-app browser navigation to `http://127.0.0.1:8008/balance-tetris.html#wildhunt`
- Checked browser console errors after load

Result:

- No syntax errors.
- No browser console errors on load.

Note:

- The current in-app browser viewport is narrow, so the visual check only showed the left side of the menu canvas. Runtime loading is clean.

## Next Implementation Slice

Recommended next steps:

1. Add three Wild Hunt campaign levels from `WILDHUNT_LEVEL_CONCEITS.md`:
   - Year 878, First Entry
   - Hounds In The Dark Air
   - The Cursed Nocturnal Hunter
2. Add clearer visual overlays for chronicled vs undated apparitions.
3. Add side-specific Huntsman tipping rewards.
4. Add a mode-specific help panel explaining date tokens, credibility, and omen beats.
5. Add a proper "Dawn reached" win condition.

