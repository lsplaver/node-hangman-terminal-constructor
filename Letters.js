var fs = require('fs');
var prompt = require('prompt');

var phraseArray = []; // array holding the original phrase before hiding or displaying individual letters
var currentlyGussedPhraseArray = []; // array holding the phrase in it's currently guessed form
var letterArray = []; //already correctly guessed letters
var incorrectCount = 10;
var promptForGuess;

var Letters = function(letter, guessed) {
    this.letter = letter;
    this.guessed = guessed;
    this.isGuessed = function (guessed, char, phrase) {
        this.guessed = guessed;
        this.char = char;
        this.phrase = phrase;
        //  //  //  // console.log("init value of this.guessed in this.isGuessed: " + this.guessed);
        //  //  //  // console.log("init value of this.char in this.isGuessed: " + this.char);
        //  //  //  // console.log("init value of this.phrase in this.isGuessed: " + this.phrase);
        var tempArray = this.phrase;
        //  //  //  // console.log("initi value of tempArray: " + tempArray);
        // phraseArray = new Array(tempArray.length);
        // console.log("init phraseArray.length: " + phraseArray.length);
        // for (var x = 0; x < tempArray; x++) {
        //     phraseArray[x] = tempArray[x];
        // }
        // // phraseArray.fill(this.phrase, 0);
        // console.log("new value of phraseArray after filling from this.phrase: " + phraseArray.toString());
        //  //  //  // console.log("letterArray.length: " + letterArray.length);
        if (letterArray.length = 0) {
            this.isWord(phrase);
        }
        // phraseArray.forEach(element => {
        //     if ((" " || "." || "," || "-" || "=" || "/" || "(" || ")" || "$" || "&") === phraseArray[element]) {
        //         currentlyGussedPhraseArray[element] = phraseArray[element];
        //         letterArray.forEach(element2 => {
        //             if (letterArray[element2] !== (" " || "." || "," || "-" || "=" || "/" || "(" || ")" || "$" || "&")) {
        //                 letterArray.push(phraseArray[element]);
        //             }
        //         });
        //     }
        // });
        var alreadyGuessed = false;
        //  //  //  // console.log("alreadyGuessed: " + alreadyGuessed);
        //  //  //  // console.log("guessed: " + this.guessed);

        if (this.guessed) {
            for (var y = 0; y < letterArray.length; y++) {
                if (this.char === letterArray[y]) {
                // if (this.letter === letterArray[y]) {
                    alreadyGuessed = true;
                }
            };
            //  //  //  // console.log("new alreadyGuessed: " + alreadyGuessed);
        }
        else {
            incorrectCount--;
            console.log("The letter you guessed is not in the phrase, try again. \nRemaining Incorrect Guesses: " + incorrectCount);
            // return getPhrase().playGame.promptForGuess();
            // promptForGuess();
            // this.incorrectCount = incorrectCount;
            // return this.incorrectCount;
        }

        if (alreadyGuessed) {
            incorrectCount--;
            console.log("The letter you guessed has already been guessed and displayed, try again. \nRemaining Incorrect Guesses: " + incorrectCount);
            // this.incorrectCount = incorrectCount;
            // return this.incorrectCount;
            // promptForGuess();
        }
        else {
            // console.log("phraseArray.length: " + phraseArray.length);
            //  //  //  // console.log("this.char: " + this.char);
            // console.log("this.letter: " + this.letter);
            for (var x = 0; x < tempArray.length; x++) {
            // for (var x = 0; x < phraseArray.length; x++) {
                if (this.char === tempArray[x]) {
                // if (this.char === phraseArray[x]) {
                // if (this.letter === phraseArray[x]) {
                    // console.log("this.letter: " + this.letter);
                    //  //  //  // console.log("within loop this.char: " + this.char);
                    //  //  //  // console.log("currentlyGuessedPhraseArray[" + x + "]: " + currentlyGussedPhraseArray[x]);
                    currentlyGussedPhraseArray[x] = this.char; //this.letter;
                    //  //  //  // console.log("currentlyGuessedPhraseArray[" + x + "]: " + currentlyGussedPhraseArray[x]);
                }
            };

            letterArray.push(this.char); //this.letter);
            //  //  //  // console.log("new letterArray.length: " + letterArray.length);
            //  //  //  // console.log("new letterArray.toString(): " + letterArray.toString());
            //  //  //  // console.log("new currentlyGuessedPhraseArray.toString(): " + currentlyGussedPhraseArray.toString());
            return currentlyGussedPhraseArray;
        }
        // promptForGuess();
    };
    this.isLetter = function (letter, phrase) {
        this.letter = letter;
        //  //  //  // console.log("this.letter: " + this.letter);
        this.phrase = phrase;
        //  //  //  // console.log("this.phrase: " + this.phrase);
        this.guessed = false;
        var phraseArray = this.phrase;
        //  //  //  // console.log("The current value of this.guessed is: " + this.guessed);
        //  //  //  // console.log("The current value of phraseArray is: " + phraseArray.toString());
        var x = 0;
        // phraseArray.forEach(function(x) {
        for (x; x < phraseArray.length; x++) {
            //  //  //  // console.log("The current value of this.letter is: " + this.letter);
            //  //  //  // console.log("The current value of phraseArray[element] is: " + phraseArray[x]);
            if (this.letter === phraseArray[x]) {
                this.guessed = true;
            }
        };
        //  //  //  // console.log("The current value of this.guessed is: " + this.guessed);
        return this.guessed;
        // var tempLetter = new Letters(this.letter, this.guessed);
        // tempLetter.isGuessed();
    };
    this.isWord = function (phraseArray) {
        // if ((this.letter && this.guessed) === null) {
            var tempCount = 0;
            //  //  //  // console.log("The current value of tempCount in .isWord is: " + tempCount);
            //  //  //  // console.log("The current value of phraseArray is: " + phraseArray.toString());
            var initGuessedPhraseArray = function () {
                // phraseArray.forEach(element => {
                if (tempCount < phraseArray.length) {
                    //  //  //  // console.log("tempCount is: " + tempCount + " which is less than phraseArray.length: " + phraseArray.length);
                    //  //  //  // console.log("The current character at tempCount in phraseArray is: " + phraseArray[tempCount]);
                    var tempChar = phraseArray[tempCount];
                    //  //  //  // console.log("the current value of tempChar is: " + tempChar);
                    switch (tempChar) { //phraseArray[tempCount]) {
                        // if ((" " || "." || "," || "-" || "=" || "/" || "(" || ")" || "$" || "&") === phraseArray[/*element*/ tempCount]) {
                        // console.log("The current character at tempCount in phraseArray is: " + phraseArray[tempCount]);
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
                            //  //  //  // console.log("The value of currentlyGuessedPhraseArray at tempCount position before slice is: " + currentlyGussedPhraseArray[tempCount]);
                            currentlyGussedPhraseArray[tempCount] = phraseArray[tempCount]; //..splice(tempCount, 1, phraseArray[/*element*/ tempCount]);
                            //  //  //  // console.log("The value of currentlyGuessedPhraseArray at tempCount position after slice is: " + currentlyGussedPhraseArray[tempCount]);
                            var tempCount2 = 0;
                            var initLetterArray = function () {
                                if (tempCount2 <= letterArray.length) {
                                    // letterArray.forEach(element2 => {
                                    if (letterArray[/*element2*/ tempCount2] !== (" " || "." || "," || "-" || "=" || "/" || "(" || ")" || "$" || "&")) {
                                        letterArray.push(phraseArray[/*element*/ tempCount]);
                                        //  //  //  // console.log("values of letterArray: " + letterArray.toString());
                                        tempCount2++;
                                        initLetterArray();
                                    }
                                    // });
                                    initLetterArray();
                                }
                                initLetterArray();
                            };
                            // initLetterArray();
                            // tempCount++;
                            break;
                        default:
                            //  //  //  // console.log("The value of currentlyGuessedPhraseArray at tempCount position before slice is: " + currentlyGussedPhraseArray[tempCount]);
                            currentlyGussedPhraseArray[tempCount] = phraseArray[tempCount]; //..splice(tempCount, 1, phraseArray[/*element*/ tempCount]);
                            //  //  //  // console.log("The value of currentlyGuessedPhraseArray at tempCount position after slice is: " + currentlyGussedPhraseArray[tempCount]);
                            currentlyGussedPhraseArray[tempCount] = "_";
                            //  //  //  // console.log("The value of currentlyGuessedPhraseArray after hiding the letter: " + currentlyGussedPhraseArray[tempCount]);
                            break;
                    }
                    // initGuessedPhraseArray();
                    // });
                    // }
                    tempCount++;
                    initGuessedPhraseArray();
                }
            };

            initGuessedPhraseArray();
            //  //  //  // console.log("The current string value of currentGuessedPhraseArray is: " + currentlyGussedPhraseArray.toString());
            return currentlyGussedPhraseArray;
        // }
    };
};

