// Snack4 (Bonus)
// Fai inserire un numero all'utente. Poi continua a chiedere numeri finché la serie è crescente (l'ultimo numero inserito deve essere maggiore del precedente). Alla fine stampali tutti.

// Chiedo un numero all' utente
let numberMin = parseInt(prompt("Inserisci un numero"));

// Chiedo un secondo numero all' utente
let numberMax = parseInt(prompt("Inserisci un numero"));

// Creo un array dove conservare i numeri
const allNumbers = [numberMin, numberMax];

// Finchè il numero massimo è maggiore del minimo
while (numberMax > numberMin) {
  numberMin = numberMax;

  numberMax = parseInt(prompt("Inserisci un nuovo numero "));
  allNumbers.push(numberMax);
}

console.log(allNumbers);
