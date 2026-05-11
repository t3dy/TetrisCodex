# Wild Hunt Level Conceits

This document turns the Trithemius Wild Hunt scholarship into level structures for a playable mode.

The levels are not meant to recreate the chronicle passages as literal historical claims. They translate scholarly features into mechanics: chronology, localization, sensory deception, phantom processions, nocturnal riders, and the unstable boundary between learned record and popular legend.

## Campaign Frame

Title options:

- **Annals of the Night Hunt**
- **Chronicle of the Phantasmal Chase**
- **878-1354: The Hunt In The Margins**
- **The Abbot's Nocturnal Ledger**

Player role:

The player is an alchemical chronicler maintaining a balance platform, garden, or apparatus table while the Hunt passes through the night. The task is not simply to banish the Hunt. The task is to decide what can be dated, what must be exposed as illusion, and what can be turned into alchemical profit.

Primary campaign meter:

```js
wildHuntCampaign = {
  dawn: 0,
  credibility: 100,
  chronicleEntries: 0,
  falseEntries: 0,
  huntPressure: 0,
  yearsRecovered: []
}
```

## Scholarship-To-Mechanic Map

| Scholarly Feature | Game Mechanic |
|---|---|
| Trithemius dates occurrences from 878 to 1354 | Year tokens stabilize apparitions and unlock levels |
| Trithemius localizes events | Place-marker tokens prevent apparition drift |
| Little overt skepticism toward the phantasmal chase | The player can profit from marvels by interpreting them, not merely destroying them |
| Sensory deception appears as an explanatory model | Some blocks lie until distilled |
| Phantom armies and dead hosts appear in the material | Processional lanes occupy space and create mass pressure |
| Cursed nocturnal hunter appears as a motif | Huntsman boss pieces require dating before disposal |
| Hounds, wind, hoofbeats are prominent signs | Omen beats telegraph physics changes |
| Religious moralization is present but thin | Levels reward chronicle discipline more than simple exorcism |
| Learned historiography absorbs popular legend | The UI should look like a playable annal or apparatus table |

## Level Families

### 1. Chronicle Levels

Goal: Attach the right date, place, or witness token to apparitions before dawn.

Core tension:

The board is physically unstable, but the intellectual instability matters too. An undated apparition may be harmless as mass, but dangerous as rumor.

Best for:

- teaching date tokens
- making scholarship visible in play
- non-combat scoring

### 2. Omen Beat Levels

Goal: Survive sequences of hounds, wind, hoofbeats, and horn calls.

Core tension:

Sound arrives before matter. The player must read the cue and prepare the platform.

Best for:

- physics lab controls
- slippery/wet/frozen surfaces
- lateral force puzzles

### 3. Phantom Procession Levels

Goal: Route, split, or date a marching dead host.

Core tension:

The host is not one enemy. It is a moving mass of entries, bodies, and rumors. Treating it as a single block is the mistake.

Best for:

- lane logic
- row/column processions
- dead-host scoring chains

### 4. Sensory Deception Levels

Goal: Distill true blocks from false appearances before using or tipping them.

Core tension:

The most valuable block may be lying about its weight, friction, side affinity, or class.

Best for:

- Virgo / Distillation
- Mercury / reveal play
- false Salt, false Sulphur, false Mercury

### 5. Huntsman Boss Levels

Goal: Counterbalance a moving rider, date him, then eject him profitably.

Core tension:

The Huntsman is dangerous as motion, but profitable as a chronicled marvel.

Best for:

- Balance Tetris
- side-tipping rewards
- moving temporary torque

### 6. Moat And Passage Levels

Goal: Build a stable bridge or causeway while Hunt pressure tries to scatter the blocks.

Core tension:

This borrows the user's moat/drawbridge idea: the king's horses need a flat enough crossing, but hoofbeats and hounds keep destabilizing the platform.

Best for:

- puzzle objectives beyond survival
- flatness constraints
- horse/rider theming

