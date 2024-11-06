/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const namesFirstChar = [];

// Dichiara la funzione qui.

/**
 * Prende il primo carattere di ogni elemento
 *
 * @param {string} word
 * @return {string} //char
 */
// function firstChar(word) {
//     return word[0]
// }

const firstChar = (word) => word[0];


// function saveChar() {
//     for (let i = 0; i < names.length; i++) {
//         const curName = names[i];
//         namesFirstChar.push(firstChar(curName));
//     }
// }

/**
 * Salva i char dentro un array
 *
 * @return {string} //???
 */
const saveChar = () => {
    for (let i = 0; i < names.length; i++) {
        namesFirstChar.push(firstChar(names[i]));
    }
}

// Invoca la funzione qui e stampa il risultato in console

saveChar();

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

console.log(namesFirstChar);
