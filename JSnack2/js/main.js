// Snack2
// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

// FARE LA SOMMA DEGLI ELEMENTI DELL' ARRAY
// CONTROLLO SE LA SOMMA DEGLI ELEMENTI DELL' ARRAY è SUPERIORE A 50
// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
let userNumbersArray = [];
let sum = 0;
// userNumbersArray.push(userNumber);
// console.log(sum);

while (sum < 50) {
  userNumber = parseInt(prompt("inserire un numero?"));

  userNumbersArray.push(userNumber);
  sum += userNumber;
}
console.log(`la somma totale è ${sum}`);

// let numeri = [1, 2, 3, 4];
// let sum = 0;
// for (let i = 0; i < numeri.length; i++) {
//   sum += numeri[i];
//   console.log(sum);
// }
