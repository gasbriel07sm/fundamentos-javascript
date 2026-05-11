const nome = 'Luiz Otávio Miranda';
const idade = 30;
let anoNascimento = 2026 - idade;
const peso = 64;
const altura = 1.58;
let imc = peso / Math.pow(altura, 2);

console.log(`${nome} tem ${idade}, pesa ${peso} kg`);
console.log(`tem ${altura} de altira e seu IMC é de ${imc.toFixed(2)}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);