// Crie uma função chamada saudar usando function declaration.
// Ela deve receber um nome e exibir:
// Olá, Gabriel!

function saudar(nome) {
    console.log(`Olá, ${nome}!`);
}
saudar('Gabriel');

// vamos utilizar arrow functions agora
const saudacao = nome => `Olá, ${nome}, estou treinando arrow functions!`;
console.log(saudacao('Gabriel'));