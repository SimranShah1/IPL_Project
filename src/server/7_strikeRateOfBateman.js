function StrikeRateOfBatsMan(matches, deliveries, batsman) {
  const years = {};
  matches.map((match) => {
    years[match.season] = {};
  });

  let batsmanStrikeRate = {};
  batsmanStrikeRate[batsman] = {};

  for (let year in years) {
    const matchId = new Set();
    matches.map((match) => {
      if (match.season == year) {
        matchId.add(match.id);
      }
    });

    let ballsFaced = 0;
    let runsScored = 0;

    deliveries.map((delivery) => {
      if (matchId.has(delivery.match_id) && delivery.batsman == batsman) {
        runsScored += parseInt(delivery.batsman_runs);

        if (delivery.wide_runs == 0) {
          ballsFaced++;
        }
      }
    });

    batsmanStrikeRate[batsman][year] = (
      (runsScored / ballsFaced) *
      100
    ).toFixed(2);
  }
  return batsmanStrikeRate;
}
module.exports = StrikeRateOfBatsMan;
