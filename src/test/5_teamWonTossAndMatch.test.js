const teamWonBothTossAndMatch = require('../server/5_teamWonTossAndMatch.js');

test('Team won both toss and match', () => {
  const teamWon = [
    {
      toss_winner: 'rps',
      winner: 'rps',
    },
    {
      toss_winner: 'csk',
      winner: 'rcb',
    },
    {
      toss_winner: 'rps',
      winner: 'csk',
    },
    {
      toss_winner: 'rps',
      winner: 'rps',
    },
    {
      toss_winner: 'kkr',
      winner: 'kkr',
    },
    {
      toss_winner: 'MI',
      winner: 'MI',
    },
    {
      toss_winner: 'GL',
      winner: 'SH',
    },
    {
      toss_winner: 'GL',
      winner: 'GL',
    },
    {
      toss_winner: 'kkr',
      winner: 'kkr',
    },
    {
      toss_winner: 'rps',
      winner: 'rps',
    },
  ];

  const expectedOutput = { rps: 3, kkr: 2, MI: 1, GL: 1 };
  expect(teamWonBothTossAndMatch(teamWon)).toEqual(expectedOutput);
});
