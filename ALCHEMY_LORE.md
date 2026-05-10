# Alchemy Mode: Lore, Items, Cascading Effects

The user's full vision for Alchemy mode:

> "Build out a whole world of alchemical themed items sourced in alchemical history like a sword could represent the weapon salve. Cascading effects that players can put together when they know the lore of alchemy as taught by the game, which will evolve to include cutscenes and dialogue and tutorial levels teaching all the alchemical properties of blocks. All the types of blocks and their changing properties will be represented by emojis and color changes."

This doc captures that vision. Some pieces are shipped; most are designed for follow-up.

---

## Design pillars

1. **Sourced in real alchemical history.** Every item maps to a concept, figure, or operation from actual alchemical tradition. The game becomes a vehicle for the lore.
2. **Cascading interactions.** Items combine. Knowing one item is useful; knowing how it interacts with three others is mastery.
3. **Taught through play.** Players learn alchemy by encountering items in escalating levels. Tutorial levels introduce one concept at a time, supported by short cutscenes/dialogue.
4. **Universal language of emoji + color.** Every item type is identifiable by a single emoji and a color tradition (Salt=white, Sulphur=red, Mercury=silver, Gold=Sun-yellow).
5. **Player-tunable rules.** Min group size, slide threshold, scoring formula — all adjustable in settings, so the player can shape the game to taste.

---

## Tunable Alchemy rules (SHIPPED)

Available in ⚙ SETTINGS → ALCHEMY section:

| Setting | Range | Default | What it changes |
|---|---|---|---|
| `alchemySlideThreshold` | 10° / 20° / 30° / 45° | 20° | Tilt angle at which groups start sliding |
| `alchemyMinGroup` | 2 / 3 / 4 / 5 | 2 | Minimum cells in a group to score POSITIVE when it slides off (groups smaller than this score negative, the singleton penalty) |
| `alchemySingletonPenalty` | 0 / -1 / -2 / -3 | -1 | Points lost when an isolated cell slides off |
| `alchemyItemSpawnRate` | 0 / 0.1 / 0.2 / 0.3 | 0.15 | Probability per spawned piece of containing an alchemical item cell |

These knobs let the user reshape Alchemy from forgiving (slide@30°, min-group=2, no penalty) to brutal (slide@10°, min-group=5, -3 penalty).

---

## The Item Catalog

Items are special cell properties. A cell may carry a trait (one of 7 planetary symbols) AND an item (one of the entries below). Items have emoji + color overrides.

### Tier 1: The Three Primes (Tria Prima) — common

The foundational principles of Paracelsian alchemy. **All shipped in v1.**

| Item | Symbol | Color | Effect |
|---|---|---|---|
| **Salt** (Sal) | ✶ | white | Stabilizes. A group containing a Salt cell **cannot slide off**. Player anchor. |
| **Sulphur** (Sul) | 🜍 | red | Combustible. Every 5 turns, 4-adjacent cells transmute to Mars/iron (red). |
| **Mercury** (Mer) | ☿ | silver | Fluid. Counts as **any trait** when forming groups (universal solvent in matching). |

### Tier 2: Magnum Opus stages — rare

The four colors of the alchemical Great Work. Cells that transform over time.

| Item | Symbol | Color | Effect |
|---|---|---|---|
| **Nigredo** (Blackening) | 🜔 | black | First stage: cell appears dead. After 3 turns, transmutes to Mercury. |
| **Albedo** (Whitening) | 🜕 | white | Second stage: spawned from Nigredo's transmutation. After 3 turns → Citrinitas. |
| **Citrinitas** (Yellowing) | 🜖 | yellow | Third stage: from Albedo. After 3 turns → Rubedo. |
| **Rubedo** (Reddening) | 🜗 | red | Final stage: the perfected work. Acts as a Philosopher's Stone (transmutes neighbors). |

Playing through the four colors is a multi-turn project that rewards patience.

### Tier 3: Apparatus — utility, uncommon

