function highestTimePlayerDismissedByBowler(deliveries) {
  let batsmanDismisedByBowler = {};

  deliveries.map((delivery) => {
    if (
      delivery.player_dismissed != null &&
      delivery.dismissal_kind != 'run out'
    ) {
      if (batsmanDismisedByBowler[delivery.bowler]) {
        if (batsmanDismisedByBowler[delivery.bowler][delivery.batsman]) {
          batsmanDismisedByBowler[delivery.bowler][delivery.batsman]++;
        } else {
          batsmanDismisedByBowler[delivery.bowler][delivery.batsman] = 1;
        }
      } else {
        batsmanDismisedByBowler[delivery.bowler] = {};
        batsmanDismisedByBowler[delivery.bowler][delivery.batsman] = 1;
      }
    }
  });

  const highestBatsmanDismisal = {};

  for (let bowler in batsmanDismisedByBowler) {
    let max = 0;
    let batsmancount = {};
    for (let batsman in batsmanDismisedByBowler[bowler]) {
      if (batsmanDismisedByBowler[bowler][batsman] > max) {
        max = batsmanDismisedByBowler[bowler][batsman];
      }
    }
    for (let batsman in batsmanDismisedByBowler[bowler]) {
      if (batsmanDismisedByBowler[bowler][batsman] == max) {
        batsmancount[batsman] = max;
      }
    }
    highestBatsmanDismisal[bowler] = batsmancount;
  }

  return highestBatsmanDismisal;
}

module.exports = highestTimePlayerDismissedByBowler;
