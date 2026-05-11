/** 
 * Atribuição por desestruturação (Arrays)
 */

let a = 'a';
let b = 'b';
let c = 'c';
console.log(a, b, c);

[a, b, c] = [c, b, a];
console.log(a, b, c);

//               0, 1, 2, 3, 4, 5, 6, 7, 8  
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, segundoNumero, ...resto] = numeros;
// criamos e atribuimos valores já para as variáveis
console.log(primeiroNumero);
console.log(segundoNumero);
// resto (...) -> rest operator, quando vamos espalhar é o spred operator (espalhar)
console.log(resto);

// array dentro de arrays
const num = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// complexo
const [,[,,seis]] = num;
console.log(seis);
// tranquilo
const [lista1, lista2, lista3] = num;
console.log(lista3[2]);
// acessar array dentro de array
console.log(num[1][2]);
