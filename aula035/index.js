/**
 * Estrutura For in >> objeto e array
 *  Lê os índices ou chave do objeto
 */

const frutas = ['Pera', 'Maça', 'Uva']; // vetor

for (let i in frutas) {
    console.log(i, frutas[i]);
}

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Miranda',
    idade: 20
}

// acessar nomes -> por ponto ou ['nome da chave']
for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave])
}

