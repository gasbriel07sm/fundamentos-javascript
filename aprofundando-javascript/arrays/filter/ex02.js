const produtos = [
  { nome: 'Notebook', preco: 2500 },
  { nome: 'Mouse', preco: 100 },
  { nome: 'Teclado', preco: 150 },
  { nome: 'Monitor', preco: 900 }
];

// com preço maior que 500.

const produtosFiltrados = produtos.filter(x => x.preco > 500);
console.log(produtosFiltrados);