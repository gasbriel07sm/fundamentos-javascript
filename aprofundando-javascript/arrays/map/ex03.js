const produtos = [
  { nome: 'Notebook', preco: 2500 },
  { nome: 'Mouse', preco: 100 },
  { nome: 'Teclado', preco: 150 },
  { nome: 'Monitor', preco: 900 }
];

// criar um novo array adicionando uma propriedade chamada precoComDesconto.
// O desconto será de 10

const novoArr = produtos.map(x => ({...x , precoComDesconto: x.preco * 0.9}));
console.log(novoArr);