var fs = require('fs');
var prompt = require('prompt');

var phraseArray = [];
var currentlyGussedPhraseArray = [];
var letterArray = [];
var incorrectCount = 10;
var promptForGuess;

var Letters = function(letter, guessed) {
    this.letter = letter;
    this.guessed = guessed;
    this.isGuessed = function (guessed, char, phrase) {
        this.guessed = guessed;
        this.char = char;
        this.phrase = phrase;
        var tempArray = this.phrase;
        if (letterArray.length = 0) {
            this.isWord(phrase);
        }
        var alreadyGuessed = false;

        if (this.guessed) {
            for (var y = 0; y < letterArray.length; y++) {
                if (this.char === letterArray[y]) {
                    alreadyGuessed = true;
                }
            };
        }
        else {
            incorrectCount--;
            console.log("The letter you guessed is not in the phrase, try again. \nRemaining Incorrect Guesses: " + incorrectCount);
        }

        if (alreadyGuessed) {
            incorrectCount--;
            console.log("The letter you guessed has already been guessed and displayed, try again. \nRemaining Incorrect Guesses: " + incorrectCount);
        }
        else {
            for (var x = 0; x < tempArray.length; x++) {
                if (this.char === tempArray[x]) {
                    currentlyGussedPhraseArray[x] = this.char;
                }
            };

            letterArray.push(this.char);
            return currentlyGussedPhraseArray;
        }
    };
    this.isLetter = function (letter, phrase) {
        this.letter = letter;
        this.phrase = phrase;
        this.guessed = false;
        var phraseArray = this.phrase;
        var x = 0;
        for (x; x < phraseArray.length; x++) {
            if (this.letter === phraseArray[x]) {
                this.guessed = true;
            }
        };
        return this.guessed;
    };
    this.isWord = function (phraseArray) {
            var tempCount = 0;
            var initGuessedPhraseArray = function () {
                if (tempCount < phraseArray.length) {
                    var tempChar = phraseArray[tempCount];
                    switch (tempChar) {
                        case " ":
                        case ".":
                        case ",":
                        case "-":
                        case "=":
                        case "/":
                        case "(":
                        case ")":
                        case "$":
                        case "&":
                            currentlyGussedPhraseArray[tempCount] = phraseArray[tempCount];
                            var tempCount2 = 0;
                            var initLetterArray = function () {
                                if (tempCount2 <= letterArray.length) {
                                    if (letterArray[tempCount2] !== (" " || "." || "," || "-" || "=" || "/" || "(" || ")" || "$" || "&")) {
                                        letterArray.push(phraseArray[tempCount]);
                                        tempCount2++;
                                        initLetterArray();
                                    }
                                    initLetterArray();
                                }
                                initLetterArray();
                            };
                            break;
                        default:
                            currentlyGussedPhraseArray[tempCount] = phraseArray[tempCount];
                            currentlyGussedPhraseArray[tempCount] = "_";
                            break;
                    }
                    tempCount++;
                    initGuessedPhraseArray();
                }
            };

            initGuessedPhraseArray();
            return currentlyGussedPhraseArray;
    };
};


module.exports = Letters;