The vessels and tools of alchemical work.

| Item | Symbol | Color | Effect |
|---|---|---|---|
| **Athanor** 🜫 (slow furnace) | 🔥 | orange | Heats 4-adjacent cells over time; they transmute to Mars every 4 turns. |
| **Alembic** | ⚗️ | brass | Distillation: separates a group, leaving the most-frequent trait and removing the rest. |
| **Crucible** | 🫙 | grey | High-heat vessel. With Sulphur adjacent, triggers calcination (removes group). |
| **Pelican** | 🦩 | dark | Circular distillation. Re-shuffles the next-piece queue. |
| **Mortar & Pestle** | 🪨 | stone | Grinds: a cell with Mortar adjacent has its weight halved permanently. |

### Tier 4: The Stone & the Elixir — legendary, very rare

The mythical goals of alchemy.

| Item | Symbol | Color | Effect |
|---|---|---|---|
| **Philosopher's Stone** 🜔 | 🪨 | gold | On placement, transmutes all 4-adjacent player cells to Sun (gold) trait. **SHIPPED v1.** |
| **Elixir of Life** | 🧪 | green | Heals: removes one negative item (Sulphur burn, Nigredo dying) within 4-adjacent cells. |
| **Aqua Vitae** | 💧 | clear | Water of Life. All adjacent cells become Mercury (wildcards). |

### Tier 5: Beasts & Symbols — narrative, rare

Allegorical figures from alchemical illustration.

| Item | Symbol | Color | Effect |
|---|---|---|---|
| **Ouroboros** | 🐍 | serpent green | Column wraparound: cells falling off the right of this column appear on the left of the same row. |
| **Phoenix** | 🔥 | flame red | A cell that, when destroyed, respawns one row below where it was. |
| **Green Lion** (Vitriol) | 🦁 | acid green | Corrodes: destroys one platform-contour cell adjacent to it (rare — can damage the immutable surface). |
| **Black Crow** | 🐦‍⬛ | black | Putrefaction marker. After 5 turns the cell rots and becomes empty (mass loss). |
| **White Eagle** | 🦅 | white | Sublimation: cell rises by 1 row each turn until blocked. Anti-gravity. |
| **Hermaphrodite** (Rebis) | ⚭ | half-and-half | Merges two adjacent different-trait cells into one Mercury cell. |

### Tier 6: Operations — the alchemical procedures

These are not items per se but VERBS that activate when specific item combinations occur:

| Operation | Trigger | Effect |
|---|---|---|
| **Calcination** | Sulphur + Crucible adjacent | The Sulphur and one adjacent cell both become ash (weight 0.3) |
| **Solution** | Aqua Vitae anywhere in a group | The entire group becomes Mercury |
| **Separation** | Alembic placed on a group | Group's least-common trait is removed |
| **Conjunction** | Hermaphrodite between two cells | The two cells merge to Mercury |
| **Fermentation** | Nigredo touches Citrinitas | Both immediately transmute to Rubedo (skip the Albedo step) |
| **Distillation** | Pelican + Alembic adjacent | All cells of one trait in the grid become Mercury |
| **Coagulation** | Salt adjacent to Mercury | The Mercury solidifies into the most-frequent neighboring trait |

### Tier 7: Historical figures & references — narrative tier

These don't spawn as regular items — they appear in cutscenes, tutorial dialogue, or as boss-level bonuses.

| Figure | Role |
|---|---|
| **Hermes Trismegistus** | Tutorial guide / narrator |
| **Paracelsus** | Introduces the Three Primes |
| **Nicolas Flamel** | Appears when player nears creating a Philosopher's Stone |
| **John Dee** | Hidden levels involving angelic magic |
| **Maria Prophetissa** | Tutorial for the Bain-Marie (low-heat distillation) |

### The Weapon Salve

The user specifically mentioned this. **Special design:**

The Weapon Salve is the alchemical concept that healing a weapon heals the wound it caused (sympathetic magic). Implementation:

