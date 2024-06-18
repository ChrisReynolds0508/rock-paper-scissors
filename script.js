
let playGame = confirm('Do you want to play a game?');
if (playGame) {

    let playerChoice = prompt("please enter rock, paper or scissors");
  
    if (playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === 'rock' || 
            playerOne === 'paper' || 
            playerOne ==='scissors'
        ) {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = 
            computerChoice === 1
            ? 'rock'
             : computerChoice === 2
             ? 'paper' 
             :'scissors';
    let result =
    playerOne === computer
    ? 'tie game' 
    : playerOne === 'rock' && computer ==='paper' 
    ? 'playerOne: ${playerOne} \n Computer: ${computer} \n Computer wins'
        : playerOne === 'paper' && computer ==='scissors' 
       ? 'playerOne: ${playerOne} \n Computer: ${computer} \n Computer wins'
        : playerOne ==='scissors' && computer ==='rock'
        ? 'playerOne: ${playerOne} \n Computer: ${computer} \n Computer wins'
        : 'playerOne: ${playerOne} \n Computer: ${computer} \n PlayerOne wins';
        alert(result);
        let playAgain = confirm('Do you want to play again?');
        playAgain ? location.reload(): alert('Thank you for playing');
    } else {
        alert('You didnt enter rock, paper or scissors');

    }
    } else {
         }     alert("I guess you changed your mind");
} else {
    alert('You did not want to play a game');
}
    

