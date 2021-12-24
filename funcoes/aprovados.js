/*
Crie uma função que recebe o array alunos e um número que irá representar a média final;
Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.
*/
const estudantes = [
  {
    nome: 'Nami',
    nota: 9,
  },
  {
    nome: 'Luffy',
    nota: 6,
  },
  {
    nome: 'Nico Robin',
    nota: 10,
  },
  {
    nome: 'Zoro',
    nota: 5,
  },
  {
    nome: 'Franky',
    nota: 7,
  },
]

function aprovados (estudantes, media) {
  let arrayAprovados = [];

  for(let i = 0; i < estudantes.length; i += 1) {

    // object destructuring
    let {nota, nome} = estudantes[i];

    if(nota >= media) {
      arrayAprovados.push(nome);
    }
  }
  return `Os aprovados são ${arrayAprovados}`;
}

console.log(aprovados(estudantes, 7));