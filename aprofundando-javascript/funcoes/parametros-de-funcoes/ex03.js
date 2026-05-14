/** Crie uma função gerarResumoPedido que receba um objeto como parâmetro:

{
  cliente: 'Gabriel',
  produto: 'Notebook',
  quantidade: 2,
  preco: 2500
}

A função deve retornar:

Cliente Gabriel comprou 2 unidade(s) de Notebook. Total: R$ 5000.

Use desestruturação nos parâmetros.

Exemplo:
*/
console.log('\n------------------------------------------------------------')
console.log('FUNCTION DECLARATION\n');

function gerarResumoPedido({ cliente, produto, quantidade, preco }) {
    // const {cliente, produto, quantidade, preco} = obj;
    const total = quantidade * preco;
    return `Cliente ${cliente} comprou ${quantidade} unidade(s) de ${produto}. \n` +
           `Total: R$ ${total.toFixed(2)}`;
}

const obj = {
  cliente: 'Gabriel',
  produto: 'Notebook',
  quantidade: 2,
  preco: 2500
}

console.log(gerarResumoPedido(obj));

// arrow functions
console.log('\n------------------------------------------------------------')
console.log('ARROW FUNCTION\n');

const geraResumo = ({ cliente, produto, quantidade, preco }) => {
    const total = quantidade * preco;
    return `Cliente ${cliente} comprou ${quantidade} unidade(s) de ${produto}. \n` +
           `Total: R$ ${total.toFixed(2)}`;
}

console.log(gerarResumoPedido(obj));