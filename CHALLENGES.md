# Balance Tetris: Challenges and Variations Roadmap

Captures the user's vision: a more interesting game with composable challenges, drawing more directly from the inspiration board game (rounded platform, challenge cards, 2-player hot seat).

This is the design plan. Some items are shipped, most are not. Where something is shipped, the file location and commit reference are noted.

---

## Core insight: orthogonal axes

The game is a stack of independent choices:

```
GAME = Platform × Contour × Mode × Surface × BlockSet × Settings × Players × Goal
```

Each axis is independent. Any combination should be playable. Most current "levels" lock specific values; "free play" should expose each axis as user-customizable.

| Axis | Examples | Status |
|---|---|---|
| Platform | Seesaw, Wide Base, Narrow Pole, Two-Fulcrum | shipped (4) |
| **Contour** | **Flat, Bowl, Mountain, Staircase, Curved, Notched** | **shipped (4 new contours)** |
| Mode | Standard, Zen, Balloons, Bombs, Alchemy | shipped (5) |
| Surface | Dry (default), Wet, Frozen, Hot, Sticky, Cracked | designed only — `PLATFORMS.md` Phase C |
| BlockSet | Standard 7-bag, Heavy, Light, Mixed | partially shipped (Heavy/Balloon via modes) |
| Settings | Fall speed, gravity stiffness mult, max tilt, soft drop mult | shipped (fall speed only) |
| Players | Solo, Hot Seat 2P, Hot Seat 3P, Hot Seat 4P | designed only — see below |
| Goal | Survive, Score, Clear, Cards, Time | shipped (Survive + Score) |

---

## 1. Platform Contours — *the signature board-game feature*

Real Balance Tetris (and games like Tricky Towers) start on a flat surface. The user's inspiration board game starts with a **non-flat, jagged or rounded platform top**, so you're balancing on a textured base from turn 1.

