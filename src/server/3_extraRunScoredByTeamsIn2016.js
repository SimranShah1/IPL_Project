//Extra runs conceded per team in the year 2016
function extraRunScoredByTeamsIn2016(matches, deliveries) {
  let matchId2016 = [];
  matches.forEach((match) => {
    if (match.season == 2016) {
      matchId2016.push(match.id);
    }
  });
  let extraRunScoredByTeamsIn2016 = {};

  deliveries.forEach((deliveries) => {
    matchId2016.forEach((match) => {
      if (deliveries.match_id == match) {
        let Bowling = deliveries.bowling_team;
        let extraRun = deliveries.extra_runs;

        extraRunScoredByTeamsIn2016[Bowling]
          ? (extraRunScoredByTeamsIn2016[Bowling] += parseInt(extraRun))
          : (extraRunScoredByTeamsIn2016[Bowling] = parseInt(extraRun));
      }
    });
  });
  return extraRunScoredByTeamsIn2016;
}
module.exports = extraRunScoredByTeamsIn2016;
