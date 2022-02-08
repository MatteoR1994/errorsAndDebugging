class Parser {

    // Convertire la stringa in un array di numeri
    static csvParser(string) {
        let workString = string; // Creao una variabile con la quale lavorare.
        let noSpacesString = workString.replace(" ", ""); // Levo gli spazi dalla stringa sostituendoli con una stringa vuota.
        let trimmedString = noSpacesString.trim(); // Levo gli spazi all'inizio e alla fine della stringa.
        let betterDecimalNumbersString= trimmedString.replace(",", "."); // Sostiuisco le virgole con il punto, per ottimizzare la ricerca di numeri decimali.
        //let cleanedStringToArray = betterDecimalNumbers.split(";"); // Converto la stringa pulita in un array di stringhe.
        let resultArray = this.betterParseStringToNumber(betterDecimalNumbersString);
        return resultArray;
    }

    static betterParseStringToNumber(string) {
        if (string.length === 0) {
            throw new EmptyStringError("Stringa vuota");
        }
        
        let stringArray = string.split(";");

        for (const element of stringArray) {
            const number = parseFloat(element);
            if (isNaN(number)) {
                
            } else {
                
            }
        }

        
        if (isNaN(number)) {
            //throw new Error("stringa non valida");
            throw new InvalidStringError("Stringa non valida");
        }
        return number;
    }

}