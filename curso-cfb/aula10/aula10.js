// OPERADORES TERNÁRIOS
// <condição> ? <true> : <false>;

let num = 10;

let res = num % 2 === 0 ? "Par" : "Ímpar";
// ou
res = !(num % 2) ? "Par" : "Ímpar";
// 0 é false
// 1 é true

console.log(res);