function computerPlay() {
    switch (Math.floor(Math.random() * 3)) {
        case 2:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 0:
            return "Scissors";
            break;
        default:
            return "Error";
    }
}

function toNumber(selection) {
    switch (selection) {
        case "Rock":
            return 2;
            break;
        case "Paper":
            return 1;
            break;
        case "Scissors":
            return 0;
            break;
        default:
            return -1;
    }
}

function whoBeatsWho(winner, loser) {
    return winner + " beats " + loser
}

function playRound(computerSelection, playerSelection) {
    console.log(computerSelection, playerSelection);
    let computerNum = toNumber(computerSelection);
    let playerNum = toNumber(playerSelection);

    console.log("C: " + computerNum + " P: " + playerNum);

    let result = playerNum - computerNum;

    switch (result) {
        case 2:
            console.log("You win! " + whoBeatsWho(playerSelection, computerSelection));
            break;
        case -1:
            console.log("You win! " + whoBeatsWho(playerSelection, computerSelection));
            break;
        case -2:
            console.log("You lose! " + whoBeatsWho(computerSelection, playerSelection));
            break;
        case 1:
            console.log("You lose! " + whoBeatsWho(computerSelection, playerSelection));
            break;
        case 0:
            console.log("It's a tie!");
            break;
        default:
            console.log("Error");
    }
}

function getPlayerInput() {
    let playerInput;
    if (playerInput == undefined) {
        playerInput = prompt("Choose rock, paper or scissors");
    }
    while (playerInput.toLowerCase().trim() != "rock" || playerInput.toLowerCase().trim() != "paper" || playerInput.toLowerCase().trim() != "scissors") {
        playerInput = prompt("Your input was incorrect. \n\nChoose rock, paper or scissors");
    }

    return playerInput.charAt(0).toUpperCase() + playerInput.slice(1)
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerInput();
        console.log(playerSelection);
        const computerSelection = computerPlay();
        playRound(computerSelection, playerSelection);
    }
}

game();