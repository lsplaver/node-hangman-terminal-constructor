var Letters = require('./Letters');

var Word = function(aPhrase) {
    this.aPhrase = aPhrase;
    this.phrase = [];
    var tempLength = this.aPhrase.length;
    this.phrase = new Array();
    for (var x = 0; x < tempLength /*this.aPhrase.length*/; x++) {
        this.phrase.push(this.aPhrase.charAt(x));
    };
    this.letterString = function() {
        var tempString = "";
        for (var x = 0; x < tempLength; x++) {
            var letterString = new Letters(this.phrase.charAt(x));
            letterString.isGuessed();
            tempString = tempString + " " + letterString;
        }
        console.log(tempString);
    };
    this.checkLetter = function(aChar) {
        var checkLetter = new Letters(null, aChar);
        // for (var x = 0; x < this.phrase.length; x++) {
            checkLetter.isLetter(aChar);
        // };
        // Letters.
        // Letters.isGuessed();
    };
};

module.exports = Word;