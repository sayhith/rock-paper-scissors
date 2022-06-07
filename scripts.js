const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

let gameMoves = [rock, paper, scissors];

function computerPlay() {
    return gameMoves[Math.floor(Math.random() * gameMoves.length)];
}


function playGame(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    computerSelection.toLowerCase();
}
