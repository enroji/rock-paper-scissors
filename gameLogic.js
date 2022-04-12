// Returns a random
function computerPlay() {
  // Array that contains the possible choices
  const choice = ["Rock", "Paper", "Scissors"];
  // Generates a random integer from 0 to 2
  const randomNumber = Math.floor(Math.random() * 3);

  return choice[randomNumber];
}

// Plays a game round
function gameRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `Tie! ${playerSelection} ${computerSelection}`;
  }
  // if the player selects rock
  else if (playerSelection.toUpperCase() === "ROCK") {
    if (computerSelection === "Paper") {
      return "You lose! Paper beats Rock";
    } else {
      return "You win! Rock beats Scissors";
    }
  }
  // if the player selects paper
  else if (playerSelection.toUpperCase() === "PAPER") {
    if (computerSelection === "Scissors") {
      return "You lose! Scissors beat Paper";
    } else {
      return "You win! Paper beats Rock";
    }
  }
  // if the player selects scissors
  else if (playerSelection.toUpperCase() === "SCISSORS") {
    if (computerSelection === "Rock") {
      return "You lose! Rock beats Paper";
    } else {
      return "You win! Paper beats Rock";
    }
  }
  // if it's not a valid choice
  else {
    return "Enter a valid choice!";
  }
}
