# The Alchemical Button Palette

User's vision:

> "The player should always have access to buttons they can click with the 12 zodiac signs, the three alchemical principles of salt sulfur and mercury... the 12 zodiac signs mapped by some alchemist onto the 12 processes of alchemy are buttons that could when clicked have the player create an alchemical lab furniture tile or substance that corresponds to that process. The user could click a combination of buttons like a zodiac button for the process would alter clicking mercury sulphur or salt to generate an oily volatile or stable substance that corresponds to the process denoted by the modifying zodiac sign's corresponding alchemical process."

Persistent UI: **12 zodiac buttons + 3 Tria Prima buttons** always visible at the bottom of the play area. They produce a combinatorial palette of **51 distinct substances**, all grounded in historical alchemical correspondence.

---

## The historical foundation: Ripley × Paracelsus

Two real alchemical systems combine to form the palette:

### George Ripley's Twelve Gates (c. 1471)

George Ripley's *Compound of Alchemy* (London 1591 ed., cited in De Jong's Atalanta scholarship) divides the Great Work into **twelve operations** — the "Twelve Gates." Renaissance alchemists routinely mapped these onto the 12 zodiac signs, following the path of the Sun through the year:

| Zodiac | Sign | Process | Element | Quality |
|---|---|---|---|---|
| ♈ Aries | The Ram | **Calcination** | Fire | Cardinal — beginning, ignition |
| ♉ Taurus | The Bull | **Congelation** | Earth | Fixed — solidifying |
| ♊ Gemini | The Twins | **Fixation** | Air | Mutable — pairing fixed and volatile |
| ♋ Cancer | The Crab | **Dissolution** | Water | Cardinal — breaking down |
| ♌ Leo | The Lion | **Digestion** | Fire | Fixed — slow ripening |
| ♍ Virgo | The Virgin | **Distillation** | Earth | Mutable — purifying through separation |
| ♎ Libra | The Scales | **Sublimation** | Air | Cardinal — raising up |
| ♏ Scorpio | The Scorpion | **Separation** | Water | Fixed — dividing |
| ♐ Sagittarius | The Archer | **Incineration** | Fire | Mutable — burning to ash |
| ♑ Capricorn | The Goat | **Fermentation** | Earth | Cardinal — transformation |
| ♒ Aquarius | The Water-Bearer | **Multiplication** | Air | Fixed — increase |
| ♓ Pisces | The Fishes | **Projection** | Water | Mutable — casting outward |

This is the **process** dimension of the palette. Click a zodiac → invoke a process.

### Paracelsus's Tria Prima (c. 1530)

Paracelsus's three principles (Dict from Claudiens corpus: "Mercury, Sulphur, Salt — the three fundamental alchemical substances"):

| Symbol | Principle | What it modifies |
|---|---|---|
| **✶ Salt** | Body, fixity, the principle that preserves | Makes the substance **stable / anchored** |
| **🜍 Sulphur** | Soul, fire, the active masculine principle | Makes the substance **combustible / transformative** |
| **☿ Mercury** | Spirit, fluidity, the volatile feminine principle | Makes the substance **oily / volatile / wildcard** |

This is the **modifier** dimension of the palette. Click a Prima → invoke a quality.

### The combinatorial product

| | ✶ Salt (stable) | 🜍 Sulphur (combustible) | ☿ Mercury (volatile) | (no Prima) |
|---|---|---|---|---|
| ♈ Aries (Calcination) | Salt of Aries — heat-resistant ash | Sulphur of Aries — bursts on placement | Mercury of Aries — volatile ash | Pure Calcination apparatus |
| ♉ Taurus (Congelation) | Fixed earth | Hot earth | Volatile earth | Pure Congelation apparatus |
| ... | ... | ... | ... | ... |

**Total substances**: 12 zodiacs × 3 primas = 36 combined + 12 pure-zodiac + 3 pure-prima = **51 substances**, all from 15 buttons.

---

## Button click logic

Two modes of input:

### A) Single button click → spawn

- **Click a zodiac alone** → spawn a piece embodying that *process* (typically an apparatus block in Lab Mode; a process-themed substance in Alchemy mode)
- **Click a Tria Prima alone** → spawn a pure principle cell (Salt, Sulphur, or Mercury)