### Implementation (shipped)
- Each platform now has an optional `contour: number[]` of length `COLS`.
- `contour[c]` = number of pre-built platform cells at column `c` (rising from the bottom).
- On game start, these cells are pre-filled with `cell.platform = true`.
- `cellContribution` returns `0` for platform cells (they don't contribute to torque — they're part of the platform's natural balance).
- `Bombs` explosions skip platform cells (they can't be destroyed).
- `Alchemy` slides treat platform cells as immovable singletons (they don't fall off the edge).

### Shipped contour variants
| Contour | Shape | Use case |
|---|---|---|
| **Flat** | `[0,0,0,0,0,0,0,0,0,0]` | baseline (every platform's default) |
| **Bowl** | `[3,2,1,0,0,0,0,1,2,3]` | rising on both ends — pieces naturally settle toward center |
| **Mountain** | `[0,1,2,3,4,4,3,2,1,0]` | inverted V — peak in middle, valleys on both ends |
| **Staircase** | `[0,1,2,3,4,4,3,2,1,0]` ... actually asymmetric: `[0,0,1,1,2,3,3,4,4,5]` | rising left-to-right, every move feels different |
| **Notched** | `[0,2,0,2,0,2,0,2,0,2]` | every other column raised, jagged — classic board-game look |

### Future contours
- **Random / generated**: a "Chaotic" platform variant where contour is generated at game start
- **Spike**: one or two random tall columns of platform that act as pillars
- **Asymmetric ramps**: long gradual slopes for slide-heavy modes

---

## 2. Configurable Physics

Beyond fall speed (shipped), expose more physics knobs in settings:

| Setting | Range | Effect |
|---|---|---|
| `fallSpeed` | 0–6 cells/sec, 5 presets | Auto-fall rate. Shipped. |
| `softDropMul` | 5–50× | Down-arrow soft-drop speed multiplier. Shipped at 12×. |
| `stiffnessMul` | 0.5×–2× | Platform's resistance to tilt. Lower = easier to tip. **Not shipped.** |
| `maxTiltMul` | 0.5×–1.5× | Max tilt before game over. Higher = more forgiving. **Not shipped.** |
| `dropAnimSpeed` | 600–2400 px/sec | Hard-drop animation speed. **Not shipped.** |
| `tiltLerp` | 0.03–0.20 | Visual smoothing for the tilt animation. **Not shipped.** |
| `randomSeed` | int | Set a specific seed for reproducible piece sequences. **Not shipped.** |
| `pieceWeight` | 0.5×–2× | Global multiplier on all piece weights. **Not shipped.** |

Settings UI plan: expand the menu's "FALL [Off][Slow]..." row into a collapsible settings panel. Or a separate `SETTINGS` button in the corner that opens a modal.

---

## 3. Hot-Seat Multiplayer

Replicates the board game's pass-the-controller experience. Two (or more) players share one keyboard/mouse, taking turns placing pieces on the same platform.

### Design

A new `Mode` called **Hot Seat** that:
- Tracks `g.currentPlayer` (1–N)
- Each spawned piece gets `piece.playerId` and is tinted with that player's color
- Score is tracked per-player (`g.playerScores[]`)
- After each successful placement, advance `g.currentPlayer = (g.currentPlayer + 1) % N`
- HUD shows whose turn it is — big colored banner: "PLAYER 1'S TURN"
- When the platform tips, the player whose piece just tipped it **loses that round**
- Best-of-N rounds setting

### Win conditions for hot-seat
- **Survival**: last player whose piece doesn't tip wins
- **Score race**: first to N pieces placed wins
- **Elimination**: each round, the tipping player loses a life; last player standing wins
- **Combo**: highest score in pieces placed before someone tips

### Player count
- Default 2 (hot-seat 2P)
- Up to 4 (with appropriate color tints)

### Implementation effort
- ~6 hours: new mode, currentPlayer state, per-player tinting, HUD banner, scoreboard, multi-round logic
- Reuses everything else — same platforms, same modes (Bombs / Balloons / Alchemy compose), same physics

---

## 4. Challenge Cards

Inspired by the inspiration board game's challenge deck. Each turn, the active player draws a card that modifies that turn's rules.

### Card categories

| Category | Examples |
|---|---|
| **Piece modifiers** | "Heavy: this piece weighs 2×"; "Featherweight: this piece weighs 0.5×"; "Sticky: this piece glues to its neighbors" |
| **Placement constraints** | "Edge only: must place at column 0 or 9"; "Centerline: must place at column 4 or 5"; "Cannot rotate"; "Must rotate at least once" |
| **Surface effects** | "Slick: next placement slides one column random direction"; "Heavy gravity: tilt sensitivity doubled this turn" |
| **Reward cards** | "Saving grace: ignore this turn's tilt change"; "Counterweight: place an extra balloon for free"; "Skip: don't place anything this turn" |
| **Sabotage (multi-player)** | "Opponent rotates your next piece"; "Opponent picks your column"; "Switch towers with opponent" |

### Implementation approach

Same architecture as Spells (prototype P1), but **dealt** rather than earned:
- Each player has a hand of N cards (drawn at game start)
- Per turn, player may play ONE card OR skip
- Cards consumed on play, deck refills after some condition

### Difficulty levers
- Card power: harder games have more sabotage, easier games have more rewards
- Card frequency: every turn vs every 3 turns
- Hand size: 1 card (yes/no) vs 5 cards (real strategy)

### Implementation effort
- ~10 hours: card registry, deck/hand UI, per-card effect logic, card animations
- Strong synergy with hot-seat multiplayer — cards are way more fun with rivalry

---

## 5. More Game Modes (concepts)

### 5a. Time Trial
Auto-fall is always on, fall speed accelerates every N pieces. Score = pieces placed before tipping. The "classic Tetris arcade" mode.

### 5b. Marathon
Like Time Trial but slower acceleration, focus on duration. Cosmic ambient music. Score = time survived.

### 5c. Puzzle Mode (single-piece challenges)
Each level is a single starting configuration plus a single piece. Goal: place the piece such that the platform's net tilt is zero. Highest score = the cleverest solution (e.g., bomb timer = X, smallest piece pool).

### 5d. Stack Race
Two players, side-by-side platforms (split-screen or sequential). First to reach a height (counted as # of stacked rows) wins. Tipping = lose.

### 5e. Tower Defense
Pre-built tower, opponent (AI or player 2) periodically removes a random cell. You must keep adding pieces to maintain balance. Pure defensive play.

### 5f. Survival Endless
Standard mode but the platform's stiffness decreases by 1% every 5 pieces, eventually you can't survive. Score = pieces placed.

### 5g. Card Battle (PvP)
Hot-seat 2P + challenge cards. Each player has a hand. Spend cards to attack opponent's tower (force-rotate, slip-in extra mass) or defend your own.

### 5h. Boss Levels
Specific large pre-built configurations that need to be brought to specific end states. Stronger puzzle structure than current campaign.

---

## 6. More Puzzle Levels (with contours)

Once contours ship, immediately unlock puzzle ideas:

| Idea | Platform | Mode | Goal |
|---|---|---|---|
| **Settle the Bowl** | Bowl Seesaw | Standard | Fill the natural valley without tipping |
| **Crown the Mountain** | Mountain Seesaw | Standard | Stack high on the central peak |
| **Step Up** | Staircase Seesaw | Standard | Build evenly on the ascending steps |
| **Jagged Path** | Notched Seesaw | Standard | Navigate the alternating spikes |
| **Volcano** | Mountain + Bombs | Bombs | Bombs detonate around the peak — survive |
| **Quicksilver** | Bowl + Alchemy | Alchemy | Same-trait cells naturally collect in the valley |
| **Pole Climber** | Narrow Pole + Mountain | Standard | Tall central peak on a narrow pole — extreme |

Levels 16+ would be these.

---

## 7. UI / UX improvements

Things the user noticed:
- **Slip-under** — shipped (auto-fall mode).
- **Edge-column reachability** — shipped (mouse handler fix).
- **Click-to-start clarity** — shipped (single-click + HOW TO PLAY panel).

Still on the list:
- **Mobile support**: touch controls, responsive layout
- **Replay system**: record a deterministic seed + input log, play back
- **Level editor**: drag/drop to design contours and starting grids; export as JSON
- **Online leaderboards**: per-level best scores (would need a backend)
- **Achievements**: "Survived 100 pieces", "Cleared 10 levels", "Tipped over in under 5 pieces"
- **Soundtrack**: per-mode ambient loops (Tetris Effect prototype proves Web Audio works)

---

## 8. Recommended build order

If the user prioritizes "most interesting per unit of work":

1. **Platform contours** — SHIPPED. Signature feature, low effort.
2. **More puzzle levels with contours** — SHIPPED with this commit. Easy content unlock.
3. **Stiffness multiplier setting** — 30 min. Major gameplay feel knob.
4. **Hot-seat 2P mode** — ~half a day. Big impact, especially for the user testing with someone.
5. **Challenge cards** — ~day. Major variety, especially with hot-seat.
6. **Surface modifiers** (Wet/Frozen/Hot from PLATFORMS.md Phase C) — half-day each.
7. **Time Trial / acceleration mode** — half-day.
8. **Level editor** — day or two. Big multiplier for content.

---

## 9. Anti-bloat principles

Avoid the trap of feature creep:

- **Every new mode must have a clear identity**. If "Mode X" feels like "Mode Y with a tweak", merge them.
- **Settings ≠ modes**. Fall speed is a setting; it doesn't deserve a mode tab.
- **Tutorial first**. Each mode/contour needs ONE level that teaches its trick before the player encounters it elsewhere.
- **Challenge cards are tempting but easy to over-design**. Ship 8–10 cards, see what plays, then expand.
