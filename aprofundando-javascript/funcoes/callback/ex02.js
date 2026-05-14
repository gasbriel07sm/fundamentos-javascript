/** Crie uma função processarNumero que receba:
numero
callback

A função deve executar o callback passando o número. 
*/

const processarNumero = (numero, f) => f(numero);

const dobrarNumero = n => n * 2;

console.log(processarNumero(5, dobrarNumero));