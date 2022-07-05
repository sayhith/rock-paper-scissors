let gameMoves = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let playerSelection = null;
let computerSelection = null;

const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const resultMessage = document.getElementById("resultMessage");
const movesMessage = document.getElementById("movesMessage");
const buttons = Array.from(document.querySelectorAll(".movesButton"));
const buttonsDiv = document.querySelectorAll(".movesButtonDiv");
const restartButton = document.getElementById("restartButton");

function computerPlay() {
    return gameMoves[Math.floor(Math.random() * gameMoves.length)];
}

function playRound(e) {
    computerSelection = computerPlay();
    playerSelection = e.target.id;
    updateScore(determineResult());
}

function determineResult() {
    switch (playerSelection + computerSelection) {
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            return true;

        case "rockpaper":
        case "scissorsrock":
        case "paperscissors":
            return false;

        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            return null;
    }
}

function updateScore(result) {
    switch(result) {
        case true:
            playerScore++
            playerScoreDisplay.textContent = `You: ${playerScore}`;
            resultMessage.textContent = "You win!";
            break;
        case false:
            computerScore++
            computerScoreDisplay.textContent = `The Machine: ${computerScore}`;
            resultMessage.textContent = "You lose :(";
            break;
        case null:
            resultMessage.textContent = "It's a tie";
            break;
    }
    movesMessage.textContent = `You chose ${playerSelection.toUpperCase()}, 
        the computer chose ${computerSelection.toUpperCase()}`;
}

let isGameOver = () => (playerScore === 5 || computerScore === 5);

function endGame() {
    switch(5) {
        case playerScore: 
            resultMessage.textContent = "You won the game! Congratulations, you beat the machine.";
            break;
        case computerScore: 
            resultMessage.textContent = "You lost the game... to a computer.";
            break;
    }
    if (isGameOver) {
        // if (restartButton.style.display === 'none') {
        //     restartButton.style.display = 'block';
        // } else {
        //     restartButton.style.display = 'none';
        // }
        restartButton.style.display = 'block';
        restartButton.addEventListener("click", restartGame);
        buttonsDiv.style.display = 'none';
    }
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    playerSelection = null;
    computerSelection = null;
    resultMessage.textContent = "Ready?";
    movesMessage.textContent = "First to 5 points wins! Good luck...";
    playerScoreDisplay.textContent = "You: 0";
    computerScoreDisplay.textContent = "The Machine: 0";
}

buttons.forEach(button => button.addEventListener('click', playRound));
buttons.forEach(button => button.addEventListener('click', endGame));




// restartButton.addEventListener("click", restartGame);





// function game() {
//     const playerScore = document.getElementById("playerScore");
//     const computerScore = document.getElementById("computerScore");

//     while (playerWins < 5 && computerWins < 5) {
//         switch (playRound()) {
//             case true:
//                 playerWins++;
//                 playerScore.textContent = `Player: ${playerWins}`;
//                 break;
//             case false:
//                 computerWins++;
//                 computerScore.textContent = `The Machine: ${computerWins}`;
//                 break;
//         }
//     }
// }

// function updateResult(winLoseTie) {
//     const result = document.getElementById("result");
//     switch (winLoseTie) {
//         case null:
//             result.innerHTML = "You tie!";
//             break;
//         case true:
//             result.innerHTML = "You win!";
//             break;
//         case false:
//             result.innerHTML = "You lose!"
//     }
// }

// function game() {
//     let playerWins = 0;
//     let computerWins = 0;

//     for (let i = 0; i < 5; i++) {
//         let playerInput = getPlayerInput();
//         let computerInput = computerPlay();

//         switch (playRound(playerInput)) {
//             case true:
//                 playerWins++;
//                 console.log("You win!");
//                 break;
//             case false:
//                 computerWins++;
//                 console.log("You lose!");
//                 break;
//             case null:
//                 console.log("You tie!");
//         }
//     }
//     determineWinner(playerWins, computerWins); 
// }

// function getPlayerInput() {
//     let playerInput = prompt("Rock, paper or scissors?").toLowerCase();
//     if (verifyInput(playerInput)) {
//         return playerInput;
//     } else {
//         console.log("Invalid entry.");
//         return getPlayerInput();
//     }
// }

// function verifyInput(playerInput) {
//     if ((playerInput === rock) || (playerInput === paper) || (playerInput === scissors)) {
//         return true;
//     }
// }







