/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const namesFirstChar = [];

// Dichiara la funzione qui.

/**
 * Description placeholder
 *
 * @param {string} word
 * @param {string} //char
 */
// function firstChar(word) {
//     return word[0]
// }

const firstChar = (word) => word[0];

// Invoca la funzione qui e stampa il risultato in console
for (let i = 0; i < names.length; i++) {
    const curName = names[i];
    namesFirstChar.push(firstChar(curName));
}


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

console.log(namesFirstChar);
