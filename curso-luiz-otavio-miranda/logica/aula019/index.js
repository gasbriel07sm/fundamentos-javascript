/**
 * Primitivos: strings, numbers, boolean, undefined, null (bigint, symbol) ===== sãoo imutáveis
 * 
 * Referência: arrays, objetos, functions ===== são mutáveis
 */

let nome = 'Luiz';
nome = 'Otávio';
console.log(nome);

let a = 'A'; // cópia do valor
let b = a;
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);

let A = [1,2,3];
let B = A; // Passado por referência, A e B apontam para o memso local da memória
console.log(A, B);

A.push(8, 4, 5);
console.log(A, B);

// fazer cópia de valores com spread operator
let C = [...B];

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

const pessoa2 = {...pessoa}; // spread operator
pessoa2.nome = 'João';

console.log(pessoa);
console.log(pessoa2);