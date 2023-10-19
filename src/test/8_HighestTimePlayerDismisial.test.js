const highestTimePlayerDismissedByBowler = require('../server/8_highestTimePlayerDismisial.js');

test('highest Time Player Dismissed By Bowler', () => {
  const sampleDeliveries = [
    {
      match_id: '1',
      bowler: 'SR Watson',
      player_dismissed: 'MC Henriques',
      batsman: 'S Dhawan',
    },
    {
      match_id: '2',
      bowler: 'TM Head',
      player_dismissed: 'S Dhawan',
      batsman: 'DJ Hooda',
    },
    {
      match_id: '3',
      bowler: 'S Aravind',
      player_dismissed: 'Yuvraj Singh',
      batsman: 'BCJ Cutting',
    },
    {
      match_id: '4',
      bowler: 'TM Head',
      player_dismissed: 'S Dhawan',
      batsman: 'DJ Hooda',
    },
    {
      match_id: '5',
      bowler: 'S Aravind',
      player_dismissed: 'Yuvraj Singh',
      batsman: 'BCJ Cutting',
    },
    {
      match_id: '6',
      bowler: 'SR Watson',
      player_dismissed: 'MC Henriques',
      batsman: 'S Dhawan',
    },
    {
      match_id: '7',
      bowler: 'S Aravind',
      player_dismissed: 'Yuvraj Singh',
      batsman: 'BCJ Cutting',
    },
    {
      match_id: '8',
      bowler: 'TM Head',
      player_dismissed: 'S Dhawan',
      batsman: 'DJ Hooda',
    },
    {
      match_id: '9',
      bowler: 'SR Watson',
      player_dismissed: 'MC Henriques',
      batsman: 'S Dhawan',
    },
    {
      match_id: '10',
      bowler: 'TM Head',
      player_dismissed: 'S Dhawan',
      batsman: 'DJ Hooda',
    },
    {
      match_id: '11',
      bowler: 'TM Head',
      player_dismissed: 'S Dhawan',
      batsman: 'DJ Hooda',
    },
    {
      match_id: '12',
      bowler: 'SR Watson',
      player_dismissed: 'MC Henriques',
      batsman: 'S Dhawan',
    },
  ];
  const expectedOutput = {
    'SR Watson': { 'S Dhawan': 4 },
    'TM Head': { 'DJ Hooda': 5 },
    'S Aravind': { 'BCJ Cutting': 3 },
  };

  expect(highestTimePlayerDismissedByBowler(sampleDeliveries)).toEqual(
    expectedOutput,
  );
});
