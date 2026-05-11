/**
 * Operadores Lógicos
 * && -> AND (só é verdadeiro somente se as duas condições forem verdadeiras)
 * || -> OR (é verdadeiro se ao menos uma das condições for verdadeira)
 * ! -> NOT (inversão lógica)
 */

console.log(10 > 5 && 8 < 5);
console.log(11 > 4 && 6 < 8);

console.log(10 > 6 || 9 < 0);
console.log(10 < 4 || 4 < 3);

console.log(! 10 > 5);

/**
 * Valores avaliados como false (falsy):
 * false, 0, NaN, undefined, "" '' `` (string vazia), null
 * 
 * o resto tudo é avaliado como true
 */