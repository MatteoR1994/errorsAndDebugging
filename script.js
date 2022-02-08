/** MEGLIO COSì **/
function checkIfIsEven(numberToCheck) {
    return numberToCheck % 2 === 0;
}


/** COSì E' MEGLIO DI NO **/
// conrollo se è pari
/*
function check(n) {
    return n % 2 === 0;
}
*/


/******************************************************************************************/

"use strict"; // Controlla eventuali errori e/o dimenticanze che javascript tenta di correggere a suo modo, e li segnala.


const pippo = "ciao";
console.log("🚀 ~ file: script.js ~ line 22 ~ pippo", pippo);


const pluto = 4;

const paperino = false;
console.log("🚀 ~ file: script.js ~ line 27 ~ paperino", paperino);


const array = ["pippo", "pluto", "paperino","pippo", "pluto", "paperino","pippo", "pluto", "paperino"];
console.table(array); // console.table() non vuole le stringhe come il log.


const stud1 = {name: "andrea", age: 12};
const stud2 = {name: "giovanni", age: 13};
const stud3 = {name: "beatrice", age: 16};
const stud4 = {name: "veronica", age: 12};

const array2 = [stud1, stud2, stud3, stud4];

console.table(array2);


let player = {name: "andrea", score: 112};

// Il log fa una fotografia istantanea dell'oggetto nel momento in cui viene chiamato, se dopo l'oggetto viene modificato il log rimane sempre come prima, pur cambiando l'oggetto.
console.log("🚀 ~ file: script.js ~ line 48 ~ player", player); 

console.log("🚀 ~ file: script.js ~ line 48 ~ player", JSON.stringify(player));

const number = 300;

let isEven = checkIfIsEven(number);

player.score = 200;

/******************************************************************************************/

/*function parseStringToNumber(string) {
    //const number = parseInt(string); // Prende solo gli interi. Se mischiati a una stringa li riconosce solo se sono al primo carattere.
    const number = parseFloat(string); // Prende gli interi e i numeri con la virgola (con il .). Non riconosce la ,
    return number;
}

console.log(parseStringToNumber("2"));
console.log(parseStringToNumber("2.1"));
console.log(parseStringToNumber("2,1"));
console.log(parseStringToNumber("2pippo"));
console.log(parseStringToNumber("pippo2"));
console.log(parseStringToNumber("pippo"));*/


class EmptyStringError extends Error {
    constructor(message) {
        super(message);
    }
}

class InvalidStringError extends Error {
    constructor(message) {
        super(message);
    }
}


function betterParseStringToNumber(string) {
    if (string.length === 0) {
        //throw new Error("stringa vuota");
        throw new EmptyStringError("Stringa vuota")
    }
    let stringNumber = string;
    if (string.includes(",")) {
        stringNumber = string.replace(",", ".");
    }
    const number = parseFloat(stringNumber);
    if (isNaN(number)) {
        //throw new Error("stringa non valida");
        throw new InvalidStringError("Stringa non valida");
    }
    return number;
}

/* Gestiona errore fatta bene (è la funzione lancia un errore, non è l'utente che deve controllare). */
let age;

try {

    // Qua il codice che rischia di rompersi

    age = betterParseStringToNumber("stronzo");
    console.log("age: ", age);

} catch (error) {

    // Qua il codice per quando quello sopra si rompe

    //console.log(error.message); // error.message = Prende il messaggio di errore lanciato nella funzione
    // if (error.message === "stringa vuota") {
    //     age = 0;
    //     console.log("age: ", age);
    // } else {
    //     console.log(error.message);
    //     console.log("inserisci di nuovo");
    // }

    if (error instanceof EmptyStringError) {
        console.log(error.message);
        age = 0;
        console.log("age: ", age);
    } else {
        console.log(error.message);
        console.log("inserisci di nuovo");
    }

}


/* Gestione base errore */
//let age = betterParseStringToNumber("fanculo");

// if (isNaN(age)) {
//     console.log("non sono riuscito a convertire.");
// } else {
//     console.log("age: ", age);
// }

//console.log("age: ", age);


// console.log(betterParseStringToNumber("2"));
// console.log(betterParseStringToNumber("2.1"));
// console.log(betterParseStringToNumber("2,1"));
// console.log(betterParseStringToNumber("2pippo"));
// console.log(betterParseStringToNumber("pippo2"));
// console.log(betterParseStringToNumber("pippo"));


///////

