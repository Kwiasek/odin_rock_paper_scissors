const getComputerChoice = () => {
    let random = Math.floor(Math.random() * 3) + 1;
    switch(random) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

let playerScore = 0;
let computerScore = 0;

const playRound = (playerSelection) => {
    if (playerSelection == getComputerChoice()) {
        return
    }
    else if ((playerSelection == 'Rock' && getComputerChoice() == 'Scissors') || (playerSelection == 'Paper' && getComputerChoice() == 'Rock') || (playerSelection == 'Scissors' && getComputerChoice() == 'Paper')) {
        playerScore ++;
    }
    else {
        computerScore ++;
    }
    game();
}

const game = () => {
    document.querySelector('#output').innerHTML = `<table id="score">
        <tr>
            <th>Player score</th><th>Computer score</th>
        </tr>
        <tr>
            <td>${playerScore}</td><td>${computerScore}</td>
        </tr>
    </table>`

    if (computerScore == 5) {
        document.querySelector('#output').innerHTML = '<h1>Computer wins!</h1>';
        playerScore = 0;
        computerScore = 0;
    }
    else if (playerScore == 5) {
        document.querySelector('#output').innerHTML = '<h1>Player wins!</h1>';
        playerScore = 0;
        computerScore = 0;
    }
}