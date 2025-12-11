function getComputerChoice() {
  let computerChoice;
  computerChoice = Math.floor(Math.random() * 100);
  if (computerChoice >= 1 && computerChoice <= 33) {
    return "rock";
  } else if (computerChoice >= 34 && computerChoice <= 66) {
    return "paper";
  } else if (computerChoice >= 67 && computerChoice <= 99) {
    return "scissors";
  }
}
function getHumanChoice() {
  let humanChoice;
  humanChoice = prompt("Which one would you pick in rock, paper or scissors: ");
  // 	humanchoice should be changed to lower case

  return humanChoice.toLowerCase();
}

let humanSelection = "";
let computerSelection = "";

let humanScore = 0;
let computerScore = 0;

// function playRound(humanChoice, computerChoice)
function playRound(humanChoice, computerChoice) {
  let result = document.createElement("div");
  let resultText = document.createElement("p");
  let scoreText = document.createElement("p");
  // 	IF humanChoice == rock && computerchoice == paper
  if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore += 1;
    resultText.textContent = "You lose! Paper beats Rock";
  }
  // 	ELSE IF humanChoice == rock && computerChoice == scissors
  else if (humanChoice == "rock" && computerChoice == "scissors") {
    resultText.textContent = "You win! Rock beats Scissors";
    humanScore += 1;
  }
  // 	ELSE IF humanChoice == paper && computerChoice == rock
  else if (humanChoice == "paper" && computerChoice == "rock") {
    // 		PRINT ("You win! Paper beats Rock");
    resultText.textContent = "You win! Paper beats Rock";
    // 		humanScore += 1;
    humanScore += 1;
  }
  // 	ELSE IF humanChoice == paper && computerChoice == scissors
  else if (humanChoice == "paper" && computerChoice == "scissors") {
    // 		PRINT ("You lose! Scissors beats Rock");
    resultText.textContent = "You lose! Scissors beats Paper";
    // 		computerScore += 1;
    computerScore += 1;
  }
  // 	ELSE IF humanChoice == scissors && computerChoice == rock
  else if (humanChoice == "scissors" && computerChoice == "rock") {
    // 		PRINT ("You lose! Rock beats Scissors");
    resultText.textContent = "You lose! Rock beats Scissors";
    // 		computerScore += 1;
    computerScore += 1;
  }
  // 	ELSE
  else if (humanChoice == "scissors" && computerChoice == "paper") {
    // 		PRINT ("You win! Scissors beats Paper");
    resultText.textContent = "You win! Scissors beats Paper";
    // 		humanScore += 1;
    humanScore += 1;
  } else {
    resultText.textContent = "Honourable Draw";
    humanScore += 1;
    computerScore += 1;
  }
  document.body.appendChild(result);
  scoreText.textContent += `Human Score: ${humanScore} Computer Score: ${computerScore}`;
  result.appendChild(resultText);
  result.appendChild(scoreText);
}
let rockBtn = document.createElement("button");
let PaperBtn = document.createElement("button");
let scissorsBtn = document.createElement("button");

rockBtn.textContent = "Rock";
PaperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";

document.body.appendChild(rockBtn);
document.body.appendChild(PaperBtn);
document.body.appendChild(scissorsBtn);

// when the button is clicked, we want to play a round
rockBtn.addEventListener("click", () => {
  humanSelection = "rock";
  computerSelection = "paper";
  playRound(humanSelection, computerSelection);
  if (computerScore == 5) {
    alert("You lose this round!, The computer wins");
  } else if (humanScore == 5) {
    alert("You won this round");
  }
});
PaperBtn.addEventListener("click", () => {
  humanSelection = "paper";
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  if (computerScore == 5) {
    alert("You lose this round!, The computer wins");
  } else if (humanScore == 5) {
    alert("You won this round");
  }
});
scissorsBtn.addEventListener("click", () => {
  humanSelection = "scissors";
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  if (computerScore == 5) {
    alert("You lose this round!, The computer wins");
  } else if (humanScore == 5) {
    alert("You won this round");
  }
});
// and update the scores
// if humanScore is 5, we want to alert the user that they won
// if computerScore is 5, we want to alert the user that they lost
