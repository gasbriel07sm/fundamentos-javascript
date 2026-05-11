// DECLARAÇÕES DE FUNÇÕES

// declaração padrão (hoisting) -> a função é elevada para cima (elevação de variáveis com var e funções com esssa declaração)
// ou seja, podemos chamar a função sem ter declarado ela ainda, pois ela será elevada ao topo no início da execução

falaOi();

function falaOi() {
    console.log('Oi');
}

// first-class objects (Objetos de primeira classe) -> a função pode ser tratada como dados
// podemos passar para outras funções

// EXPRESSÃO DE FUNÇÃO (FUNCTIONS EXPRESSION)
const souUmDado = function() {
    console.log('Sou um dado.');
};

souUmDado();

// parâmetros/argumentos são os que passamos entre parênteses de uma função
function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:')
    funcao();
}

executaFuncao(souUmDado);

// Arrow-Functions

const funcaoArrow = () => console.log('Sou uma arrow function');
funcaoArrow();

// Dentro de um objeto

const obj = {
    falar() {console.log('Estou falando...')}
};

obj.falar();