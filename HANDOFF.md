# UI/UX handoff — concept 01

Branch: design/ui-ux
Base: 8582849 (Save workout fields as they are entered)
Source: dejavutraining/workout-journal

This separate checkout contains a working visual prototype of the existing app. The first direction retains forest green, cream, and serif headings while reducing the header, keeping navigation visible when scrolling, grouping week/day controls, and improving logging field hierarchy and touch targets.

Only style.css changes app behavior visually. index.html, app.js, data.json, storage keys, manifest, icons, and service worker are untouched. No private workout history is included.

Review Workout, Progress, and Backup on a narrow phone screen and desktop. Check week/day changes, numeric entry, completion, reload persistence, keyboard focus, and an export/import round trip. Browser preview checks are recorded in the accompanying review note; physical iPhone testing is still required.

Merge after design approval: bring the UI commit into the PWA checkout by fetching this local repository and cherry-picking the UI commit. Review any CSS conflicts, then let the PWA owner update the service-worker cache version so existing installs receive the stylesheet. Do not replace the PWA index.html with a stale copy from this checkout.

Next design decisions: keep this calm visual direction or explore a more athletic look; show all exercises or introduce a focused exercise view. No merge or deployment has been performed.
