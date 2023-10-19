const getBowlerEconomyInSuperOver = require('../server/9_bestEconomyBowlerInSuper');

test('get Bowler  Economy In SuperOver', () => {
  const sampleData = [
    {
      match_id: 1,
      bowler: 'Messi',
      wide_runs: 1,
      noball_runs: 0,
      total_runs: 4,
      is_super_over: 1,
      bye_runs: 0,
      legbye_runs: 0,
      penalty_runs: 1,
    },
    {
      match_id: 2,
      bowler: 'Simran',
      wide_runs: 0,
      noball_runs: 0,
      total_runs: 0,
      is_super_over: 0,
      bye_runs: 0,
      legbye_runs: 0,
      penalty_runs: 0,
    },
    {
      match_id: 3,
      bowler: 'Simran',
      wide_runs: 1,
      noball_runs: 0,
      total_runs: 3,
      is_super_over: 1,
      bye_runs: 1,
      legbye_runs: 0,
      penalty_runs: 1,
    },
    {
      match_id: 4,
      bowler: 'simran',
      wide_runs: 0,
      noball_runs: 1,
      total_runs: 2,
      is_super_over: 1,
      bye_runs: 0,
      legbye_runs: 0,
      penalty_runs: 0,
    },
    {
      match_id: 5,
      bowler: 'TS Mills',
      wide_runs: 0,
      noball_runs: 0,
      total_runs: 6,
      is_super_over: 1,
      bye_runs: 1,
      legbye_runs: 0,
      penalty_runs: 1,
    },
    {
      match_id: 6,
      bowler: 'A Choudhary',
      wide_runs: 0,
      noball_runs: 0,
      total_runs: 6,
      is_super_over: 1,
      bye_runs: 1,
      legbye_runs: 0,
      penalty_runs: 1,
    },
  ];
  const expectedOutput = { Simran: 6 };

  expect(getBowlerEconomyInSuperOver(sampleData)).toEqual(expectedOutput);
});
