# Wild Hunt Mode

Gameplay ideas for a Wild Hunt mode situated in Trithemius's treatment of the legend.

## Companion Design Docs

- `WILDHUNT_EMOJI_BLOCK_SYSTEM.md` defines the emoji block graphics, block classes, source motifs, behavior tags, and alchemical counters.
- `WILDHUNT_LEVEL_CONCEITS.md` turns the scholarship into level families and a campaign sequence.

## Source Anchor

Local source found:

- `C:\Dev\GPTmarch172026\chats_2026\2026-02-06_Trithemius.md`

Relevant section:

- "Trithemius and the Legend of the Wild Hunt"
- summary notes on William C. McDonald, "Trithemius and the Legend of the Wild Hunt" (*Fabula*, 2018)

Key source observations from the local notes:

- Trithemius treats Wild Hunt material as chronicle-worthy rather than dismissing it outright.
- He supplies precise dates for occurrences, from 878 to 1354, making marvels legible as history.
- The Wild Hunt appears as a ghostly or phantasmal chase, often with a Wild Huntsman, spirits, dogs, wind, horses, and aerial motion.
- The legend complex is variable: phantom armies, troops of the dead, nocturnal hosts, cursed hunters, and sorcerous illusion all belong to the field.
- Some episodes emphasize deception of the senses rather than straightforward demonology.
- Trithemius's historiographical gesture matters: chronology becomes a way to contain, certify, and manage marvels.

Design translation:

> The Wild Hunt mode should not merely be "a spooky enemy wave." It should be a mode about fixing apparitions into chronology, surviving sensory deception, and deciding whether to treat supernatural signs as noise, omen, or historical fact.

## High Concept

**Wild Hunt** is a timed omen-and-apparition mode for the alchemical game world.

The player works on an alchemical board while the Hunt rides across it at night. Each pass of the Hunt brings sound cues, phantom pieces, hounds, riders, wind, and false placements. The player scores by anchoring apparitions into the chronicle, distilling true signs from sensory deception, and sending cursed matter off the correct side of the platform before the host overtakes the board.

## One-Sentence Pitch

Use alchemical apparatus and chronicle dates to bind a phantasmal chase before the Wild Huntsman and his hounds scatter your substances into nightmare.

## Fit With The Existing Games

### Balance Tetris Version

The Wild Hunt passes across the tilting platform.

Mechanics:

- the Hunt is a lateral force that periodically shoves loose matter
- hounds knock volatile blocks toward the edge
- horses' hoofbeats shake the platform
- apparitions can be profitably tipped off if dated/categorized first
- wrong-side dumping strengthens the Hunt

Best hook:

Balance Tetris already has tipping, side-affinity, and alchemical substances. Wild Hunt mode adds **moving supernatural pressure**.

### Rune Bloom Version

The Hunt rides through the garden.

Mechanics:

- a spectral path crosses the grid
- cells on the path become phantasms
- blooms can "chronicle" and fix apparitions into stable runes
- blight becomes Nachtvolk / dead host pressure

Best hook:

Rune Bloom already has growth, blight, and line-based clearing. Wild Hunt mode adds **night passage and apparition lanes**.

### Lab / Palette Version

The player uses zodiac and Tria Prima buttons to make protective or interpretive apparatus.

Mechanics:

- Virgo / Distillation separates true omen from illusion
- Gemini / Fixation binds a phantom into place
- Cancer / Dissolution exposes false sensory appearances
- Capricorn / Fermentation turns a dated omen into a resource over time
- Salt fixes an apparition
- Sulphur burns a false phantom
- Mercury lets the player ride with the Hunt for a turn

Best hook:

This mode could teach the combinatorial palette through urgent folklore.

## Primary Mode Loop

1. Player places or creates alchemical blocks.
2. The Hunt meter advances one beat.
3. Sound/omen cues appear: hounds, wind, hoofbeats, horn.
4. A phantasmal lane or rider enters the board.
5. Player decides whether to:
   - evade it
   - chronicle it
   - distill it
   - burn it
   - ride it off the proper side
6. The Hunt passes, altering the board.
7. Survive until dawn or complete the chronicle.

## Core Resource: Chronology

Trithemius's distinctive move is chronology: he fixes marvels by dating them.

Game resource:

