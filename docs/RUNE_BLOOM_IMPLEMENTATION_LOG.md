# Rune Bloom Implementation Log

## 2026-05-10: Project Split

The user clarified that this should become a different game from the balance-platform work. I replaced the local `index.html` with a new self-contained browser game called **Rune Bloom**.

## What Exists Now

Rune Bloom is a single-file Canvas game:

- 9x9 board
- center seed rune
- glyph-shaped pieces
- mouse and keyboard placement
- rotation
- next-piece queue
- same-color row/column bloom clears
- blight spread every three turns
- score, best score, turn counter, win/loss overlays
- particle bursts and visual feedback

## Design Direction Chosen

The new game keeps the general pleasure of spatial placement, but removes the balancing physics entirely. It is now closer to:

- tile-placement puzzle
- match/clear strategy game
- light territory defense
- alchemical garden-builder

## Existing Generated Ideas Reused

From the existing docs, I am retaining these classes of ideas:

- Alchemical processes as mechanic families
- Tria Prima as modifier classes: Salt, Sulphur, Mercury
- zodiac/process palette as a future input system
- challenge-card thinking from the mode/prototype docs
- "single mechanic prototype first" discipline from the prototype folder
- cascade reactions from the alchemy docs

What I am not carrying over:

- torque
- platform tilt
- tetromino balancing
- surface wet/frozen/hot physics

## Verification So Far

- JavaScript syntax extracted from `index.html` passes `node --check`
- Browser loads at `http://127.0.0.1:8008/index.html`
- No browser console errors during basic test
- Space starts game
- Space places a legal opening piece
- Sidebar renders score, turn, queue, controls

## Immediate Polish Found

- Opening cursor now snaps to a legal placement.
- Piece preview labels now position below each preview shape instead of using a fixed offset.
- Sidebar message was moved upward to avoid colliding with the controls text.

## Principle

From now on, every meaningful system should have a companion Markdown note before it becomes code. The docs are part of the instrument panel.
