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

## 2026-05-11: Campaign Starter Slice

Files changed:

- `balance-tetris.html`

### What Shipped

Added three Wild Hunt campaign levels:

| Level | Name | Win Condition | Core Lesson |
|---|---|---|---|
| 21 | Year 878 | Chronicle 1 entry | Date tokens stabilize nearby apparitions |
| 22 | Hounds Air | Reach dawn 9 | Hounds and wind shove volatile matter around a bowl |
| 23 | Cursed Rider | Score 80 | Chronicle the Huntsman before rider torque and dead-host pressure destabilize the bridge |

### New Wild Hunt Start-Grid Codes

The level parser now accepts lowercase Wild Hunt glyph codes:

| Code | Tile |
|---|---|
| `a` | Apparition |
| `d` | Year 878 date token |
| `n` | Dead Host |
| `m` | Mirror Hunt |
| `r` | Wild Huntsman |
| `q` | Hounds of the Air |
| `w` | Night Wind |
| `v` | Alembic Lens |

Uppercase letters remain regular tetromino-color blocks, so existing levels keep working.

### New Win Conditions

Campaign levels now support:

- `dawn`: win when the Wild Hunt dawn meter reaches a target.
- `chronicle`: win when the player has chronicled enough Hunt entries.

The existing level banner now displays Pieces, Score, Dawn, or Entries depending on the level's goal.

### Better Visual State

Wild Hunt cells now show extra overlays:

- chronicled cells get a gold frame and parchment glint
- deceptive cells get a diagonal mirror sheen
- chronicle/date tokens get a small inner frame

### Huntsman Exit Rule

The first side-specific Huntsman scoring rule is implemented:

- an undated Huntsman falling off the platform is a serious penalty
- a chronicled Huntsman pays best when driven right/east
- a chronicled Huntsman driven left still pays, but much less

This is a first pass at "profitable tipping" for Wild Hunt matter, parallel to the alchemical side-affinity rules.

### Menu Adjustment

The campaign menu cards are now more compact so the level list can grow beyond 20 levels without pushing the play button off the canvas.

## 2026-05-11: Help And Campaign Access Slice

Files changed:

- `balance-tetris.html`
- `index.html`

### What Shipped

The launcher now sends the Wild Hunt card directly to:

```text
balance-tetris.html#wildhunt-campaign
```

That URL opens Balance Tetris in campaign view with the first Wild Hunt level selected, so the Trithemius material is easier to find than tabbing across free-play modes.

### Help Overlay

The in-game help overlay now has Wild Hunt-specific rules:

- date tokens chronicle adjacent Hunt matter
- gold-framed cells are chronicled
- mirror-slashed cells are deceptive
- every third placement fires an omen beat
- Distillation/Alembic reveals deception
- Salt/Fixation stabilizes Hunt cells
- fire processes burn revealed illusions
- credibility reaching zero ends the run

### Cleaner Level Goal Text

Added shared goal text helpers so menus, banners, help, and level-complete screens can display all supported win types:

- Pieces
- Score
- Dawn
- Chronicle entries

The level-complete screen now reports `Dawn: x / y` and `Entries: x / y` correctly instead of falling back to score text.
