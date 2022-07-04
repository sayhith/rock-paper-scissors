let gameMoves = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");

function computerPlay() {
    return gameMoves[Math.floor(Math.random() * gameMoves.length)];
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    switch(determineResult(playerSelection, computerSelection)) {
        case true:
            playerScore++
            playerScoreDisplay.textContent = `You: ${playerScore}`;
            break;
        case false:
            computerScore++
            computerScoreDisplay.innerHTML = `The Machine: ${computerScore}`;
            break;
    }
}

function determineResult(playerSelection, computerSelection) {
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


const buttons = document.querySelectorAll('.button')
const button = buttons[0];
console.log(button.getAttribute("id"));



