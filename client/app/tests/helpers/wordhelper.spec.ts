import {wordHelper} from "../../helpers/wordHelper";
describe("Helper: wordHelper", () => {
    beforeEach(() => {
        let wordHelperTestObject = wordHelper;
    });

    it("Should take a single word that starts with a consonant and return it as pig latin", () => {
        let wordToConvert = wordHelper.convertWordToPigLatin('hello');
        expect(wordToConvert).toEqual("ellohay");
    });

    it("Should take a single word that starts with a vowel and return it as pig latin", () => {
        let wordToConvert = wordHelper.convertWordToPigLatin('ear');
        expect(wordToConvert).toEqual("arei");
    });

    it("Should take a single letter word and return it correctly", () => {
        let wordToConvert = wordHelper.convertWordToPigLatin('I');
        expect(wordToConvert).toEqual("Ii");
    });

    it("Should take a whole sentence with a capital letter and return correct pig latin", () => {
        let wordToConvert = wordHelper.convertWordToPigLatin('I am a pig latin expert');
        expect(wordToConvert).toEqual("Ii mai ai igpay atinlay xpertei");
    });

    it("Should ensure input variable cannot be empty", () => {
        let wordToConvert = wordHelper.convertWordToPigLatin('');
        expect(wordToConvert).toEqual("Input string cannot be empty or undefined");
    });

    it("Should ensure input variable cannot be undefined", () => {
        let wordToConvert = wordHelper.convertWordToPigLatin("undefined");
        expect(wordToConvert).toEqual("Input string cannot be empty or undefined");
    });

    it("Should ensure input string cannot be contain a numeric value", () => {
        let wordToConvert = wordHelper.convertWordToPigLatin("I am 3");
        expect(wordToConvert).toEqual("Input string contains an illegal character");
    });
});