//business logic
var player1="";
var player2="";

var throwdice = function () {
  return Math.floor(6*Math.random())+1;
}

//Creating a player object and setting all counts to initial count 0
function Player(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}
