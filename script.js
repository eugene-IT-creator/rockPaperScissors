const computerPlay = () => {
    let plays = ['Rock', 'Paper', 'Scissors'];
    randomIndex = Math.floor(Math.random() * plays.length);
    return plays[randomIndex];
}

const playRound = (playerSelection, computerSelection) => {
    player = String(playerSelection).toLowerCase();
    computer = String(computerSelection).toLowerCase();
    
    if (player == 'rock' && computer == 'scissors') {
        return "You win!, Rock beats Scissors";
    } else if (player == 'rock' && computer == 'paper') {
        return "You Lose! Paper beats Rock";
    } else if (player == 'scissors' && computer == 'rock') {
        return "You Lose! Rock beats Scissors";
    } else if (player == 'scissors' && computer == 'paper') {
        return "You Win! Scissors beats Paper";
    } else if (player == 'paper' && computer == 'rock') {
        return "You Win! Paper beats Rock";
    } else if (player == 'paper' && computer == 'scissors') {
        return "You Lose! Scissors beats Paper";
    } else {
        return "Draw!";
    }
}
