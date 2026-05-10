# Balance Tetris: Testing Guide

How to test the game, prototypes, and verify mechanics work as designed.

## Where to play

| URL | What |
|---|---|
| https://t3dy.github.io/balance-tetris/ | Main game (5 modes × 4 platforms × 15 levels) |
| https://t3dy.github.io/balance-tetris/prototypes/ | Prototype lab (9 standalone mechanic experiments) |
| `C:\Dev\BALANCETETRIS\index.html` | Local main game (open in browser, no server needed) |
| `C:\Dev\BALANCETETRIS\prototypes\index.html` | Local prototypes index |

The Pages site auto-rebuilds on push to `main`; allow ~30 seconds.

---

## Quick tour (10 minutes)

### 1. Smoke test — Free play, Standard, Seesaw (2 min)
- Open the live site
- Drop 5–10 pieces in mixed columns
- Verify: tilt meter responds, fulcrum tilts visually, game-over fires past 45°, restart works

### 2. Mode tour — same platform, switch modes (5 min)
Click each mode tab in turn (Standard, Zen, Balloons, Bombs, Alchemy). For each:
- Play 1–2 minutes
- Look for the mode's signature mechanic (see "Per-mode checks" below)

### 3. Campaign tour — 3 contrasting levels (3 min)
Click `CAMPAIGN` at the top. Try in this order:
- **Level 1: First Steps** — easiest, baseline
- **Level 12: Lopsided** — starts already tilted at 40°, instant pressure
- **Level 15: Salvage Op.** — pre-built balloon-anchored tower, mode + puzzle integration

---

## Per-mode checks

| Mode | What to verify |
|---|---|
| **Standard** | Plain Tetris balance. No special markers on cells. Score = pieces placed. |
| **Zen** | All HUD hidden. Monochrome blocks. Game-over shows score in big serif type. Each session randomizes the accent color. |
| **Balloons** | ~1 in 5 pieces is light blue with strings. Placed near the top of a stack, they pull the platform AWAY from their column (negative torque). Tilt meter reading should DROP when you place a balloon on the heavy side. |
| **Bombs** | ~1 in 6 pieces is bright red with a `5` printed on each cell. Each placement decrements all fuses; cells at fuse 0 detonate, clearing a 3×3 area. Visible shake and flash on detonation. |
| **Alchemy** | Every cell has a planetary symbol (☉☽☿♀♂♃♄). Adjacent same-symbol cells form sticky groups. When tilt exceeds 20°, groups slide one column downhill; cells over the edge fall off. Score: +size for groups of 2+, −1 for singletons. Floating `+N`/`−N` above the platform. |

---

## Per-platform checks

Same pieces, four very different feels. Try each in Standard mode for 1 minute:

| Platform | Signature behavior |
|---|---|
| **Seesaw** | Single triangle pivot. Stiffness 25, 45° max tilt. Two pieces on the same edge is dangerous, three is game over. |
| **Wide Base** | Trapezoidal base. Forgiving below 8° tilt (stiffness 40), much softer above (stiffness 15). Lulls you into overconfidence. |
| **Narrow Pole** | Tall thin pole. Stiffness 12, max tilt 30°. One I-piece on the far edge is already game over. Center mass or die. |
| **Two-Fulcrum Bridge** | Two triangle pivots. Mass that overhangs *either* fulcrum tries to tip the bridge — game over even at low tilt if overhang is too large. |

---

## Level testing checklist

All 15 levels should complete on a fair play. The 5 puzzle levels (11–15) start with pre-built towers. Verify:

- Goal banner at top of screen shows current vs target (e.g., `Pieces: 7 / 10`)
- Progress bar fills proportionally
- Win triggers a green LEVEL COMPLETE screen
- `Enter` advances to the next level if available
- `Esc` returns to level grid
- Completed levels show ✓ in their card on the campaign menu

### Specific things to verify per puzzle level

| Level | Expected starting state |
|---|---|
| 11 Foundation | 8 cells (4-cell I + two 2-cell O blocks). Slight left lean (~6°). |
| 12 Lopsided | 9 L-piece cells on the right side. **40.7° lean already** — extremely tight. |
| 13 Two Pillars | 18 cells split across 2 columns at fulcrum positions. 0° tilt. |
| 14 Top Heavy | 18 cells stacked 8 rows tall. ~18° lean. Narrow Pole — every move counts. |
| 15 Salvage Op. | 14 cells on the left side, 2 of them balloons. **−36° lean**. Use balloon spawns to recover. |

