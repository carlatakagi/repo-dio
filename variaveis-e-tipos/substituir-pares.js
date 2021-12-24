/*
Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]

Output -> [1, 3, 0, 0, 0, 33, 23, 0]

Input -> []

Output -> -1
*/

function substituirPares (arrayNumeros) {
  let arrayVazio = -1
  
  if (arrayNumeros.length === 0) {
    return arrayVazio;
  }
  
  for(let i = 0; i < arrayNumeros.length; i += 1) {
    if(arrayNumeros[i] % 2 === 0 && arrayNumeros[i] !== 0) {
      arrayNumeros[i] = 0;
    }
  }
  return arrayNumeros;
}

console.log(substituirPares([1, 3, 4, 6, 80, 33, 23, 90]));
console.log(substituirPares([5, 6, 25, 32, 44, 13, 66, 69, 248]));
console.log(substituirPares([]));