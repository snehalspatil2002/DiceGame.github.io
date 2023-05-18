//players Name
var player1="Player 1";
var player2="Player 2";
//Giving new names to players
function editNames(){
  player1=prompt("Player 1 Name");
  player2=prompt("player 2 Name");

  document.querySelector("p.play1").innerHTML=player1;
  document.querySelector("p.play2").innerHTML=player2;
}
//rooling the dice
function rollDice(){
  setTimeout(function(){

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Congrats...!<br/>🎉 "+player1+" Wins! 🥳";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Congrats...!<br/>🎉"+player2+" Wins! 🥳";
}
else {
  document.querySelector("h1").innerHTML = "Draw!<br/>Try Again..";
}
},500);
}
