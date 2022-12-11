function getComputerChoice(){
    // make random 1 2 3
    let ranNum = 0;
     ranNum = Math.floor(Math.random() * 3) + 1;      
    // switch with 3 possible returns
    switch (ranNum) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    };
    alert("getComputerChoice Error");
}

function playRound(playerChoice,computerChoice){

    // return => sieg ist 1 unentschieden 0 und eine niederlage -1

    //Definitions

    let a = playerChoice;
    let b = computerChoice;

    // Wann ist draw
    let score = -1
    if(a == b){
        score = 0
    };

    // Wann ist Win

    if((a == "Rock") && (b == "Scissors")){score = 1};
    if((a == "Paper") && (b == "Rock")){score = 1};
    if((a == "Scissors") && (b == "Paper")){score = 1};

    // else loose

    let text = ""
    switch(score){
        case 1:
            text = `You Win! ${playerChoice} beats ${computerChoice}`;
            humanScore++;  
            break;         
        case 0:
            text = `Draw! Both took ${playerChoice}`;        
            break;   
        case -1: 
            text = `You loose! ${playerChoice} looses to ${computerChoice}`;
            computerScore++
            break;
    }
    roundPlayed++
    return text
    
}

function updateScore(){
    myScore.textContent = humanScore
    hisScore.textContent = computerScore
    played.textContent = roundPlayed
    if(humanScore == 5 || computerScore == 5){finishGame()};
}

function finishGame(){
    if(humanScore == 5){alert("You did it !!! You Won!!!")}
    if(computerScore == 5) {alert("Better luck next time")}
    humanScore = 0
    computerScore = 0
    roundPlayed = 0
}

const btnRock = document.querySelector("#rock")
const btnPaper = document.querySelector("#paper")
const btnScissors = document.querySelector("#scissors")
const round = document.querySelector("#round")
const myScore = document.querySelector("#myScore")
const hisScore = document.querySelector("#hisScore")
const played = document.querySelector("#played")


btnRock.addEventListener('click',() => {
    round.textContent = playRound("Rock",getComputerChoice())
})

btnPaper.addEventListener('click',() => {
    round.textContent = playRound("Paper",getComputerChoice());
})

btnScissors.addEventListener('click',() => {
    round.textContent = playRound("Scissors",getComputerChoice());
})

addEventListener('click',() => {
    updateScore();
})



let humanScore = 0
let computerScore = 0
let roundPlayed = 0









