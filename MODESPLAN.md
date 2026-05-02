# Balance Tetris: Game Modes Build Plan

How the parody mechanics from `PARODIES.md` become real, shippable game modes inside Balance Tetris.

## Core Principle: Modes Compose with Platforms

A **mode** is orthogonal to a **platform**. The same Spells mode should work on Seesaw, Wide Base, Narrow Pole, and Two-Fulcrum. The same Bombs mode should work on every platform. Anything mode-specific that *requires* a particular platform is a **level**, not a mode.

```
Game = Mode × Platform × Surface × BlockSet × WinCondition
```

## Mode Architecture

Add a `Mode` interface alongside the existing `Platform` interface:

```js
{
  id, name, description,
  pieceBag,                    // override the standard 7-bag
  onPiecePlaced(g, piece),     // post-placement hook (bombs explode, spells trigger, etc.)
  onTorqueAdjust(g, baseTorque, grid) -> torque,  // modify torque calculation (balloons, etc.)
  onUpdate(g, dt),             // per-frame hook (bomb timers, spell cooldowns)
  onRender(g, ctx),            // extra rendering (spell hand, bomb timers)
  onKeyDown(g, code),          // extra input (1/2/3 for spells)
  initialGrid()                // starting state (JenGone uses pre-built tower)
}
```

The main game loop calls each hook at the right point. A mode that needs none of them is just `{ id: 'standard' }`.

## Build Order

### Phase 1: Mode infrastructure (no new mechanics)

Refactor the current game to route through a `Mode` object, even if there's only one mode (`standard`). Add a `?mode=` URL parameter. Same gameplay, but the architecture is in place. **2 hours.**

### Phase 2: Validate one mode end-to-end

Pick the simplest parody — **Zen** (#6) — because it's just visual. Implement it fully: menu entry, mode-specific renderer, no other code changes. Proves the architecture without risk. **1 hour.**

### Phase 3: Pick from the prototype results

Test the standalone prototypes (in `prototypes/`). Pick the 2-3 that play best. Port them into the main game using the Mode interface. **1 day each.**

### Phase 4: Cross-mode polish

Once 3-4 modes exist, audit the menu UX:
- Mode selector + Platform selector on the start screen
- Per-mode/per-platform high scores (already partially built)
- Tutorial pop-ups on first play of each mode

## Shared Infrastructure to Build Once

These features are needed by multiple modes; build them properly the first time:

1. **Settle pass** — used by Bombs (cascade after explosion), JenGone (cascade after deletion), and any future Cracked surface. Implement as: after placement, run a fixed-point loop that processes triggered effects until nothing changes.

2. **Per-cell properties** — currently a cell is just `{color, colorDark, colorLight}`. Extend to `{color, props: {weight, balloon, glue, bomb, timer, ...}}`. Most modes need this.

3. **Spell/effect deck** — Tipsy Towers spells, Boom Tetris bomb timers, Catherine shoves all want a "pending effects" queue. Single shared queue in game state.

4. **Mode HUD slot** — reserved screen region at the bottom of the canvas for mode-specific UI (spell cards, shove counter, bomb timers).

## What NOT to Build (Yet)

- **Multiplayer.** Tempting, but the engine isn't ready. After 3-4 modes ship, revisit.
- **Procedural levels.** Hand-tuning is better at small scale. Wait until we have 30+ levels.
- **Online leaderboards.** Local high scores are enough until people ask for them.
- **Mobile UI.** Keyboard + mouse first. Mobile is its own port.

## Prototype-First Discipline

The single biggest risk to this plan is committing engine changes to a mechanic that turns out to feel bad. To mitigate:

1. **Every new mode ships first as a standalone prototype** in `prototypes/`. Self-contained HTML file, no engine integration.
2. **Playtest the prototype.** Five minutes of play tells you whether the mechanic is fun.
3. **Only then port to the main game.** Use the Mode interface. The port itself becomes a smaller change because the design is proven.

The prototypes folder is the design lab. The main game is what graduates.

## Mode Catalog

| ID | Source | Status | Complexity |
|---|---|---|---|
| `standard` | (baseline) | shipped | — |
| `zen` | Stacky Boi (#6) | prototype ready | trivial |
| `spells` | Tipsy Towers (#1) | prototype ready | medium |
| `bombs` | Boom Tetris (#2) | prototype ready | medium |
| `balloons` | World of Glue (#3) | prototype ready | small |
| `jengone` | JenGone (#5) | prototype ready | medium |
| `bridge` | Bridge to Nowhere (#8) | next round | small (it's a platform) |
| `crayon` | Crayon Kinematics (#7) | next round | medium (drawing UI) |
| `catherine` | Catherine Cascade (#9) | next round | medium |
| `pigdrop` | Bad Pieces (#4b) | next round | large (ball physics) |
| `rhythm` | Tetris Effect (#10) | next round | medium (Web Audio) |

## Prototypes Shipped Today

See [`prototypes/`](./prototypes/). Each is a single HTML file, opens directly in a browser. Five mechanics in five different styles, each ~200-300 lines.

The prototypes are deliberately stripped down — single platform, keyboard only, minimal UI — so the mechanic stands alone. If a prototype is fun without graphics polish, it'll be great with polish. If it's not fun bare, more polish won't save it.
