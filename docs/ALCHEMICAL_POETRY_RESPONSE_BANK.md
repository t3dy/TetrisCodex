# Alchemical Poetry Canned Response Bank

This file defines draft response families for alchemy-block modes. The lines are intentionally short, mechanically legible, and source-tagged. Most are paraphrase or inspired barks, not exact quotations.

Use these in Balance Tetris Alchemy mode, Wild Hunt, VALIS Space Taxi, Rune Bloom, Moat Drawbridge, and future lab/cascade modes.

## Response Object Shape

```json
{
  "id": "mercury_slide_right_001",
  "sourceFamily": "Timmermann / Boast of Mercury",
  "trigger": "mercury_block_slides_right",
  "tone": "volatile_warning",
  "text": "Mercury boasts again: slick matter leans toward the right receiver.",
  "plainMeaning": "A Mercury-type block is sliding right and may score if the receiver is correct.",
  "verifiedQuote": false
}
```

## Placement

| Trigger | Draft response | Plain meaning |
| --- | --- | --- |
| `place_center_safe` | "The vessel is centered; the work may begin." | Good central placement. |
| `place_edge_risky` | "Norton would set the order first; the edge is asking for proof." | Edge placement may tip. |
| `place_on_salt` | "Salt receives the burden and keeps its counsel." | Stable placement on Salt/fixed matter. |
| `place_on_mercury` | "Mercury will not be still merely because you ask." | Slippery/volatile support. |
| `place_on_sulphur` | "Sulphur takes the spark personally." | Combustive/cascade risk. |
| `place_wrong_receiver` | "The poem is right, but the side is wrong." | Correct material, wrong exit side. |

## Tilt And Balance

| Trigger | Draft response | Plain meaning |
| --- | --- | --- |
| `tilt_left_small` | "The lower world answers left, but softly." | Slight left tilt. |
| `tilt_right_small` | "The upper sign leans right; still recoverable." | Slight right tilt. |
| `tilt_left_danger` | "The sea is taking the left edge." | Left side near failure. |
| `tilt_right_danger` | "The right gate opens too quickly." | Right side near failure. |
| `nearly_level` | "Three voices, one balance." | Platform nearly level. |
| `recovered_balance` | "The fugue resolves; the platform remembers its center." | Player corrected tilt. |

## Zodiac / Process Buttons

| Trigger | Draft response | Plain meaning |
| --- | --- | --- |
| `calcination_button` | "Calcination asks what can survive the ash." | Heat/burning process selected. |
| `dissolution_button` | "Dissolution loosens the knot." | Wet/solvent process selected. |
| `separation_button` | "Divide the subtle from the gross before the fall." | Separation process selected. |
| `conjunction_button` | "Brother and sister seek one vessel." | Pairing/union process selected. |
| `fermentation_button` | "The dead matter has not finished speaking." | Growth/renewal process selected. |
| `projection_button` | "A little Stone changes a larger field." | High-value transmutation selected. |

## Tria Prima

| Trigger | Draft response | Plain meaning |
| --- | --- | --- |
| `salt_selected` | "Salt fixes the body and slows the slide." | Heavy/stable substance selected. |
| `sulphur_selected` | "Sulphur oils the work and remembers the flame." | Oily/combustive substance selected. |
| `mercury_selected` | "Mercury carries the secret because it refuses the cage." | Volatile/slippery substance selected. |
| `tria_combo_good` | "The three agree: Salt holds, Sulphur quickens, Mercury moves." | Useful combination. |
| `tria_combo_bad` | "The principles quarrel; give them a better vessel." | Bad material/process pairing. |

## Slide-Off / Profitable Tipping

| Trigger | Draft response | Plain meaning |
| --- | --- | --- |
| `proper_left_dump` | "The left receiver takes its due; the verse approves." | Correct profitable left dump. |
| `proper_right_dump` | "The right gate opens; profit falls cleanly." | Correct profitable right dump. |
| `wrong_side_dump` | "Good matter, bad gate." | Wrong-side penalty. |
| `singleton_penalty` | "A lone fragment is not a work." | Single cell dumped for penalty. |
| `group_bonus` | "The corpus holds together; the score rises." | Group dumped as valuable set. |

## Failure And Recovery

| Trigger | Draft response | Plain meaning |
| --- | --- | --- |
| `first_save` | "Angel guard: one bad tilt forgiven, but not forgotten." | Grace mechanic saved player. |
| `game_over_tilt` | "The vessel broke before the matter ripened." | Platform tipped too far. |
| `cascade_started` | "Charnock would call this a hard lesson." | Lab cascade/failure began. |
| `beam_reveal` | "The hidden tablet shows its letters." | Hidden property revealed. |
| `hint_after_fail` | "Exposition: read the weight before you read the color." | Helpful post-failure hint. |

## VALIS Space Taxi

| Trigger | Draft response | Plain meaning |
| --- | --- | --- |
| `taxi_soft_landing` | "Earth nurses the vessel; cargo intact." | Safe landing. |
| `taxi_hard_landing` | "Too much descent; the flask complains." | Hard landing damage. |
| `taxi_beam_miss` | "Light without matter reveals only dust." | Beam missed. |
| `taxi_beam_hit` | "The beam finds the signature under the paint." | Hidden cargo/property revealed. |
| `taxi_deliver_fixed` | "Salt delivered: the station steadies." | Fixed cargo delivered. |
| `taxi_deliver_volatile` | "Mercury delivered: dock clamps engaged." | Volatile cargo delivered. |

## Rune Bloom

| Trigger | Draft response | Plain meaning |
| --- | --- | --- |
| `bloom_clear` | "Bloomfield smiles: the row has flowered." | Successful bloom clear. |
| `blight_spread` | "The black stage has found a root." | Blight expanded. |
| `rune_chain` | "One sign teaches the next." | Chain reaction. |
| `garden_recovered` | "Citrinitas returns color to the bed." | Recovery from blight. |

## Alchemy Snake

| Trigger | Draft response | Plain meaning |
| --- | --- | --- |
| `snake_start` | "The serpent wakes in a clean vessel." | New Snake run begins. |
| `snake_turn` | "The head turns east; appetite has chosen a column." | Direction input accepted. |
| `snake_reverse_denied` | "The serpent cannot bite yesterday without making poison of memory." | Direct reversal rejected. |
| `snake_salt_digest` | "Salt fixes the body; the line grows heavier and steadier." | Salt eaten; snake grows and slows. |
| `snake_sulphur_digest` | "Sulphur buys profit with body." | Sulphur eaten; score rises but tail burns. |
| `snake_mercury_digest` | "Mercury refuses the cage." | Mercury eaten; speed/ghost effects begin. |
| `snake_apparatus_digest` | "The process colors the digestion." | Zodiac-only apparatus modifies future food. |
| `snake_wall_phase` | "The boundary thinned like glass." | Ghost/stability pass through wall. |
| `snake_self_phase` | "Mercury lent a ghost-body." | Snake passes through itself. |
| `snake_self_death` | "Ouroboros without wisdom." | Self-collision ends game. |
| `snake_wall_death` | "The vessel wall holds." | Wall collision ends game. |

## Exact-Quotation Policy

The game should eventually support verified exact quotations, but every exact quote must carry source title, edition or database record, page/folio if known, public-domain/license status, max short excerpt length, and a plain-English gameplay gloss.

Until that source apparatus exists, the default production copy should be paraphrase or short allusion.
