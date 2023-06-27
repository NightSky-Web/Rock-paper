const symbols = ["Rock", "Paper", "Scissors"];//symbols array to choose from
//choose random symbol for computer
function getComputerChoice(){
    let computerChoice = symbols[Math.floor(Math.random() * symbols.length)]
    return computerChoice;
}

let userScore = 0, computerScore = 0;

//round function that compares player and computer choices,modifies 'result' label and increase user and computer points, checking scores
function playRound(playerSelection, computerSelection){
    
    if (playerSelection === computerSelection){
        document.getElementById('result').textContent = "It is draw. Nobody receive point!";
        
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Scissors" && computerSelection === "Paper"){
        document.getElementById('result').textContent = `You earn a point! -- Computer's choice: ${computerSelection}. ${playerSelection} beats ${computerSelection}!`;
        userScore++;
        document.getElementById('userPoints').textContent = `User - ${userScore}`;
       
    }
    else{
        document.getElementById('result').textContent = `Computer earns a point! -- Computer's choice: ${computerSelection}. ${computerSelection} beats ${playerSelection}!`;
        computerScore++;
        document.getElementById('computerPoints').textContent = `Computer - ${computerScore}`;
    }
    checkingScores()
}


//reset function for rematch
/*
function resetGame(){
    let playAgain;
    do {
        playAgain = prompt("Do you want to play again?: Y or N").toLowerCase();
    } while (!playAgain === "y" || !playAgain === "n");
    if (playAgain === 'y'){
        userScore = 0;
        computerScore = 0;
        document.getElementById('print-winner').textContent = "";
        document.getElementById('userPoints').textContent = `User - ${userScore}`;
        document.getElementById('computerPoints').textContent = `Computer - ${computerScore}`;
        document.getElementById('result').textContent = "Who gets 5 points sooner wins the game";
        game();
    }
    else if (playAgain === 'n'){
        alert("Good bye!");

    }else{
        alert('You can\'t write that.')
    }
    
}
*/


function checkingScores(){
    if (userScore >= 5){
        document.getElementById('print-winner').textContent = "User won the game! 😄";      
        //setTimeout(resetGame, 1000);
        document.getElementById("rockBtn").disabled = true;
        document.getElementById("paperBtn").disabled = true;
        document.getElementById("scissorsBtn").disabled = true;
        }
            
    else if(computerScore >= 5){
        document.getElementById('print-winner').textContent = "Computer won the game! 😖";
        //setTimeout(resetGame, 1000);
        document.getElementById("rockBtn").disabled = true;
        document.getElementById("paperBtn").disabled = true;
        document.getElementById("scissorsBtn").disabled = true;}
    
}

// rock, paper and scissors button, that call playRound() on click
document.getElementById("rockBtn").addEventListener('click', () => {playRound('Rock', getComputerChoice())});
document.getElementById("paperBtn").addEventListener('click', () => {playRound('Paper', getComputerChoice())});
document.getElementById("scissorsBtn").addEventListener('click', () => {playRound('Scissors', getComputerChoice())});

    
 



