//Create a constructor that builds objects representing generic playing cards.

function Card(suit, val){
  this.suit = suit;
  this.val = val;
}
var playingCard = new Card('hearts', 'ace');

// console.log(playingCard);

//The playing card should keep track of its suit and value (Ace, 2, 3, ... Jack, Queen, King).


// Create a constructor that builds objects representing a six sided dice. The die should keep track of the current value that it shows (1-6) and have a roll method that will simulate rolling the die. Rolling the die should change the current number.

function Dice(){
  this.currentNum = (Math.floor(Math.random() * 6)) + 1;
  this.roll = function roll(){
    return (Math.floor(Math.random() * 6)) + 1;
  };
}

var myDice = new Dice();
// console.log(myDice.roll());


function getProbabilities(timesRolled){
  //make it = new Dice();
  var firstDice = new Dice();
  var secondDice = new Dice();
  var resultArr = [0,0,0,0,0,0,0,0,0,0,0];

  //roll the dice 1000 times --for loop
  for (var i=0; i < timesRolled; i++) {
    var firstRollVal = firstDice.roll();
    var secondRollVal = secondDice.roll();
    var sum = firstRollVal + secondRollVal;

    resultArr[sum-2]++;
  }
  return resultArr;
}

var result = getProbabilities(1000);
console.log(result);
