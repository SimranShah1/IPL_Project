const extraRunScoredByTeamsIn2016 = require('../server/3_extraRunScoredByTeamsIn2016.js');

test('extra_runs_scored_by_Teams_In_2016', () => {
  const AllMatches = [
    {
      id: '1',
      season: '2008',
    },
    {
      id: '2',
      season: '2016',
    },
    {
      id: '3',
      season: '2012',
    },
    {
      id: '4',
      season: '2014',
    },
    {
      id: '5',
      season: '2016',
    },
    {
      id: '6',
      season: '2009',
    },
    {
      id: '7',
      season: '2012',
    },
    {
      id: '8',
      season: '2016',
    },
    {
      id: '9',
      season: '2009',
    },
    {
      id: '10',
      season: '2016',
    },
  ];

  const Alldeliveries = [
    {
      match_id: '1',
      bowling_team: 'Rcb',
      extra_runs: 3,
    },
    {
      match_id: '2',
      bowling_team: 'csk',
      extra_runs: 0,
    },
    {
      match_id: '3',
      bowling_team: 'MI',
      extra_runs: 1,
    },
    {
      match_id: '4',
      bowling_team: 'csk',
      extra_runs: 4,
    },
    {
      match_id: '5',
      bowling_team: 'MI',
      extra_runs: 0,
    },
    {
      match_id: '6',
      bowling_team: 'csk',
      extra_runs: 2,
    },
    {
      match_id: '7',
      bowling_team: 'MI',
      extra_runs: 1,
    },
    {
      match_id: '8',
      bowling_team: 'Rcb',
      extra_runs: 0,
    },
    {
      match_id: '9',
      bowling_team: 'MI',
      extra_runs: 2,
    },
    {
      match_id: '10',
      bowling_team: 'csk',
      extra_runs: 2,
    },
  ];
  const expectedOutput = { csk: 2, MI: 0, Rcb: 0 };

  expect(extraRunScoredByTeamsIn2016(AllMatches, Alldeliveries)).toEqual(
    expectedOutput,
  );
});
