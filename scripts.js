let gameMoves = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return gameMoves[Math.floor(Math.random() * gameMoves.length)];
}


function playRound(playerSelection) {
    let computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        return null;
    }

    switch (playerSelection) {
        case "rock":
            if (computerSelection === "scissors") {
                return true;
            }
            if (computerSelection === "paper") {
                return false;
            }
            break;
        case "paper":
            if (computerSelection === "rock") {
                return true;
            }
            if (computerSelection === "scissors") {
                return false;
            }
            break;
        case "scissors":
            if (computerSelection === "paper") {
                return true;
            }
            if (computerSelection === "rock") {
                return false;
            }
    }
}

function updateResult() {
    const result = document.getElementById("result");
    if (result.innerHTML === "Ready?") {
      result.innerHTML = "Swapped text!";
    } else {
      x.innerHTML = "Hello";
    }
  }

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

function determineWinner(playerWins, computerWins) {
    switch (playerWins > computerWins) {
        case true:
            console.log("Congratulations! You win the game!");
            break;
        case false:
            console.log("You lost the game. Try again!");
            break;
        default:
            console.log("You tied the game!");
    }
}


const buttons = document.querySelectorAll('.button')
const button = buttons[0];
console.log(button.getAttribute("id"));




