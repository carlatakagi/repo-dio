const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catImage = document.getElementById('cat-icon');
const buttonGenerator = document.getElementById('button-cats');

// funcao assincrona que gera imagens de gatinhos aleatoriamente
const generateCats = async () => {
  try {
    const data = await fetch(BASE_URL); // base_url retorna os dados
    const json = await data.json(); // converte a string para json
    
    return json.webpurl; // weburl é uma imagem comprimida do link que está no base_url
  }
  catch(error) {
    console.log(error.message);
  }
}

// funcao assincrona que carrega a imagem dos gatinhos
const loadImage = async () => {
  catImage.src = await generateCats(); // coloca a url no src da tag img
}

buttonGenerator.addEventListener('click', loadImage);
