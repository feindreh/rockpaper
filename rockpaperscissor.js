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

    switch(score){
        case 1:
            return `You Win! ${playerChoice} beats ${computerChoice}`;           
        case 0:
            return `Draw! Both took ${playerChoice}`;           
        case -1: 
            return `You loose! ${playerChoice} looses to ${computerChoice}`;
    }
    
}






const btnRock = document.querySelector("#rock")
const btnPaper = document.querySelector("#paper")
const btnScissors = document.querySelector("#scissors")
const round = document.querySelector("#round")


btnRock.addEventListener('click',() => {
    round.textContent = playRound("Rock",getComputerChoice());
})

btnPaper.addEventListener('click',() => {
    round.textContent = playRound("Paper",getComputerChoice());
})

btnScissors.addEventListener('click',() => {
    round.textContent = playRound("Scissors",getComputerChoice());
})




