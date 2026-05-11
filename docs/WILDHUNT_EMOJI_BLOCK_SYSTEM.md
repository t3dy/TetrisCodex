# Wild Hunt Emoji Block System

This document defines the emoji graphics, block classes, and mechanic grammar for a Wild Hunt mode based on Trithemius's chronicle treatment of the legend as summarized in the local Trithemius scholarship notes.

## Source Spine

Local source consulted:

- `C:\Dev\GPTmarch172026\chats_2026\2026-02-06_Trithemius.md`

Scholarly anchor:

- William C. McDonald, "Trithemius and the Legend of the Wild Hunt" (*Fabula*, 2018), as represented in the local research notes.

Game-relevant observations:

- Trithemius treats Wild Hunt material as chronicle-worthy, not merely as dismissible superstition.
- The four relevant chronicle passages involve a phantom army, a cursed nocturnal hunter, and two aerial hunting sorcerers.
- One sorcerer episode is framed as a sensory deception: a produced image of a hunt rather than an ordinary material hunt.
- Trithemius dates and localizes the events between 878 and 1354, using chronology as credibility machinery.
- The Hunt complex is noisy and kinetic: hounds, wind, hoofbeats, aerial chase, riders, and dead-host procession.
- The religious warning layer exists, but the notes emphasize that it remains comparatively thin; the stronger design hook is historiography, perception, and containment.

## Design Principle

The Wild Hunt blocks should feel like entries in an unstable chronicle.

They are not just enemies. They are signs, noises, processions, apparitions, illusions, dates, witnesses, and alchemical interventions. The player wins by deciding what kind of event each block is: omen, phantom, deception, historical entry, or substance.

## Core Block Classes

| Class | Role | Player Question | Main Verbs |
|---|---|---|---|
| Omen Beat | Sound or weather pressure before the Hunt arrives | What is about to move? | anticipate, brace, counterweight |
| Apparition | Visible but unstable supernatural body | Is it solid, false, or recordable? | reveal, chronicle, tip |
| Dead Host | Processional pressure occupying the board | Can the host be routed before dawn? | delay, split, date |
| Huntsman | Boss-pattern rider or cursed hunter | Can danger become profit if fixed in time? | counterbalance, bind, eject |
| Sorcerous Illusion | Deceptive tile that lies about its behavior | What am I really seeing? | inspect, distill, disbelieve |
| Chronicle Token | Date, place, witness, or annal marker | Can I make the marvel legible as history? | attach, certify, localize |
| Alchemical Counter | Apparatus or substance used to interpret the Hunt | Which process handles this sign? | calcine, dissolve, fix, distill |

## Emoji Palette

### Omen Beat Blocks

| ID | Emoji | Name | Source Motif | Behavior |
|---|---|---|---|---|
| `hunt_hounds` | 🐕 | Hounds of the Air | Yelping dogs in the night air | Pushes loose volatile blocks one cell toward the nearest edge |
| `hunt_wind` | 🌬️ | Night Wind | Wind as auditory/kinetic omen | Applies lateral wind force for one Hunt beat |
| `hunt_hooves` | 🐎 | Hoofbeat | Horse hoofbeats as warning sound | Shakes the platform; may loosen slippery stacks |
| `hunt_horn` | 📯 | Hunt Horn | Summons the chase | Spawns or previews the next Hunt lane |
| `hunt_mist` | 🌫️ | Phantasmal Mist | Unclear perception | Obscures one row or platform zone until distilled |
| `hunt_black_night` | 🌑 | Moonless Night | Nocturnal apparition field | Increases deception on all undated apparitions |

### Apparition Blocks

| ID | Emoji | Name | Source Motif | Behavior |
|---|---|---|---|---|
| `wild_huntsman` | 🏇 | Wild Huntsman | Cursed or nocturnal hunter | Heavy moving rider; adds torque in direction of travel |
| `cursed_hunter` | 🏹 | Cursed Hunter | Hunter expiating a sin | Scores only if dated before tipping; penalizes wrong-side disposal |
| `sky_rider` | 🧙 | Aerial Sorcerer | Hunting sorcerer through the air | Creates phantom duplicate blocks |
| `phantom_army` | ⚔️ | Phantom Army | Armies or troops of the dead | Marches as a lane; fills future placement space |
| `dead_host` | 💀 | Dead Host | Furious host / troop of the dead | Processional swarm; vanishes at dawn if not empowered |
| `night_people` | 👻 | Nachtvolk | Nocturnal spirits and wandering dead | Phase through one block unless fixed by Salt |
| `lost_soul` | 🕯️ | Lost Soul | Souls in nocturnal procession | Low weight, high chronicle value |
| `apparition` | 🫥 | Apparition | Generic unstable sighting | Looks solid but may be non-colliding until revealed |

