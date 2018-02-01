var Letter = require("./Letter.js");

function Word(word) {
  this.letters = new Array(0);

  var letters = word.split('').forEach(letter => {
	this.letters.push(new Letter(letter));
  });

  this.getLetters = function() {
  	return this.letters.reduce((concat,letter) => concat+letter.display()+' ','');
  }

  this.checkGuess = function(guess) {
    var matchFlag = false;
  	this.letters.forEach(letter => {
  	  if(letter.checkGuess(guess)) {
  	    matchFlag = true;
  	  }
  	});
  	return matchFlag
  }

  this.checkWin = function() {
    const isWin =  this.letters.reduce((accumulator,letter) => accumulator && letter.isGuessed);
    return isWin;
  }
}

module.exports = Word;