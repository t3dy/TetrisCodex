# Tree Tapper Correspondence Quiz

## Original Request

The user asked for a Tree Tapper game mode where the player is quizzed on Golden Dawn correspondences. The player should be able to click from a bank of Hebrew letters, zodiacal correspondences, and other Golden Dawn symbolism, then arrange the answers on the Tree of Life.

The user also mentioned higher-grade knowledge that a Golden Dawn adept would need to learn, including god names, angel names, and related symbolic systems.

## Interpretation

I interpreted this as a memory-and-placement game rather than a pure flashcard quiz.

The player does not merely choose from multiple-choice text. They must:

1. Read a prompt.
2. Select a token from a mixed bank.
3. Tap the correct Tree path or sefirah.
4. Receive immediate textual feedback explaining the correspondence.

This follows the project's general design rule that every player input should produce a clear readout.

## Implemented Prototype

Current playable file:

- `tree-tapper-quiz.html`

Shared data source:

- `golden-dawn-correspondences.js`

Current quiz decks:

- Hebrew Letters To Paths
- Planets, Elements, Zodiac To Paths
- Tarot Trumps To Paths
- Sefirot Names And Numbers
- Divine, Archangel, And Angelic Names
- Mixed Adept Drill

## Gameplay Loop

1. A prompt is drawn from the current deck.
2. A bank of 12 possible tokens appears.
3. The player clicks one token.
4. The player clicks a Tree path or sefirah.
5. The game checks the placement.
6. Correct answers score points and build streak.
7. Incorrect answers reset streak and explain the expected location.
8. The next prompt is drawn.

## Training And Exam Modes

The prototype has two reveal styles:

- Training: Tree labels remain faintly visible.
- Exam: Tree labels are hidden.

This creates a path from guided recognition to actual memorization.

## Correspondence Families

### Path Families

- Hebrew letter
- Transliteration
- Mother / Double / Single class
- Element, planet, or zodiac power
- Tarot trump
- Tree path number
- From/to sefirot

### Sefirah Families

- Sefirah name
- Sefirah number
- Planetary or elemental attribution
- Divine name
- Archangel
- Angelic order

The divine and angelic names are prototype Golden Dawn-style training data. The eventual data layer should import the user's local sources and label each attribution by source and tradition.

## Design Choices

### Click Placement Instead Of Dragging

I chose click-token, click-target because it is fast, reliable, mobile-friendly, and easy to combine with the existing Tree SVG.

Drag-and-drop can come later, but click placement is a better first pass.

### One Tree For Both Paths And Sefirot

The same board accepts path and node answers. This matters because the player needs to learn that some correspondences live on paths while others belong to sefirot.

### Mixed Decks

The mixed adept drill intentionally combines easy and hard material. It should feel like the game is asking: "Do you know what kind of thing this symbol is before you even place it?"

## Other Choices We Could Have Made

### Lamen-First Quiz

We could ask the player to arrange the Hebrew letters on the Rose Cross lamen instead of the Tree. That should become a second quiz board using the same tokens.

### Typing Recall

We could require the player to type divine names or archangel names. This is stronger for memorization but less game-like and more punishing.

### Full Curriculum Mode

We could structure the whole game as grade progression: Neophyte, Zelator, Theoricus, Practicus, Philosophus, Adept. The current prototype is ready for that, but it does not enforce the ladder yet.

## Next Steps

1. Add round types where the Tree highlights a path and the player chooses the corresponding token.
2. Add a lamen placement board.
3. Add grade-gated lessons.
4. Add typed-answer challenge mode for divine and angelic names.
5. Add source labels and citations after importing the user's Tarot and Golden Dawn databases.
6. Save mastery by correspondence family in localStorage.
7. Feed mastery into Tarot Coin Journey so well-known correspondences produce better attention coins.
