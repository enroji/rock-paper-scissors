// Returns a random
function computerPlay() {
  // Array that contains the possible choices
  const choice = ["Rock", "Paper", "Scissors"];
  // Generates a random integer from 0 to 2
  const randomNumber = Math.floor(Math.random() * 3);

  return choice[randomNumber];
}
// Plays a game round
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();
  // if both make the same choice
  if (playerSelection === computerSelection) {
    return "Tie!";
  }
  // if the player selects paper
  else if (playerSelection === "ROCK") {
    if (computerSelection === "PAPER") {
      return "You lose! Paper beats Rock";
    } else {
      return "You win! Rock beats Scissors";
    }
  }
  // if the player selects paper
  else if (playerSelection === "PAPER") {
    if (computerSelection === "SCISSORS") {
      return "You lose! Scissors beat Paper";
    } else {
      return "You win! Paper beats Rock";
    }
  }
  // if the player selects scissors
  else if (playerSelection === "SCISSORS") {
    if (computerSelection === "ROCK") {
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
// Plays the game for five rounds
function game() {
  for (let i = 0; i < 5; i++) {
    const choice = prompt("Type: Rocks, Paper or Scissors");
    alertrock(playRound(choice, computerPlay()));
  }
}

game();
