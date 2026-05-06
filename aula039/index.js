// Continue 0 continua para próxima iteração
// Break sai do laço 

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const num of numeros) {
    if (num == 2) {
        continue; // irá ignorar e volta para o começo laço (pula)
    }

    if (num == 4) {
        break; // sai do laço
    }

    console.log(num);
}