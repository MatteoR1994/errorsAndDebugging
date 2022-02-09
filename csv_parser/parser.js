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
            resultArray = Parser.betterParseStringToNumber(betterDecimalNumbersString);
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

    static newLineStringParser(string) {
        if (string.length === 0) {
            throw new EmptyStringError("Stringa vuota.");
        }
        const arrayOfStrings = string.split(/\r?\n/);
        arrayOfStrings.pop();
        const stringArray2 = arrayOfStrings.join(";");
        // console.log(arrayOfStrings);
        // console.log(stringArray2);
        let resultArray3;
        try {
            resultArray3 = Parser.csvParser(stringArray2);
        } catch (error) {
            throw error;
        }
        return resultArray3;
    }

    static newLineStringToArrayOfStringParser(string) {
        if (string.length === 0) {
            throw new EmptyStringError("Stringa vuota.");
        }
        const arrayOfStrings = string.split(/\r?\n/);
        arrayOfStrings.pop();
        const finalArray = [];
        for (const stringA of arrayOfStrings) {
            try {
                finalArray.push(Parser.csvParser(stringA));
            } catch (error) {
                if (error instanceof PartialInvalidStringError) {
                    finalArray.push(error.partialResult);
                } else {
                    throw error;
                }
            }
        }
        return finalArray;
    }

    static arrayOfObjectsFromStringMultiline(string) {
        
        if (string.length === 0) {
            throw new EmptyStringError("Stringa vuota.");
        }

        // Divido la stringa multilinea in un array di stringhe
        let arrayOfStrings = string.split(/\r?\n/);
        arrayOfStrings.pop(); // Levo l'ultimo elemento vuoto
        
        // Pulisco, tramite una piccola funzioncina su misura, il primo elemento dell'array di stringhe, quello dell'intestazione
        // della tabella
        let tableName = Parser.cleanStringAndReturnAnArray(arrayOfStrings[0]);

        for (const element of arrayOfStrings) {
            let stringArray = Parser.cleanStringAndReturnAnArray(element);
            if (stringArray.length < tableName.length) {
                throw new PotentialartialInvalidStringError("Qualcosa non va nel file, controllalo.");
            }
        }
        
        const finalArray = []; // Inizializzo l'array che conterrà gli oggetti finali
   
        for (let i = 1; i < arrayOfStrings.length; i++) {
            const value = arrayOfStrings[i];
            let obj = {};
            let parsedArray = Parser.cleanStringAndReturnAnArray(value);
            for (let a = 0; a < tableName.length; a++) {
                const propertyName = tableName[a];
                if (!isNaN(parsedArray[a])) {
                    obj[propertyName] = parseFloat(parsedArray[a]);
                } else {
                    obj[propertyName] = parsedArray[a]
                }
            }
            finalArray.push(obj);        
        }

        return finalArray;
    }

    static cleanStringAndReturnAnArray(string) {
        let workString = string;
        let noSpacesString = workString.replace(/ /g, "");
        let betterDecimalNumbersString= noSpacesString.replace(/,/g, ".");
        let stringArray = betterDecimalNumbersString.split(";");
        return stringArray;
    }

}