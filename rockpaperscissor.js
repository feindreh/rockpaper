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
        console.log(`Draw! Both choose ${a}`)
        return 0
    };

    // Wann ist Win

    if((a == "Rock") && (b == "Scissors")){alert(win);return 1};
    if((a == "Paper") && (b == "Rock")){alert(win);return 1};
    if((a == "Scissors") && (b == "Paper")){alert(win);return 1};

    // else loose

    alert(loose);
    return -1;
}

function game(){

    //play 5 round game (playRound)   

    let playerChoice = "";
    let computerChoice = "";
    let result = 0;

    for( i = 0; i < 5; i++){
  
        playerChoice = prompt("Rock Paper or Scissors?");
        computerChoice = getComputerChoice();
        //keep score
        result += playRound(playerChoice,computerChoice);
    }
    
    //report winner / looser
    if(result > 0){ return "You won!!"};
    if(result === 0){ return "The game ends in a draw."};
    if(result < 0){return "You lost!!"};
    
}


alert(game())



