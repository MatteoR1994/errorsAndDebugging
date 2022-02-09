class Parser {

    // Convertire la stringa in un array di numeri
    static csvParser(string) {
        let resultArray;
        let workString = string; // Creao una variabile con la quale lavorare.
        // workString = "12; 34; 45; 2.3; 12; 13,4; pippo"
        let noSpacesString = workString.replace(" ", ""); // Levo gli spazi dalla stringa sostituendoli con una stringa vuota.
        let trimmedString = noSpacesString.trim(); // Levo gli spazi all'inizio e alla fine della stringa.
        //let betterDecimalNumbersString= trimmedString.replace(",", "."); // Sostiuisco una sola virgola (la prima che trova) con il punto.
        let betterDecimalNumbersString= trimmedString.replace(/,/g, "."); // Sostiuisco tutte le virgole con il punto.
        // betterDecimalNumbersString = "12;34;45;2.3;12;13.4;pippo"
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