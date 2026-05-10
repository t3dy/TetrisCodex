# Balance Tetris

A digital adaptation of the board-game-style balancing Tetris, where the goal isn't to clear lines but to stack tetrominoes on a tilting platform without tipping it over.

## Play it now

**[Play in your browser](https://t3dy.github.io/balance-tetris/)**

## How it works

Each tetromino you place adds weight to the platform. The further from the center of the fulcrum, the more it tilts. Stack too much weight on one side and the platform tips — game over.

- **Mouse**: move to aim, click to drop, scroll wheel to rotate, right-click to rotate CW
- **Keyboard**: arrow keys to move, Up/X to rotate CW, Z to rotate CCW, Space to drop
- **Restart**: R or click after game over

## Status

This is a working v1 prototype with the core balance mechanic. The full design is mapped out in the included design docs:

- [`SIMPLIFYPHYSICS.md`](./SIMPLIFYPHYSICS.md) — How the tilt physics are simplified for clean gameplay
- [`PLATFORMS.md`](./PLATFORMS.md) — Roadmap for varied platform types, surface modifiers (wet, frozen, hot), and block properties (heavy, fragile, sticky)
- [`SIMILARGAMES.md`](./SIMILARGAMES.md) — Lessons from contemporary games (Tricky Towers, Boom Blox, World of Goo) and concrete features/coding tricks worth borrowing
- [`PARODIES.md`](./PARODIES.md) — 10 parody mechanics translating each comparable game into Balance Tetris vocabulary
- [`MODESPLAN.md`](./MODESPLAN.md) — Build plan for integrating modes into the main game (Mode interface, build order, what NOT to build yet)
- [`MECHANICS_CATALOG.md`](./MECHANICS_CATALOG.md) — Long-form catalog of every mechanic with player-challenge analysis and implementation notes
- [`TESTING.md`](./TESTING.md) — How to test the game, prototypes, and reset progression
- [`CHALLENGES.md`](./CHALLENGES.md) — Roadmap for platform contours, hot-seat 2P, challenge cards, more modes
- [`ALCHEMY_LORE.md`](./ALCHEMY_LORE.md) — Full Alchemy mode vision: 15+ item catalog, cascading effects, tutorial/cutscene framework

## Prototypes

Nine standalone HTML prototypes live in [`prototypes/`](./prototypes/) — each demonstrates ONE experimental mechanic in isolation:

- **[Spells](./prototypes/p1-spells.html)** — earn cards, modify next piece (Tricky Towers)
- **[Bombs](./prototypes/p2-bombs.html)** — fused tetrominoes that detonate (Boom Blox)
- **[Balloons](./prototypes/p3-balloons.html)** — negative-weight cells (World of Goo)
- **[JenGone](./prototypes/p4-jengone.html)** — inverted Tetris, anti-pieces delete cells (Jenga)
- **[Zen](./prototypes/p5-zen.html)** — minimalist, no UI (mobile stackers)
- **[Bridge to Nowhere](./prototypes/p6-bridge.html)** — chasm platform with void (Poly Bridge)
- **[Catherine Cascade](./prototypes/p7-cascade.html)** — click placed cells to shove them up
- **[Crayon Kinematics](./prototypes/p8-crayon.html)** — draw your next piece on a 5×5 pad
- **[Tetris Effect](./prototypes/p9-rhythm.html)** — rhythm scoring with Web Audio synth

Open the [prototype index](./prototypes/index.html) directly in any browser. No server required.

## Tech

Single-file vanilla JavaScript with HTML5 Canvas. No build step, no dependencies. Open `index.html` in any modern browser.

## Roadmap

- [x] v1: Single seesaw platform, 7 standard tetrominoes, mouse + keyboard controls
- [x] v2: Multiple platform types (seesaw, wide base, narrow pole, two-fulcrum bridge) with platform selection menu and per-platform high scores
- [ ] v3: Surface modifiers (wet/frozen for slippery placement, hot for melting blocks)
- [ ] v4: Block properties (heavy/light/fragile/sticky)
- [ ] v5: Level/campaign system with hand-tuned challenges

## License

MIT
