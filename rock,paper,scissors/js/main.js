var botScore=0,
playerScore=0;
document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("paper").onclick=playerThrowsPaper;
document.getElementById("scissors").onclick=playerThrowsScissors;
function playerThrowsRock(){
  var botsWeapon=getRandomWeapon();
  checkWhoWon(botsWeapon,"rock");
  displayBotMessage(botsWeapon)
}
function playerThrowsScissors(){
  var botsWeapon=getRandomWeapon();
  checkWhoWon(botsWeapon,"scissors");
  displayBotMessage(botsWeapon)
}
function playerThrowsPaper(){
  var botsWeapon=getRandomWeapon();
  checkWhoWon(botsWeapon,"paper");
  displayBotMessage(botsWeapon)
}
function getRandomWeapon(){
  var randomNumber=Math.random();
  var botsWeapon="rock";
  if(randomNumber<.33){
    botsWeapon="scissors";
  }
  else if(randomNumber<.6666){
    botsWeapon="paper";
  }
  return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
  if(botsWeapon==playersWeapon){
    displayCompleteMessage("There was tie. Lets play again");
  }
  else if(
    (botsWeapon=="scissors" && playersWeapon=="paper") ||
    (botsWeapon=="paper" && playersWeapon=="rock") ||
    (botsWeapon=="rock" && playersWeapon=="scissors")
){
    increaseBotScore();
  }
  else{
    increasePlayerScore();
  }
}
function increaseBotScore(){
  botScore+=1;
  document.getElementById("computerScore").innerHTML=botScore;
  displayCompleteMessage("You lost human");
}
function increasePlayerScore(){
  playerScore+=1;
  document.getElementById("playerScore").innerHTML=playerScore;
  displayCompleteMessage("Im smarter then a robot");
}
function displayCompleteMessage(msg){
  document.getElementById("status").innerHTML=msg;
}
