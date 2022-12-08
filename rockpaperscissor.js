function getComputerChoice(){

    // make random 1 2 3
    let ranNum = 0;
     ranNum = Math.floor(Math.random() * 3) + 1;      
    // switch with 3 possible returns
    switch (ranNum) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    };
    console.log("ranNum Error");
}



console.log(getComputerChoice())
