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

debugger;

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

