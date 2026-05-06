/**
 * For clássico - Estruturas de Repetição
 */

for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}

for (let i = 0; i <= 10; i++) {
    const par = i % 2 == 0 ? 'par' : 'ímpar';
    console.log(i, par);
}

// percorrer um array

const frutas = ['Maça', 'Pera', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}