## Campaign Sequence

### Level 1: Year 878, First Entry

Scholarly conceit:

The campaign opens with chronology as an apparatus. A marvel becomes playable only when it receives a date.

Setup:

- Simple seesaw platform
- Low wind
- Few ordinary alchemical blocks
- One 🫥 apparition and one 📜 year token

Objective:

- Attach a date token to the apparition.
- Tip the dated apparition off the profitable side.

New blocks:

- 🫥 Apparition
- 📜 Year Token

Failure:

- Tip an undated apparition off either side.
- Credibility reaches 0.

### Level 2: Hounds In The Dark Air

Scholarly conceit:

The Hunt is heard before it is seen. Hounds become a predictive physics event.

Setup:

- Wet or low-friction surface
- Hound beats every three placements
- Volatile Mercury blocks in the queue

Objective:

- Survive until dawn while preventing hounds from pushing volatile blocks off the wrong side.

New blocks:

- 🐕 Hounds of the Air
- 👂 Earwitness

Special rule:

- Earwitness tokens reveal which row or side the hounds will strike next.

### Level 3: Hoofbeats On The Balance

Scholarly conceit:

Hoofbeats become historical sound and physical tremor at once.

Setup:

- Narrow-pole platform
- Hoofbeat tremor events
- Increased slipperiness

Objective:

- Chronicle three hoofbeat omens without letting the stack collapse.

New blocks:

- 🐎 Hoofbeat
- 🔗 Fixing Chain

Special rule:

- Hoofbeat events trigger a small slide pass on unstable stacks.

### Level 4: The Mistaken Substance

Scholarly conceit:

The Wild Hunt material includes deception of the senses. What looks like one substance may behave like another.

Setup:

- False Salt, false Sulphur, and false Mercury blocks
- Alembic Lens appears every fourth piece

Objective:

- Correctly identify five deceptive blocks.
- Score at least two revealed false apparitions by burning them.

New blocks:

- 👁️ Deception of the Senses
- 🪞 Mirror Hunt
- ⚗️ Alembic Lens

Special rule:

- Using a false block before revealing it reduces credibility.

### Level 5: The Troop Of The Dead

Scholarly conceit:

The furious host is processional: a moving crowd of the dead, not a single monster.

Setup:

- Dead-host tiles enter from one side in lanes.
- Each tile is light, but the procession creates cumulative torque and occupancy.

Objective:

- Split the host with Separation or date it with chronicle tokens before dawn.

New blocks:

- 💀 Dead Host
- ⚔️ Phantom Army
- 📍 Locality

Special rule:

- Locality pins stop one host lane from drifting.

### Level 6: The Cursed Nocturnal Hunter

Scholarly conceit:

The cursed hunter is a moralized figure, but the level still treats chronology as the stronger system.

Setup:

- Wild Huntsman rides across the top of the board every few beats.
- The rider adds temporary torque in direction of movement.

Objective:

- Counterbalance the Huntsman twice.
- Attach date and locality tokens.
- Tip him off the proper side for profit.

New blocks:

- 🏇 Wild Huntsman
- 🏹 Cursed Hunter
- 🔏 Credibility Seal

Special rule:

- Destroying the Huntsman before dating him counts as panic, not victory.

### Level 7: The Aerial Sorcerer

Scholarly conceit:

Two of the episodes involve aerial hunting sorcerers. One is especially important because the hunt is produced through sensory deception.

Setup:

- Sky-rider blocks pass above the board.
- Mirror Hunt blocks duplicate recent player pieces as phantoms.

Objective:

- Distill the true form of three aerial illusions.
- Prevent phantom copies from being counted as real chronicle entries.

New blocks:

- 🧙 Aerial Sorcerer
- 🎭 Prestigiator
- 🪞 Mirror Hunt

Special rule:

- False chronicle entries lower credibility more than ordinary mistakes.

### Level 8: Chronicle Against Panic

Scholarly conceit:

