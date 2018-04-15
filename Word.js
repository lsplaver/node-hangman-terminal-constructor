var Letters = require('./Letters');

var Word = function(aPhrase, phrase) {
    this.aPhrase = aPhrase;
    this.phrase = phrase;
    // console.log("this.aPhrase: " + this.aPhrase);
    // var tempLength = this.aPhrase; // this.aPhrase.length;
    // console.log("tempLength: " + tempLength);
    // this.phrase = new Array();
    // for (var x = 0; x < tempLength /*this.aPhrase.length*/; x++) {
    //     this.phrase.push(this.aPhrase.charAt(x));
    // };
    this.letterString = function(guessed, aChar, phrase) {
        var tempString = "";
        this.guessed = guessed;
        console.log("this.guessed in Word.js: " + this.guessed);
        this.aChar = aChar;
        console.log("this.aChar in letterString: " + this.aChar);
        this.phrase = phrase;
        console.log("this.phrase in letterString: " + this.phrase);
        var tempPhrase = this.phrase;
        console.log("tempPhrasse: " + tempPhrase);
        // this.phrase
        console.log("tempString: " + tempString);
        var x = 0;
        var newGuess = this.guessed;
        var newChar = this.aChar;
        var tempFunc = function() {
            // if (x < tempPhrase.length) {
                // for (var x = 0; x < this.aPhrase.length; /*tempLength;*/ x++) {
                    console.log("this.phrase[" + x + "]: " + tempPhrase[x]); //this.phrase[x]); //.charAt(x)); // [x]); // .toString());
                    var tempChar = tempPhrase[x]; //this.phrase[x];
                    var letterString = new Letters(); //tempChar); // this.phrase[x]); //.charAt(x));
                    // var newGuess = this.guessed;
                    console.log("newGuess in Word.js: " + newGuess);
                    console.log("newChar in Word.js: " + newChar);
                    var tempArray;
                    tempArray = letterString.isGuessed(/*this.guessed, */ newGuess, newChar, tempPhrase); //this.tempChar);
                    // for (var y = 0; y < tempArray.length; y++) {
                        // this.currentlyGuessedPhraseArray = 
                        // tempString = tempString + " " + tempArray[x];
                        // if (!tempArray.isArray) {
                        //     this.incorrectCount = tempArray;
                        // }
                        // else {
                        //     tempString = tempArray.toString();
                        // }
                    // }
                    // tempString = tempString + " " + 
                    // tempString = tempString + " " + letterString;
                // }
                console.log(tempString);
                // x++;
                // tempFunc();
            // }
        };
        tempFunc();
    };
    this.checkLetter = function(aChar, phrase) {
        var tempChar = aChar;
        console.log("tempChar in Word.js: " + tempChar);
        var tempPhrase = phrase;
        console.log("tempPhrase in Word.js: " + tempPhrase);
        var checkLetter = new Letters(); //null, aChar);
        // for (var x = 0; x < this.phrase.length; x++) {
        checkLetter.isLetter(tempChar, tempPhrase);
        this.guessed = checkLetter.guessed;
        // };
        // Letters.
        // Letters.isGuessed();
        return this.guessed;
    };
};

module.exports = Word;