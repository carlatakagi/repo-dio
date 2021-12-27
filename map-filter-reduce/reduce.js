/*
1. Some todos os números de um array
2. Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
*/

/***************SOMAR NUMEROS DO ARRAY*********************/
const arrayNumeros = [30, 60, 40, 5, 223, 2049, 3034, 5]

function somarArray(array) {
  return array.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue;
  });
}

console.log(somarArray(arrayNumeros));

/***************LISTA DE PREÇOS*********************/
const listaDePrecos = [
	{
    nome: 'óleo',
		preco: 10,
	},
	{
    nome: 'arroz',
		preco: 30,
	},
	{
    nome: 'carne',
		preco: 45,
	},
];

const saldoDisponivel = 100;

function calcularSaldo(saldoDisponivel, listaDePrecos) {
  return listaDePrecos.reduce(function(anterior, atual, index) { 
    console.log('rodada ', index + 1);
    console.log({anterior});
    console.log({atual});

    return anterior - atual.preco;
  }, saldoDisponivel);
}

console.log(`O valor disponível após a compra é R$ ${calcularSaldo(saldoDisponivel, listaDePrecos)}`);

