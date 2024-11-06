/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

// function saveChar(nameArr) {
//     const firstChar = [];
//     for (let i = 0; i < names.length; i++) {
//         const curName = names[i][0];
//         firstChar.push(curName);
//     }
//     return firstChar
// }

/**
 * Salva i char dentro un array
 *
 * @param {Array} //???
 * @return {Array} //???
 */
const saveChar = (nameArr) => {
    const firstChar = [];
    for (let i = 0; i < nameArr.length; i++) {
        firstChar.push(nameArr[i][0]);
    }
    return firstChar;
}

// Invoca la funzione qui e stampa il risultato in console

saveChar(names);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

console.log(saveChar(names));
