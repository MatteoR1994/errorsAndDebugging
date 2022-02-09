class Parser {

    // Convertire la stringa in un array di numeri
    static csvParser(string) {
        let resultArray;
        let workString = string; // Creao una variabile con la quale lavorare.
        
        let noSpacesString = workString.replace(/ /g, ""); // Levo tutti gli spazi dalla stringa sostituendoli con una stringa vuota.

        //let betterDecimalNumbersString= trimmedString.replace(",", "."); // Sostiuisco una sola virgola (la prima che trova) con il punto.
        let betterDecimalNumbersString= noSpacesString.replace(/,/g, "."); // Sostiuisco tutte le virgole con il punto.

        //let resultArray = this.betterParseStringToNumber(betterDecimalNumbersString);
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
        
        let stringArray = string.split(";");

        let resultArray2 = [];

        for (const element of stringArray) {
            const number = parseFloat(element);
            if (!isNaN(number)) {
                resultArray2.push(number);
            }
        }

        //let resultArray2 = stringArray.map(e => parseFloat(e)).filter(e => !isNaN(e));

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

}