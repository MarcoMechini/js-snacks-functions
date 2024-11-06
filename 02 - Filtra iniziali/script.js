/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

let firstChar = 'A'
// Dichiara la funzione qui.


/**
 * Passo come parametri un array e un char e per ogni volta che viene trovato un riscontro tra il char 
 * e la prima lettera di ogni elemento dell'aray viene salvato in un nuovo array
 *
 * @param {*} namesArr
 * @param {*} char
 * @returns {{}}
 */
const alfabetArray = (namesArr, char) => {
    char = char.toUpperCase();
    const alfabetArray = [];
    for (let i = 0; i < namesArr.length; i++) {
        const curName = namesArr[i];
        curName[0] === char ? alfabetArray.push(curName) : '';
    }
    return alfabetArray
}

// Invoca la funzione qui e stampa il risultato in console

console.log(alfabetArray(names, firstChar));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]