function getBowlerEconomyInSuperOver(deliveries) {
  let bowlerInSuperOver = {};

  deliveries.map((delivery) => {
    if (delivery.is_super_over != 0 && delivery.is_super_over != '') {
      if (bowlerInSuperOver[delivery.bowler]) {
        if (delivery.wide_runs == '0' && delivery.noball_runs == '0') {
          bowlerInSuperOver[delivery.bowler].balls++;
        }
        bowlerInSuperOver[delivery.bowler].totalRuns +=
          parseInt(delivery.total_runs) -
          parseInt(delivery.bye_runs) -
          parseInt(delivery.legbye_runs) -
          parseInt(delivery.penalty_runs);
      } else {
        bowlerInSuperOver[delivery.bowler] = {
          balls: 1,
          totalRuns:
            parseInt(delivery.total_runs) -
            parseInt(delivery.bye_runs) -
            parseInt(delivery.legbye_runs) -
            parseInt(delivery.penalty_runs),
        };
      }
    }
  });

  let economyRate = {};
  //Calculation for economic rate
  for (const bowler in bowlerInSuperOver) {
    const obj = bowlerInSuperOver[bowler];
    for (const balls in obj) {
      let economy = (obj.totalRuns / obj.balls) * 6;
      economyRate[bowler] = economy;
    }
  }

  let economy = 100;
  let economicalBowler;
  let bowlerWithLowestEconomy = {};

  for (const bowler in economyRate) {
    if (economyRate[bowler] < economy) {
      economicalBowler = bowler;
      economy = economyRate[bowler];
    }
  }
  bowlerWithLowestEconomy[economicalBowler] = economy;
  return bowlerWithLowestEconomy;
}

module.exports = getBowlerEconomyInSuperOver;
