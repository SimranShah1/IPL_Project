const StrikeRateOfBatsMan = require('../server/7_strikeRateOfBateman.js');

test('Strike Rate Of BatsMan', () => {
  const sampleMatches = [
    {
      id: '1',
      season: '2008',
    },
    {
      id: '2',
      season: '2010',
    },
    {
      id: '3',
      season: '2008',
    },
    {
      id: '4',
      season: '2012',
    },
    {
      id: '5',
      season: '2010',
    },
    {
      id: '6',
      season: '2008',
    },
    {
      id: '7',
      season: '2012',
    },
    {
      id: '8',
      season: '2008',
    },
    {
      id: '9',
      season: '2010',
    },
    {
      id: '10',
      season: '2012',
    },
  ];

  const sampleDeliveries = [
    {
      match_id: '1',
      wide_runs: 0,
      batsman_runs: 2,
      batsman: 'MC Henriques',
    },
    {
      match_id: '2',
      wide_runs: 1,
      batsman_runs: 2,
      batsman: 'KS Williamson',
    },
    {
      match_id: '3',
      wide_runs: 1,
      batsman_runs: 3,
      batsman: 'KS Williamson',
    },
    {
      match_id: '4',
      wide_runs: 1,
      batsman_runs: 0,
      batsman: 'MC Henriques',
    },
    {
      match_id: '5',
      wide_runs: 0,
      batsman_runs: 3,
      batsman: 'KS Williamson',
    },
    {
      match_id: '6',
      wide_runs: 1,
      batsman_runs: 0,
      batsman: 'MC Henriques',
    },
    {
      match_id: '7',
      wide_runs: 1,
      batsman_runs: 3,
      batsman: 'KS Williamson',
    },
    {
      match_id: '8',
      wide_runs: 0,
      batsman_runs: 4,
      batsman: 'KS Williamson',
    },
    {
      match_id: '9',
      wide_runs: 0,
      batsman_runs: 1,
      batsman: 'MC Henriques',
    },
    {
      match_id: '10',
      wide_runs: 0,
      batsman_runs: 3,
      batsman: 'MC Henriques',
    },
  ];
  const samplebatsman = 'MC Henriques';

  const expectedResult = {
    'MC Henriques': { 2008: '200.00', 2010: '100.00', 2012: '300.00' },
  };
  expect(
    StrikeRateOfBatsMan(sampleMatches, sampleDeliveries, samplebatsman),
  ).toEqual(expectedResult);
});
