const matchesWonPerTeamPerYear = require('../server/2_matchesWonPerTeamPerYear.js');

test('Matches_won_per_year', () => {
  const sampleWon = [
    {
      id: '1',
      season: '2008',
      winner: 'csk',
    },
    {
      id: '2',
      season: '2010',
      winner: 'Rcb',
    },
    {
      id: '3',
      season: '2009',
      winner: 'MI',
    },
    {
      id: '4',
      season: '2008',
      winner: 'csk',
    },
    {
      id: '5',
      season: '2009',
      winner: 'MI',
    },
    {
      id: '6',
      season: '2010',
      winner: 'Rcb',
    },
    {
      id: '7',
      season: '2011',
      winner: 'DD',
    },
    {
      id: '8',
      season: '2008',
      winner: 'csk',
    },
    {
      id: '9',
      season: '2011',
      winner: 'csk',
    },
    {
      id: '10',
      season: '2010',
      winner: 'Rcb',
    },
  ];

  const expectedOutput = {
    2008: { csk: 3 },
    2009: { MI: 2 },
    2010: { Rcb: 3 },
    2011: { DD: 1, csk: 1 },
  };

  expect(matchesWonPerTeamPerYear(sampleWon)).toEqual(expectedOutput);
});
