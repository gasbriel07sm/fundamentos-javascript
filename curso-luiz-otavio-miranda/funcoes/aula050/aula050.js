// PARÂMETROS DE UMA FUNÇÃO
// somente funções declaradas com function possui esses argumentos que sustenta todos os argumentos enviados
// arguments pega todos os elementos passados mesmo sem que a função pessa parâmetros
function funcao(a = 0, b = 0) {
//  let total = 0;
//  for (let arg of arguments) {
//      total += arg;
//  }
    console.log(a + b);
}
funcao(1);
// coloca valor padrão caso não sejam passados esses valores.

// atribuição via desestruturação - OBJETO
function funcao2 ({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}

let obj = {nome: 'Luiz', sobrenome: 'Otávio', idade: 20}
funcao2(obj);

// atribuição via desestruturação - ARRAY

function funcao3 ([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

funcao3(['Luiz','Miranda', 20]);

// FUNÇÃO DE CONTA 
// usando rest operator para fazer a conta de todos os números passados por parâmetro
// sempre deve ser o último, pois ele irá pegar o restante dos números
function conta(operador, acumulador, ...numeros) {
    for (let n of numeros) {
        if (operador === '+') acumulador += n;
        if (operador === '-') acumulador -= n;
        if (operador === '/') acumulador /= n;
        if (operador === '*') acumulador *= n;

    }
    console.log(acumulador)
}

conta('*', 1, 20, 30, 40, 50);

// function expression

const count = function (...args) {
    console.log(args)
};
count('+', 1, 20, 30, 40, 50);

