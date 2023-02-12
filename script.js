function getComputerChoice() {
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

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper")) {
        return 1;
    }
    else if (playerSelection == computerSelection) {
        return 0;
    }
    else {
        return -1;
    }
}


function game(playerChoice) {
    let result = 0;
    for (let i = 0; i < 5; i++) {
        result += playRound(playerChoice, getComputerChoice())
    }
    alert(`${result > 0 ? 'Player wins!' : result < 0 ? 'Computer wins!' : 'Draw!'} Result: ${result}`)
}