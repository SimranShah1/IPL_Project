function noOfMatchesPerYear(matches) {
  let totalMatchesInYear = {};

  matches.forEach((match) => {
    if (totalMatchesInYear[match.season]) {
      totalMatchesInYear[match.season]++;
    } else {
      totalMatchesInYear[match.season] = 1;
    }
  });
  // console.log(totalMatchesInYear);
  return totalMatchesInYear;
}

module.exports = noOfMatchesPerYear;
