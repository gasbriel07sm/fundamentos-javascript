// REDUCE - reduzindo o array

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce((acumulador, valor) => {
    acumulador += valor;
    return acumulador;
}, 0);

console.log(total);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]

// retornar a pessoa mais velha

const maisVelha = pessoas.reduce((acc, valor) => {
    if (acc.idade > valor.idade) return acc;
    return valor;
})