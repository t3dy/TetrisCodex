# Philip K. Dick-Inspired Balance Tetris Modes

This document turns QueryPat PKD motifs into Balance Tetris game modes. The guiding rule: each story-world idea must become a physical puzzle behavior, a player verb, a block property, a queue rule, or a scoring pressure.

The modes below can live beside Alchemy, Wild Hunt, Moat Bridge, Physics Lab, and Rune Bloom-linked experiments. They should be treated as mechanical remixes rather than direct plot adaptations.

## Mode Family Overview

| Mode | Core Puzzle Question | Primary System |
| --- | --- | --- |
| Ubik Anti-Entropy | Can you keep a stack real while it decays backward? | Decay/restoration |
| Cold-Pac Half-Life | Can you balance weight that does not always support? | Phase state |
| Runciter Signal | Can you trust strange warnings before physics shifts? | Forecast messages |
| Scanner Scramble | Can you place pieces when perception lies? | Hidden identity |
| Substance D Split | Can you manage two conflicting control/physics halves? | Dual controls |
| High Castle Hexagrams | Can you build across branching timelines? | Hexagram modifiers |
| Minority Report Queue | Can you profitably prevent one possible failure? | Future intervention |
| Androids & Kipple | Can empathy links offset junk accumulation? | Linked blocks/debris |
| VALIS Beam | Can revelation unlock a trapped platform? | Hidden-property reveal |
| Time Out Of Joint | Can you survive the board after the set collapses? | Illusion reveal |
| Electric Ant Tape | Can you edit the physics timeline before it reaches you? | Timeline editing |
| Three Stigmata | Can you exploit an easier false board without contamination? | Nested board |
| Perky Pat Miniature | Can comfort objects score while war pressure tilts the model? | Miniature pressure |
| Maze Of Death Fusion | Can partial realities combine into a stable stack? | Perspective fusion |
| Clans Psychotype Stack | Can contradictory block temperaments cooperate? | Behavioral factions |
| Dr. Bloodmoney Fallout | Can you use mutation instead of being ruined by it? | Weather mutation |

## Shared PKD Block Graphics Grammar

Emoji blocks should stay playful, symbolic, and legible at small size.

| Class | Emoji Candidates | Mechanical Meaning |
| --- | --- | --- |
| Signal | 📡, 🛰️, 📻, 💡 | Reveals, warns, stabilizes |
| Entropy | 🕰️, 🧊, 🕳️, 🪦 | Decay, regression, support loss |
| Spray/Antidote | 🧴, ✨, 💊, 🟢 | Restores, cures, unfreezes |
| Surveillance | 👁️, 📷, 🕶️, 🧥 | Scans, hides, scrambles |
| Precog | 🔮, 👶, 🧠, 📈 | Forecasts, queue edits |
| Synthetic | 🤖, 🐑, ⚙️, 🪫 | Hidden authenticity, artificial support |
| Kipple | 🗑️, 📦, 🧹, 🧱 | Junk mass, clutter, nuisance ballast |
| Hexagram | ☰, ☱, ☲, ☳, ☴, ☵, ☶, ☷ | Branch modifiers |
| Prison | ⛓️, ▦, 🧱, 🔒 | Locked support, trapped cells |
| Tape | 🎞️, ✂️, 🕳️, 🧷 | Timeline edits |
| Delusion | 👁️‍🗨️, 🎭, 🌀, 💭 | False support, nested rules |
| Fallout | ☢️, 🌫️, 🧬, 🧲 | Mutation, wind, altered mass |

Use emoji as the readable top layer, then color/shape as the formal gameplay layer. A player should never need to know the literary source to understand the rule.

## 1. Ubik Anti-Entropy

Source anchors:

- QueryPat `book-pkd-ubik.json`: half-life states, temporal regression, entropy/degradation, unreliable reality.
- QueryPat `AIpassages.md` and `exegesis_ordered.txt`: Ubik as anti-entropy, medicine, antidote, intrusion from a truer reality.

Core conceit:

The platform is not merely tilting; it is aging backward into older, less reliable physics. Blocks fade through stability states unless the player applies rare Ubik restoratives.

Mechanics:

- Every turn, placed blocks gain `entropy`.
- At entropy thresholds, cells move through `solid -> brittle -> ghost -> dust`.
- Brittle cells support less vertical load.
- Ghost cells still apply mass/torque but do not support new cells.
- Dust becomes kipple-like ballast that slides toward the low side.
- Ubik spray restores a small cluster to solid and briefly freezes entropy.

Player verbs:

- Place tetromino.
- Spray one cluster.
- Delay entropy for one turn by accepting a worse next piece.
- Tip dust off the profitable side for bonus value.

