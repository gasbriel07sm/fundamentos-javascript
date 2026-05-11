// LOOP WHILE (INDEFINIDO - sem certeza de quantas vezes vamos iterar nele)

let n = 0;

while (n < 10) {
    console.log(`Repetindo pela ${n + 1}º vez`);
    n++;
}

// FATORIAL

n = 10;
let fat = 1;

while (n >= 1) {
    fat *= n;
    n--;
}

console.log(`Fatorial é igual a ${fat}`)