const top10EconomicalBowler = require('../server/4_top10EconomicalBolwer.js');

test('top10_Economical_Bowler', () => {
  const sampleMatches = [
    {
      id: '1',
      season: '2015',
    },
    {
      id: '2',
      season: '2009',
    },
    {
      id: '3',
      season: '2013',
    },
    {
      id: '4',
      season: '2015',
    },
    {
      id: '5',
      season: '2009',
    },
    {
      id: '6',
      season: '2013',
    },
    {
      id: '7',
      season: '2015',
    },
    {
      id: '8',
      season: '2013',
    },
    {
      id: '9',
      season: '2015',
    },
    {
      id: '10',
      season: '2009',
    },
  ];
  const sampleDeliveries = [
    {
      match_id: '1',
      bowler: ' HoDJoda',
      noball_runs: '0',
      wide_runs: '0',
      total_runs: '1',
      extra_runs: '0',
      penalty_runs: '0',
      legbye_runs: '0',
      bye_runs: '0',
    },
    {
      match_id: '2',
      bowler: 'CH Gayle',
      noball_runs: '0',
      wide_runs: '0',
      total_runs: '2',
      extra_runs: '0',
      penalty_runs: '0',
      legbye_runs: '0',
      bye_runs: '0',
    },
    {
      match_id: '3',
      bowler: 'Mandeep Singh',
      noball_runs: '0',
      wide_runs: '0',
      total_runs: '1',
      extra_runs: '2',
      penalty_runs: '1',
      legbye_runs: '0',
      bye_runs: '0',
    },
    {
      match_id: '4',
      bowler: 'DJ Hooda',
      noball_runs: '0',
      wide_runs: '1',
      total_runs: '1',
      extra_runs: '`1',
      penalty_runs: '0',
      legbye_runs: '0',
      bye_runs: '0',
    },
    {
      match_id: '5',
      bowler: 'Mandeep Singh',
      noball_runs: '0',
      wide_runs: '1',
      total_runs: '2',
      extra_runs: '2',
      penalty_runs: '0',
      legbye_runs: '0',
      bye_runs: '1',
    },
    {
      match_id: '6',
      bowler: 'DJ Hooda',
      noball_runs: '1',
      wide_runs: '1',
      total_runs: '3',
      extra_runs: '2',
      penalty_runs: '1',
      legbye_runs: '0',
      bye_runs: '0',
    },
    {
      match_id: '7',
      bowler: 'CH Gayle',
      noball_runs: '0',
      wide_runs: '0',
      total_runs: '2',
      extra_runs: '0',
      penalty_runs: '0',
      legbye_runs: '0',
      bye_runs: '0',
    },
    {
      match_id: '8',
      bowler: 'DJ Hooda',
      noball_runs: '0',
      wide_runs: '1',
      total_runs: '0',
      extra_runs: '1',
      penalty_runs: '1',
      legbye_runs: '1',
      bye_runs: '0',
    },
    {
      match_id: '9',
      bowler: 'Mandeep Singh',
      noball_runs: '0',
      wide_runs: '0',
      total_runs: '4',
      extra_runs: '0',
      penalty_runs: '0',
      legbye_runs: '0',
      bye_runs: '0',
    },
    {
      match_id: '10',
      bowler: 'DJ Hooda',
      noball_runs: '1',
      wide_runs: '0',
      total_runs: '2',
      extra_runs: '2',
      penalty_runs: '0',
      legbye_runs: '1',
      bye_runs: '0',
    },
  ];

  const expectedOutput = [
    [' HoDJoda', '6.00'],
    ['CH Gayle', '12.00'],
    ['Mandeep Singh', '24.00'],
  ];

  expect(top10EconomicalBowler(sampleMatches, sampleDeliveries)).toEqual(
    expectedOutput,
  );
});
