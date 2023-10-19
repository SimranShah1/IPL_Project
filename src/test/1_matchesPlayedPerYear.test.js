const noOfMatchesPerYear = require('../server/1_matchesPlayedPerYear.js');

test('no of matches played per year', () => {
  const sampleData = [
    {
      id: '1',
      season: '2008',
      team: 'rcb',
    },
    {
      id: '2',
      season: '2009',
      team: 'kkr',
    },
    {
      id: '3',
      season: '2008',
      team: 'mi',
    },
    {
      id: '4',
      season: '2011',
      team: 'kkr',
    },
    {
      id: '5',
      season: '2012',
      team: 'DD',
    },
    {
      id: '6',
      season: '2007',
      team: 'mi',
    },
    {
      id: '7',
      season: '2011',
      team: 'rcb',
    },
    {
      id: '8',
      season: '2016',
      team: 'csk',
    },
    {
      id: '9',
      season: '2010',
      team: 'csk',
    },
    {
      id: '10',
      season: '2013',
      team: 'rcb',
    },
  ];
  const expectedOutput = {
    2007: 1,
    2008: 2,
    2009: 1,
    2010: 1,
    2011: 2,
    2012: 1,
    2013: 1,
    2016: 1,
  };

  expect(noOfMatchesPerYear(sampleData)).toEqual(expectedOutput);
});
