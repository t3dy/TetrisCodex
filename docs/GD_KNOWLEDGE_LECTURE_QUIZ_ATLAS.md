# Golden Dawn Knowledge Lecture Quiz Atlas

## Source Anchors

This atlas uses public online pages from the Open Source Order of the Golden Dawn as source anchors for prototype quiz coverage.

- First / Neophyte Knowledge Lecture: <https://osogd.org/education/the-first-or-neophyte-knowledge-lecture/>
- Second / Zelator Knowledge Lecture: <https://osogd.org/education/the-second-or-zelator-knowledge-lecture/>
- Third / Theoricus Knowledge Lecture: <https://osogd.org/education/the-third-or-theoricus-knowledge-lecture/>
- Fourth / Practicus Knowledge Lecture: <https://osogd.org/education/the-fourth-or-practicus-knowledge-lecture/>
- Fifth / Philosophus Knowledge Lecture: <https://osogd.org/education/the-fifth-or-philosophus-knowledge-lecture/>

The pages present these as study material for grade work, and the first/second pages explicitly say aspirants will be tested on material to be committed to memory. The site also lists Regardie, Crowley, and Llewellyn George as sources on the Second Knowledge Lecture page.

Important caveat: OSOGD is a modern open-source order and sometimes labels its own attributions alongside traditional material. The game database should track whether a correspondence is traditional Golden Dawn, OSOGD adaptation, Agrippa-derived, Regardie-derived, or project-specific.

## Quiz Coverage By Lecture

### First / Neophyte

Topics visible on the OSOGD page include:

- elements
- zodiac
- planets
- Hebrew alphabet
- sefirot
- meditation
- pillars and temple symbology
- Lesser Banishing Ritual of the Pentagram supplement

Prototype quiz modes:

- element symbol flash bank
- zodiac order wheel
- planet glyph identification
- Hebrew letter/name/value/meaning drills
- Tree sefirot placement
- pentagram quarter decoration

### Second / Zelator

Topics visible on the OSOGD page include:

- Mother letters
- Double letters
- Single letters
- three principles of nature: Sulphur, Mercury, Salt
- metals attributed to planets in alchemy
- element orders and elementals
- kerubic signs
- four worlds of Qabalah
- astrology houses and aspects
- Tree of Life / Flaming Sword

Prototype quiz modes:

- Rose Cross lamen letter class placement
- alchemical principle matching
- planet-to-metal matching
- elemental spirit matching
- kerub/sign/element matching
- four-worlds diagram quiz
- astrology aspect symbol quiz

### Third / Theoricus

The search-accessible OSOGD page text includes:

- portions of the Qabalistic soul
- spirits defined
- solid Greek cubical cross
- tarot suits and Qabalistic worlds
- honors of the deck
- caduceus of Hermes and Mother letters
- Luna on the Tree of Life
- tattvas

Prototype quiz modes:

- soul-part-to-sefirah matching
- spirit type classification
- cube-cross symbol placement
- suit-to-world matching
- court-card family/principle matching
- caduceus/Mother-letter diagram quiz
- tattva symbol quiz

### Fourth / Practicus

Topics visible on the OSOGD page include:

- planetary numbers and lineal figures
- magic squares
- sigil creation and talismanic magic
- Pyramid of Fire
- Sword and Snake on the Tree
- geomantic figures and zodiacal attributions
- Greek Cross of 13 squares
- tetractys
- tarot trumps on Tree paths

Prototype quiz modes:

- planet-number-figure matching
- Agrippa magic square identification
- magic-square sigil tracing
- Pyramid of Fire face-name quiz
- Sword/Snake route quiz
- geomancy figure-to-zodiac quiz
- tarot trump/path/letter drill

### Fifth / Philosophus

Topics visible on the OSOGD page include:

- Azoth
- Veils of Negative Existence
- titles of Kether
- Holy Name, four worlds, and tarot suits
- tarot relationship to the Tree of Life
- Latin Crosses and path relations
- Pyramid of the Four Elements
- Venus on the Tree
- elemental names, archangels, elementals, and directions

Prototype quiz modes:

- Azoth letter-origin drill
- veil name and meaning matching
- Kether title quiz
- four-world/suit/Holy Name diagram
- tarot-on-Tree placement
- Latin Cross path matching
- elemental direction/name/archangel/elemental quiz

## Website Implementation

Current prototype page:

- `gd-quiz-suite.html`

Current doc:

- `docs/GD_SYMBOL_QUIZ_SUITE.md`

Related mode:

- `tree-tapper-quiz.html`

## Data Model Needs

Each quiz item should eventually have:

```json
{
  "id": "gd-first-hebrew-aleph",
  "lecture": "First / Neophyte",
  "family": "Hebrew alphabet",
  "prompt": "Place Aleph",
  "answer": "Aleph",
  "targets": ["letter", "path", "number", "meaning"],
  "source": {
    "label": "OSOGD First Knowledge Lecture",
    "url": "https://osogd.org/education/the-first-or-neophyte-knowledge-lecture/",
    "traditionStatus": "OSOGD presentation of Golden Dawn-style curriculum"
  }
}
```

## Next Steps

1. Create a `gd-lecture-quiz-data.js` module.
2. Import more exact lecture tables into structured JSON.
3. Build exact Rose Cross lamen petal hitboxes.
4. Build magic-square sigil drawing.
5. Add source panels beside each quiz answer.
6. Let mastery scores unlock deeper tarot and alchemy mechanics.