---

## Resetting progress

If you want to retest level progression from a fresh state, open DevTools (F12) → Console:

```js
// Wipe everything (also clears free-play high scores)
localStorage.clear();

// Or just re-lock the campaign:
localStorage.removeItem('bb_levelsDone');

// Or wipe a specific platform/mode high score:
localStorage.removeItem('bb_highscore_seesaw_alchemy');
```

Storage keys used:
- `bb_levelsDone` — JSON array of completed level IDs
- `bb_highscore_<platformId>_<modeId>` — per-combo high score
- `bb_lastPlatform`, `bb_lastMode` — last selected in free play

---

## Controls reference

### Main game

**Keyboard**
- `← →` Move piece left/right (or navigate menu)
- `↑` or `X` Rotate clockwise
- `Z` Rotate counter-clockwise
- `Space` Drop piece (or start game from menu)
- `Enter` Start / restart / next level
- `Tab` or `M` Cycle modes (in free-play menu)
- `C` Toggle Campaign / Free Play (in menu)
- `R` Restart current game (after game over)
- `Esc` Back to menu (after game over)

**Mouse**
- Move to aim piece (auto-snaps to grid column)
- Left click to drop
- Mouse wheel or right-click to rotate
- Click cards / tabs / buttons in menu

### Prototypes
Each prototype has its own minimal control set, listed at the top of its page. Most use only `← → ↑ Space R`.

---

## Prototype testing

The prototypes live at `prototypes/` and demonstrate experimental mechanics in isolation. Each is a single HTML file, ~250 lines, keyboard-only. Best opened directly:

| # | Prototype | Try this |
|---|---|---|
| P1 | Spells | Survive 5 pieces, see a card appear in the hand. Press `1` to apply to next piece. |
| P2 | Bombs | Wait for a red bomb piece. Place it center, watch fuse tick. |
| P3 | Balloons | Negative torque values are visible in the HUD. Place balloons to invert the leaning side. |
| P4 | JenGone | Already-built tower at start. Drop white outline pieces to DELETE cells. |
| P5 | Zen | Pure visual test — minimal aesthetic. Score appears only at game-over. |
| P6 | Bridge to Nowhere | Drop pieces in the middle (the void) — they fall off. Build a bridge across. |
| P7 | Catherine Cascade | Click any placed cell to push the column up. Limited shoves regenerate. |
| P8 | Crayon Kinematics | Drag on the side pad to draw a piece (≤5 cells). Press `D` to spawn it. |
| P9 | Tetris Effect | Click the canvas to start audio. Place pieces on the beat for ×2 score. **Audio required.** |

Prototypes are the "design lab." They're deliberately stripped down — single platform, no menu, minimal HUD — so the mechanic stands alone. If a mechanic isn't fun in the prototype, polishing won't save it.

---

## Known issues / quirks

- **Browser tab throttling**: If you switch away from the tab during gameplay, drop animations may stutter on return. The dt-based loop should adapt, but extreme cases (>100ms gaps) clamp dt to 100ms.
- **Audio (P9 only)**: Browsers require a user gesture before audio plays. Click the canvas before pressing keys.
- **Mouse aiming + tilt**: Mouse-to-grid-column conversion accounts for platform rotation, but extreme tilt may make the column snap feel slightly off. Keyboard movement is unaffected.

---

## Test matrix (reference)

If you want exhaustive coverage, this is every meaningful combo:

| Platform | Standard | Zen | Balloons | Bombs | Alchemy |
|---|---|---|---|---|---|
| Seesaw | ✓ Lv 5 | ✓ Lv 5 | ✓ Lv 4, 15 | (free play) | (free play) |
| Wide Base | ✓ Lv 1, 11 | (free play) | (free play) | ✓ Lv 6 | ✓ Lv 7 |
| Narrow Pole | ✓ Lv 2, 14 | (free play) | ✓ Lv 8 | ✓ Lv 9 | (free play) |
| Two-Fulcrum | ✓ Lv 3, 13 | (free play) | (free play) | (free play) | ✓ Lv 10 |

Cells with level numbers have a tuned campaign challenge. `(free play)` means the combo isn't in the campaign but is fully playable in free play mode.

That's 5 × 4 = 20 combinations. Plus 9 prototypes. ~30 things to test if you want full coverage.
