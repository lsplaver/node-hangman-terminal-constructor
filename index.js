var Word = require('./Word');
var Letters = require('./Letters');

var prompt = require('prompt');

var newPhrase = new Word(); //, aLetter = "";
var aLetter = new Letters();
var currentlyGussedPhraseArray = [];
var phraseArray = [];
var letterArray = [];
// var promptForGuess;
var incorrectCount = 10;
var tempArray = [];

// var aPhrase = ""; //, aLetter = "";
// var aLetter = new Letters();

// prompt.start();
var tempCount;
function getPhrase() {
    tempCount = 0;
    // var newPhraseArray = function () {
    //     var tempNum = newPhrase.phrase.length;
    //     phraseArray = new Array(tempNum);
    //     // var tempCount = 0;
    //     console.log("The value of tempCount is: " + tempCount);
    //     var createPhraseArray = function (aCount) {
    //         tempCount = aCount;
    //         console.log("The value of tempCount within createPhraseArray() is: " + tempCount);
    //         if (tempCount < newPhrase.phrase.length) {
    //             // var tempCount = aPhrase.length;
    //             // for (var x = 0; x < aPhrase.length; x++) {
    //             console.log("The current character position of x is: " + tempCount);
    //             console.log("The current value of aPhrase at position of x is: " + newPhrase.phrase[tempCount]); // newPhrase.phrase.charAt(tempCount));
    //             // phraseArray.fill(aPhrase.charAt(tempCount), tempCount, tempCount);
    //             phraseArray[tempCount] = aPhrase.charAt(tempCount);
    //             // aLetter.phraseArray.push(newPhrase.phrase[tempCount]); // .charAt(tempCount));
    //             // aLetter.phraseArray.splice(tempCount, 1, newPhrase.phrase[tempCount]);
    //             // aLetter.

    //             console.log("The current character position of x is: " + tempCount);
    //             console.log("The current character at position x is: " + phraseArray[tempCount]);
    //             // };
    //             tempCount++;
    //             createPhraseArray(tempCount);
    //         }
    //     };

    //     createPhraseArray(tempCount);

    //     console.log("The length of phraseArray is: " + phraseArray.length);

    //     currentlyGussedPhraseArray = new Array(phraseArray.length);
    //     currentlyGussedPhraseArray.fill("_", 0);
    //     console.log(currentlyGussedPhraseArray.toString());
    // }

    function getAPhrase() { // = function () {
        // prompt.start();
        // prompt.get(['phrase'], function (err, result) {
        //     console.log('Command-line input received:');
        //     console.log('  phrase: ' + result.phrase);

        //     aPhrase = result.phrase;
        // });
        // prompt.stop();

        // var aPhrase = "";
        var randomPhrases = ["supernatural", "all good things", "must come to an end", "lord of the rings", "star wars", "nightwish", "iron maiden"];
        console.log("The values of randomPhrases are: " + randomPhrases.toString());
        var tempNum = randomPhrases.length;
        console.log("The value of tempNum is: " + tempNum);
        var randomPhraseNumber = Math.floor(Math.random() * tempNum); //* 7); //randomPhrases.length);
        console.log("The value of randomPhraseNumber is: " + randomPhraseNumber);
        aPhrase = randomPhrases[randomPhraseNumber];
        var tempPhrase = aPhrase.toUpperCase();
        console.log("tempPhrase is: " + tempPhrase);
        // aPhrase = tempPhrase;
        // console.log("aPhrase is: " + aPhrase);
        newPhrase = new Word(tempPhrase);
        newPhrase.aPhrase = tempPhrase;
        // newPhraseArray();
        // console.log("newPhrase.aPhrase: " + newPhrase.aPhrase);
        // var tempLength = newPhrase.aPhrase.; // this.aPhrase.length;
        // console.log("tempLength: " + tempLength);
        newPhrase.phrase = new Array();
        for (var x = 0; x < tempPhrase.length /*tempLength /*this.aPhrase.length*/; x++) {
            newPhrase.phrase.push(newPhrase.aPhrase.charAt(x));
        };
            console.log("newPhrase.aPhrase: " + newPhrase.aPhrase.toString());
        console.log("newPhrase.phrase: " + newPhrase.phrase.toString());
        // newPhraseArray();
        initializePhrase(newPhrase.phrase);
    }

    getAPhrase();

    // var newPhraseArray = function() {
    //     var tempCount = 0;
    //     var createPhraseArray = function() {
    //         if (tempCount < aPhrase.length) {
    //             // for (var x = 0; x < aPhrase.length; x++) {
    //             phraseArray[x] = aPhrase.charAt(x);
    //             // };
    //             tempCount++;
    //             createPhraseArray();
    //         }
    //     };

    //     console.log("The length of phraseArray is: " + phraseArray.length);

    //     currentlyGussedPhraseArray = new Array(phraseArray.length);
    //     currentlyGussedPhraseArray.fill("_", 0);
    //     console.log(currentlyGussedPhraseArray.toString());
    // }

    // newPhraseArray();
    // }
    // currentlyGussedPhraseArray.forEach(element => {
    //     currentlyGussedPhraseArray.fill("_", 0);
    // });

    // getPhrase();
    function initializePhrase(phrase) {
        // var aLetter = "";
        // var aLetter = new Letters(null, null);
        // aLetter.isWord();
        var aPhrase = phrase;
        console.log("aphrase: " + aPhrase);
        // console.log("newPhrase.phrase: " + newPhrase.phrase);
        // console.log(aLetter.isWord(newPhrase.phrase));
        // var tempArray = [];
        tempArray = aLetter.isWord(aPhrase);
        console.log("tempArray: " + tempArray.toString()); // will be trimmed later as debugging winds down
        // return aLetter;

        // newPhrase
        
        // newPhrase.letterString(); //newPhrase.aPhrase);

        return tempArray;

    };

    // initializePhrase();
    function playGame() {
        // var newLetter = initializePhrase();
        var newLetter = aLetter;
        incorrectCount = 10;
        var remainingBlanks = 0, tempBlanks = 1;
        var promptForGuess = function () {
            // console.log(currentlyGussedPhraseArray.toString());
            // newPhrase.phrase = newLetter.isWord.currentlyGussedPhraseArray; //.currentlyGussedPhraseArray;
            // remainingBlanks = newLetter.currentlyGussedPhraseArray.
            // console.log("newLetter.currentlyGuessedPhraseArray: " + newLetter.currentlyGussedPhraseArray); //.toString());
            console.log("tempArray: " + tempArray.toString());
            newPhrase.phrase = tempArray;
            console.log("newPhrase.phrase:" + newPhrase.phrase); //.toString());
            // while (incorrectCount > 0 ) {
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
                    console.log("tempLetter is: " + tempLetter);
                    // newLetter = new Letters(result.letter);
                    // newLetter.letter = tempLetter;
                    // newPhrase.checkLetter = tempLetter;
                    // console.log("The value of newLetter.letter is: " + newPhrase.newLetter.letter);
                    // tempLetter = newLetter.isLetter();
                    var temp;
                    temp = newPhrase.checkLetter(tempLetter, newPhrase.aPhrase);
                    console.log("temp: " + temp);
                    // console.log("newPhrase: " + newPhrase);
                    // console.log("newLetter.guessed: " + newLetter.guessed);
                    newPhrase.letterString(temp, /*newLetter.guessed, */ tempLetter, newPhrase.aPhrase);
                    // newLetter.guessed = tempLetter;
                    // newLetter.guessed = 
                    // newLetter.isGuessed();
                    // console.log(aLetter.isWord());
                    tempBlanks = remainingBlanks;
                    remainingBlanks = 0;
                    promptForGuess();
                    // incorrectCount = newPhrase.letterString.incorrectCount;
                    // console.log("incorrectCount: " + incorrectCount);
                    // if (new)
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