- Weapon Salve 🗡️ spawns as a paired item. The "weapon" cell appears at one location and the "wound" cell appears at a random distant location, **linked**.
- Effects on one cell affect the other:
  - Cleared in a line clear → both clear, double bonus
  - Transmuted by Philosopher's Stone → both transmute
  - Destroyed by bomb → both destroyed
- Visual: thin glowing line connects the paired cells across the grid.
- Strategic: a Weapon Salve is high-value if you can match-clear both with one move, painful if you have to dance around the second one.

---

## Cascading effects: examples

The point of items is COMBINATION. A few worked examples:

### Example 1: The Black Crow Bomb
1. Player places a piece containing a **Black Crow** cell at position (col 5, row 6)
2. Crow's putrefaction timer is 5 turns
3. On turn 5, the Crow cell vanishes — mass loss shifts platform tilt
4. If the player set this up so the resulting tilt SLIDES a same-trait group off the far edge, that's a **planned cascade**

### Example 2: The Mercury Wildcard Chain
1. Player has placed Sun, Sun, Mercury, Moon along the bottom of a Bowl platform
2. Mercury acts as wildcard: the Suns are in a group of 3 (via Mercury)
3. Player tilts the platform; the group slides off as a 3-cell group: +3 bonus
4. But Mercury also matched as Moon, so the Moon cell joins ANOTHER group of 2 (Moon, Mercury) for +2
5. Total: +5 from one slide

### Example 3: Magnum Opus Sequence
1. Player gets a Nigredo on turn 5
2. Nurses it through three turns until it becomes Albedo
3. Three more turns → Citrinitas
4. Three more → Rubedo
5. The Rubedo cell then acts as a Philosopher's Stone, transmuting all 4-adjacent cells to Sun (gold)
6. Player has built a "gold corner" worth massive bonuses when slid off

### Example 4: Weapon Salve Trap
1. Weapon Salve spawns: weapon cell at (col 2, row 9), wound cell at (col 8, row 4)
2. Player builds carefully around both
3. Final move: places a bomb adjacent to the weapon cell
4. Bomb detonates → weapon destroyed → wound also destroyed → double score
5. Loss of mass in two places creates a complex tilt swing

---

## Tutorial level structure (design)

Each tutorial level introduces ONE concept with a dialogue intro:

| Level | Concept | Dialogue |
|---|---|---|
| Tutorial 1 | Basic balance | Hermes: "Welcome, seeker. Stack the pieces; do not tip the scales." |
| Tutorial 2 | Traits (the 7 planets) | Hermes: "Each stone bears the mark of a planet. Like marries like." |
| Tutorial 3 | Group sliding | Hermes: "When the scales tip, that which is alike falls together." |
| Tutorial 4 | The Three Primes intro | Paracelsus: "I name the three: Salt, the body. Sulphur, the soul. Mercury, the spirit." |
| Tutorial 5 | Salt — stabilization | Paracelsus: "Salt anchors what is true. It does not flow." |
| Tutorial 6 | Sulphur — combustion | Paracelsus: "Sulphur burns. What it touches becomes red." |
| Tutorial 7 | Mercury — wildcard | Paracelsus: "Mercury is all and none. It joins whatever asks." |
| Tutorial 8 | Magnum Opus stages | Hermes: "Black, then white, then yellow, then red — the four colors of the Work." |
| Tutorial 9 | Philosopher's Stone | Flamel: "I made the Stone in 1382. Now you make yours." |
| Tutorial 10 | Cascading | Hermes: "Now you know the parts. Combine them." |

Tutorials are levels with a fixed `startGrid`, a single piece in the queue (carefully chosen), and a 1-sentence dialogue overlay before play begins.

---

## Dialogue & cutscene framework (design — not shipped)

### Data shape