// var aPhrase = ""; //, aLetter = "";
// var aLetter = new Letters();

// // prompt.start();
// var tempCount;
// function getPhrase() {
//     tempCount = 0;
//     var newPhraseArray = function () {
//         phraseArray = new Array();
//         // var tempCount = 0;
//         console.log("The value of tempCount is: " + tempCount);
//         var createPhraseArray = function (aCount) {
//             tempCount = aCount;
//             console.log("The value of tempCount within createPhraseArray() is: " + tempCount);
//             if (tempCount < aPhrase.length) {
//                 // var tempCount = aPhrase.length;
//                 // for (var x = 0; x < aPhrase.length; x++) {
//                 console.log("The current character position of x is: " + tempCount);
//                 console.log("The current value of aPhrase at position of x is: " + aPhrase.charAt(tempCount));
//                 // phraseArray.fill(aPhrase.charAt(tempCount), tempCount, tempCount);
//                 // phraseArray[tempCount] = aPhrase.charAt(tempCount);
//                 phraseArray.push(aPhrase.charAt(tempCount));

//                 console.log("The current character position of x is: " + tempCount);
//                 console.log("The current character at position x is: " + phraseArray[tempCount]);
//                 // };
//                 tempCount++;
//                 createPhraseArray(tempCount);
//             }
//         };

