const num = Number(prompt('Digite um número: '));
const numTitulo = document.getElementById('numero');
const texto = document.getElementById('texto');

numTitulo.innerHTML = num;
texto.innerHTML += `<p> Raiz quadrada: ${Math.sqrt(num)} <p/> <br/>`;
texto.innerHTML += `<p> ${num} é inteiro: ${Number.isInteger(num)} <p/> <br/>`;
texto.innerHTML += `<p> É NaN: ${Number.isNaN(num)} <p/> <br/>`;
texto.innerHTML += `<p> Arredondando para baixo: ${Math.floor(num)} <p/> <br/>`;
texto.innerHTML += `<p> Arredondando para cima: ${Math.ceil(num)} <p/> <br/>`;
texto.innerHTML += `<p> Duas casas decimais: ${num.toFixed(2)} <p/> <br/>`;