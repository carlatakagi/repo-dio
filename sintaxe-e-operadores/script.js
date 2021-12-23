/* Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
Exemplo:

Input: 1, 2
Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20. */

function validarNumerosIguais(num1, num2) {
  let soma = num1 + num2;

  if(num1 === num2 && soma < 10) {
    return `Os números ${num1} e ${num2} são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20`;
  }
  if (num1 === num2 && soma > 10 && soma < 20) {
    return `Os números ${num1} e ${num2} são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20`;
  }
  if(num1 < num2 && soma < 10) {
    return `Os números ${num1} e ${num2} não são iguais. Sua soma é ${soma},que é menor que 10 e menor que 20`;
  }
  if(num1 < num2 && soma < 20) {
    return `Os números ${num1} e ${num2} não são iguais. Sua soma é ${soma},que é maior que 10 e menor que 20`;
  }
  if(num1 > num2 && soma > 10 && soma < 20) {
    return `Os números ${num1} e ${num2} não são iguais. Sua soma é ${soma},que é menor que 10 e maior que 20`;
  }
  if (soma > 20) {
    return `Os números devem ser de 0 a 20 e um deles deve ser uma unidade`
  }
}
console.log(validarNumerosIguais(1, 3));
console.log(validarNumerosIguais(1, 15));
console.log(validarNumerosIguais(11, 15));