// FUNÇÕES
// funções com argumentos
function saudacao(nome) {
    return `Olá ${nome} tudo bem?`;
}
const variavel = saudacao('LukeBlock');
console.log(variavel);

// valores padrao
function soma(x = 1, y = 1) {
    return x + y;
}
console.log(soma(2, 2));

// função anônima (jogar dentro da variável)
const raizQuadrada = function (n) {
    return Math.sqrt(n);
};
console.log(raizQuadrada(9));

// arrow function
const expo = (n, m) => Math.pow(n, m);
console.log(expo(4,3));