Scoring:

- Base placement score.
- Restoration bonus for saving high-load cells.
- Profit bonus for tipping decayed alchemical waste off the correct side.
- Penalty for spraying too early.

First implementation slice:

- Add `age` and `supportFactor` to placed cells.
- Add one `ubikCharges` counter.
- Draw faded/outlined cells by entropy state.
- Add a campaign level where entropy starts mild and escalates every five turns.

## 2. Cold-Pac Half-Life

Source anchors:

- QueryPat Ubik archive metadata and Exegesis references to half-life/cold-pac situations.

Core conceit:

The stack is inhabited by half-living blocks. They remain heavy, but their ability to bear load pulses on and off.

Mechanics:

- Some blocks have `phaseCycle`.
- `awake` blocks support normally.
- `halfLife` blocks exert mass but support only 25-50 percent.
- `deadAir` blocks exert mass but provide no support.
- The platform has a life-support meter that can be rerouted left/right.

Player verbs:

- Place.
- Route life support to one side.
- Wake one block for one turn.
- Profitably tip inert blocks into a disposal chute.

Level targets:

- Keep a patient-stack alive for 12 turns.
- Deliver all volatile half-life cells off the moon-side tray.
- Avoid letting unsupported oil blocks collapse into mercury pools.

## 3. Runciter Signal

Source anchors:

- Ubik's commercial message structure and QueryPat's emphasis on signals from unstable reality layers.

Core conceit:

Warnings appear as ads, invoices, product slogans, and broken instructions. Some are useful, some are noise, and some arrive one turn too early.

Mechanics:

- Before each turn, a signal forecasts one of: wind shift, friction loss, mass mutation, false shape, or entropy spike.
- Signals have reliability ratings hidden from the player at first.
- The player can spend a scan to authenticate a signal.

Player verbs:

- Trust a signal and pre-place accordingly.
- Scan one message.
- Mute a signal at the cost of losing queue preview.

UI:

- A small signal strip beside the platform.
- Text must be short and gameplay-facing, not lore exposition.

## 4. Scanner Scramble

Source anchors:

- QueryPat `scannerdarkly.json`: hallucinatory drug underworld, Bob Arctor, surveillance state, perceptual unreliability.
- AIpassages: split perception, occlusion, two-brained reading.

Core conceit:

The current piece is shown through a scrambling interface. Its color, mass, or even silhouette may be false until scanned.

Mechanics:

- Each piece has `displayShape` and `trueShape`.
- Some cells have false emoji overlays.
- The player has limited scanner pulses.
- Bad scans can briefly reveal the wrong thing if the mode is in high-drift difficulty.

Player verbs:

- Place from partial information.
- Scan current piece.
- Scan one existing stack layer.
- Accept a hallucinated placement for bonus multiplier.

Failure pressure:

- False-light pieces cause unexpected torque.
- Misidentified sticky blocks can lock the stack into bad geometry.

First implementation slice:

- Hide cell weights behind `?` overlays.
- Scanner reveals true mass class for three turns.
- Add one "Substance D" campaign level with two reveal charges.

## 5. Substance D Split

Source anchors:

- Scanner Darkly split identity/perception motifs in QueryPat notes.

Core conceit:

The left and right halves of the board stop agreeing about the player.

Mechanics:

- Left side can have inverted horizontal control.
- Right side can have altered gravity/slipperiness.
- Blocks crossing center inherit a "split" property.
- Split blocks may count as two small masses in torque calculation.

Player verbs:

- Toggle which hemisphere currently receives keyboard input.
- Use mouse placement to bypass one control split.
- Fuse split blocks by placing them on a neutral centerline altar.

## 6. High Castle Hexagrams

Source anchors:

- QueryPat High Castle archive metadata: alternate history, divided territories, I Ching guidance.

Core conceit:

Every turn begins with a hexagram-like modifier that selects which version of the platform is currently real.

Mechanics:

- Draw one hexagram tile per turn.
- Hexagrams alter friction, gravity, wind, support position, or scoring gate.
- Two timeline boards share the same visual stack but calculate different torque.
- Some blocks are "yin" mass in one timeline and "yang" buoyancy in the other.

Player verbs:

- Choose one of two hexagram lines to activate.
- Commit a piece to timeline A, timeline B, or both.
- Reconcile timelines by building symmetric bridges.

Scoring:

- Bonus for stable agreement: both timelines remain within safe tilt.
- Profit for using one timeline to tip alchemical substance while preserving the other.

First implementation slice:

- Add a pre-turn modifier card.
- Start with simple hexagrams: heavy-left, heavy-right, low-friction, wind-east, double-gravity, mercy-turn.

## 7. Minority Report Queue

