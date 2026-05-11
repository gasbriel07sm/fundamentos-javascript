// CLOSURES
function retornaFuncao(nome) {
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('Joao');
console.log(funcao());