const playerOfmatchPerYear = require('../server/6_playerOfMatches');

test('playe of match per season', () => {
  const sampleData = [
    {
      id: '1',
      season: '2008',
      player_of_match: 'virat',
    },
    {
      id: '2',
      season: '2009',
      player_of_match: 'MS',
    },
    {
      id: '3',
      season: '2010',
      player_of_match: 'virat',
    },
    {
      id: '4',
      season: '2009',
      player_of_match: 'DA',
    },
    {
      id: '5',
      season: '2008',
      player_of_match: 'MS',
    },
    {
      id: '6',
      season: '2009',
      player_of_match: 'MS',
    },
    {
      id: '7',
      season: '2008',
      player_of_match: 'virat',
    },
    {
      id: '8',
      season: '2010',
      player_of_match: 'virat',
    },
    {
      id: '9',
      season: '2008',
      player_of_match: 'virat',
    },
    {
      id: '10',
      season: '2009',
      player_of_match: 'DA',
    },
    {
      id: '11',
      season: '2010',
      player_of_match: 'virat',
    },
    {
      id: '12',
      season: '2008',
      player_of_match: 'DA',
    },
    {
      id: '13',
      season: '2009',
      player_of_match: 'MS',
    },
    {
      id: '14',
      season: '2010',
      player_of_match: 'DA',
    },
    {
      id: '15',
      season: '2008',
      player_of_match: 'virat',
    },
    {
      id: '16',
      season: '2010',
      player_of_match: 'DA',
    },
  ];

  const expectedOutput = { 2008: 'virat', 2009: 'MS', 2010: 'DA' };

  expect(playerOfmatchPerYear(sampleData)).toEqual(expectedOutput);
});
