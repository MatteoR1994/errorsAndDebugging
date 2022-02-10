
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

console.log("STRINGA SU UNA LINEA\n\n");
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

console.log("\n\n------------------------------------------\n\n");

// let stringNewLine = "12; 13; 45; 23\n" +
//                     "2.1; 13; 34; 21\n" + 
//                     "3.2; 12; 4; 22\n";
// let stringNewLine = "12; 13; 45,36; 23\n" +
//                     "2,1; 13; 34; 21\n" + 
//                     "3.2; 12; 4; 22\n";
let stringNewLine = "12; 13; pippo; 23\n" +
                    "2.1; 13; 34; 21\n" + 
                    "3.2; pluto; 4; 22\n";
// let stringNewLine = "pluto; pluto; pluto; pluto\n" +
//                     "pluto; pluto; pluto; pluto\n" + 
//                     "pluto; pluto; pluto; pluto\n";
// let stringNewLine = "\n" +
//                     "\n" + 
//                     "\n";

console.log("STRINGA SU PIU' LINEE\n\n");
console.log("Stringa originale: \n\n", stringNewLine);

console.log("\nSTEP 1\n");
let resultNewLine;

try {
    resultNewLine = Parser.newLineStringParser(stringNewLine);
    console.log("result step 1: ", resultNewLine);
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

console.log("\nSTEP 2\n");
let resultStep2;

try {
    resultStep2 = Parser.newLineStringToArrayOfStringParser(stringNewLine);
    console.log("result step 2: ", resultStep2);
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

console.log("\nSTEP 3\n");

const tableString = "name; age; school; grade\n" + 
                    "pippo; 13; colombo; 3\n" + 
                    "pluto; 12; leopardi; 2\n" + 
                    "paperino; 11; bertani; 2\n";
// const tableString = "name; age; school; grade\n" + 
//                     "pippo; 13; colombo; 3\n" + 
//                     "pluto; 12; 2\n" + 
//                     "paperino; 11; bertani; 2\n";

console.log("Stringa table originale:\n\n", tableString);

let resultStep3;

try {
    resultStep3 = Parser.arrayOfObjectsFromStringMultiline(tableString);
    console.log("result step 3: ", resultStep3);
} catch (error) {
    console.log(error.message);
}

// resultStep3 = Parser.arrayOfObjectsFromStringMultiline(tableString);
// console.log("result step 3: ", resultStep3);

/*

1° step) newLineParser (static)
"12; 13; 45; 23\n
2.1; 13; 34; 21\n
3.2; 12; 4; 22\n"

=> [12, 13, 45, 23, 2.1, 13, 34, 21, 3.2, 12, 4, 22]

-----------------------------------------------

2° step)
"12; 13; 45; 23\n
2.1; 13; 34; 21\n
3.2; 12; 4; 22\n"

=> [[12, 13, 45, 23], [2.1, 13, 34, 21], [3.2, 12, 4, 22]]

-----------------------------------------------

3° step)

"name; age; school; grade\n
pippo; 13; colombo; 3\n
pluto; 12; leopardi; 2\n
paperino; 11; bertani; 2\n"

=> [{name: "pippo", age: 13, school: colombo, grade: 3}, {name: "pluto", age: 12, school: leopardi, grade: 2}, {name: "paperino", age: 11, school: bertani, grade: 2}]

*/