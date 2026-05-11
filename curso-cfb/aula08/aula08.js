// OPERADORES BITWISE

let n1 = 10;
let n2 = 11;
let n3 = 14;

// E LÓGICO (BIT)
let res = n1 & n2;
// 1010 1011 -> 1010 (AND LÓGICO BITWISE) deve ter bit 1 nos dois valores
console.log(res);
res = n2 & n3;
// 1011 1110 -> 1010 retorna 10
console.log(res);

// OU LÓGICO (BIT)
res = n1 | n2;
// 1010 1011 -> 1011 (OR LÓGICO BITWISE) retorna se tiver pelo menos 1
console.log(res);
res = n2 | n3;
// 1011 1110 -> 1111 // retorna 15
console.log(res);

// XOR LÓGICO (BIT)
res = n1 ^ n2;
// 1010 1011 -> 0001 retorna 1 se tiver apenas 1, ou seja, os dois devem ser diferentes
console.log(res);
res = n2 ^ n3;
// 1011 1110 -> 0101
console.log(res);

// OPERAÇÕES DE DESLOCAMENTO DE BIT
// O NÚMERO É A QUANTIDADE DE BITS DESLOCADOS

// DOBRAR - um bit para esquerda
// METADE - um bit para direita
// -> assim por diante, se for 2 bits será 4 vezes maior


res = n1 << 2; // deslocando para esquerda (desloca um bit para esquerda)
console.log(res);
res = n1 >> 2; // deslocando para direita (desloca um bit para esquerda)
console.log(res);

console.log(res.toString(2)); // mostrar o número no formato binário
