// Snack1
// Chiedi all'utente un valore minimo ed un valore massimo. Genera un numero casuale all'interno del range fornito dall'utente.

// Chiedi all'utente un valore minimo ed un valore massimo.
/*creare un controllo per i range di valori che siano numeri.
    genero un numero casuale con il math random*/

// Chiedi all'utente un valore minimo ed un valore massimo.
// let userNumber = prompt("Inserisci un numero da 1 a 50");
let userNumberA = parseInt(prompt("inserisci un numero tra 1 e 50 "));
let userNumberB = parseInt(prompt("inserisci un numero superiore a 50"));
// console.log(userNumberA);
// console.log(userNumberB);

const randomNumerInRange =
  Math.floor(Math.random() * (userNumberB - userNumberA + 1)) + userNumberA;
console.log(randomNumerInRange);

// console.log(userNumberA);
// console.log(userNumberB);
