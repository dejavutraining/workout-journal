# Preview verification

Verified in the local browser preview on 2026-10-25:
- Workout loads the six exercise cards and week/day controls.
- Weight entry survives reload (sample 10 lb), then was cleared.
- Progress opens and shows the ten-week overview.
- App logic and public plan data remain byte-identical to base 8582849.

Mobile viewport preview inspected at 390 x 844. Physical iPhone behavior, backup round trip, and full keyboard navigation remain to be checked before merging. Existing target copy sometimes reads “1 sets × 8 Sets”; this comes from the original data/renderer and is deferred for a later UX pass.
