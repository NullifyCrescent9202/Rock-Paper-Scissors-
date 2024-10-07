console.log("hello world");

let choices = ["rock", "paper", "scissors"];


function randomnum(){
    num = new Uint8Array(1);
  self.crypto.getRandomValues(num);
  num = (num[0] % 1);
  console.log(num)
  return num;
  }


function getComputerChoice(){
    let computerChoice = choices[randomnum()];
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
                infoboard.textContent = "TIE!";
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


function game_State(){
    
    while(round <= 3){
        console.log("round " + round);
        if (round == 3){
            gameOver = true;
        }

        checkGameWin();
        console.log(gameOver)
        round++;

    }


}


///playGame();
const icon_List = ["https://img.icons8.com/?size=100&id=37630&format=png&color=000000", "https://img.icons8.com/?size=100&id=uud4UR4NlnEd&format=png&color=000000", "https://img.icons8.com/?size=100&id=r3N5WNHHJz1e&format=png&color=000000"];

const body = document.querySelector("body");

const computer_Score  = document.querySelector(".computer_score")

const player_Score  = document.querySelector(".player_score")

const infoboard = document.querySelector(".info > h1");

const botIcon = document.querySelector(`.bot [id='${0}'] > img`);
let playerIcon = document.querySelector(`.player [id='${0}'] > img`);
   



    




const rock = document.querySelector(".rock_button");
rock.addEventListener("click", (e) =>{
    playRound((choices[0]), getComputerChoice());
    seticonPlayer();
    iconPosition += 1;
    playerIcon.setAttribute('src', icon_List[0]);
    getScore();
})

const paper = document.querySelector(".paper_button");
paper.addEventListener("click", (e) =>{
    playRound((choices[1]), getComputerChoice());
    seticonPlayer();
    iconPosition += 1;
    playerIcon.setAttribute('src', icon_List[1]);
    getScore();
})

const scissors = document.querySelector(".scissors_button");
scissors.addEventListener("click", (e) =>{
    playRound((choices[1]), getComputerChoice());
    seticonPlayer();
    iconPosition += 1;
    playerIcon.setAttribute('src', icon_List[2]);
    getScore();
})


let iconPosition =  0;

function seticonPlayer(){
    if(iconPosition === 0){
        playerIcon = document.querySelector(`.player [id='${0}'] > img`);
    } else {
        playerIcon = document.querySelector(`.player [id='${iconPosition}'] > img`);
    }
}


function getScore(){
console.log("human score " + humanScore)
console.log("computer score " + computerScore)
}

const icon  = document.querySelector("img");
icon.innerHTML = '<img width="60" height="600" src="https://img.icons8.com/ios-glyphs/30/question-mark.png" alt="question-mark"/>';

