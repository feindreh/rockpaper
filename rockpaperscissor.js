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

    if(a == b){
        return 0
    };

    // Wann ist Win

    if((a == "Rock") && (b == "Scissors")){return 1};
    if((a == "Paper") && (b == "Rock")){return 1};
    if((a == "Scissors") && (b == "Paper")){return 1};

    // else loose

    return -1;

    
}






