// FILTER - filtrando o array
// sempre retorna um array, com a mesma quantidade de elementos ou menos

// retornar os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosMaiores10 = numeros.filter(x => x > 10);
// função de callback que itera sobre todos os elementos do array
console.log(numerosMaiores10);

// retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos
// retorne as pessoas cujo o nome termina com a

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]

const pessoasFiltradas01 = pessoas.filter(x => x.nome.length >= 5);
console.log(pessoasFiltradas01);

const pessoasFiltradas02 = pessoas.filter(x => x.idade > 50);
console.log(pessoasFiltradas02);

const pessoasFiltradas03 = pessoas.filter(x => x.nome.toLowerCase().endsWith('a'));
console.log(pessoasFiltradas03);