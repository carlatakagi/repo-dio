/*
Filtre e retorne todos os números pares de um array.
*/

const arrayNumbers = [2, 45, 100, 25, 5, 623, 78]

function numerosPares(numeros) {
  return arrayNumbers.filter(function(numeros) {
    return numeros % 2 === 0;
  });
}
console.log(numerosPares(arrayNumbers));