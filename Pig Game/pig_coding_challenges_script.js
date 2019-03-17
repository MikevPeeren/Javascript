/***********************************************************************************************************************************/
/**************************************************** Coding Challenges ************************************************************/
/***********************************************************************************************************************************/
/********************************** Once the game has been made without the Coding Challenges **************************************/
/***************************************** Change the game to follow these rules: **************************************************/
/********************************* A player looses his ENTIRE score when he rolls two 6's in a row. ********************************/
/************ After that, it's the next player's turn.(Hint: Always save the previous dice roll in a separate variable) ************/
/*** Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100.***/
/******************************* (Hint: you can read that value with the .value property in JavaScript. ****************************/
/*** Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. ***/
/************ (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.) *************/
/***********************************************************************************************************************************/

var scores, roundScore, activePlayer, playerNames, gamePlaying, previousRoll, finalScore;

initializeGame();

// Initializing the game.
function initializeGame() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  previousRoll = 0;
  playerNames = ['Mike', 'Monika'];
  gamePlaying = true;

  finalScoreValue = document.querySelector('.final-score').value;
  if (isInt(finalScoreValue)) {
    finalScore = finalScoreValue
  } else {
    finalScore = 100;
  }

  document.querySelector('.first-dice').style.display = 'none';
  document.querySelector('.second-dice').style.display = 'none';
  document.querySelector('.game-completed-label').style.display = 'none';
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

  document.getElementById('name-0').textContent = playerNames[0];
  document.getElementById('name-1').textContent = playerNames[1];
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.getElementById('player-name').textContent = playerNames[activePlayer];
  document.querySelector('.game-completed-label').style.display = 'none';
}

// Generate a random int based on the given parameters
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Check to see if a given value is a int.
function isInt(value) {
  return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
}

// Move towards the Next Player
function nextPlayer() {
  // Next Player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  previousRoll = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.first-dice').style.display = 'none';
  document.querySelector('.second-dice').style.display = 'none';
}

// Query selector to check if button roll has been click
document.querySelector('.btn-roll').addEventListener('click', function() {
  if (gamePlaying) {
    // Random number
    var firstDice = getRandomInt(1, 7);
    var secondDice = getRandomInt(1, 7);
    // Display the result
    var firstDiceDOM = document.querySelector('.first-dice');
    firstDiceDOM.style.display = 'block';
    firstDiceDOM.src = 'dice-' + firstDice + '.png';
    var secondDiceDOM = document.querySelector('.second-dice');
    secondDiceDOM.style.display = 'block';
    secondDiceDOM.src = 'dice-' + secondDice + '.png';

    if (firstDice !== 1 && secondDice !== 1) {
      roundScore += firstDice += secondDice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      nextPlayer();
    }

    // Player looses entire score when he rolls two 6's. Challenge 2
    //
    // if (previousRoll === 6 && firstDice === 6) {
    //   // Player looses score
    //   scores[activePlayer] = 0;
    //   document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    //   nextPlayer();
    // } else if (dice !== 1) {
    //  // Add the Score
    //   roundScore += dice;
    //   previousRoll = dice;
    //   document.querySelector('#current-' + activePlayer).textContent = roundScore;
    // } else {
    //   // Next Player
    //   nextPlayer();
    // }
  }
});

// Query selector to check if button hold has been click
document.querySelector('.btn-hold').addEventListener('click', function() {
  if (gamePlaying) {
    // Add current score to GLOBAL score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // Check if the Player has won the Game.
    if (scores[activePlayer] >= finalScore) {
      document.querySelector('.first-dice').style.display = 'none';
      document.querySelector('.second-dice').style.display = 'none';
      document.getElementById('player-name').textContent = playerNames[activePlayer];
      document.querySelector('.game-completed-label').style.display = 'block';
      gamePlaying = false;
    } else {
      // Next Player
      nextPlayer();
    }
  }
});

// Query selector to check if button new has been click
document.querySelector('.btn-new').addEventListener('click', initializeGame);
