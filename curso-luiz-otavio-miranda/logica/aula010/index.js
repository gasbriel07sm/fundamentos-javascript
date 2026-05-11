// ARITMÉTICOS

/* + adição / comparaçã
 * - subtração
 *  / divisão
 * * multiplicação
 * ** potenciação
 *  % resto da divisão
 */

const num1 = 10;
const num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 ** num2);
console.log(num1 % num2);


// INCREMENTO / DECREMENTO (apenas de um em um)
// pós fixado (++ / -- depois) - excuta a ação primeiro
// pré fixado (-- / ++) - executa antes de alguma condição
// OBS! só pode ser usado com let já que vamos mudar o valor com o incremento ou decremento 

let contador = 1;
contador++; // 2;
++contador;
console.log(contador);

// OPERAÇÕES INLINE

let num = 0;
const passo = 5;

num += passo; // 5
num *= passo; // 25
num -= passo; // 20
num /= passo; // 4
num %= passo; // 4

// NaN - Not a Number 
const n1 = 10;
const n2 = 'Luiz';
console.log(n1 * n2);

// Converter string para número
let str = '5';
console.log(typeof str);

str = parseInt(str); // MÉTODO 1 - converter para Int/Float
console.log(typeof str);

str = Number(str); // converte para quaisquer tipo de número
console.log(typeof str);


