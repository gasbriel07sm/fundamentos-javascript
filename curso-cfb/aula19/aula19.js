// DECLARAÇÕES BREAK E CONTINUE
// BREAK quebra e para a execução
// CONTINUE para somente aquela iteração e pula para a próxima e continua o loop

let n = 0;
let max = 1000;
let pares = 0;

while (n < max) {
    if (n > 10) {
        break;
    }

    n++;
}
console.log("Fim do programa;")


for (let i = n; i < max; i++) {    
    if (i % 2 !== 0) {
        continue; // pula somente essa execução
    }
    pares++    
}
console.log("Quantidade de pares: " + pares)
console.log("Fim do programa;")