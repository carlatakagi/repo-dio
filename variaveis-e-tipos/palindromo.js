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
console.log(verificarPalindromo('maricona'));
console.log(verificarPalindromo('arara'));