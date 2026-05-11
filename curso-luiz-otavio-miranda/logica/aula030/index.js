const verdadeira = true;

// let tem escopo de bloco {...bloco }
// var só tem escopo de função

let nome = 'Luiz';
var nome2 = 'Luiz';

if (verdadeira) {
    let nome = 'Otávio';
    var nome2 = 'Rogério';
    console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'Outra coisa';
        console.log('OK');
        var nome2 = 'Ronaldo';
    }
}

function falaOi() {
    var sobrenome = 'Miranda';

    if (verdadeira) {
        let nome = 'Luiz';
        console.log(sobrenome);
    }

    console.log(nome); // nome is not defined
}

falaOi();

// hoisting -> gera undefined ao criar variáveis com "var" joga pra cima a declaração dessas variáveis

console.log(sobrenome);
var sobrenome = 'Miranda';