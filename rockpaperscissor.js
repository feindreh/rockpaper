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
    console.log("ranNum Error");
}

function playRound(playerChoice,computerChoice){

    // make playerChoice case insensitive

    let upper = playerChoice.slice(0,1);
    let downer = playerChoice.slice(1);
    upper = upper.toUpperCase()
    downer = downer.toLowerCase()

    playerChoice = upper + downer

    //Definitions

    let a = playerChoice;
    let b = computerChoice;
    let win = `You Win! ${a} beats ${b}`
    let loose = `You Loose! ${b} beats ${a}`

    // Wann ist draw

    if(a == b){
        return `Draw! Both choose ${a}`
    };

    // Wann ist Win

    if((a == "Rock") && (b == "Scissors")){return win};
    if((a == "Paper") && (b == "Rock")){return win};
    if((a == "Scissors") && (b == "Paper")){return win};

    // else loose

    return loose
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));