```js
chronicle = {
  datedEvents: 0,
  falseEvents: 0,
  yearsRecovered: [878, 1098, 1354],
  credibility: 100
}
```

Mechanic:

- Every apparition can be left as rumor, wrongly interpreted, or fixed into a date.
- Correctly dated phenomena become stable resources.
- Undated phenomena remain volatile and can return.
- False dates reduce credibility.

Player-facing version:

- "DATE THE HUNT" button or apparatus effect
- date tokens appear as year tiles
- placing a year tile beside an apparition stabilizes it

## The Hunt Meter

The Hunt advances in beats.

Beat types:

| Beat | Sign | Effect |
|---|---|---|
| Hounds | 🐕 | Loose/volatile matter slides one cell |
| Wind | 🌬 | lightweight matter shifts upward or sideways |
| Hooves | 🐎 | platform shake / board tremor |
| Horn | 📯 | summons a rider lane |
| Dead Host | 💀 | phantom cells appear in procession |
| Huntsman | 🏇 | boss pass; forces a major board decision |

The mode can draw from these beats in a shuffled bag, like a 7-bag randomizer:

```js
huntBag = ['hounds', 'wind', 'hooves', 'horn', 'deadHost', 'hounds', 'wind']
```

## Apparition Tiles

Apparitions are not normal blocks. They may be:

- visible but non-solid
- solid only during Hunt beats
- fake until distilled
- scoring only if chronicled
- dangerous if treated as ordinary matter

Suggested fields:

```js
{
  kind: 'apparition',
  omen: 'hounds',
  year: null,
  trueForm: 'deadHost',
  deception: 2,
  volatile: true,
  chronicled: false
}
```

## Sensory Deception

McDonald's summary emphasizes deception of the senses as part of Trithemius's Wild Hunt material.

Mechanic:

- Some tiles lie about their identity.
- A tile may look like Salt but behave like Mercury.
- A phantom may appear as a profitable planetary substance but become ash if dumped.
- Distillation reveals true identity.

Gameplay verbs:

- **Inspect**: reveal one tile.
- **Distill**: reveal a row/column.
- **Chronicle**: lock a revealed apparition into history.
- **Skepticism**: discard an apparition, but lose possible reward.

## Wild Huntsman

The Wild Huntsman is a moving boss-pattern, not just an enemy sprite.

Possible behaviors:

- rides left-to-right or right-to-left across the top of the board
- calls hounds into specific columns
- converts undated apparitions into hostile dead-host tiles
- rewards the player if ridden off the proper side after being dated

In Balance Tetris:

- the Huntsman adds temporary torque in the direction of travel
- if the platform is already tilted toward him, he accelerates the slide
- if the player counterbalances him, he becomes a profitable omen

In Rune Bloom:

- the Huntsman marks a diagonal path
- blooms crossing his path score double if he is chronicled

## Nachtvolk / Dead Host

The Nachtvolk or furious host functions as a pressure swarm.

Mechanic:

- dead-host cells move in procession
- they prefer rows or columns, like a marching lane
- they do not need to attack directly; they occupy future space
- they vanish at dawn if not empowered

Emoji candidates:

- 💀 dead host
- 👻 phantom
- 🕯 grave light
- 🌫 mist
- 🐕 hound
- 🐎 horse
- 📯 horn
- 🏇 huntsman

## Alchemical Counterplay

The zodiac/process palette should be useful here.

| Process | Wild Hunt Use |
|---|---|
| Calcination | burn false apparitions into ash |
| Dissolution | dissolve sensory deception; reveal true form |
| Congelation | freeze a phantom into a solid dated tile |
| Fixation | bind the Hunt lane for one turn |
| Digestion | let an omen mature into a reward |
| Distillation | extract true signal from noise |
| Sublimation | lift a tile out of the Hunt path |
| Separation | split true apparition from false image |
| Incineration | destroy a hound pack |
| Fermentation | turn a dated omen into future score |
| Multiplication | duplicate a chronicled event's reward |
| Projection | cast a protective line across the Hunt path |
| Conjunction | merge a phantom with a year/date token |

## Tria Prima Counterplay

### Salt

Role:

- fixes apparitions
- protects against hounds
- makes a date credible

Wild Hunt use:

