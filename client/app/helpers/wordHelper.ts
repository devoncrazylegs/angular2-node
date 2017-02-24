export let wordHelper = {
    vowels: ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"],
    convertWordToPigLatin(stringToConvert: string): string {
        let stringParts: Array<string>;
        if(stringToConvert === "" || stringToConvert === "undefined") {
            return "Input string cannot be empty or undefined";
        }

        if(this.containsIllegalCharacter(stringToConvert)) {
            return "Input string contains an illegal character";
        }

        stringParts = stringToConvert.split(" ").map((subString) => {
            let firstChar: string = subString.substring(0, 1);
            let restOfSubString: string = subString.substring(1);

            if(this.vowels.indexOf(firstChar) != -1) {
                return restOfSubString + firstChar + "i";
            } else {
                return restOfSubString + firstChar + "ay";
            }

        });

        return stringParts.join(" ");
    },

    containsIllegalCharacter(string): Boolean {
        return /\d/.test(string);
    }
};