// FILTER + MAP + REDUCE
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// filtrar pares
// dobrar valores
// reudizr 

const numerosPares = numeros
    .filter(v => v % 2 === 0)
    .map(v => v * 2)
    .reduce((acc, v) => acc += v );
console.log(numerosPares);