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
        return("Tie");
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore += 1;
        player_Score.textContent = (humanScore);
        return("Human wins!");
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore += 1;
        player_Score.textContent = (humanScore);
        return("Human wins!");
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore += 1;
        player_Score.textContent = (humanScore);
        return("Human wins!");
    } else {
        computerScore += 1;
        computer_Score.textContent = computerScore;
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


///playGame();

const body = document.querySelector("body");

const computer_Score  = document.querySelector(".computer_score")

const player_Score  = document.querySelector(".player_score")




const rock = document.querySelector(".rock_button");
rock.addEventListener("click", (e) =>{
    playRound((choices[0]), getComputerChoice());
    getScore();
})

const paper = document.querySelector(".paper_button");
paper.addEventListener("click", (e) =>{
    playRound((choices[1]), getComputerChoice());
    getScore();
})

const scissors = document.querySelector(".scissors_button");
scissors.addEventListener("click", (e) =>{
    playRound((choices[2]), getComputerChoice());
    getScore();
})





function getScore(){
console.log("human score " + humanScore)
console.log("computer score " + computerScore)
}

