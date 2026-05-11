//TIPOS DE DADOS
// String:
const nome = 'Luiz';
const nome1 = "Luiz";
const nome2 = `Luiz`;

// Number:
const num1 = 10;
const num2 = 10.52;

// undefined (não aponta para local nenhum na memória)
let nomeAluno;

// null -> valor nulo, não aponta para local nenhum na memória
let sobrenomeAluno = null;

// boolean (true/false)
const aprovado = true;

// passados por referência
const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b)
