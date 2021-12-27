/*
O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações
Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
Se o array não for do tipo 'object', lance um erro do tipo TypeError
Se o número não for do tipo 'number', lance um erro do tipo TypeError
Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
*/
function validarArray(array, numero) {
  try {
    if (!array && !numero) throw new ReferenceError('envie os parâmetros');
    if (typeof array !== 'object') throw new TypeError('o array não é do tipo objeto');
    if (typeof numero !== 'number') throw new TypeError('o parâmetro numero não é do tipo number');
    if (array.length !== numero) throw new RangeError('o tamanho do array é diferente do parâmetro numero');

    return array;
  }
  catch(error) {
    if (error instanceof ReferenceError) {
      console.log("este erro é um ReferenceError");
      console.log(error.message);
    }
    if (error instanceof TypeError) {
      console.log("este erro é um TypeError");
      console.log(error.message);
    }
    if (error instanceof RangeError) {
      console.log("este erro é um RangeError");
      console.log(error.message);
    }
  }
}

console.log(validarArray());
console.log(validarArray([1, 2, 3, 4], 4));
console.log(validarArray('oie', 4));
console.log(validarArray([1, 2, 3, 4], '4'));
console.log(validarArray([1, 2, 3, 4], 2));
