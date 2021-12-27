/*
Crie uma estrutura básica de projeto front-end (HTML, CSS e JS)
Copie o HTML e o CSS deste repositório
Crie um arquivo chamado scripts.js na sua pasta assets/js
Selecione os elementos: h1, button, footer e body
Se os elementos possuirem a classe dark-mode, modifique seus estilos. Caso contrário, volte os estilos para o original
*/
const button = document.getElementById('button');
const title = document.getElementById('title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const lightMode = 'Light Mode';
const darkMode = 'Dark Mode';

function mudarClasses() {
  button.classList.toggle('dark');
	title.classList.toggle('dark');
	body.classList.toggle('dark');
	footer.classList.toggle('dark');
}

function mudarTexto() {
  if(button.classList.contains('dark')) {
    button.innerHTML = lightMode;
    title.innerHTML = darkMode + " ON";
    return;
  }
  button.innerHTML = darkMode;
  title.innerHTML = lightMode + " ON";
}

function mudarTemaDaPagina() {
  mudarClasses();
  mudarTexto();
}

button.addEventListener('click', mudarTemaDaPagina);