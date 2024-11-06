/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const findVocals = (parola) => {
    const vocals = 'aeiou'
    let vocalsCounter = 0;
    const vocalsFind = [];

    for (let i = 0; i < parola.length; i++) {
        const element = parola[i];
        if (vocals.includes(element)) {
            vocalsCounter++;
            vocalsFind.push(element);
        }
    }
    console.log(`Il numero di vocali trovate è: ${vocalsCounter} (${vocalsFind.join(', ')})`);
}

// Invoca la funzione qui e stampa il risultato in console
findVocals(word);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)