- Salt + apparition -> stable chronicle tile
- Salt + hound lane -> barrier

### Sulphur

Role:

- burns false images
- creates risky light
- drives the Hunt back temporarily

Wild Hunt use:

- Sulphur + phantom -> ash or revealed true form
- Sulphur + hounds -> scatter pack

### Mercury

Role:

- rides volatility
- passes between true/false
- makes apparitions usable but unstable

Wild Hunt use:

- Mercury lets a player move an apparition
- Mercury can turn a Hunt lane into a slide lane
- Mercury increases reward but risks deception

## Mode Variants

### 1. Chronicle Mode

Goal:

- date a set number of apparitions before dawn

Lose:

- credibility reaches zero
- the Hunt meter reaches final boss without enough dated events

### 2. Balance Hunt

For Balance Tetris.

Goal:

- profitably tip dated apparitions off their proper side

Special rule:

- undated apparitions that fall off return as dead-host blocks

### 3. Hounds in the Air

Puzzle pressure mode.

Goal:

- survive hound beats while keeping volatile matter from sliding away

Special rule:

- hounds only affect Mercury/volatile substances

### 4. The Year 1098

Scenario mode based on Trithemius's dated chronicle style.

Goal:

- arrange date tiles to authenticate an apparition

Special rule:

- each wrong date creates a false Hunt lane

### 5. Sensory Deception

Deduction mode.

Goal:

- identify which apparitions are true before processing them

Special rule:

- visible symbols may be false until distilled

## Suggested First Prototype

Implement in Balance Tetris first, because the platform already supports:

- side exits
- volatile sliding
- profitable dumping
- planetary signs
- alchemical palette

Minimum implementation:

1. Add Wild Hunt mode button.
2. Add Hunt meter with beats: hounds, wind, hooves, horn.
3. Every 3 turns, draw a Hunt beat.
4. Hounds slide volatile/Mercury groups one step toward the current tilt.
5. Hooves add screen shake and temporary tilt pressure.
6. Horn spawns an apparition tile.
7. Apparition tile can be dated by placing Salt next to it.
8. Dated apparition tipped off proper side scores high.

## UI Needed

- Hunt meter
- next Hunt beat preview
- credibility meter
- chronicle/date panel
- apparition tooltip
- sound cue captions for accessibility

## Sound Design

Sound is unusually important because the source tradition emphasizes auditory signs.

Sound cues:

- distant hounds
- hoofbeats
- wind
- horn
- rushing host
- parchment scratch when chronicled

Accessibility:

- every sound cue should have a visual caption or icon.

## Asset Classes

### Hunt Beat Assets

- hound beat
- wind beat
- hoof beat
- horn beat
- host beat
- huntsman beat

### Apparition Assets

- false Salt
- false Mercury
- dead host
- phantom rider
- aerial sorcerer
- cursed hunter

### Chronicle Assets

- date token
- year tile
- marginal note
- seal
- annal entry

### Apparatus Assets

- chronicle desk
- distillation lens
- salt seal
- sulphur lamp
- mercurial mirror

## Integration With Source Database

Future source pipeline:

1. Extract Trithemius / Wild Hunt passages.
2. Identify motifs:
   - dogs
   - hooves
   - wind
   - phantom army
   - nocturnal chase
   - sensory deception
   - exact dates
3. Convert each motif into a block or event.
4. Attach source metadata:

```js
{
  id: 'wild_hounds',
  motif: 'yelping dogs in the air',
  sourceAuthor: 'Trithemius via McDonald',
  mechanic: 'slides volatile matter',
  emoji: '🐕'
}
```

## Why This Belongs In The Alchemical World

The Wild Hunt is not "alchemy" in the narrow laboratory sense, but it belongs in the larger occult-humanist world the project is building:

- Trithemius sits at the boundary of learned magic, historiography, cryptography, and folklore.
- The Hunt introduces apparition, sound, chronology, and sensory uncertainty.
- These are perfect game mechanics for an alchemical system already built around hidden properties, transformations, and symbolic operations.

## Design North Star

The Wild Hunt mode should feel like trying to conduct laboratory work during a supernatural storm, while a monk-chronicler tries to pin the storm to dates before it becomes pure nightmare.

The player is not simply fighting ghosts. The player is deciding what counts as a real event.
