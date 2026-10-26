'use strict';
// Explicit aliases avoid assigning a misleading machine or movement to new exercises.
const ExerciseVisuals = (() => {
  const cards = ['Cable Deadlift','Smith Deadlift','Lat Pulldown','Seated Row','Cable Chest Fly','Smith Squat','Leg Press (Smith)','Split Squat (Smith)','Overhead Press (Smith)','Bench Press (Smith)','Incline Press (Smith)','Shoulder Press (Cable)','Lateral Raise (Cable)','Rear Delt Fly (Cable)','Face Pull','Upright Row (Cable)','Triceps Pushdown','Triceps Overhead Ext.','Biceps Curl (Cable)','Hammer Curl (Cable)','Cable Row (Single Arm)','Chest Press (Cable)','Woodchop (Cable)','Pallof Press (Cable)','Glute Kickback (Cable)','Hip Abduction (Cable)','Hip Adduction (Cable)','Cable Lunge','Standing Row (Cable)','Shrug (Smith)','Calf Raise (Smith)','Good Morning (Smith)'];
  const normalize = name => String(name ?? '').trim().toLowerCase().replace(/\s+/g, ' ');
  const aliases = {
    'Cable face pull': 'Face Pull',
    'Smith machine box squat to bench': 'Smith Squat',
    'Smith machine squat to bench': 'Smith Squat',
    'Flat bench cable chest press': 'Chest Press (Cable)',
    'Incline cable chest press': 'Chest Press (Cable)',
    'Cable chest press standing': 'Chest Press (Cable)',
    'Seated cable row on bench': 'Seated Row',
    'Chest-supported cable row': 'Seated Row',
    'Cable Romanian deadlift': 'Cable Deadlift',
    'Smith bar shoulder press rehearsal': 'Overhead Press (Smith)',
    'Smith machine shoulder press': 'Overhead Press (Smith)',
    'Cable lat pulldown': 'Lat Pulldown',
    'Smith machine Romanian deadlift': 'Smith Deadlift',
    'Smith machine split squat': 'Split Squat (Smith)',
    'Cable Pallof press': 'Pallof Press (Cable)',
    'Standing cable row': 'Standing Row (Cable)'
  };
  const lookup = new Map(cards.map(name => [normalize(name), name]));
  for (const [name, card] of Object.entries(aliases)) lookup.set(normalize(name), card);
  function find(name) {
    const card = lookup.get(normalize(name));
    return card ? { name: card, src: 'assets/exercises/' + encodeURIComponent(card + '.png') } : null;
  }
  return { find };
})();
if (typeof module !== 'undefined') module.exports = ExerciseVisuals;