### Sorcerous Illusion Blocks

| ID | Emoji | Name | Source Motif | Behavior |
|---|---|---|---|---|
| `sense_deception` | 👁️ | Deception of the Senses | Illusory hunt produced through perception | Lies about class until inspected |
| `false_hunt` | 🪞 | Mirror Hunt | Trugbild / image of a chase | Reflects the last placed piece as a phantom |
| `glamour_salt` | 🧂 | False Salt | Substance misread by sight | Appears fixed but slides like Mercury |
| `glamour_sulphur` | 🔥 | False Sulphur | Dangerous overinterpretation | Explodes if calcined before revealed |
| `glamour_mercury` | 💧 | False Mercury | Volatile false reading | Evaporates into mist when tipped |
| `prestigeur` | 🎭 | Prestigiator | Magical performance and misdirection | Swaps two unrevealed block identities |

### Chronicle Tokens

| ID | Emoji | Name | Source Motif | Behavior |
|---|---|---|---|---|
| `year_878` | 📜 | Year 878 | Earliest chronological anchor in the local notes | Fixes one apparition into history |
| `year_1098` | 🗓️ | Year 1098 | Nocturnal gathering / dead-host level anchor | Doubles value of dead-host blocks |
| `year_1354` | ⏳ | Year 1354 | Late endpoint in the local notes | Ends the Hunt if attached to a Huntsman |
| `place_marker` | 📍 | Locality | Trithemius localizes occurrences | Prevents apparition from migrating |
| `witness` | 👂 | Earwitness | Sound-based omen testimony | Reveals hounds, horn, hoofbeat, or wind before it lands |
| `annal_entry` | 📖 | Annal Entry | Chronicle as containment | Converts one omen into a scoring record |
| `credibility_seal` | 🔏 | Credibility Seal | Dating as plausibility | Protects credibility from one false interpretation |

### Alchemical Counter Blocks

These blocks connect Wild Hunt play to the larger zodiac plus Tria Prima system.

| ID | Emoji | Name | Alchemical Process | Wild Hunt Use |
|---|---|---|---|---|
| `salt_seal` | 🧂 | Salt Seal | Fixation / embodiment | Makes a phantom solid and placeable |
| `sulphur_lamp` | 🔥 | Sulphur Lamp | Calcination / incineration | Burns false apparitions after they are revealed |
| `mercury_mirror` | 💧 | Mercurial Mirror | Volatility / reflection | Lets a block ride with the Hunt for one beat |
| `alembic_lens` | ⚗️ | Alembic Lens | Distillation | Reveals true identity in a row, column, or platform lane |
| `chronicle_chain` | 🔗 | Fixing Chain | Fixation | Binds a Huntsman lane for one turn |
| `dawn_ash` | ⚱️ | Dawn Ash | Calcination residue | Remnant produced when false apparitions are safely burned |
| `star_table` | ✴️ | Star Table | Zodiac selection | Generates a process tile from a zodiac click |

## Visual Grammar

| State | Rendering Cue | Meaning |
|---|---|---|
| Undated apparition | pale opacity / soft glow | visible but not yet historically fixed |
| Dated apparition | gold or parchment outline | safe to score and use as evidence |
| Deceptive tile | flicker, eye mark, or mirror sheen | identity cannot be trusted |
| Chronicled tile | small date tag | converted from rumor to record |
| Host tile | marching offset animation | part of a procession |
| Hound tile | quick lateral lunge | pushes matter sideways |
| Hoofbeat tile | vertical shake pulse | impending platform tremor |
| Wind tile | streaking particles | lateral force active |
| Wrongly interpreted tile | cracked red outline | credibility loss risk |

## Mechanical Fields

Every Wild Hunt block should be representable with a data object like this:

