
/*
    se c'è almeno un elemento che non è parsabile, lui parsi comunque la stringa ritornando un errore "stringa parzialmente non valida", restituendo quelli parsati
    stringa vuota, errore stringa vuota
    stringa tutta non valida, errore stringa non valida
    stringa tutta valida, ritorna array di numeri 

    la funzione deve essere in una classe statica

    gli errori tutti in un file a parte
*/


// Un file con una sola stringa in ingresso, così costruita:

//12; 34; 45; 2.3; 12; 13,4; pippo


let string = "12; 34; 45; 2.3; 12; 13,4; pippo";
//let string = "12; 34; 45; 2.3; 12; 13,4";
//let string = "12; 34; 45; 2,3; 12; 13,4";
//let string = "sasso; piero; pluto; paperino; pippo; cane; pippo";
//let string = "";

console.log("Stringa originale: ", string);

let result;

try {

    result = Parser.csvParser(string);
    console.log("result: ", result);

} catch (error) {

    if (error instanceof EmptyStringError) {
        console.log(error.message);
    } else {
        if (error instanceof PartialInvalidStringError) {
            console.log(error.message);
            console.log("E' stata fatto un parsing parziale: ", error.partialResult);
        } else {
            console.log(error.message);
        }
    }

}