// MAP - mapeando o array

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// dobre os número
const dobro = numeros.map(x => x * 2);
console.log(dobro);

// para cada elemento:
// adicione uma chave id em cada objeto
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]

// retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map(x => x.nome);
console.log(nomes);

// remova apenas a chave "nome" do objeto
const idades = pessoas.map(x => {
    delete x.nome; 
    return x;
});
console.log(idades);

const id = pessoas.map((x, i) => x.id = ((i + 1) * 100));
console.log(id);