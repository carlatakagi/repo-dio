/*
Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

Crie uma função getAdmins que recebe um Map;
Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios que são administradores.
*/
function getAdmins(map) {
  let admnis = [];

  for([key, value] of map) {
    if (value === 'Admin') {
      admnis.push(key);
    }
  }
  return admnis;
}

const users = new Map();

users.set('Carla', 'Admin');
users.set('Jennifer', 'Admin');
users.set('Thais', 'Admin');
users.set('Pedro', 'User');

console.log(getAdmins(users));