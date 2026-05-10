# 40 Alchemical Block Properties — Sourced from Real Alchemical Scholarship

Generated from the **AtalantaClaudiens** corpus (`C:/Dev/Claudiens/`), drawing primarily on:

- **Basilius Valentinus, *The Twelve Keys*** (1599) — translated in Maier's *Tripus Aureus* (1618). The 12 Keys structure the canonical operations of the Magnum Opus.
- **Michael Maier, *Atalanta Fugiens*** (1618) — 50 emblems with epigrams, discourses, and fugues. Source for figurative items (Atalanta, Hippomenes, Golden Apples, Toad, Salamander, Dragon, etc.).
- **H. M. E. De Jong, *Michael Maier's Atalanta fugiens: Sources of an Alchemical Book of Emblems*** (Brill, 1969). Source-tracing of Maier's emblems back to earlier alchemical compilations (Rosarium, Turba, Aurora Consurgens).
- **Hereward Tilton, *The Quest for the Phoenix*** (de Gruyter, 2003) — Maier in his Rosicrucian context; modern scholarly framing.
- Lawrence M. Principe, *The Secrets of Alchemy* (Chicago, 2013) — modern synthesis.

The Claudiens dictionary contains 74 entries — many of those terms become items below.

---

## The 12 Processes — the spine of the system

Following Valentine's Twelve Keys, every item belongs to one of these process families. When two items from **complementary** processes are adjacent, **a reaction fires** automatically (a cascade). This is the cascading-effect engine.

| Key | Process | Latin name | What it does to blocks |
|---|---|---|---|
| I | **Calcination** | Calcinatio | Reduces a block to ash (low weight, neutral trait) |
| II | **Dissolution** | Solutio | Breaks a block into Mercury (wildcard) |
| III | **Coagulation** | Coagulatio | Fixes a wildcard cell to the most-frequent neighbor trait |
| IV | **Putrefaction** | Putrefactio | Decays a block over N turns (mass loss timer) |
| V | **Sublimation** | Sublimatio | Lifts a block upward (anti-gravity) |
| VI | **Distillation** | Distillatio | Extracts trait from a column, leaves Mercury |
| VII | **Coction** | Coctio | Heats neighbors over time → Mars trait |
| VIII | **Multiplication** | Multiplicatio | Doubles the bonus of a matched group |
| IX | **Projection** | Projectio | Spreads trait to ALL same-row cells |
| X | **Fermentation** | Fermentatio | Converts neighbors to gold over time |
| XI | **Exaltation** | Exaltatio | Increases a single cell's weight contribution to score |
| XII | **Conjunction** | Coniunctio | Merges two adjacent unlike cells into a Hermaphrodite |

---

## The 40 Items

Each entry: **Name** · emoji · color · process tier · cascading interactions.

### Three Primes (Tria Prima) — Paracelsian foundation, COMMON spawn

These are the substrate everything else acts on.

#### 1. Salt ✶ (white #f0f0f0) — Coagulation
*Body, fixity, that which preserves.* (Dict: "the salt that is gained from ashes has great potency... the coagulation of all things is produced by salt alone" — Valentine, Fourth Key)
- **Effect:** Groups containing Salt cannot slide off the edge.
- **Cascades:** Salt resists transmutation by Philosopher's Stone, Sulphur, Aqua Regia.

#### 2. Sulphur 🜍 (red-orange #d8703a) — Coction
*Soul, fire, the active masculine principle.*
- **Effect:** Every 5 turns, 4-adjacent cells transmute to Mars (red).
- **Cascades:** Sulphur + Crucible adjacent → Calcination (both cells become ash). Sulphur next to Mercury vaporizes the Mercury (cell removed).

#### 3. Mercury ☿ (silver #c0c8d8) — Dissolution
*Spirit, fluidity, the volatile feminine principle.* (Dict: "the volatile, feminine, lunar principle. Liquid primary matter")
- **Effect:** Counts as any trait for group matching (wildcard).
- **Cascades:** Mercury + Salt (Coagulation) → Mercury becomes Salt-anchored, fixes to the most-frequent neighbor trait.

