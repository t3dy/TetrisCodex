window.GD_CORRESPONDENCES = {
  meta: {
    id: 'golden-dawn-prototype/v1',
    label: 'Golden Dawn-style prototype correspondences',
    caution: 'Tradition-labeled game data. This is a playable Golden Dawn-style map, not a claim that all tarot traditions agree.'
  },
  symbols: {
    elements: [
      { id: 'fire', name: 'Fire', glyph: '🔥', gdGlyph: '🜂', effect: 'ignite, multiply, rupture, accelerate' },
      { id: 'water', name: 'Water', glyph: '💧', gdGlyph: '🜄', effect: 'dissolve, reflect, soften, flow' },
      { id: 'air', name: 'Air', glyph: '🌬', gdGlyph: '🜁', effect: 'swap, lift, translate, communicate' },
      { id: 'earth', name: 'Earth', glyph: '🪨', gdGlyph: '🜃', effect: 'fix, weigh, anchor, crystallize' }
    ],
    planets: [
      { id: 'sun', name: 'Sun', glyph: '☉', effect: 'reveal, synthesize, crown' },
      { id: 'moon', name: 'Moon', glyph: '☽', effect: 'mirror, dream, conceal, fluctuate' },
      { id: 'mercury', name: 'Mercury', glyph: '☿', effect: 'translate, swap, mediate' },
      { id: 'venus', name: 'Venus', glyph: '♀', effect: 'attract, harmonize, bind by desire' },
      { id: 'mars', name: 'Mars', glyph: '♂', effect: 'cut, break, ignite, contest' },
      { id: 'jupiter', name: 'Jupiter', glyph: '♃', effect: 'expand, bless, multiply' },
      { id: 'saturn', name: 'Saturn', glyph: '♄', effect: 'lock, limit, weigh, structure' }
    ],
    zodiac: [
      { id: 'aries', name: 'Aries', glyph: '♈', ruler: 'Mars', element: 'Fire', effect: 'initiate' },
      { id: 'taurus', name: 'Taurus', glyph: '♉', ruler: 'Venus', element: 'Earth', effect: 'stabilize' },
      { id: 'gemini', name: 'Gemini', glyph: '♊', ruler: 'Mercury', element: 'Air', effect: 'split and connect' },
      { id: 'cancer', name: 'Cancer', glyph: '♋', ruler: 'Moon', element: 'Water', effect: 'contain' },
      { id: 'leo', name: 'Leo', glyph: '♌', ruler: 'Sun', element: 'Fire', effect: 'magnify' },
      { id: 'virgo', name: 'Virgo', glyph: '♍', ruler: 'Mercury', element: 'Earth', effect: 'sort and refine' },
      { id: 'libra', name: 'Libra', glyph: '♎', ruler: 'Venus', element: 'Air', effect: 'balance' },
      { id: 'scorpio', name: 'Scorpio', glyph: '♏', ruler: 'Mars', element: 'Water', effect: 'transform' },
      { id: 'sagittarius', name: 'Sagittarius', glyph: '♐', ruler: 'Jupiter', element: 'Fire', effect: 'aim and project' },
      { id: 'capricorn', name: 'Capricorn', glyph: '♑', ruler: 'Saturn', element: 'Earth', effect: 'bind and climb' },
      { id: 'aquarius', name: 'Aquarius', glyph: '♒', ruler: 'Saturn', element: 'Air', effect: 'rewire' },
      { id: 'pisces', name: 'Pisces', glyph: '♓', ruler: 'Jupiter', element: 'Water', effect: 'dissolve and complete' }
    ],
    suits: [
      { id: 'wands', name: 'Wands', glyph: '🕯️', element: 'Fire', effect: 'will and action' },
      { id: 'cups', name: 'Cups', glyph: '🏆', element: 'Water', effect: 'emotion and vessel' },
      { id: 'swords', name: 'Swords', glyph: '🗡️', element: 'Air', effect: 'knowledge and division' },
      { id: 'pentacles', name: 'Pentacles', glyph: '🪙', element: 'Earth', effect: 'matter and result' }
    ]
  },
  sefirot: [
    { id: 'kether', number: 1, name: 'Kether', glyph: '①', x: 250, y: 50, attributions: ['crown', 'unity', 'first illumination'], effect: 'beginning multiplier' },
    { id: 'chokmah', number: 2, name: 'Chokmah', glyph: '②', x: 350, y: 150, attributions: ['zodiac', 'force', 'wisdom'], effect: 'dynamic force' },
    { id: 'binah', number: 3, name: 'Binah', glyph: '③', x: 150, y: 150, attributions: ['Saturn', 'form', 'limit'], effect: 'structure lock' },
    { id: 'chesed', number: 4, name: 'Chesed', glyph: '④', x: 350, y: 250, attributions: ['Jupiter', 'mercy', 'expansion'], effect: 'score expansion' },
    { id: 'geburah', number: 5, name: 'Geburah', glyph: '⑤', x: 150, y: 250, attributions: ['Mars', 'severity', 'rupture'], effect: 'controlled break' },
    { id: 'tiphareth', number: 6, name: 'Tiphareth', glyph: '⑥', x: 250, y: 350, attributions: ['Sun', 'beauty', 'gold'], effect: 'synthesis bonus' },
    { id: 'netzach', number: 7, name: 'Netzach', glyph: '⑦', x: 350, y: 450, attributions: ['Venus', 'desire', 'image'], effect: 'attraction chain' },
    { id: 'hod', number: 8, name: 'Hod', glyph: '⑧', x: 150, y: 450, attributions: ['Mercury', 'language', 'analysis'], effect: 'translation chain' },
    { id: 'yesod', number: 9, name: 'Yesod', glyph: '⑨', x: 250, y: 550, attributions: ['Moon', 'dream', 'foundation'], effect: 'reflection copy' },
    { id: 'malkuth', number: 10, name: 'Malkuth', glyph: '⑩', x: 250, y: 650, attributions: ['Earth', 'kingdom', 'manifestation'], effect: 'line clear grounding' }
  ],
  paths: [
    { path: 11, letter: 'א', transliteration: 'Aleph', class: 'Mother', power: 'Air', glyph: '🌬', trump: 'The Fool', trumpNumber: 0, from: 'Kether', to: 'Chokmah', effect: 'beginner leap, air swap' },
    { path: 12, letter: 'ב', transliteration: 'Beth', class: 'Double', power: 'Mercury', glyph: '☿', trump: 'The Magician', trumpNumber: 1, from: 'Kether', to: 'Binah', effect: 'tool translation' },
    { path: 13, letter: 'ג', transliteration: 'Gimel', class: 'Double', power: 'Moon', glyph: '☽', trump: 'The High Priestess', trumpNumber: 2, from: 'Kether', to: 'Tiphareth', effect: 'hidden bridge' },
    { path: 14, letter: 'ד', transliteration: 'Daleth', class: 'Double', power: 'Venus', glyph: '♀', trump: 'The Empress', trumpNumber: 3, from: 'Chokmah', to: 'Binah', effect: 'attraction gate' },
    { path: 15, letter: 'ה', transliteration: 'Heh', class: 'Single', power: 'Aries', glyph: '♈', trump: 'The Emperor', trumpNumber: 4, from: 'Chokmah', to: 'Tiphareth', effect: 'authority push' },
    { path: 16, letter: 'ו', transliteration: 'Vav', class: 'Single', power: 'Taurus', glyph: '♉', trump: 'The Hierophant', trumpNumber: 5, from: 'Chokmah', to: 'Chesed', effect: 'stable teaching' },
    { path: 17, letter: 'ז', transliteration: 'Zayin', class: 'Single', power: 'Gemini', glyph: '♊', trump: 'The Lovers', trumpNumber: 6, from: 'Binah', to: 'Tiphareth', effect: 'choice split' },
    { path: 18, letter: 'ח', transliteration: 'Cheth', class: 'Single', power: 'Cancer', glyph: '♋', trump: 'The Chariot', trumpNumber: 7, from: 'Binah', to: 'Geburah', effect: 'vessel charge' },
    { path: 19, letter: 'ט', transliteration: 'Teth', class: 'Single', power: 'Leo', glyph: '♌', trump: 'Strength', trumpNumber: 8, from: 'Chesed', to: 'Geburah', effect: 'lion multiplier' },
    { path: 20, letter: 'י', transliteration: 'Yod', class: 'Single', power: 'Virgo', glyph: '♍', trump: 'The Hermit', trumpNumber: 9, from: 'Chesed', to: 'Tiphareth', effect: 'refinement search' },
    { path: 21, letter: 'כ', transliteration: 'Kaph', class: 'Double', power: 'Jupiter', glyph: '♃', trump: 'Wheel of Fortune', trumpNumber: 10, from: 'Chesed', to: 'Netzach', effect: 'wheel expansion' },
    { path: 22, letter: 'ל', transliteration: 'Lamed', class: 'Single', power: 'Libra', glyph: '♎', trump: 'Justice', trumpNumber: 11, from: 'Geburah', to: 'Tiphareth', effect: 'balance judgement' },
    { path: 23, letter: 'מ', transliteration: 'Mem', class: 'Mother', power: 'Water', glyph: '💧', trump: 'The Hanged Man', trumpNumber: 12, from: 'Geburah', to: 'Hod', effect: 'suspension dissolve' },
    { path: 24, letter: 'נ', transliteration: 'Nun', class: 'Single', power: 'Scorpio', glyph: '♏', trump: 'Death', trumpNumber: 13, from: 'Tiphareth', to: 'Netzach', effect: 'death transform' },
    { path: 25, letter: 'ס', transliteration: 'Samekh', class: 'Single', power: 'Sagittarius', glyph: '♐', trump: 'Temperance', trumpNumber: 14, from: 'Tiphareth', to: 'Yesod', effect: 'aimed mixture' },
    { path: 26, letter: 'ע', transliteration: 'Ayin', class: 'Single', power: 'Capricorn', glyph: '♑', trump: 'The Devil', trumpNumber: 15, from: 'Tiphareth', to: 'Hod', effect: 'binding pressure' },
    { path: 27, letter: 'פ', transliteration: 'Peh', class: 'Double', power: 'Mars', glyph: '♂', trump: 'The Tower', trumpNumber: 16, from: 'Hod', to: 'Netzach', effect: 'rupture quake' },
    { path: 28, letter: 'צ', transliteration: 'Tzaddi', class: 'Single', power: 'Aquarius', glyph: '♒', trump: 'The Star', trumpNumber: 17, from: 'Netzach', to: 'Yesod', effect: 'hope rewire' },
    { path: 29, letter: 'ק', transliteration: 'Qoph', class: 'Single', power: 'Pisces', glyph: '♓', trump: 'The Moon', trumpNumber: 18, from: 'Netzach', to: 'Malkuth', effect: 'dream tide' },
    { path: 30, letter: 'ר', transliteration: 'Resh', class: 'Double', power: 'Sun', glyph: '☉', trump: 'The Sun', trumpNumber: 19, from: 'Hod', to: 'Yesod', effect: 'solar reveal' },
    { path: 31, letter: 'ש', transliteration: 'Shin', class: 'Mother', power: 'Fire', glyph: '🔥', trump: 'Judgement', trumpNumber: 20, from: 'Hod', to: 'Malkuth', effect: 'fire awakening' },
    { path: 32, letter: 'ת', transliteration: 'Tau', class: 'Double', power: 'Saturn', glyph: '♄', trump: 'The Universe', trumpNumber: 21, from: 'Yesod', to: 'Malkuth', effect: 'world lock' }
  ],
  grades: [
    { id: 'beginner', name: 'Beginner', unlocks: ['elements', 'suits', 'numbers'], note: 'Basic card literacy and line-clear effects.' },
    { id: 'student', name: 'Student', unlocks: ['planets', 'zodiac'], note: 'Coins and lamen petals begin lighting.' },
    { id: 'neophyte', name: 'Neophyte', unlocks: ['tree nodes', 'simple paths'], note: 'TreeTapper-style map becomes playable.' },
    { id: 'zelator', name: 'Zelator style', unlocks: ['Malkuth', 'Earth mechanics'], note: 'Weight, grounding, manifestation, Salt.' },
    { id: 'theoricus', name: 'Theoricus style', unlocks: ['Yesod', 'Air/Moon mechanics'], note: 'Reflection, dream, volatility.' },
    { id: 'practicus', name: 'Practicus style', unlocks: ['Hod', 'Mercury mechanics'], note: 'Language, translation, analysis.' },
    { id: 'philosophus', name: 'Philosophus style', unlocks: ['Netzach', 'Fire/Venus mechanics'], note: 'Desire, attraction, image, heat.' },
    { id: 'adept', name: 'Adept style', unlocks: ['Tiphareth', 'Rose Cross lamen', 'full pathwork'], note: 'Central synthesis and full correspondence play.' },
    { id: 'advanced', name: 'Advanced', unlocks: ['color scales', 'god names', 'angel names'], note: 'Source-labeled ritual-name and color unlocks.' },
    { id: 'experimental', name: 'Experimental', unlocks: ['Enochian', 'magic squares', 'spirit diagrams'], note: 'Late-game speculative and diagrammatic systems.' }
  ]
};
