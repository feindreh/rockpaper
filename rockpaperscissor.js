function getComputerChoice(){
    // make random 1 2 3
    let ranNum = 0;
     ranNum = Math.floor(Math.random() * 3) + 1;      
    // switch with 3 possible returns
    switch (ranNum) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    };
    console.log("ranNum Error");
}

function playRound(playerChoice,computerChoice){

    // Definitions

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





