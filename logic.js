let choices = ["rock", "paper", "scissors"];


function randomnum(){
    num = new Uint8Array(1);
  self.crypto.getRandomValues(num);
  num = (num[0] % 3);
  console.log(num)
  return num;
  }
let a = -1;

function getComputerChoice(){
    let randomv = randomnum();
    let computerChoice = choices[randomv];


    botIcon = document.querySelector(`.bot [id='${a += 1}'] > img`);
        if(a === 2){
        a = -1;
    }
    botIcon.setAttribute('src', icon_List[randomv]);
    return computerChoice;
}


function getHumanChoice(){
    let humanChoice = prompt("enter 0 for rock, enter 1 for paper, enter 2 for scissors!!!");
    humanChoice = choices[humanChoice];
    return humanChoice;

};


function clearBoard(){
    if(gameOver == false){
        infoboard.textContent = "Begin!";
    }

    if(gameOver == true){
        buttons.innerHTML = "";
        buttons.append(replayButton);
    }
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



let computerScore = 0;
let humanScore = 0;
let gameOver = false;



function game_State(){
    if(humanScore >= 5){
        if(humanScore > computerScore){
            gameOver = true;
            infoboard.textContent = "Game over you win!";

        }
    }
    
    if(computerScore >= 5){
        if(computerScore > humanScore){
            gameOver = true;
            infoboard.textContent = "Game over you lose!"
        }
    }
}




///playGame();
const icon_List = ["https://img.icons8.com/?size=100&id=37630&format=png&color=000000", "https://img.icons8.com/?size=100&id=uud4UR4NlnEd&format=png&color=000000", "https://img.icons8.com/?size=100&id=r3N5WNHHJz1e&format=png&color=000000"];

const body = document.querySelector("body");

const computer_Score  = document.querySelector(".computer_score")

const player_Score  = document.querySelector(".player_score")

const infoboard = document.querySelector(".info > h1");

const buttons = document.querySelector(".buttons");

const replayButton = document.createElement("button");

replayButton.style.width = "450px";

replayButton.textContent = "Replay";
replayButton.addEventListener("click", (e) => {
    location.reload();
})




let playerIcon = document.querySelector(`.player [id='${0}'] > img`);



const rock = document.querySelector(".rock_button");
rock.addEventListener("click", (e) =>{
    playRound((choices[0]), getComputerChoice());
    seticonPlayer();
    roundPos();
    iconPosition += 1;
    playerIcon.setAttribute('src', icon_List[0]);
    game_State();
    getScore();
})


const paper = document.querySelector(".paper_button");
paper.addEventListener("click", (e) =>{
    playRound((choices[1]), getComputerChoice());
    seticonPlayer();
    roundPos();
    iconPosition += 1;
    playerIcon.setAttribute('src', icon_List[1]);
    game_State();
    getScore();
})

const scissors = document.querySelector(".scissors_button");
scissors.addEventListener("click", (e) =>{
    playRound((choices[2]), getComputerChoice());
    seticonPlayer();
    roundPos();
    iconPosition += 1;
    playerIcon.setAttribute('src', icon_List[2]);
    game_State();
    getScore();
})




let iconPosition =  0;

let  botIcon = document.querySelector(`.bot [id='${iconPosition}'] > img`);

function roundPos(){
    if(iconPosition === 2){
        iconPosition = -1;
    }
}



function seticonPlayer(){
    if(iconPosition === -1){
        playerIcon = document.querySelector(`.player [id='${0}'] > img`);
    } else {
        playerIcon = document.querySelector(`.player [id='${iconPosition}'] > img`);
    }
}


const icon  = document.querySelector("img");
icon.innerHTML = '<img width="60" height="600" src="https://img.icons8.com/ios-glyphs/30/question-mark.png" alt="question-mark"/>';
