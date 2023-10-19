function top10EconomicalBowlers(matches, deliveries) {
  let matchId2015 = new Set();
  matches.map((match) => {
    if (match.season == 2015) {
      matchId2015.add(match.id);
    }
  });

  let ballCounter = {};
  let runsConceded = {};
  deliveries.map((delivery) => {
    if (matchId2015.has(delivery.match_id)) {
      if (delivery.wide_runs == '0' && delivery.noball_runs == '0') {
        if (ballCounter[delivery.bowler]) {
          ballCounter[delivery.bowler]++;
        } else {
          ballCounter[delivery.bowler] = 1;
        }
      }

      let runConcededByBowler =
        parseInt(delivery.total_runs) -
        parseInt(delivery.penalty_runs) -
        parseInt(delivery.legbye_runs) -
        parseInt(delivery.bye_runs);
      if (runsConceded[delivery.bowler]) {
        runsConceded[delivery.bowler] += runConcededByBowler;
      } else {
        runsConceded[delivery.bowler] = runConcededByBowler;
      }
    }
  });
  let economiesOfBowler = {};
  for (let bowler in ballCounter) {
    economiesOfBowler[bowler] = (
      (runsConceded[bowler] / ballCounter[bowler]) *
      6.0
    ).toFixed(2);
  }

  const sortedEconomy = Object.entries(economiesOfBowler).sort(
    (a, b) => a[1] - b[1],
  );

  const result = sortedEconomy.slice(0, 10);

  return result;
}

module.exports = top10EconomicalBowlers;
