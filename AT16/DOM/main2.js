const imagem = document.getElementById('imagem');
const botaoImagem = document.getElementById('botaoImagem');

const imagem1 = 'https://fastly.picsum.photos/id/559/400/400.jpg?hmac=VtDOUMtOgu-SWe2JIejF4EjESOCTiOP2rr4omqf4GAo';
const imagem2 = 'https://picsum.photos/id/237/536/354';

imagem.src = imagem1;
imagem.alt = 'Imagem exibida';

botaoImagem.addEventListener('click', () => {
  imagem.src = imagem.src === imagem1 ? imagem2 : imagem1;
});
