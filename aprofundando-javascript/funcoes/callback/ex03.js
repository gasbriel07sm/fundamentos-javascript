/** Crie uma função filtrarProdutos que receba um array de produtos e um callback de filtro.

Use callback para filtrar produtos acima de 500.
*/

const filtrarProdutos = (arr, f) => f(arr);
const filtro = arr => arr.filter(p => p.preco > 500);

const produtos = [
  { nome: 'Notebook', preco: 2500 },
  { nome: 'Mouse', preco: 100 },
  { nome: 'Monitor', preco: 900 },
  { nome: 'Teclado', preco: 150 }
];

console.log(filtrarProdutos(produtos, filtro));