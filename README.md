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

## Tech

Single-file vanilla JavaScript with HTML5 Canvas. No build step, no dependencies. Open `index.html` in any modern browser.

## Roadmap

- [x] v1: Single seesaw platform, 7 standard tetrominoes, mouse + keyboard controls
- [ ] v2: Multiple platform types (wide base, narrow pole, two-fulcrum bridge)
- [ ] v3: Surface modifiers (wet/frozen for slippery placement, hot for melting blocks)
- [ ] v4: Block properties (heavy/light/fragile/sticky)
- [ ] v5: Level/campaign system with hand-tuned challenges

## License

MIT
