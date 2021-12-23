let numeroAtual = 0;
let numeroSpan = document.getElementById('currentNumber');
let botaoAumentar = document.getElementById('adicionar');
let botaoDiminuir = document.getElementById('subtrair');

function aumentarNumero() {
  numeroAtual++;
  numeroSpan.innerHTML = numeroAtual;
}

function diminuirNumero() {
  numeroAtual--;
  numeroSpan.innerHTML = numeroAtual;
}

botaoAumentar.addEventListener('click', aumentarNumero);
botaoDiminuir.addEventListener('click', diminuirNumero);