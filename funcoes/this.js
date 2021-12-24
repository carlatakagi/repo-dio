/*
Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!
*/

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const nome1 = {
	nome: 'Izuku',
	idade: 16,
};

const nome2 = {
	nome: 'Bakugou',
	idade: 17,
};

const nome3 = {
	nome: 'Shoto',
	idade: 15,
};

console.log(calculaIdade.call(nome3, 20));
console.log(calculaIdade.apply(nome2, [10]));