```js
const DIALOGUE = {
  tutorial1: [
    { speaker: 'Hermes', text: 'Welcome, seeker.', portrait: 'hermes.png' },
    { speaker: 'Hermes', text: 'Stack the pieces; do not tip the scales.', portrait: 'hermes.png' }
  ],
  // ...
};

const CUTSCENES = {
  intro: [
    { type: 'image', src: 'opening.png', duration: 3000 },
    { type: 'dialogue', dialogueId: 'tutorial1' },
    { type: 'image', src: 'emerald_tablet.png', text: 'As above, so below.' }
  ]
};
```

### Rendering

A cutscene phase is a new game.phase value: `'cutscene'`. The render dispatcher checks for it and draws a dialogue overlay (portrait + text box + Next button) instead of the gameplay.

When the cutscene ends, the game transitions to its scheduled level.

Effort estimate: ~6 hours including dialogue UI, portrait rendering, advance/skip controls.

---

## Implementation roadmap

### Phase A: Tunables + 3 starter items (SHIPPED THIS COMMIT)
- Alchemy settings: slide threshold, min group, singleton penalty, item spawn rate
- Salt, Mercury (wildcard), Philosopher's Stone implemented
- Emoji rendering on item cells

### Phase B: Sulphur + Magnum Opus chain (~2 days)
- Sulphur with timer-based transmutation of neighbors
- Nigredo → Albedo → Citrinitas → Rubedo chain (4 items, all timer-based)
- Per-turn `onTurnTick` hook in mode interface

### Phase C: Apparatus tier (~2 days)
- Athanor, Alembic, Crucible, Pelican, Mortar
- Operations registry that fires when specific item combinations are adjacent

### Phase D: Beasts & Symbols (~3 days)
- Ouroboros, Phoenix, Green Lion, Black Crow, White Eagle, Hermaphrodite
- Special rendering for each (animated emoji, connecting lines for Weapon Salve)

### Phase E: Tutorial system (~3 days)
- Dialogue data model + overlay UI
- 10 tutorial levels with scripted dialogue
- Cutscene framework: image transitions + text overlays

### Phase F: Lore deep-dive (~ongoing)
- Replace generic UI text with alchemical voice
- Historical-figure portraits (commissioned art or generated)
- "Codex" view in the menu: a list of all items the player has unlocked with their full lore description
- Soundtrack: drone-y meditative tracks per tutorial chapter

---

## Visual identity

Every item should be **immediately recognizable** by emoji + dominant color:

| Family | Color | Examples |
|---|---|---|
| Salt (stability) | pure white | ✶ |
| Sulphur (heat) | red-orange | 🜍 🔥 |
| Mercury (fluidity) | silver / pale blue | ☿ 💧 |
| Gold (perfection) | bright yellow | 🜔 ☉ |
| Lead (base) | dark grey | ♄ |
| Stages of the Work | follow stage color | 🜔 (black) 🜕 (white) 🜖 (yellow) 🜗 (red) |
| Beasts | thematic | 🐍 🦁 🐦‍⬛ 🦅 🔥 |
| Apparatus | brass / stone | ⚗️ 🫙 🦩 🪨 |

This makes the screen readable at a glance even when 15+ item types are in play.

---

## Reading list (for lore depth)

If we want to make the game's lore truly authentic:

- **Atalanta Fugiens** (Michael Maier, 1617) — emblem book pairing alchemical imagery with music
- **Mutus Liber** (1677) — wordless alchemical instruction book
- **Splendor Solis** (Salomon Trismosin, c.1532) — illustrated treatise on the Magnum Opus
- **The Emerald Tablet of Hermes** — foundational text
- Stanton J. Linden, *The Alchemy Reader: From Hermes Trismegistus to Isaac Newton* (Cambridge, 2003) — primary-source anthology
- Lawrence M. Principe, *The Secrets of Alchemy* (Chicago, 2013) — modern scholarly synthesis

(The user's own MTGSLIDER and Claudiens projects already lean on Atalanta Fugiens — perfect synergy.)
