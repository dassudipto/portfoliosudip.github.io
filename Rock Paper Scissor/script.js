
// Function to get the computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    if ((userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")) {
        return "You win!";
    }
    return "Computer wins!";
}



const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultText = document.getElementById("result-text");

rockButton.addEventListener("click", () => playGame("rock"));
paperButton.addEventListener("click", () => playGame("paper"));
scissorsButton.addEventListener("click", () => playGame("scissors"));

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    resultText.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
}

const playAgainButton = document.getElementById("play-again");

playAgainButton.addEventListener("click", () => {
    resultText.textContent = "Choose your move!";
    playAgainButton.style.display = "none";
    rockButton.style.display = "inline-block";
    paperButton.style.display = "inline-block";
    scissorsButton.style.display = "inline-block";
});

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    resultText.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
    
    playAgainButton.style.display = "inline-block";
    rockButton.style.display = "none";
    paperButton.style.display = "none";
    scissorsButton.style.display = "none";
}
