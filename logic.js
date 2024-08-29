console.log("hello world");

let choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let computerChoice = choices[Math.floor(Math.random()*3)];
    console.log(computerChoice + ": computer choice");
    return computerChoice;
}


function getHumanChoice(){
    let humanChoice = prompt("enter 0 for rock, enter 1 for paper, enter 2 for scissors!!!");
    humanChoice = choices[humanChoice];
    console.log(humanChoice + ": human choice");
    return humanChoice;

};



function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        alert("Tie");
        return("Tie");
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore += 1;
        alert("Human wins!");
        return("Human wins!");
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore += 1;
        alert("Human wins!");
        return("Human wins!");
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore += 1;
        alert("Human wins!");
        return("Human wins!");
    } else {
        computerScore += 1;
        alert("computer wins!");
        return ("Computer wins!")
    }
    }


    function checkGameWin(){
        if(gameOver){
            if( computerScore == humanScore){
                console.log("TIE no winners!"); 

            } else if(computerScore > humanScore){
                console.log("Computer wins!");

            } else{
                console.log("Human wins!");

            }
        }    

    }
///5 max rounds
let round = 1;
let computerScore = 0;
let humanScore = 0;
let gameOver = false;


function playGame(){
    
    while(round <= 5){
        console.log(" ")
        console.log("round " + round);
        playRound(getHumanChoice(), getComputerChoice());
        if (round == 5){
            gameOver = true;
        }

        checkGameWin();
        console.log(gameOver)
        round++;

    }


}


playGame();