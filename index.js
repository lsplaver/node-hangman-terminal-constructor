var Word = require('./Word');
var Letters = require('./Letters');

var prompt = require('prompt');

var newPhrase = new Word();
var aLetter = new Letters();
var currentlyGussedPhraseArray = [];
var phraseArray = [];
var letterArray = [];
var incorrectCount = 10;
var tempArray = [];

var tempCount;
function getPhrase() {
    tempCount = 0;

    function getAPhrase() {
        var randomPhrases = ["supernatural", "all good things", "must come to an end", "lord of the rings", "star wars", "nightwish", "iron maiden"];
        var tempNum = randomPhrases.length;
        var randomPhraseNumber = Math.floor(Math.random() * tempNum);
        aPhrase = randomPhrases[randomPhraseNumber];
        var tempPhrase = aPhrase.toUpperCase();
        newPhrase = new Word(tempPhrase);
        newPhrase.aPhrase = tempPhrase;
        newPhrase.phrase = new Array();
        for (var x = 0; x < tempPhrase.length; x++) {
            newPhrase.phrase.push(newPhrase.aPhrase.charAt(x));
        };
        initializePhrase(newPhrase.phrase);
    }

    getAPhrase();

    function initializePhrase(phrase) {
        var aPhrase = phrase;
        tempArray = aLetter.isWord(aPhrase);

        return tempArray;
    };

    function playGame() {
        var newLetter = aLetter;
        incorrectCount = 10;
        var remainingBlanks = 0, tempBlanks = 1;
        var promptForGuess = function () {
            console.log(tempArray.toString());
            newPhrase.phrase = tempArray;
                var a = [];
                for (var x = 0; x < newPhrase.phrase.length; x++) {
                    if (newPhrase.phrase[x] === "_") {
                        remainingBlanks++;
                    }
                }

                if (remainingBlanks >= tempBlanks) {
                    incorrectCount--;
                }

                if (remainingBlanks === 0) {
                    incorrectCount = -100;
                }

            if (incorrectCount >= 0) {
                prompt.get(['letter'], function (err, result) {
                    console.log("You guessed: " + result.letter);
                    var tempLetter = result.letter;
                    var temp;
                    temp = newPhrase.checkLetter(tempLetter, newPhrase.aPhrase);
                    newPhrase.letterString(temp, tempLetter, newPhrase.aPhrase);
                    tempBlanks = remainingBlanks;
                    remainingBlanks = 0;
                    promptForGuess();
                });
            }
            else if (incorrectCount === -100) {
                console.log("Game Over! You Won!");
            }
            else {
                console.log("Game Over! You Lost!");
                return;
            }
        };
        promptForGuess();
    }

    playGame();

}

getPhrase();
