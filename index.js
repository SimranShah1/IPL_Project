// Modules Import
const csv = require('csv-parser');
const fs = require('fs');

// Import server Functions
const noOfMatchesPerYear = require('./src/server/1_matchesPlayedPerYear.js');
const matchesWonPerTeamPerYear = require('./src/server/2_matchesWonPerTeamPerYear.js');
const extraRunScoredByTeamsIn2016 = require('./src/server/3_extraRunScoredByTeamsIn2016.js');
const top10EconomicalBowlers = require('./src/server/4_top10EconomicalBolwer.js');
const teamWonTossAndMatches = require('./src/server/5_teamWonTossAndMatch.js');
const playerOfmatchPerYear = require('./src/server/6_playerOfMatches.js');
const StrikeRateOfBatsMan = require('./src/server/7_strikeRateOfBateman.js');
const highestTimePlayerDismissedByBowler = require('./src/server/8_highestTimePlayerDismisial.js');
const getBowlerEconomyInSuperOver = require('./src/server/9_bestEconomyBowlerInSuper.js');

// All json file paths
const jsonFile1 = './src/public/output/1_matchesPlayedPerYear.json';
const jsonFile2 = './src/public/output/2_matchesWonPerTeamPerYear.json';
const jsonFile3 = './src/public/output/3_extraRunScoredByTeamsIn2016.json';
const jsonFile4 = './src/public/output/4_top10EconomicalBolwer.json';
const jsonFile5 = './src/public/output/5_teamWonTossAndMatch.json';
const jsonFile6 = './src/public/output/6_playerOfMatches.json';
const jsonFile7 = './src/public/output/7_strikeRateOfBateman.json';
const jsonFile8 = './src/public/output/8_highestTimePlayerDismisial.json';
const jsonFile9 = './src/public/output/9_bestEconomyBowlerInSuper.json';

// Read matches.csv File
const matches = [];
fs.createReadStream('./src/data/matches.csv')
  .pipe(csv({}))
  .on('data', (data) => matches.push(data))
  .on('end', () => {
    // Read deliveries.csv File
    const deliveries = [];
    fs.createReadStream('./src/data/deliveries.csv')
      .pipe(csv({}))
      .on('data', (data) => deliveries.push(data))
      .on('end', () => {
        // 1-Matches per year
        const totalPlayedMatchesInYear = noOfMatchesPerYear(matches);
        fs.writeFileSync(
          jsonFile1,
          JSON.stringify(totalPlayedMatchesInYear, null, 2),
        );
        console.log(`Problem-01: totalPlayedMatchesInYear.json File saved`);

        // 2-matches won per team per year
        const totalmatchesWonPerTeamPerYear = matchesWonPerTeamPerYear(matches);
        fs.writeFileSync(
          jsonFile2,
          JSON.stringify(totalmatchesWonPerTeamPerYear, null, 2),
        );
        console.log(`Problem-02: totalPlayedMatchesInYear.json File saved`);

        //3-Extra run conceded per team 2016
        const totalExtraRunScoredByTeamsIn2016 = extraRunScoredByTeamsIn2016(
          matches,
          deliveries,
        );
        fs.writeFileSync(
          jsonFile3,
          JSON.stringify(totalExtraRunScoredByTeamsIn2016, null, 2),
        );
        console.log(
          'Problem-03: totalExtraRunScoredByTeamsIn2016.json File Saved',
        );

        //4- Top 10 Economical Bowler
        const totalTop10EconomicalBowler = top10EconomicalBowlers(
          matches,
          deliveries,
        );
        fs.writeFileSync(
          jsonFile4,
          JSON.stringify(totalTop10EconomicalBowler, null, 2),
        );
        console.log('Problem-04: totalTop10EconomicalBowler.json File Saved');

        //5- Team won the toss and match
        const noOfTimesTeamWonBothTossAndMatch = teamWonTossAndMatches(matches);
        fs.writeFileSync(
          jsonFile5,
          JSON.stringify(noOfTimesTeamWonBothTossAndMatch, null, 2),
        );
        console.log(
          'Problem-05: noOfTimesTeamWonBothTossAndMatch.json File Saved',
        );

        //6-  highest man of the mathch
        const highestPlayerOfmatchPerYear = playerOfmatchPerYear(matches);
        fs.writeFileSync(
          jsonFile6,
          JSON.stringify(highestPlayerOfmatchPerYear, null, 2),
        );
        console.log('Problem-06:highestPlayerOfmatchPerYear.json File Saved');

        //7- Strike Rate Of batman
        const StrikeRateOfBatsManEachSeason = StrikeRateOfBatsMan(
          matches,
          deliveries,
          'MC Henriques',
        );
        fs.writeFileSync(
          jsonFile7,
          JSON.stringify(StrikeRateOfBatsManEachSeason, null, 2),
        );
        console.log('Problem-07:StrikeRateOfBatsManEachSeason.json File Saved');

        //8- highest number of times one player dismissed:
        const findHighestTimePlayerDismissedByBowler =
          highestTimePlayerDismissedByBowler(deliveries);
        fs.writeFileSync(
          jsonFile8,
          JSON.stringify(findHighestTimePlayerDismissedByBowler, null, 2),
        );
        console.log(
          'Problem-08:findHighestTimePlayerDismissedByBowler.json File Saved',
        );

        //9- find Bowler Economy
        const findGetBowlerEconomy = getBowlerEconomyInSuperOver(deliveries);
        fs.writeFileSync(
          jsonFile9,
          JSON.stringify(findGetBowlerEconomy, null, 2),
        );
        console.log('Problem-09:findGetBowlerEconomy.json File Saved');
      });
  });
