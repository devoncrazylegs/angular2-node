"use strict";
var wordHelper_1 = require("../../helpers/wordHelper");
describe("Helper: wordHelper", function () {
    beforeEach(function () {
        var wordHelperTestObject = wordHelper_1.wordHelper;
    });
    it("Should take a single word that starts with a consonant and return it as pig latin", function () {
        var wordToConvert = wordHelper_1.wordHelper.convertWordToPigLatin('hello');
        expect(wordToConvert).toEqual("ellohay");
    });
    it("Should take a single word that starts with a vowel and return it as pig latin", function () {
        var wordToConvert = wordHelper_1.wordHelper.convertWordToPigLatin('ear');
        expect(wordToConvert).toEqual("arei");
    });
    it("Should take a single letter word and return it correctly", function () {
        var wordToConvert = wordHelper_1.wordHelper.convertWordToPigLatin('I');
        expect(wordToConvert).toEqual("Ii");
    });
    it("Should take a whole sentence with a capital letter and return correct pig latin", function () {
        var wordToConvert = wordHelper_1.wordHelper.convertWordToPigLatin('I am a pig latin expert');
        expect(wordToConvert).toEqual("Ii mai ai igpay atinlay xpertei");
    });
    it("Should ensure input variable cannot be empty", function () {
        var wordToConvert = wordHelper_1.wordHelper.convertWordToPigLatin('');
        expect(wordToConvert).toEqual("Input string cannot be empty or undefined");
    });
    it("Should ensure input variable cannot be undefined", function () {
        var wordToConvert = wordHelper_1.wordHelper.convertWordToPigLatin("undefined");
        expect(wordToConvert).toEqual("Input string cannot be empty or undefined");
    });
    it("Should ensure input string cannot be contain a numeric value", function () {
        var wordToConvert = wordHelper_1.wordHelper.convertWordToPigLatin("I am 3");
        expect(wordToConvert).toEqual("Input string contains an illegal character");
    });
});
//# sourceMappingURL=wordhelper.spec.js.map