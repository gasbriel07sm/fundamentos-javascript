const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]

const resultado = document.querySelector('.container .resultado');

for (let i = 0; i < elementos.length; i++) {
    const {tag, texto} = elementos[i];
    const novo = document.createElement(tag);
    novo.innerText = texto;

    resultado.appendChild(novo);
} 