---

### Magnum Opus Stages — the four colors, UNCOMMON

The canonical color sequence of the Great Work. Each stage transmutes into the next over time.

#### 4. Nigredo 🜔 (black #1a1a1a) — Putrefaction
*The blackening; death of the old form.* (Dict + Valentine, Fourth Key: "all flesh must be decomposed and again reduced to earth")
- **Effect:** After 3 turns, transmutes into Albedo. Weight reduces by 0.2 each turn (decay).
- **Cascades:** Nigredo + Caput Mortuum (item #25) accelerates: 1 turn instead of 3.

#### 5. Albedo 🜕 (pure white #ffffff) — Sublimation
*The whitening; the soul made spotless.*
- **Effect:** After 3 turns → Citrinitas. Floats upward 1 row per turn while still Albedo.
- **Cascades:** Albedo + Aqua Vitae (item #29) skips Citrinitas, goes straight to Rubedo.

#### 6. Citrinitas 🜖 (yellow #f0d040) — Coction
*The yellowing; the dawn before the red sunrise.*
- **Effect:** After 3 turns → Rubedo. Contributes 1.5× normal torque (heavier as it nears the gold).
- **Cascades:** Citrinitas + Saturn-trait (lead) cell adjacent → instant Rubedo (gold cures lead per Valentine's IX Key).

#### 7. Rubedo 🜗 (deep red #c83c3c) — Multiplication
*The reddening; the perfected work, the Stone.*
- **Effect:** Acts as a Philosopher's Stone — transmutes adjacent cells to Sun/gold. Once it acts, it becomes a regular gold cell.
- **Cascades:** The "tincture" multiplies — adjacent Rubedos chain, transmuting cells in a flood-fill outward.

---

### Apparatus — vessels and tools, UNCOMMON

The physical instruments of the alchemist.

#### 8. Athanor 🜫 (orange #e85c20) — Coction
*The slow-burning alchemist's furnace.*
- **Effect:** Every 4 turns, 4-adjacent cells transmute to Mars (red, heated).
- **Cascades:** Athanor + Aqua Vitae adjacent → boils away (both vanish, mass loss).

#### 9. Alembic ⚗ (brass #b89060) — Distillation
*The distillation apparatus.* (Maier emblem XL: "Make one water out of two waters")
- **Effect:** On placement, all cells in the same column with the LEAST-common trait are removed (separation).
- **Cascades:** Alembic + Pelican adjacent → Circulation: all cells of one trait in the grid become Mercury.

#### 10. Crucible 🫙 (grey stone #707070) — Calcination
*High-heat vessel for melting bodies.*
- **Effect:** Reduces its own cell to ash on next placement (weight 0.3, neutral trait).
- **Cascades:** Crucible + Sulphur → Calcination: BOTH cells become ash. Crucible + Aqua Regia → cell becomes Sun (gold).

#### 11. Pelican 🦩 (deep red #800020) — Circulation
*The vessel for circular distillation; also the bird of self-sacrifice.* (Valentine III Key: "the Pelican, which wounds its own breast, and... nourishes... with its blood")
- **Effect:** Shuffles the next-piece queue. Adds 1 random piece back to the bag.
- **Cascades:** Pelican + Alembic adjacent → Distillation.

#### 12. Retort 🜬 (glass #cce0e0) — Distillation
*Beaked vessel for fractional distillation.*
- **Effect:** When this cell would slide off the edge, instead the piece "distills" — splits into 2 Mercury cells deposited at the bottom edge of the grid.

#### 13. Bain-Marie 🜜 (pale blue #b0d0f0) — Coction (gentle)
*Maria Prophetissa's water-bath; gentle warmth that doesn't burn.*
- **Effect:** Adjacent timed items (Nigredo, Sulphur, etc.) tick at HALF the normal rate. Stabilizes long processes.
- **Cascades:** Bain-Marie + Athanor adjacent → balance: timers proceed normally (cancellation).

#### 14. Mortar & Pestle 🪨 (stone grey #888888) — Calcination
*Manual reduction of solids.*
- **Effect:** Halves the weight contribution of any cell it's placed adjacent to (one-time effect per neighbor).
- **Cascades:** Mortar + Salt → Salt becomes heavier (weight 1.5), more powerful anchor.

#### 15. Glass Vessel 🜼 (clear #e0e0e0) — Coagulation
*The hermetically sealed vessel (Vas Hermeticum).* (Dict)
- **Effect:** Encloses its 4 neighbors: those cells cannot be transmuted by ANY other process while the Glass remains.
- **Cascades:** Glass + Mortar → the Glass breaks (removed), neighbors become normal.

---

### The Stone and Elixir — LEGENDARY, very rare

The mythical goals of the Work.

#### 16. Philosopher's Stone 🜔 (gold #ffd040) — Projection
*The Magnum Opus. The Lapis. The end of the Work.* (Dict + multiple Keys)
- **Effect:** On placement, transmutes all 4-adjacent cells to Sun/gold trait.
- **Cascades:** Stone + Salt: Stone's effect bypasses Salt (the One True Solvent). Stone + Stone chained → flood-fill transmutation through the whole grid.

#### 17. Elixir of Life 🧪 (emerald #30c060) — Multiplication
*The medicinal aspect of the Stone; the Universal Medicine.* (Dict: "the perfected medicine capable of healing all disease")
- **Effect:** Removes one negative timed item (Sulphur, Nigredo dying) within 4-adjacent cells. Also gives +1 to score.
- **Cascades:** Elixir + Aurum Philosophicum → both score double.

#### 18. Aqua Vitae 💧 (clear silver #d0e0f0) — Dissolution
*The water of life.* (Dict + Valentine II Key: "the bath consisting of two hostile kinds of matter")
- **Effect:** On placement, all 4-adjacent cells become Mercury (wildcard).
- **Cascades:** Aqua Vitae + Athanor → both vaporize. Aqua Vitae + Salt → Salt absorbs, no transmutation.

#### 19. Aqua Regia 🜅 (golden brown #c08840) — Dissolution
*Royal water; nitric+hydrochloric acid; only solvent of gold.* (Dict)
- **Effect:** When placed adjacent to a Sun/gold cell, the gold cell dissolves into Mercury. Otherwise inert.
- **Cascades:** Aqua Regia + Crucible → cell becomes gold (acid neutralized).

#### 20. Tinctura 🜍 (rose-red #d04050) — Projection
*The coloring agent of transmutation.* (Dict: "imparts the golden or red color to base metal")
- **Effect:** ALL same-row cells (left and right) of any trait become Sun/gold.
- **Cascades:** Tinctura + Multiplicatio (mode setting) → double bonus on the resulting gold group.

#### 21. Aurum Philosophicum ☉ (bright gold #fff080) — Exaltation
*Philosophical gold — not common gold, the perfected substance.*
- **Effect:** Counts as 2× weight for torque AND 2× score when it slides off as part of a group.
- **Cascades:** Aurum + Rubedo adjacent → Multiplication: the GROUP this cell is in scores 3×.

---

### Beasts & Symbols — narrative tier, RARE

Allegorical figures from the alchemical bestiary.

#### 22. Ouroboros 🐍 (serpent green #406040) — Circulation
*The serpent eating its own tail; cyclical process.* (Dict + emblem XIV)
- **Effect:** Cells falling off the right edge of this row appear on the left of the same row (wraparound).
- **Cascades:** Ouroboros + Pelican → entire row cycles indefinitely; pieces never lost.

#### 23. Dragon 🐉 (green-gold #408050) — Putrefaction / Coction
*Volatile spirit; guardian of treasure.* (Dict + emblems XXIV, XXV)
- **Effect:** Eats the cell it lands on, replacing the existing cell with itself. Dragon dies if not killed by its brother (another Dragon adjacent kills both — emblem XXV).
- **Cascades:** Dragon + Salamander (item #24) → both transmute to gold (fire meets fire, perfected).

#### 24. Salamander 🦎 (flame red #ff5030) — Coction
*Lives in fire; perfectly tempered.* (Emblem XXIX: "Just as the Salamander, the stone lives in the fire")
- **Effect:** Immune to Sulphur, Athanor, Calcination. Acts as a "fire bank" — saves the player from one tilt-induced game over (consumed).
- **Cascades:** Salamander + Stone → permanent invincibility (the Salamander becomes the Stone's vessel).

#### 25. Caput Mortuum 💀 (dark brown #503020) — Putrefaction
*"Dead head"; the residue after distillation.* (Mortificatio + Putrefactio per Dict)
- **Effect:** A "dead" cell with no trait. Acts as filler — counts as platform-like for torque (0 contribution) but is not platform (can be cleared).
- **Cascades:** Caput Mortuum + Nigredo → accelerates Nigredo's putrefaction (1 turn).

#### 26. Phoenix 🔥 (flame red-gold #ff7020) — Multiplication
*Reborn from ashes; calcination followed by resurrection.* (Valentine IV Key: "from which ashes the Phoenix is to produce her young")
- **Effect:** When this cell is destroyed (bomb, line clear, slide-off), it respawns at the column's bottom row (or as low as possible).
- **Cascades:** Phoenix + Crucible → must be calcined first; produces 2 Phoenixes on respawn.

#### 27. Green Lion 🦁 (acid green #80c040) — Dissolution
*Vitriol; the acid that dissolves gold.* (Dict: green lion = sulfuric acid in iconography)
- **Effect:** Corrodes ONE platform-contour cell adjacent to it (rare — destroys structure).
- **Cascades:** Green Lion + Sun → eats the Sun (gold cell), gains its weight.

#### 28. Black Crow 🐦‍⬛ (matte black #202020) — Putrefaction
*The carrion bird of nigredo; putrefaction marker.* (Cauda Pavonis precursor)
- **Effect:** After 5 turns the cell rots and becomes empty. Mass loss = tilt swing.
- **Cascades:** Crow + Crow within 2 cells → both rot in 2 turns (accelerated putrefaction).

#### 29. White Eagle 🦅 (pure white #f8f8f8) — Sublimation
*Sublimation marker; rises from base to subtle.* (Valentine on Sublimatio)
- **Effect:** Rises 1 row per turn until blocked by another cell. Anti-gravity.
- **Cascades:** White Eagle + Albedo → both rise twice as fast.

#### 30. Hermaphrodite (Rebis) ⚭ (half-and-half #c08080) — Conjunction
*The two-thing; conjoined opposites.* (Emblem XXX, XXXIII; Dict)
- **Effect:** When this cell is sandwiched between two different-trait cells, all three merge into a single Hermaphrodite cell that carries both traits (matches both for groups).
- **Cascades:** Hermaphrodite + Stone → both transform; the Hermaphrodite becomes Lapis (item #16), doubled effect.

#### 31. Cauda Pavonis 🦚 (iridescent rainbow #ff80c0) — Multiplication
*The peacock's tail; the iridescent transition between nigredo and albedo.* (Dict)
- **Effect:** Counts as wildcard for EVERY trait simultaneously (joins all groups it touches).
- **Cascades:** Cauda Pavonis + Albedo → both become Citrinitas instantly.

---

### Personae — figures from the Atalanta narrative, RARE

These are the dramatis personae of Maier's emblem book.

#### 32. Atalanta 🏃‍♀️ (silver-blue #a0c0e0) — Sublimation
*The fleeing maiden; volatile Mercury that must be captured.* (Dict + frontispiece narrative)
- **Effect:** Behaves like a Mercury cell, BUT every turn it tries to move one column toward the edge (volatile, fleeing).
- **Cascades:** Atalanta + Hippomenes → both lock in place permanently (the marriage / capture).

#### 33. Hippomenes 🏃 (red-gold #d04020) — Coagulation
*The pursuer; fixed Sulphur catching volatile Mercury.* (Dict)
- **Effect:** Fixes itself and 4-adjacent cells (they cannot slide).
- **Cascades:** Hippomenes + Atalanta → both lock (above). Hippomenes + Golden Apple → moves toward nearest Atalanta automatically.

#### 34. Golden Apple 🍎 (gold #ffcc40) — Multiplication
*Venus's gift; the catalyst that enables Hippomenes's victory.* (Dict)
- **Effect:** When this cell is destroyed by any means, it scores +5 bonus.
- **Cascades:** Golden Apple + Atalanta → Atalanta stops fleeing (moves like a regular cell).

#### 35. King (Rex) 👑 (gold #ffd040) — Exaltation
*Sol; the masculine fixed principle.* (Dict + many emblems)
- **Effect:** Sun-trait cell with double weight, double score when slid off.
- **Cascades:** King + Queen adjacent → Coniunctio (item #38).

#### 36. Queen (Regina) 🌙 (silver #c0c0e0) — Exaltation
*Luna; the feminine volatile principle.* (Dict)
- **Effect:** Moon-trait cell with double weight, double score when slid off.
- **Cascades:** Queen + King → Conjunction.

#### 37. Toad 🐸 (sallow green #607040) — Putrefaction
*Earth, heaviness, putrefaction.* (Emblem V: "Put a toad to the breasts of a woman, that she may feed it")
- **Effect:** Heavy cell (weight 2.5). Drags down its column's torque hard.
- **Cascades:** Toad + Eagle → Conjunction of heavy and light (both removed, balance restored, +3 bonus).

#### 38. King Duenech (sick king) 👴 (sallow yellow #b0a060) — Putrefaction
*The melancholic king who must be cured.* (Dict + emblems XXVIII, XLVIII)
- **Effect:** Spawns "sick." Every turn, the cell weight increases by 0.1 (sickness). Cured by Aqua Vitae or Bain-Marie adjacent.
- **Cascades:** Duenech + Aqua Vitae → cure: becomes a King (item #35).

---

### Operations as Items — RARE

These items embody alchemical operations, not substances.

#### 39. Coniunctio 🜲 (pink-purple #c060a0) — Conjunction
*The Union of Opposites; central operation of the Great Work.* (Dict — "Union of opposites... the central operation")
- **Effect:** When placed between two different-trait cells, fuses them all into a Hermaphrodite group of 3.
- **Cascades:** Coniunctio + Rebis (Hermaphrodite) → both become the Stone.

#### 40. Solve et Coagula ☥ (half-mercury half-salt #b8b8c8) — Dual
*"Dissolve and Coagulate"; the fundamental binary rhythm of the Work.* (Dict)
- **Effect:** Alternates each turn between Salt mode (anchors) and Mercury mode (wildcard).
- **Cascades:** Solve et Coagula + Ouroboros → enters eternal cycle: scores +1 each turn for as long as it exists.

---

## Cascading interaction matrix (excerpt)

These are the "if you know the lore" combinations the user mentioned:

| A | B | Result |
|---|---|---|
| Sulphur | Crucible | Calcination — both become ash |
| Salt | Mercury | Coagulation — Mercury solidifies to neighbor trait |
| Aqua Vitae | Athanor | Both vaporize, mass loss |
| Nigredo | Caput Mortuum | Nigredo putrefies faster (1 turn) |
| Albedo | Aqua Vitae | Skip to Rubedo immediately |
| Citrinitas | Saturn-trait neighbor | Instant Rubedo (gold cures lead) |
| Rubedo | Rubedo | Chain transmutation outward |
| Athanor | Pelican | Circulatio — entire row recycles |
| Alembic | Pelican | Full-grid trait → Mercury |
| Stone | Stone | Flood-fill transmutation |
| Atalanta | Hippomenes | Both lock permanently |
| King | Queen | Conjunction → Hermaphrodite |
| Toad | Eagle | Equilibrium: both removed, +3 bonus |
| Dragon | Salamander | Both → gold |
| Green Lion | Sun | Lion eats gold, gains weight |
| Hermaphrodite | Stone | Both → Lapis, doubled effect |
| Phoenix | Crucible | Calcined then resurrected as TWO Phoenixes |
| Duenech | Aqua Vitae | Sick king cured → becomes King |

This is the substrate. The 40 items × ~50 documented interactions create a game that **rewards alchemical literacy**: knowing what Caput Mortuum is changes how you play around a Nigredo.

---

## Tutorial pedagogy

The user said: "cutscenes and dialogue and tutorial levels teaching all the alchemical properties of blocks."

The natural curriculum:

1. **Three Primes** (Lv 1-3): Salt, Sulphur, Mercury — what's body, soul, spirit
2. **Magnum Opus colors** (Lv 4-7): Nigredo → Albedo → Citrinitas → Rubedo as a guided sequence
3. **Apparatus** (Lv 8-12): One vessel per level, paired with a Prime
4. **Stone & Elixir** (Lv 13-15): The legendary endgame items
5. **Beasts** (Lv 16-22): Ouroboros, Dragon, Salamander, Phoenix, Eagle, etc.
6. **Personae** (Lv 23-26): The Atalanta narrative — Atalanta + Hippomenes + Golden Apples + King + Queen
7. **Operations** (Lv 27-30): Calcination, Solution, etc. as standalone challenges
8. **Master class** (Lv 31+): Multi-item combinations; the player composes long cascades

Each tutorial introduces ONE item and ONE interaction. The "Codex" view (designed in `ALCHEMY_LORE.md` Phase F) becomes the player's growing alchemical library.

---

## Voice and dialogue

The user wants cutscenes and dialogue from historical figures. Authentic-voice candidates from Claudiens corpus:

| Figure | Voice |
|---|---|
| **Hermes Trismegistus** | The voice of the *Emerald Tablet*: "As above, so below." Compressed, oracular. |
| **Basilius Valentinus** | Earthy, parable-heavy. *Twelve Keys* style: "the fierce grey wolf devours the body of the King" |
| **Michael Maier** | Erudite, layered. Emblem-discourse style: each image is a riddle. |
| **Paracelsus** | The Tria Prima architect. Definitional, doctrinaire. |
| **Maria Prophetissa** | The mother of alchemy. Practical, instructional. Wrote in axioms ("One becomes two, two becomes three, and out of the third comes the one as the fourth"). |
| **Nicolas Flamel** | Pseudonymous mythic figure. Speaks in personal first-person (he supposedly made the Stone). |

Sample dialogue draft, Tutorial 4 (Nigredo):

> **Maier:** "The first color is black — *Nigredo*, the putrefaction. The body must die before it can be reborn. Place the Nigredo block. Watch it darken. The wise are not troubled by death; they expect it."
>
> **Valentine** (interjecting): "All flesh that is derived from the earth must be decomposed and again reduced to earth. Then the earthy salt produces a new generation."
>
> *(player places the Nigredo block; after 3 turns it transmutes to Albedo)*
>
> **Maier:** "Now the white. From the death, the dove."

This is the texture the game can reach for if we build the dialogue layer.

---

## Closing note

Every item above can be cited back to the Claudiens corpus: the *Twelve Keys*, the Atalanta emblems, the De Jong source-tracings, the Tilton modern scholarship. The game becomes a literacy program disguised as a falling-block puzzle.

The implementation roadmap in `ALCHEMY_LORE.md` (Phases A-F) covers how to ship this incrementally. Phase A (tunable settings + 3 starter items) is already complete. Phases B-D add the items above in tiers; Phase E adds the tutorial/dialogue layer that turns the items into a curriculum.
