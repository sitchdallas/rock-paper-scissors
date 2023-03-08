let computerSelection;
let playerSelection;

function game() {
  let computerScore = 0;
  let playerScore = 0;
  while (playerScore < 5 && computerScore < 5) {
    const result = playRound();
    console.log(result);
    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lost")) {
      computerScore++;
    }
    console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
  }
  if (playerScore === 5) {
    console.log("Congratulations! You won the game!");
  } else {
    console.log("Sorry, you lost the game. Try again!");
  }
}

function playRound() {
  computerSelection = getComputerInput();
  playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();

  if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    return "You lost!";
  } else if (computerSelection == playerSelection) {
    return "It's a Tie!";
  } else {
    return "You win!";
  }
}

function getComputerInput() {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

game();
