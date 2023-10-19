function playerOfmatchPerYear(matches) {
  let seasons = {};
  matches.map((match) => {
    seasons[match.season] = {};
  });

  for (season in seasons) {
    let noOfManOfmatch = {};

    matches.map((match) => {
      if (match.season == season) {
        if (noOfManOfmatch[match.player_of_match])
          noOfManOfmatch[match.player_of_match]++;
      } else {
        noOfManOfmatch[match.player_of_match] = 1;
      }
    });

    let sortManOfMatch = {};

    const sortedPlayer = Object.entries(noOfManOfmatch).sort(
      (player1, player2) => player1[1] - player2[1],
    );

    sortManOfMatch = sortedPlayer[sortedPlayer.length - 1];
    if (sortManOfMatch != undefined) {
      seasons[season] = sortManOfMatch[0];
    }
  }
  //  console.log(eachSeason);
  return seasons;
}

module.exports = playerOfmatchPerYear;
