// Crie um array chamado numeros.
/** Adicione o número 60 no final.
    Adicione o número 5 no começo.
    Remova o último número.
    Remova o primeiro número.
    Exiba o array final. 
*/

const numeros = [10, 20, 30, 40, 50];
console.log(numeros);

// adicionar número 60 no final
numeros.push(60);
console.log(numeros);

// adicionar número 5 no começo
numeros.unshift(5);
console.log(numeros);

// remover último elemento
numeros.pop();
console.log(numeros);

// remover o primeiro elemento
numeros.shift();
console.log(numeros);

