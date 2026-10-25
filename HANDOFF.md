# UI flow handoff

Branch: design/ui-ux. Local prototype only; PWA checkout untouched.

Implements calendar-independent 3/5-day rotation; start/pause/resume; one exercise at a time; planned sets/reps prefill; visible effort and notes; automatic local workout date; explicit skip, exercise list, completion review, and finish-to-advance. No YouTube, pain, energy, or per-exercise date controls.

Plan week remains manual pending agreement. Three-day mode uses existing Days 1–3.

Storage: new ft2-flow-v2 key, separate from original ft2-journal-v1. Original history is preserved but not migrated or displayed. Backups use format 2; legacy format-1 import requires migration before production merge.

Browser checks: planned prefill; next exercise; save/reload/resume at exercise 2; all six complete and review; finishing Day 1 yields Day 2. Plan data unchanged. Physical phone testing and legacy history migration remain pre-merge work.

Merge after UX review; preserve PWA files and update its cache version. Changes include app.js, index.html, style.css.
