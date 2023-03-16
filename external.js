let computerSelection;
let playerSelection;

let container = document.querySelector(".buttons");
let computerScore = 0;
let playerScore = 0;
let result = document.querySelector(".result");
let firstGame = true;

function playRound(playerSelection) {
  computerSelection = getComputerInput();

  if (computerSelection == playerSelection) {
    result.textContent = "It's a Tie!";
  } else if (
    (computerSelection == "rock" && playerSelection == "scissorsButton") ||
    (computerSelection == "scissors" && playerSelection == "paperButton") ||
    (computerSelection == "paper" && playerSelection == "rockButton")
  ) {
    computerScore++;
    result.textContent = "You lost!";
  } else {
    playerScore++;
    result.textContent = "You win!";
  }

  console.log(`Player: ${playerScore}, Computer: ${computerScore}`);

  if (playerScore == 5) {
    result.textContent = "Congratulations! You won the game! The game has been reset, choose any option to start.";
    playerScore = 0;
    computerScore = 0;
    firstGame = false;
  } else if (computerScore == 5) {
    result.textContent = "Oh no! You lost the game. Try again! The game has been reset, choose any option to start.";
    playerScore = 0;
    computerScore = 0;
    firstGame = false;
  }
}

function getComputerInput() {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

if (firstGame) {
  result.textContent = "Choose rock, paper or scissors to start the game!";
  firstGame = false;
}

container.addEventListener("click", function (event) {
  if (event.target.tagName !== "BUTTON") return;
  playerSelection = event.target.id;
  playRound(playerSelection);
});
