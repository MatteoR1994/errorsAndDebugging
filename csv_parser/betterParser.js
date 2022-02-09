class Parser {

    // Convertire la stringa in un array di numeri
    static csvParser(string) {
        let resultArray;
        let workString = string; // Creao una variabile con la quale lavorare.
        
        let noSpacesString = this.replaceAll(workString, " ", ""); // Levo tutti gli spazi dalla stringa sostituendoli con una stringa vuota.
        
        let betterDecimalNumbersString= this.replaceAll(noSpacesString, ",", "."); // Sostiuisco tutte le virgole con il punto.

        try {
            resultArray = this.betterParseStringToNumber(betterDecimalNumbersString);
        } catch (error) {
            throw error;
        }
        return resultArray;
    }

    static betterParseStringToNumber(string) {
        if (string.length === 0) {
            throw new EmptyStringError("Stringa vuota.");
        }

        let stringArray = this.stringToArrayByChar(string, ";");

        let stringArrayMapped = this.arrayNumbersParser(stringArray, parseFloat);

        let resultArray2 = this.checkIsNotNanEveryArrayElement(stringArrayMapped);

        if (resultArray2.length === 0) {
            throw new InvalidStringError("Stringa non valida.");
        } else {
            if (resultArray2.length === stringArray.length) {
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
        return array.filter(e => !isNaN(e))
    }

}