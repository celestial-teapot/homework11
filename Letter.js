

function Letter(character) {
	this.character = character;
	this.mask = '_';
	this.isGuessed = false;
	this.display = function() {
		if (this.isGuessed) {
			return this.character;
		}
		return this.mask;
	};
	this.checkGuess = function(guess) {
		if (guess.toLowerCase() === this.character.toLowerCase()) {
			this.isGuessed = true;
			return true;
		}
		return false;
	};
};

module.exports = Letter;