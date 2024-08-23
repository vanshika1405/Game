let userScore =0;
let compScore = 0;

const choices =document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");

const genComputerChoice =() =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame =()=>{
    console.log("game was draw");
     msg.innerText ="Its a draw🫱🏻‍🫲🏻"
     msg.style.backgroundColor ="#CC7178"
};

const showWinner =(userWin ,userChoice ,compChoice)=>{
   if(userWin){
    userScore++;
    userScorePara.innerText = userScore
    msg.innerText =`you won!!!! your ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor ="#C7D9B7"
   }
   else{
    compScore++;
    compScorePara.innerText = compScore
     msg.innerText =`oopss you lost!!!! comp ${compChoice} beats ${userChoice}`
     msg.style.backgroundColor ="#89023E"
   }
};

const playGame =(userChoice)=>{
  console.log("user choice =" , userChoice);
  //generate comp choice;
 const compChoice = genComputerChoice();
 console.log("comp choice =", compChoice);

 if(userChoice === compChoice){
    // draw
    drawGame();
 }
 else{
    let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice == "paper"? false : true;

     }
     else if (userChoice ==="paper"){
        userWin = compChoice == "scissors"? false : true;

     }
     else{
        userWin = compChoice == "rock"? false : true;
     }
     showWinner(userWin , userChoice , compChoice);
    }
};

choices.forEach((choice)=> {
    console.log(choice);
    choice.addEventListener("click", ()=>{
        const userchoice = choice.getAttribute("id")
        console.log("choice was clicked" , userchoice);
        playGame(userchoice);
    });
});