var prompt = require("prompt");
var colors = require("colors/safe");
var Word = require("./Word.js");


var game = {
guessesLeft: 5,


word: '',

wordBank: ['dog','cat','pig'],
//wordBank: ['abnegation','compunction','forebearance','predilection','serendipity','vicissitude','vituperate','sanctimonious'],



promptMessageBank:['Guess a letter','You got it, man. Guess again!','Hit me, baby, one more time','Whoa, whoa. Slow down there, bud','OMG. TOO MANY LETTERS.'],

wrongMessageBank: ['WRONG','Wrong again, bud.','*shakes head*','Seriously. Do you need help?','nope!','Heck no.'],

rightMessageBank: ['Yippeee!!!','Yeah! You must be smart.','Fuck ya.','Heck ya.','Correct!','Cha-Ching!'],

getPromptMessage: function() {
	iRandom = Math.floor(Math.random()*game.promptMessageBank.length);
	return game.promptMessageBank[iRandom];
},

getWord: function() {
	iRandom = Math.floor(Math.random()*game.wordBank.length);
	return game.wordBank[iRandom];
},

getWrongMessage: function() {
	iRandom = Math.floor(Math.random()*game.wrongMessageBank.length);
	return game.wrongMessageBank[iRandom];
},

getRightMessage: function() {
	iRandom = Math.floor(Math.random()*game.rightMessageBank.length);
	return game.rightMessageBank[iRandom];
},

initialize: function() {
	game.word = new Word(game.getWord());
},

start: function() {
	prompt.message = colors.magenta("User Entry!");
	prompt.start();

	prompt.get({
    properties: {
      guess: {
        description: colors.magenta(game.getPromptMessage())
      }
    }
  }, function (err, result) {

  	if(game.word.checkGuess(result.guess)) {
  		console.log(colors.green(game.getRightMessage()+"\n"));
  	} else {
  		console.log(colors.red(game.getWrongMessage()+"\n"));
  		game.guessesLeft--;
  	};

  	console.log(colors.cyan("You have " + game.guessesLeft +" left!\n"));

    console.log(colors.yellow(game.word.getLetters()+"\n"));

	//Check win/lose
	if (game.guessesLeft === 0) {
		console.log(colors.red('YOU LOSE!!!!!!!!!!'));
	} else if (game.word.checkWin()) {
		console.log(colors.green('You win!!!!!!!!'));
	} else {
		game.start();
	}
  });
}
};
module.exports = game;