Source anchors:

- QueryPat story collection metadata containing "The Minority Report."

Core conceit:

The game shows several future dangers. The player can prevent one, but doing so may make the minority forecast come true instead.

Mechanics:

- Preview three future pieces and one predicted failure mode.
- The player gets `interventions`.
- Intervening discards/reorders a future piece, but increases "determinism pressure."
- High determinism makes platform correction weaker.

Player verbs:

- Arrest a future piece.
- Preserve the minority queue.
- Let a bad future happen for a larger recovery window.

UI:

- Queue lane with majority/secondary/minority forecast badges.
- Warning line: "Predicted low-side slide" / "Predicted left torque spike" / "Predicted brittle collapse."

## 8. Androids & Kipple

Source anchors:

- QueryPat Androids archive cluster and "The Android and the Human."

Core conceit:

The platform fills with junk unless the player builds empathy links. Synthetic and organic blocks may look similar but score differently.

Mechanics:

- Kipple spawns in low cavities and on the low side of the platform.
- Empathy-linked blocks share load and reduce tilt spikes.
- Synthetic blocks have hidden authenticity and may not trigger empathy.
- Electric sheep-style decoys are light but emotionally valuable if protected.

Player verbs:

- Place.
- Test one block's authenticity.
- Clean one kipple cell.
- Link two matching empathy symbols.

Balance twist:

- Kipple is bad clutter, but tipping it off the correct side can pay.
- Protecting fragile synthetic/living blocks creates awkward mass distribution.

## 9. VALIS Beam

Source anchors:

- QueryPat VALIS trilogy metadata: Gnosticism, revelation, divine reality, 1974 material.

Core conceit:

The board is imprisoned by false physics until a beam reveals the true state.

Mechanics:

- Hidden property cells are covered by prison overlays.
- VALIS beam sweeps one column or diagonal.
- Revealed cells show true mass, friction, volatility, or alchemical process.
- Beam-lit cells can temporarily ignore Black Iron Prison locks.

Player verbs:

- Aim beam.
- Reveal before placement.
- Convert a prison cell into support.
- Use revealed alchemical matching to profitably tip correct substances.

First implementation slice:

- Add one beam charge per level.
- Reveal hidden mass and reduce local friction lock.

## 10. Time Out Of Joint

Source anchors:

- QueryPat Time Out of Joint metadata: constructed illusion around Ragle Gumm's small-town existence.

Core conceit:

The early level pretends to be ordinary Balance Tetris. Then the stage-set falls away and all props reveal their true physical roles.

Mechanics:

- Initial blocks display ordinary household/furniture emoji.
- After a threshold, some props become missiles, weights, stage flats, or hollow shells.
- The platform support/pivot may shift after the reveal.
- UI labels can be diegetically wrong until the collapse.

Player verbs:

- Inspect one prop.
- Anchor one row before the reveal.
- Choose whether to trigger the reveal early for bonus control.

## 11. Electric Ant Tape

Source anchors:

- QueryPat Exegesis references to tape/clock, dysynchronization, and two simultaneous realms.

Core conceit:

The physics of the level is written on a tape moving toward a read head. The player can cut, punch, and splice it.

Mechanics:

- Timeline tape has segments: gravity high, wind left, wet surface, frozen surface, entropy spike, mercy.
- Segments advance every turn.
- Player has limited edits.
- Editing can remove a future hazard but may delete a future bonus.

Player verbs:

- Punch a hole in a segment.
- Splice two adjacent segments.
- Slow the tape for one turn.
- Accelerate tape to skip a bad current piece.

## 12. Three Stigmata

Source anchors:

- QueryPat five-novel/Three Stigmata-related archive material and PKD delusion-world motifs.

Core conceit:

The player can enter a false, easier board to prepare placements. The false board leaks back.

Mechanics:

- Alternate board has lower gravity and friendly friction.
- Returning to the real board imports one contamination marker per false placement.
- Three-marked blocks spread properties: false support, oiliness, ownership, hallucinated mass.

Player verbs:

- Enter false board.
- Place with reduced difficulty.
- Purge one stigmata marker.
- Risk contamination for high score.

## 13. Perky Pat Miniature

Source anchors:

- QueryPat story collection metadata includes "The Days of Perky Pat."

Core conceit:

The player arranges miniature domestic/furniture tiles on a tiny platform while outside pressure disturbs the model.

Mechanics:

- Furniture tiles have comfort scores and awkward mass profiles.
- Bigger comfort sets multiply score but create fragile top-heavy silhouettes.
- Periodic basement shocks tilt the whole miniature.

Player verbs:

- Place furniture pieces.
- Brace the dollhouse.
- Sacrifice comfort items to stabilize the model.