Trithemius's move is neither pure credulity nor pure skepticism. The player must record carefully without accepting every appearance.

Setup:

- Mixed apparitions, false blocks, and real omens
- High score target
- Credibility starts low

Objective:

- Finish with at least 70 credibility.
- Chronicle five true apparitions.
- Reject or burn three false ones after proof.

New blocks:

- 📖 Annal Entry
- 🔏 Credibility Seal

Special rule:

- Destroying unrevealed blocks is faster, but credibility-expensive.

### Level 9: Drawbridge Under The Hunt

Scholarly conceit:

This folds the moat/drawbridge idea into the Wild Hunt: horses and riders belong to the legend, but here the player must build a mundane crossing under supernatural pressure.

Setup:

- The tipped platform becomes a bridge.
- Hounds and hoofbeats attempt to scatter bridge pieces.
- Flatness meter tracks whether horses can cross.

Objective:

- Build a path across the moat that satisfies minimum height and maximum bumpiness.
- Survive one Huntsman pass after the bridge is complete.

New blocks:

- 🐎 Crossing Horse
- 🌉 Drawbridge Span

Special rule:

- Hoofbeats test the bridge. If it shakes apart, the crossing fails.

### Level 10: Year 1354, Last Entry Before Dawn

Scholarly conceit:

The endpoint year becomes an endgame seal. The Hunt is not killed; it is bounded by the chronicle.

Setup:

- High hunt pressure
- All omen beat types active
- Multiple false apparitions
- One ⏳ terminal year token

Objective:

- Attach the terminal date to the final Huntsman.
- Keep credibility above 50.
- Reach dawn.

New blocks:

- ⏳ Year 1354
- 🌅 Dawn Seal

Special rule:

- The final Huntsman cannot be destroyed. He can only be bounded, dated, and sent out of play.

## Mode Variants

### Balance Tetris: The Tilting Chronicle

Best implementation path:

- Omen beats modify physics parameters.
- Apparitions have side-affinity and tipping value.
- Chronology changes whether tipping is profitable.
- Huntsman is a moving torque event.

### Rune Bloom: The Night Path

Best implementation path:

- Hunt lanes cross the garden.
- Blooms touching Hunt lanes become apparitional.
- Distillation reveals which blooms are true.
- Dawn clears undated phantoms but rewards chronicled ones.

### Palette Lab: The Apparatus Desk

Best implementation path:

- Zodiac buttons create tools for reading the Hunt.
- Tria Prima buttons choose whether the tool fixes, burns, or volatilizes the target.
- The mode teaches the larger alchemical combinatorial system.

## Level Data Template

```js
{
  id: "hoofbeats_on_the_balance",
  title: "Hoofbeats On The Balance",
  family: "omenBeat",
  sourceMotif: "hounds, wind, and horses' hoofbeats as prominent Hunt sounds",
  platform: "narrowPole",
  surface: "wet",
  startCredibility: 100,
  dawnLimit: 12,
  huntBag: ["hooves", "wind", "hounds", "horn"],
  allowedBlocks: ["hunt_hooves", "chronicle_chain", "annal_entry"],
  objectives: [
    { type: "chronicle", targetClass: "omenBeat", count: 3 },
    { type: "surviveUntilDawn" }
  ],
  physicsOverrides: {
    slipperiness: 0.65,
    windSpeed: 0,
    shakeMultiplier: 1.4
  },
  scoring: {
    chronicledOmen: 60,
    falseEntryPenalty: -90,
    wrongSideDumpPenalty: -120
  }
}
```

## First Build Slice

The first implemented Wild Hunt mode should contain only three level conceits:

1. **Year 878, First Entry**: teach chronology.
2. **Hounds In The Dark Air**: teach omen beats and lateral force.
3. **The Cursed Nocturnal Hunter**: combine tipping, dating, and profit.

That gives the mode a beginning, a physics identity, and a boss identity without forcing the whole taxonomy into the first prototype.

