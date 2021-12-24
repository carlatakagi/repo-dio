/* 
Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)
*/

function verificarPalindromo (string) {
  // split irá separar as letras e retorna um array, 
  // reverse é um metodo de array que irá reverter e colocar a palavra ao contrario, 
  // join irá juntar todas as letras revertidas  
  let novaString = string.split("").reverse().join("");

  if (!string) {
    return 'não existe string';
  }
  if (novaString !== string) {
    return 'não é palindromo'
  }
  if (novaString === string) { 
   return 'é palindromo';
  }
}
console.log(verificarPalindromo(''));
console.log(verificarPalindromo('zoro'));
console.log(verificarPalindromo('arara'));

/*---------------------------------------*/
function verificarPalindromo2 (string) {
  if (!string) {
    return 'string não existe';
  }

  // comparar dois caracteres (se o primeiro está o último por isso percorre metade da string apenas)
  // só precisa fazer metade dos loops pois em cada loop está verificando dois caracteres
  for(let i = 0; i < string.length / 2; i += 1) {
    if(string[i] !== string[(string.length - 1) - i]) {
      return 'não é palindromo';
    }
  }
  return 'é palindromo';
}
console.log(verificarPalindromo2(''));
console.log(verificarPalindromo2('luffy'));
console.log(verificarPalindromo2('arara'));