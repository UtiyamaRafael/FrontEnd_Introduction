const paragrafo = document.getElementById('meuParagrafo');
const botao = document.getElementById('botaoTexto');

botao.addEventListener('click', () => {
    paragrafo.textContent = 'O texto do parágrafo foi alterado!';
});