//         createPhraseArray(tempCount);

//         console.log("The length of phraseArray is: " + phraseArray.length);

//         currentlyGussedPhraseArray = new Array(phraseArray.length);
//         currentlyGussedPhraseArray.fill("_", 0);
//         console.log(currentlyGussedPhraseArray.toString());
//     }

//     var getAPhrase = function () {
//         // prompt.start();
//         // prompt.get(['phrase'], function (err, result) {
//         //     console.log('Command-line input received:');
//         //     console.log('  phrase: ' + result.phrase);

//         //     aPhrase = result.phrase;
//         // });
//         // prompt.stop();

//         var randomPhrases = ["supernatural", "all good things", "must come to an end", "lord of the rings", "star wars", "nightwish", "iron maiden"];
//         console.log("The values of randomPhrases are: " + randomPhrases.toString());
//         var tempNum = randomPhrases.length;
//         console.log("The value of tempNum is: " + tempNum);
//         var randomPhraseNumber = Math.floor(Math.random() * tempNum); //* 7); //randomPhrases.length);
//         console.log("The value of randomPhraseNumber is: " + randomPhraseNumber);
//         aPhrase = randomPhrases[randomPhraseNumber];
//         var tempPhrase = aPhrase.toUpperCase();
//         console.log("tempPhrase is: " + tempPhrase);
//         aPhrase = tempPhrase;
//         console.log("aPhrase is: " + aPhrase);
//         newPhraseArray();
//     }

//     getAPhrase();

//     // var newPhraseArray = function() {
//     //     var tempCount = 0;
//     //     var createPhraseArray = function() {
//     //         if (tempCount < aPhrase.length) {
//     //             // for (var x = 0; x < aPhrase.length; x++) {
//     //             phraseArray[x] = aPhrase.charAt(x);
//     //             // };
//     //             tempCount++;
//     //             createPhraseArray();
//     //         }
//     //     };

//     //     console.log("The length of phraseArray is: " + phraseArray.length);

//     //     currentlyGussedPhraseArray = new Array(phraseArray.length);
//     //     currentlyGussedPhraseArray.fill("_", 0);
//     //     console.log(currentlyGussedPhraseArray.toString());
//     // }

//     // newPhraseArray();
//     // }
//     // currentlyGussedPhraseArray.forEach(element => {
//     //     currentlyGussedPhraseArray.fill("_", 0);
//     // });

//     // getPhrase();

//     function initializePhrase() {
//         // var aLetter = "";
//         var aLetter = new Letters(null, null);
//         // aLetter.isWord();
//         console.log(aLetter.isWord());
//         return aLetter;
//     };

//     initializePhrase();
//     function playGame() {
//         // var newLetter = initializePhrase();
//         var newLetter = aLetter;
//         incorrectCount = 10;
//         promptForGuess = function () {
//             console.log(currentlyGussedPhraseArray.toString());
//             if (incorrectCount > 0) {
//                 prompt.get(['letter'], function (err, result) {
//                     console.log("You guessed: " + result.letter);
//                     var tempLetter = result.letter;
//                     console.log("tempLetter is: " + tempLetter);
//                     // newLetter = new Letters(result.letter);
//                     newLetter.letter = tempLetter;
//                     console.log("The value of newLetter.letter is: " + newLetter.letter);
//                     tempLetter = newLetter.isLetter();
//                     newLetter.guessed = tempLetter;
//                     // newLetter.guessed = 
//                     newLetter.isGuessed();
//                     // console.log(aLetter.isWord());
//                     promptForGuess();
//                 });
//             }
//         };
//         promptForGuess();
//     }

//     playGame();

// }

// getPhrase();

module.exports = Letters;