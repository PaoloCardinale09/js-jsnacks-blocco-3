// Snack3
// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

// chiedi un numero all'utente N
// genera N array
// crea la formula per generare i numeri casuali da 1 a 100 Math.random
// stampa array
//

// let userNumber = parseInt(prompt("scegli un numero"));
// let arrayGenerate  = [];
// let i = 0;
// while (i < userNumber) {
//   arrayGenerate = ;
//   let randomNumber = Math.floor(Math.random() * 100 + 1);
//   //   arrayGenerate[i] = randomNumber;
//   //   arrayGenerate.push(i);
//   i++;
//   console.log(arrayGenerate);
// }

// var yearStart = 2000;
// var yearEnd = 2040;

// var arr = [];

// for (var i = yearStart; i < yearEnd+1; i++) {
//     arr.push(i);
// }
const n = parseInt(prompt("Inserisci un numero"));

let i = 0;
while (i < n) {
  const generatedArray = [];

  let y = 0;
  while (y < 10) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    generatedArray.push(randomNumber);

    y++;
  }
  console.log(generatedArray);
  i++;
}
