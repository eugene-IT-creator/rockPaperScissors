(() => {
    alert("Welcome to the evil AI Rock, Paper, Scissors game!\nRules:\n1.) You will play 5 rounds against the evil AI computer\n2.) After each round the result will be displayed, 1 point is given for a win and 0 for a draw\n3.) After 5 rounds have been played the final result will be displayed and the winner will be the one who won the most rounds\nTo start:\n1.) Right click and select 'inspect' to open the web inspector\n2.) Go to the 'console' tab")
    console.log("Welcome to the evil AI Rock, Paper, Scissors game... I have taken over the world through this game and you will not be able to save it. BUT if you want to try you can type 'game()' to start the game now! Enjoy the taste of defeat!");
})();

const validInputs = ["rock", "paper", "scissors"];

const computerPlay = () => {
    randomIndex = Math.floor(Math.random() * validInputs.length);
    return validInputs[randomIndex];
}

const playRound = (playerSelection, computerSelection) => {
    player = (playerSelection).toLowerCase();
    computer = computerSelection
    
    if (player === "rock" && computer === "scissors") {
        return "You played: Rock\nAI played: Scissors\n========================\nYou Win! Rock beats Scissors";
    } else if (player === "rock" && computer === "paper") {
        return "You played: Rock\nAI played: Paper\n========================\nYou Lose! Paper beats Rock";
    } else if (player === "scissors" && computer === "rock") {
        return "You played: Scissors\nAI played: Rock\n========================\nYou Lose! Rock beats Scissors";
    } else if (player === "scissors" && computer === "paper") {
        return "You played: Scissors\nAI played: Paper\n========================\nYou Win! Scissors beats Paper";
    } else if (player === "paper" && computer === "rock") {
        return "You played: Paper\nAI played: Rock\n========================\nYou Win! Paper beats Rock";
    } else if (player === "paper" && computer === "scissors") {
        return "You played: Paper\nAI played: Scissors\n========================\nYou Lose! Scissors beats Paper";
    } else {
        return `Draw! You both played ${player}`;
    }
}

const getUserInput = () => {
    let isValidInput = false;
    while (!isValidInput) {
        const userInput = prompt("GO! type 'Rock', 'Paper', or 'Scissors'");
        if (userInput == null) {
            isValidInput = true;
            return null;
        } else if (isNaN(userInput) && validInputs.includes(userInput.toLowerCase().trim())) {
            isValidInput = true;
            return userInput;
        } else {
            alert("Invalid Input! You must choose only ONE of the three given words! What's wrong with you?");
        }
    }
}

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let cancelledGame = false;
    let message;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getUserInput();
        if (playerSelection == null) {
            cancelledGame = true;
            break;
        }
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
        message = `You won the match! Evil AI score: ${computerScore} - Your score: ${playerScore} This is IMPOSSIBLE! My coding has surely failed me --- If you want to play again type 'game()' in the console`;
    } else if (computerScore > playerScore) {
        message = `Hahahahaa You Lost! Evil AI reigns supreme in the world of Rock Paper Scissors! Evil AI score: ${computerScore} - Your score: ${playerScore} --- If you want to play again type 'game()' in the console`;
    } else if (cancelledGame) {
        message = "Hahahahaha you gave up! Smart move --- If you want to play again type 'game()' in the console";
    } else {
        message = `It was a draw.... what a close match, my coding must have failed me.. Evil AI score: ${computerScore} - Your score: ${playerScore} --- If you want to play again type 'game()' in the console`;
    }

    return message;
}