Asset direction:

- Tiny couches, tables, lamps, televisions, toy food, broken walls.
- Keep this visually distinct from alchemical furniture by using retro domestic palette and miniature scale.

## 14. Maze Of Death Fusion

Source anchors:

- QueryPat `dick-philip-kindred-a-maze-of-death-libgen-li.json`.

Core conceit:

The board is one reality viewed through several incompatible agent lenses. Periodically, those lenses fuse and the actual stack is recalculated.

Mechanics:

- Each agent lens shows different hidden block properties.
- Fusion turns all hidden properties real at once.
- The player can select which lens to trust before placing.

Player verbs:

- Switch lens.
- Place under uncertainty.
- Lock one observed property so it survives fusion.

## 15. Clans Psychotype Stack

Source anchors:

- QueryPat `dick-philip-k-clans-of-the-alphane-moon-1964-ace-books-libgen-li.json`.

Core conceit:

Blocks belong to behavioral factions. Stability comes from arranging conflicting temperaments into a working coalition.

Mechanics:

- Manic blocks slide faster and bounce on landing.
- Paranoid blocks resist adjacency and push away near neighbors.
- Depressive blocks grow heavy over time.
- Obsessive blocks lock rotation after first preview.
- Healer blocks reduce neighbor entropy.
- Visionary blocks forecast one hazard but may hallucinate another.

Player verbs:

- Place according to temperament.
- Mediate two adjacent hostile factions.
- Build faction sets for bonuses.

## 16. Dr. Bloodmoney Fallout

Source anchors:

- QueryPat `dick-philip-k-dr-bloodmoney-or-how-we-got-along-after-the-bomb-1977-ace-books-li.json`.

Core conceit:

The environment mutates the blocks after they land. Mutation is dangerous, but the best scores come from exploiting it.

Mechanics:

- Fallout weather changes one property per turn.
- Some cells become magnetic, brittle, sticky, or glowing.
- Mutated blocks can be tipped off into profitable reclamation vats.
- Protective domes reduce mutation but add mass.

Player verbs:

- Shield one stack column.
- Expose one block intentionally.
- Harvest a mutation by tipping it off the correct side.

## Data Shape

```js
const pkdBalanceMode = {
  id: 'ubik_anti_entropy',
  title: 'Ubik Anti-Entropy',
  source: {
    queryPatDocs: ['book-pkd-ubik.json'],
    motifs: ['entropy', 'half-life', 'temporal regression', 'salvific information']
  },
  rules: {
    platform: 'seesaw',
    gravity: 1.0,
    wind: 0,
    friction: 0.75,
    entropyPerTurn: 1,
    restorativeCharges: 2
  },
  blocks: [
    { id: 'ubik_spray', emoji: '🧴', action: 'restore_cluster' },
    { id: 'ghost_cell', emoji: '🕳️', supportFactor: 0, massFactor: 1 },
    { id: 'brittle_cell', emoji: '🧊', supportFactor: 0.45, massFactor: 1 }
  ],
  scoring: {
    placement: 10,
    restoredCell: 25,
    profitableTip: 80,
    decayPenalty: -5
  }
};
```

## Recommended Build Order

1. **Ubik Anti-Entropy**
   - Closest to existing balance/tilt and alchemical substance tipping.
   - Adds decay and one restorative control.

2. **Minority Report Queue**
   - Extends the existing piece queue and gives it strategic agency.
   - Good bridge to campaign puzzles.

3. **Scanner Scramble**
   - Adds hidden block properties and reveal tools that will also help alchemy/Wild Hunt.

4. **High Castle Hexagrams**
   - Natural place to combine zodiac/alchemical process buttons with PKD branching rules.

5. **Androids & Kipple**
   - Adds debris ecology and empathy links, which can generalize into alchemical sympathy/antipathy.

6. **Electric Ant Tape**
   - Best after Physics Lab controls exist, because the tape can drive gravity/wind/friction over time.

## Integration With Alchemical Balance Tetris

These PKD modes should not replace the alchemical direction. They can become strange "libraries" or "chapels" inside the same alchemical game world:

- Ubik spray maps cleanly onto anti-entropy medicine and alchemical restoration.
- VALIS beam maps onto revelation, illumination, and hidden-property scholarship.
- High Castle hexagrams can sit beside zodiac/process selection.
- Scanner Scramble can power any mode where substances have occulted properties.
- Kipple can become prima materia debris or failed laboratory residue.
- Electric Ant tape can become a programmable planetary-hours strip.

The strongest shared mechanic is **profitable tipping**: some substances should fall off the correct side of the platform into the correct receiver. PKD modes can make "correct side" unstable, predicted, hidden, or branch-dependent.
