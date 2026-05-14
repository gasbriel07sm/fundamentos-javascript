const produtos = [
  { nome: 'Notebook', preco: 2500 },
  { nome: 'Mouse', preco: 100 },
  { nome: 'Teclado', preco: 150 }
];

const apenasNome = produtos.map(x => x.nome);
console.log(apenasNome);