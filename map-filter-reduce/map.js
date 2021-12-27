/*
Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.
*/

/*********COM THIS***********/
const apple = {
  value: 2,
}

const orange = {
  value: 3,
}

function mapComThis(array, thisArg) {
  return array.map(function(item) {
    return item * this.value; // apple e orange seriam o this
  }, thisArg)
}

const arrayNumbers = [1, 2];

console.log('quando o this é apple', mapComThis(arrayNumbers, apple));
console.log('quando o this é orange', mapComThis(arrayNumbers, orange));


/*********SEM THIS***********/
const arrayNums = [1, 2, 3, 4, 5, 6, 7, 8]

function mapSemThis(array) {
  return array.map(function(item) { 
    return item * 2;
  })
}

console.log(mapSemThis(arrayNums));
console.log(arrayNums);