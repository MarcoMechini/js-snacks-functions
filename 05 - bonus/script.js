/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

// Dichiara la funzione qui.

/**
 * La funzione ritorna una stringa in base a che ore sono con un determianto saluto in base all'orario seguito da il nome inserito dall'utente
 *
 * @param {string} nome
 * @returns {string}
 */
const saluto = (nome) => {
    const date = new Date();
    const ora = date.getHours;
    let message = '';

    if (ora <= 13) {
        message += 'Buongiorno'
    } else if (ora < 17) {
        message += 'Buon pomeriggio'
    } else {
        message += 'Buonasera'
    }
    return message += ` ${name}`
}

// Invoca la funzione qui e stampa il risultato in console

console.log(saluto(name));



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.