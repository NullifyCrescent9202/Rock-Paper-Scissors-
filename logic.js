let choices = ["rock", "paper", "scissors"];


function randomnum(){
    num = new Uint8Array(1);
  self.crypto.getRandomValues(num);
  num = (num[0] % 3);
  console.log(num)
  return num;
  }
let a = -1;
let CurrentBotSelection = null;

function getComputerChoice(){
    let randomv = randomnum();
    let computerChoice = choices[randomv];


    botIcon = document.querySelector(`.bot [id='${a += 1}'] > img`);
        if(a === 2){
        a = -1;
    }
    console.log("bot pos " + a);
    console.log(computerChoice);
    botIcon.setAttribute('src', icon_List[randomv]);


    return computerChoice;
}


function getHumanChoice(){
    let humanChoice = prompt("enter 0 for rock, enter 1 for paper, enter 2 for scissors!!!");
    humanChoice = choices[humanChoice];
    console.log(humanChoice + ": human choice");
    return humanChoice;

};


function clearBoard(){
    infoboard.textContent = "Begin!";
}


function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        infoboard.textContent = "Tie!";
        setTimeout(clearBoard, 1.0 * 1000);
        return("Tie");
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore += 1;
        infoboard.textContent = "You win!";
        player_Score.textContent = (humanScore);
        setTimeout(clearBoard, 1.0 * 1000);
        return("Human wins!");
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore += 1;
        infoboard.textContent = "You win!";
        player_Score.textContent = (humanScore);
        setTimeout(clearBoard, 1.0 * 1000);
        return("Human wins!");
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore += 1;
        infoboard.textContent = "You win!";
        player_Score.textContent = (humanScore);
        setTimeout(clearBoard, 1.0 * 1000);
        return("Human wins!");
    } else {
        computerScore += 1;
        infoboard.textContent = "You lose!";
        computer_Score.textContent = computerScore;
        setTimeout(clearBoard, 1.0 * 1000);
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

let playerIcon = document.querySelector(`.player [id='${0}'] > img`);



const rock = document.querySelector(".rock_button");
rock.addEventListener("click", (e) =>{
    playRound((choices[0]), getComputerChoice());
    seticonPlayer();
    console.log("icon pos " + iconPosition);
    roundPos();
    iconPosition += 1;
    playerIcon.setAttribute('src', icon_List[0]);
    getScore();
})


const paper = document.querySelector(".paper_button");
paper.addEventListener("click", (e) =>{
    playRound((choices[1]), getComputerChoice());
    seticonPlayer();
    console.log("icon pos " + iconPosition);
    roundPos();
    iconPosition += 1;
    playerIcon.setAttribute('src', icon_List[1]);
    getScore();
})

const scissors = document.querySelector(".scissors_button");
scissors.addEventListener("click", (e) =>{
    playRound((choices[2]), getComputerChoice());
    seticonPlayer();
    console.log("icon pos " + iconPosition);
    roundPos();
    iconPosition += 1;
    playerIcon.setAttribute('src', icon_List[2]);
    getScore();
})


let iconPosition =  0;

let  botIcon = document.querySelector(`.bot [id='${iconPosition}'] > img`);

function roundPos(){
    if(iconPosition === 2){
        iconPosition = -1;
        console.log("reset")
    }
}




function seticonPlayer(){
    if(iconPosition === -1){
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
