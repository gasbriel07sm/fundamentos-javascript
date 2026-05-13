const produto = { nome: 'Caneca', preco: 1.8 }
// copiar
//const outraCoisa = {
//    ...produto,
//    material: 'porcelana'
//};

const caneca = Object.assign({}, produto, { material : 'porcelana' });

caneca.preco = 2.5;
console.log(caneca)
;console.log(produto);

// Object.getOwnPropertyDescriptor(o, 'prop');
// const produto = { nome: 'Caneca', preco: 1.8 }

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

// Object.values
// Object.keys

console.log(Object.values(produto));
console.log(Object.entries(produto));

for (let entry of Object.entries(produto)) {
    const [chave, valor] = entry;
    console.log(chave, valor)
}