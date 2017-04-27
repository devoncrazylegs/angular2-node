"use strict";
exports.wordHelper = {
    vowels: ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"],
    convertWordToPigLatin: function (stringToConvert) {
        var _this = this;
        var stringParts;
        if (stringToConvert === "" || stringToConvert === "undefined") {
            return "Input string cannot be empty or undefined";
        }
        if (this.containsIllegalCharacter(stringToConvert)) {
            return "Input string contains an illegal character";
        }
        stringParts = stringToConvert.split(" ").map(function (subString) {
            var firstChar = subString.substring(0, 1);
            var restOfSubString = subString.substring(1);
            if (_this.vowels.indexOf(firstChar) != -1) {
                return restOfSubString + firstChar + "i";
            }
            else {
                return restOfSubString + firstChar + "ay";
            }
        });
        return stringParts.join(" ");
    },
    containsIllegalCharacter: function (string) {
        return /\d/.test(string);
    }
};
//# sourceMappingURL=wordHelper.js.map