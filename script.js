let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
  let computerChoice;
  computerChoice = Math.floor(Math.random() * 100) + 1;
  if (computerChoice >= 1 && computerChoice <= 33) {
    return "rock";
  } else if (computerChoice >= 34 && computerChoice <= 66) {
    return "paper";
  } else if (computerChoice >= 67 && computerChoice <= 100) {
    return "scissors";
  }
}
function getHumanChoice() {
  let humanChoice;
  humanChoice = prompt("Which one would you pick in rock, paper or scissors: ");
  // 	humanchoice should be changed to lower case

  return humanChoice.toLowerCase();
}
// function playRound(humanChoice, computerChoice)
function playRound(humanChoice, computerChoice) {
  // 	IF humanChoice == rock && computerchoice == paper
  if (humanChoice == "rock" && computerChoice == "paper") {
    // 		PRINT ("You lose! Paper beats Rock");
    console.log("You lose! Paper beats Rock");
    // 		humanScore += 1;
    computerScore += 1;
  }
  // 	ELSE IF humanChoice == rock && computerChoice == scissors
  else if (humanChoice == "rock" && computerChoice == "scissors") {
    // 		PRINT ("You win! Rock beats Scissors")
    console.log("You win! Rock beats Scissors");
    // 		humanScore += 1;
    humanScore += 1;
  }
  // 	ELSE IF humanChoice == paper && computerChoice == rock
  else if (humanChoice == "paper" && computerChoice == "rock") {
    // 		PRINT ("You win! Paper beats Rock");
    console.log("You win! Paper beats Rock");
    // 		humanScore += 1;
    humanScore += 1;
  }
  // 	ELSE IF humanChoice == paper && computerChoice == scissors
  else if (humanChoice == "paper" && computerChoice == "scissors") {
    // 		PRINT ("You lose! Scissors beats Rock");
    console.log("You lose! Scissors beats Paper");
    // 		computerScore += 1;
    computerScore += 1;
  }
  // 	ELSE IF humanChoice == scissors && computerChoice == rock
  else if (humanChoice == "scissors" && computerChoice == "rock") {
    // 		PRINT ("You lose! Rock beats Scissors");
    console.log("You lose! Rock beats Scissors");
    // 		computerScore += 1;
    computerScore += 1;
  }
  // 	ELSE
  else if (humanChoice == "scissors" && computerChoice == "paper") {
    // 		PRINT ("You win! Scissors beats Paper");
    console.log("You win! Scissors beats Paper");
    // 		humanScore += 1;
    humanScore += 1;
  } else {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
}

let humanSelection = "";
let computerSelection = "";
function playGame() {
  let gameCount = 1;

  while (gameCount <= 5) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("Human Score is: " + humanScore);
    console.log("Computer Score is: " + computerScore);
    gameCount += 1;
  }
  if (computerScore > humanScore) {
    console.log("You lose! Computer wins this round");
  } else {
    console.log("You win this round");
  }
}
playGame();
