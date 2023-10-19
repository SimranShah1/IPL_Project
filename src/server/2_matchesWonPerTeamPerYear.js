function matchesWonPerTeamPerYear(matches) {
  let totalMatchesWonPerYear = {};

  matches.forEach((match) => {
    if (totalMatchesWonPerYear[match.season]) {
      if (totalMatchesWonPerYear[match.season][match.winner]) {
        totalMatchesWonPerYear[match.season][match.winner]++;
      } else {
        totalMatchesWonPerYear[match.season][match.winner] = 1;
      }
    } else {
      totalMatchesWonPerYear[match.season] = {};
      totalMatchesWonPerYear[match.season][match.winner] = 1;
    }
  });

  return totalMatchesWonPerYear;
}
module.exports = matchesWonPerTeamPerYear;