### B) Two-button compound click → spawn modified substance

- **Click zodiac, then click Tria Prima within 3 seconds** → spawn the combined substance
- The zodiac highlights when selected, waiting for a modifier
- If no modifier is clicked within 3 seconds, the selection clears (or you can click the same zodiac to dismiss)

### Visual state

The button row has three states per button:
- **Idle** (default tint)
- **Selected** (highlighted ring; only zodiac can be selected since it's the leading button)
- **Recently activated** (pulses for 1 second after a spawn)

---

## Examples (Alchemy mode)

### `♋ Cancer + ☿ Mercury` → Dissolution + Mercury = **Oily Volatile (Solvent Drops)**

In alchemy: Cancer rules Dissolution; Mercury is the volatile principle. The combined substance is the **menstruum** — the solvent water of the Sages. In game:
- A cell with `cell.item = 'cancer_mercury'`
- Color: pale blue-silver
- Emoji: 💧
- Effect on placement: **all adjacent cells become Mercury wildcards** (acts as a localized Aqua Vitae)

### `♈ Aries + 🜍 Sulphur` → Calcination + Sulphur = **The Burning One**

Aries rules Calcination; Sulphur is combustion. Combined: a fierce volatile bomb. In game:
- Color: bright orange-red
- Emoji: 🔥
- Effect on placement: **detonates immediately** like a bomb (3×3 area cleared), then **the platform tilts toward this column** by an extra 10° (Calcination's mass loss).

### `♎ Libra + ✶ Salt` → Sublimation + Salt = **Fixed Lifting Stone**

Libra rules Sublimation (rising); Salt is fixity. Combined: a paradox — lifts upward but cannot slide. In game:
- Color: white-silver
- Emoji: ⚖
- Effect: **the cell floats upward by 1 row each turn** (Sublimation) **but cannot be moved by any slide effect** (Salt's anchor). It's an immovable, ascending block.

### `♑ Capricorn + ☿ Mercury` → Fermentation + Mercury = **Ferment of the Wise**

Capricorn rules Fermentation; Mercury is the volatile. Combined: a slow-fermenting volatile that eventually transmutes. In game:
- Color: amber
- Emoji: 🍷
- Effect: every 4 turns, **one random neighbor transmutes to a higher-tier trait** (Saturn → Jupiter → Mars → Sun cycle).

### `♓ Pisces alone` → Projection apparatus

Pisces rules Projection (the final casting of the Stone onto base metal). Clicking Pisces alone in Lab mode spawns:
- A **Projection apparatus** block (similar to Crucible but specialized for the final transmutation step)
- Emoji: 🜚
- Color: deep crimson
- Effect: any same-trait group adjacent to this apparatus scores **2× bonus** when it slides off.

---

## Mode-aware interpretation

The same buttons mean **different things in different game modes**. Here is the canonical mapping:

| Mode | Zodiac click effect | Tria Prima click effect | Compound (Z + P) |
|---|---|---|---|
| **Standard** | Force-spawn an extra "tinted" tetromino with the zodiac's element (Fire pieces are red, Earth heavier, etc.) | Adds a small overlay icon to the next piece | Tetromino with combined visual but no special effect (cosmetic only) |
| **Alchemy** | Override next piece with a process-themed cell (e.g., Aries → cell that calcines neighbors) | Salt/Sulphur/Mercury cell | Combined substance (see examples above) |
| **Bombs** | Modifies the next bomb's fuse: Cardinal signs (Aries/Cancer/Libra/Capricorn) shorten it, Fixed signs lengthen it, Mutable signs change blast radius | Salt = anti-bomb cell (immune); Sulphur = chain-bomb; Mercury = wildcard fuse | Compound bombs (e.g., Aries+Sulphur = mega-detonation) |
| **Balloons** | Zodiac element determines float behavior: Fire = rises, Air = floats sideways, Water = sinks slow, Earth = anchors | Salt = anchor, Sulphur = explosive balloon, Mercury = wildcard | Modified balloon types |
| **Lab** | Spawn the **apparatus** for that process (Aries → Crucible, Capricorn → Fermentation jar, Aquarius → Multiplication chamber) | Spawn the principle as a substance piece | Spawn a substance pre-modified for the apparatus |
| **Zen** | Spawn a tetromino tinted with the zodiac element. No mechanical effect — purely meditative. | Cosmetic only | Cosmetic only |

The same UI works in every mode; the **interpretation** is the game's job, per the user's framing: "interpreted according to different logics."

---

## Layout & visual design

### Bottom-of-screen button row

```
+--------------------------------------------------------------------------+
|                     [G A M E   A R E A]                                  |
|                                                                          |
+--------------------------------------------------------------------------+
|  ♈   ♉   ♊   ♋   ♌   ♍   ♎   ♏   ♐   ♑   ♒   ♓   |  ✶   🜍   ☿     |
| Cal  Con  Fix  Dis  Dig  Dst  Sub  Sep  Inc  Fer  Mul  Pro  |Sal  Sul  Mer  |
|  1   2   3   4   5   6   7   8   9   0   -   =  |  Q   W   E             |
+--------------------------------------------------------------------------+
```

Two visual groups separated by a vertical divider. Zodiac on the left (12 buttons), Tria Prima on the right (3 buttons).

Each button:
- **Top line**: zodiac/principle Unicode symbol (large)
- **Bottom line**: process abbreviation (small) for zodiac, or principle name for prima
- **Hotkey label**: in tiny corner text

### Selected state

When the player clicks a zodiac, it lights up with a glowing ring. The 3 Tria Prima buttons then become "armed" — clicking one of them spawns the compound substance.

### Tooltips

Hovering a button shows a tooltip with:
- Full name (e.g., "Aries — Calcination")
- Process description (e.g., "Reducing matter to ash through fire")
- Element + quality (e.g., "Fire, Cardinal")
- In-game effect for the current mode

---

## Keyboard shortcuts

For players who prefer keyboard:

| Key | Button |
|---|---|
| `1` | ♈ Aries |
| `2` | ♉ Taurus |
| `3` | ♊ Gemini |
| `4` | ♋ Cancer |
| `5` | ♌ Leo |
| `6` | ♍ Virgo |
| `7` | ♎ Libra |
| `8` | ♏ Scorpio |
| `9` | ♐ Sagittarius |
| `0` | ♑ Capricorn |
| `-` | ♒ Aquarius |
| `=` | ♓ Pisces |
| `Q` | ✶ Salt |
| `W` | 🜍 Sulphur |
| `E` | ☿ Mercury |

So `4 + E` = Cancer + Mercury = Oily Volatile (Solvent Drops). `9 + W` = Sagittarius + Sulphur = mega-incineration bomb.

---

## Architecture

### Data model

```js
const ZODIAC_PROCESSES = [
  { id: 'aries',       sign: '♈', name: 'Aries',       process: 'Calcination',   element: 'fire',  quality: 'cardinal', color: '#c84020' },
  { id: 'taurus',      sign: '♉', name: 'Taurus',      process: 'Congelation',   element: 'earth', quality: 'fixed',    color: '#806030' },
  { id: 'gemini',      sign: '♊', name: 'Gemini',      process: 'Fixation',      element: 'air',   quality: 'mutable',  color: '#d0d040' },
  { id: 'cancer',      sign: '♋', name: 'Cancer',      process: 'Dissolution',   element: 'water', quality: 'cardinal', color: '#4080c0' },
  { id: 'leo',         sign: '♌', name: 'Leo',         process: 'Digestion',     element: 'fire',  quality: 'fixed',    color: '#e08020' },
  { id: 'virgo',       sign: '♍', name: 'Virgo',       process: 'Distillation',  element: 'earth', quality: 'mutable',  color: '#608040' },
  { id: 'libra',       sign: '♎', name: 'Libra',       process: 'Sublimation',   element: 'air',   quality: 'cardinal', color: '#a0a0c0' },
  { id: 'scorpio',     sign: '♏', name: 'Scorpio',     process: 'Separation',    element: 'water', quality: 'fixed',    color: '#600040' },
  { id: 'sagittarius', sign: '♐', name: 'Sagittarius', process: 'Incineration',  element: 'fire',  quality: 'mutable',  color: '#a04020' },
  { id: 'capricorn',   sign: '♑', name: 'Capricorn',   process: 'Fermentation',  element: 'earth', quality: 'cardinal', color: '#604020' },
  { id: 'aquarius',    sign: '♒', name: 'Aquarius',    process: 'Multiplication',element: 'air',   quality: 'fixed',    color: '#4080a0' },
  { id: 'pisces',      sign: '♓', name: 'Pisces',      process: 'Projection',    element: 'water', quality: 'mutable',  color: '#400060' }
];

const TRIA_PRIMA = [
  { id: 'salt',     sign: '✶', name: 'Salt',     quality: 'stable',      color: '#f0f0f0' },
  { id: 'sulphur',  sign: '🜍', name: 'Sulphur',  quality: 'combustible', color: '#d8703a' },
  { id: 'mercury',  sign: '☿', name: 'Mercury',  quality: 'volatile',    color: '#c0c8d8' }
];
```

### State

```js
g.paletteSelection = null; // 'aries' | null — the currently armed zodiac

// On zodiac click:
g.paletteSelection = zodiacId;
g.paletteSelectionExpires = Date.now() + 3000;

// On Tria Prima click (with zodiac armed):
spawnCompound(g, g.paletteSelection, primaId);
g.paletteSelection = null;

// On Tria Prima click (no zodiac armed):
spawnPure(g, primaId);

// On zodiac click (no compound within 3s):
spawnZodiac(g, zodiacId);
g.paletteSelection = null;
```

### Spawning

`spawnCompound(g, zodiacId, primaId)` builds a piece config combining both:

```js
function spawnCompound(g, zodiacId, primaId) {
  const z = ZODIAC_PROCESSES.find(x => x.id === zodiacId);
  const p = TRIA_PRIMA.find(x => x.id === primaId);
  // Replace next piece with this compound
  const piece = {
    type: 'compound',
    shape: [[1]],  // single cell
    color: blendColors(z.color, p.color),
    colorLight: lighten(blendColors(z.color, p.color)),
    colorDark: darken(blendColors(z.color, p.color)),
    col: Math.floor(COLS / 2),
    // Mode-aware properties
    process: z.process.toLowerCase(),
    principle: p.id,
    item: 'compound_' + zodiacId + '_' + primaId,
    symbol: z.sign + p.sign,  // displays both in the cell
  };
  game.current = piece;
  // (existing onSpawn for the mode also fires)
}
```

In Alchemy mode, `onPiecePlaced` reads `cell.process` and `cell.principle` to fire the appropriate cascade.

---

## Implementation phases

### Phase A (v1, shipped this commit): Visual button row + Alchemy effects
- Persistent 15-button row at the bottom of canvas (during play)
- Click handlers + keyboard shortcuts
- Pure-zodiac and pure-prima clicks spawn corresponding pieces in Alchemy mode
- Compound clicks (zodiac + prima) spawn combined cells with mode-specific effects
- Settings toggle: "Palette Buttons: Always Visible / Alchemy Mode Only / Off"

### Phase B: Mode-specific interpretation
- Each mode's `onPaletteClick(zodiac, prima)` hook
- Standard mode: cosmetic tinting
- Bombs mode: fuse + radius modifiers
- Balloons mode: float behavior modifiers
- Zen mode: aesthetic only

### Phase C: Lab mode integration
- Compound buttons in Lab spawn apparatus + substance combos
- Pure zodiac = pure apparatus (Aries → Crucible, etc.)
- Pure prima = pure substance piece (Salt block, etc.)

### Phase D: Tutorial integration
- Tutorial levels introduce one zodiac + one prima at a time
- "Click Aries + Mercury to spawn a volatile that calcines its neighbors"
- Each tutorial unlocks the corresponding button (locked greyed-out before unlock)

### Phase E: The Codex
- A view in the menu listing all 51 substances the player has spawned
- Each entry shows the historical alchemical reference (Ripley, Paracelsus, Norton, Maier)
- Becomes the player's growing reference of the corpus
