let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
  }

  function compareGuesses(userGuess, computerGuess, targetNumber) {
    const userDifference = Math.abs(userGuess - targetNumber);
    const computerDifference = Math.abs(computerGuess - targetNumber);
  
    if (userDifference <= computerDifference) {
      return true; // Human wins
    } else {
      return false; // Computer wins
    }
  }

  function updateScore(winner) {
    if (winner === 'human') {
      humanScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
  }

  
  function advanceRound() {
    currentRoundNumber++;
  }

  
  