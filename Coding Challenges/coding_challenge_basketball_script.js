var scoreJohnsTeam = (89 + 120 + 103) / 3
var scoreMikesTeam = (116 + 94 + 123) / 3

decideWhoWins(scoreJohnsTeam, scoreMikesTeam);

var scoreJohnsTeam = 150
var scoreMikesTeam = 150

decideWhoWins(scoreJohnsTeam, scoreMikesTeam);

var scoreJohnsTeam = 160
var scoreMikesTeam = 150

decideWhoWins(scoreJohnsTeam, scoreMikesTeam);

var scoreJohnsTeam = 180
var scoreMikesTeam = 170
var scoreMarysTeam = 160;

decideWhoWins(scoreJohnsTeam, scoreMikesTeam, scoreMarysTeam);

function decideWhoWins(scoreJohnsTeam, scoreMikesTeam, scoreMarysTeam = null) {
  if (scoreMarysTeam) {
    if (scoreJohnsTeam === scoreMikesTeam && scoreMarysTeam === scoreJohnsTeam) {
      console.log('John and Mike scored equally. John his team scored: ' + scoreJohnsTeam + ' Mike his team scored: ' + scoreMikesTeam + ' Mary his team scored: ' + scoreMarysTeam);
    } else if (scoreJohnsTeam > scoreMikesTeam && scoreJohnsTeam > scoreMarysTeam) {
      console.log('John his team scored higher on average they scored: ' + scoreJohnsTeam);
    } else if (scoreMikesTeam > scoreJohnsTeam && scoreMikesTeam > scoreMarysTeam) {
      console.log('Mike his team scored higher on average they scored: ' + scoreMikesTeam);
    } else {
      console.log('Mary her team scored higher on average they scored: ' + scoreMarysTeam);
    }

  } else {
    if (scoreJohnsTeam === scoreMikesTeam) {
      console.log('John and Mike scored equally. John his team scored: ' + scoreJohnsTeam + ' Mike his team scored: ' + scoreMikesTeam);
    } else if (scoreJohnsTeam > scoreMikesTeam) {
      console.log('John his team scored higher on average they scored: ' + scoreJohnsTeam);
    } else {
      console.log('Mike his team scored higher on average they scored: ' + scoreMikesTeam);
    }
  }
}
