class Parser {

    // Convertire la stringa in un array di numeri

    
    /**
     * It parses a string, with semicolon separated values, into an array of numbers.
     * @param {string} string - The string to be parsed.
     * @returns {number[]} The array of numbers.
     */
    static csvParser(string) {
        let resultArray;
        let workString = string; // Creao una variabile con la quale lavorare.
        
        let noSpacesString = Parser.replaceAll(workString, " ", ""); // Levo tutti gli spazi dalla stringa sostituendoli con una stringa vuota.
        
        let betterDecimalNumbersString= Parser.replaceAll(noSpacesString, ",", "."); // Sostiuisco tutte le virgole con il punto.

        try {
            resultArray = Parser.betterParseStringToNumber(betterDecimalNumbersString);
        } catch (error) {
            throw error;
        }
        return resultArray;
    }

    static betterParseStringToNumber(string) {
        const isStringEmpty = string.length === 0;
        if (isStringEmpty === 0) {
            throw new EmptyStringError("Stringa vuota.");
        }

        let stringArray = Parser.stringToArrayByChar(string, ";");

        let stringArrayMapped = Parser.arrayNumbersParser(stringArray, parseFloat);

        let resultArray2 = Parser.checkIsNotNanEveryArrayElement(stringArrayMapped);

        const isResultArrayEmpty = resultArray2.length === 0;
        if (isResultArrayEmpty) {
            throw new InvalidStringError("Stringa non valida.");
        } else {
            const isStartingArrayLenghtSameOfResultArrayLength = resultArray2.length === stringArray.length;
            if (isStartingArrayLenghtSameOfResultArrayLength) {
                return resultArray2;
            } else {
                throw new PartialInvalidStringError("Stringa parzialmente non valida.", resultArray2);
            }
        }
    }

    static replaceAll(string, charToReplace, newChar) {
        const re = new RegExp(charToReplace, 'g');
        return string.replace(re, newChar);
    }

    static stringToArrayByChar(string, char) {
        return string.split(char);
    }

    static arrayNumbersParser(array, parserFunction) {
        return array.map(e => parserFunction(e));
    }

    static checkIsNotNanEveryArrayElement(array) {
        return array.filter(e => !isNaN(e));
    }

}