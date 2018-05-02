var Letters = require('./Letters');

var Word = function(aPhrase, phrase) {
    this.aPhrase = aPhrase;
    this.phrase = phrase;
    this.letterString = function(guessed, aChar, phrase) {
        var tempString = "";
        this.guessed = guessed;
        this.aChar = aChar;
        this.phrase = phrase;
        var tempPhrase = this.phrase;
        var x = 0;
        var newGuess = this.guessed;
        var newChar = this.aChar;
        var tempFunc = function() {
                    var tempChar = tempPhrase[x];
                    var letterString = new Letters();
                    var tempArray;
                    tempArray = letterString.isGuessed(newGuess, newChar, tempPhrase);
                console.log(tempString);
        };
        tempFunc();
    };
    this.checkLetter = function(aChar, phrase) {
        var tempChar = aChar;
        var tempPhrase = phrase;
        var checkLetter = new Letters();
        checkLetter.isLetter(tempChar, tempPhrase);
        this.guessed = checkLetter.guessed;
        return this.guessed;
    };
};

module.exports = Word;