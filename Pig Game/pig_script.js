/********************************************************************************************************/
/********************************************** Game Rules **********************************************/
/********************************************************************************************************/
/******************************** The game has 2 players, playing in rounds  ****************************/
/******************** In each turn, a player rolls a dice as many times as he whishes. ******************/
/******************************** Each result get added to his ROUND score ******************************/
/******************** BUT, if the player rolls a 1, all his ROUND score gets lost. **********************/
/******************************** After that, it's the next player's turn *******************************/
/*** The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. ***/
/******************************** After that, it's the next player's turn *******************************/
/********************** The first player to reach 100 points on GLOBAL score wins the game **************/
/********************************************************************************************************/

var scores, roundScore, activePlayer, playerNames, gamePlaying;

initializeGame();

document.querySelector('.btn-roll').addEventListener('click', function() {
  if (gamePlaying) {
    // Random number
    var dice = getRandomInt(1, 7);

    // Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // Update round score IF the rolled number was NOT a 1
    if (dice !== 1) {
      // Add the Score
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      // Next Player
      nextPlayer();
    }
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  if (gamePlaying) {
    // Add current score to GLOBAL score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // Check if the Player has won the Game.
    if (scores[activePlayer] >= 25) {
      document.querySelector('.dice').style.display = 'none';
      document.getElementById('player-name').textContent = playerNames[activePlayer];
      document.querySelector('.game-completed-label').style.display = 'block';
      gamePlaying = false;
    } else {
      // Next Player
      nextPlayer();
    }
  }
});

document.querySelector('.btn-new').addEventListener('click', initializeGame);

// Method to generate a random int based on the given parameters
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Move towards the Next Player
function nextPlayer() {
  // Next Player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';
}

// Initializing the game.
function initializeGame() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  playerNames = ['Mike', 'Monika'];
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none';
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
