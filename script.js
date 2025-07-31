const computerPlay = () => {
    let plays = ['Rock', 'Paper', 'Scissors'];
    randomIndex = Math.floor(Math.random() * plays.length);
    return plays[randomIndex];
}