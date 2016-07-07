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
  this.currentNum = Math.floor(Math.random() * 6) + 1;
  this.roll = function roll(){
    return (Math.floor(Math.random() * 6)) + 1;
  };
}

var myDice = new Dice();
console.log(myDice.roll());


function getProbabilities(){
  //make it = new Dice();
  var firstDice = new Dice();
  var secondDice = new Dice();

  //roll the dice 1000 times --for loop
  for (var i=0; i < 1000; i++) {
    var firstRoll = firstDice.roll();
    var secondRoll = secondDice.roll();
  }
  //add firstDice + secondDice FOREACH roll

  //if firstD + secondD = 2, counter[index1]++ === the position in the arr is just + 1...
  //else if firstD + secondD = 3, counter[index2]++

  //? make position variables in array
  // var counter = [];
  // counter[]++
}




var result = getProbabilities();
// console.log(result);
