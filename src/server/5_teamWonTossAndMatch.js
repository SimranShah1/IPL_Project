function teamWonTossAndMatches(matches) {
  let teamWonBothTossAndMatch = {};

  matches.forEach((match) => {
    if (match.toss_winner == match.winner) {
      if (teamWonBothTossAndMatch[match.winner]) {
        teamWonBothTossAndMatch[match.winner]++;
      } else {
        teamWonBothTossAndMatch[match.winner] = 1;
      }
    }
  });
  return teamWonBothTossAndMatch;
}
module.exports = teamWonTossAndMatches;