```js
{
  id: "hunt_hounds",
  emoji: "🐕",
  label: "Hounds of the Air",
  class: "omenBeat",
  sourceMotif: "yelping dogs in the nocturnal Hunt complex",
  materialState: "volatile",
  weight: 1,
  friction: 0.25,
  slipperiness: 0.8,
  deception: 0,
  chronicleValue: 1,
  danger: 2,
  behaviors: ["pushLooseMatter", "advanceHuntMeter"],
  counters: ["salt_seal", "chronicle_chain", "place_marker"],
  zodiacSynergy: ["Virgo", "Gemini", "Cancer"],
  triaPrimaAffinity: "Mercury"
}
```

## Block Property Tags

| Tag | Effect |
|---|---|
| `volatile` | slides more under tilt, wind, hounds, and Mercury effects |
| `fixed` | resists Hunt movement; can anchor other pieces |
| `oily` | high score if tipped to the correct side, but difficult to hold |
| `apparitional` | visible before it is fully solid |
| `deceptive` | identity or behavior is hidden |
| `chronicled` | stabilized by date/place/witness tokens |
| `nocturnal` | stronger before dawn; weaker as dawn meter rises |
| `processional` | moves in lanes with other dead-host blocks |
| `cursed` | must be interpreted before it can be profitably removed |
| `auditory` | first appears as sound cue before a block arrives |

## Balance Tetris Behaviors

| Block | Balance Behavior |
|---|---|
| Hounds | Push loose or volatile stacks toward the lower side of the platform |
| Wind | Temporarily adjusts global wind speed |
| Hoofbeats | Adds shake; can trigger a slide pass if slipperiness is high |
| Horn | Previews or spawns the next Hunt lane |
| Wild Huntsman | Adds a temporary rider weight, creating torque while crossing |
| Phantom Army | Arrives as a broad, low stack that threatens stability through mass |
| Dead Host | Marches as a procession; each block has small weight but high lane pressure |
| Mirror Hunt | Creates a non-solid copy of a previous piece; becomes dangerous if trusted |
| Date Token | Adds value and stability to the attached apparition |
| Locality Token | Prevents a block from migrating under wind or hound pressure |

## Zodiac And Tria Prima Integration

| Button | Wild Hunt Translation |
|---|---|
| Aries / Calcination | Burn revealed false phantoms into ash |
| Taurus / Congelation | Freeze a moving apparition into a solid piece |
| Gemini / Fixation | Bind a Hunt lane or prevent a hound shove |
| Cancer / Dissolution | Dissolve mist and expose concealed properties |
| Leo / Digestion | Let a chronicled omen mature into bonus value |
| Virgo / Distillation | Reveal true form; best anti-illusion process |
| Libra / Separation | Split true apparition from false image |
| Scorpio / Incineration | Destroy hound packs or dead-host clusters |
| Sagittarius / Sublimation | Lift a threatened block out of the Hunt path |
| Capricorn / Fermentation | Turn a dated omen into delayed resource growth |
| Aquarius / Multiplication | Duplicate the reward from a verified chronicle entry |
| Pisces / Projection | Cast a protective line across the board |
| Salt | Fix, weigh down, certify, localize |
| Sulphur | Burn, excite, punish false matter |
| Mercury | Reveal, volatilize, move with the Hunt |

## Scoring Grammar

| Action | Score Effect |
|---|---|
| Chronicle an apparition with correct date/place/witness | +50 to +150 |
| Tip a dated Huntsman off the proper side | +250 |
| Burn an unrevealed apparition | -75 credibility |
| Burn a revealed false apparition | +80 |
| Let undated dead-host procession cross the platform | Hunt meter +1 |
| Attach locality to a moving phantom | +40 and immobilize |
| Distill a row containing deception | +25 per revealed true identity |
| Misread false Salt as fixed matter | slide risk and credibility loss |

## Implementation Notes

First playable slice:

1. Add a Wild Hunt mode button to the landing page.
2. Reuse the Balance Tetris board and physics lab.
3. Add a Hunt meter that fires one omen beat every 2 to 4 placements.
4. Implement five blocks first: 🐕 hounds, 🌬️ wind, 🐎 hoofbeat, 🏇 Huntsman, 📜 date token.
5. Add one reveal tool: ⚗️ Alembic Lens.
6. Score dated apparitions and penalize wrong-side dumping.

Do not start with all blocks. Start with a tiny, legible hunt and let the larger taxonomy fill in as levels demand it.

