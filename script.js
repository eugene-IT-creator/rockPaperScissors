(() => {
    console.log("Welcome to the evil AI Rock, Paper, Scissors game... I have taken over the world through this game and you will not be able to save it. BUT if you want to try you can type 'game()' to sart the game now! Enjoy the taste of defeat!")
})();

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
        return `Draw! You both played ${player}`;
    }
}

const getUserInput = () => {
    let isValidInput = false;
    const validInputs = ['rock', 'paper', 'scissors'];
    while (!isValidInput) {
        const userInput = String(prompt("GO! type 'Rock', 'Paper', or 'Scissors'"));
        if (isNaN(userInput) && validInputs.includes(userInput.toLowerCase())) {
            isValidInput = true;
            return userInput;
        } else {
            alert("Invalid Input");
        }
    }
}

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let message;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getUserInput();
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }
        console.log(`Round ${i + 1}:`);
        console.log(result);
    }
    if (playerScore > computerScore) {
        message = `You won the match! Evil AI score: ${computerScore} - Your score: ${playerScore} This is IMPOSSIBLE! My coding has surely failed me`;
    } else if (computerScore > playerScore) {
        message = `Hahahahaa You Lost! Evil AI reigns supreme in the world of Rock Paper Scissors! Evil AI score: ${computerScore} - Your score: ${playerScore}`;
    } else {
        message = `It was a draw.... what a close match, my coding must have failed me.. Evil AI score: ${computerScore} - Your score: ${playerScore}`;
    }

    return message;
}