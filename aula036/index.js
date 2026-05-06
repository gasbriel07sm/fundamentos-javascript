/**
 * For of
 */

//const nome = 'Luiz Otávio';
//
//for (let n of nome) {
//    console.log(n);
//}

const nomes = ['Luiz', 'Otávio', 'Henrique'];

for (let n of nomes) {
    console.log(n)
}

// forEach

nomes.forEach(function(elemento, indice) {
    console.log(elemento, indice)
});

// for clássico - iteráveis - arrays ou strings
// for in - retorna indice ou chave (string, array ou objetos)
// for of iteraveis, arrays ou strings)