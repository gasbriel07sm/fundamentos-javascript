/**
 * Atribuição por desestruturação (Objetos)
 */

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// const nome = pessoa.nome;
// console.log(nome);

// via desestruturação
const { nome = 'não existe', sobrenome, idade } = pessoa; // como é o mesmo nome pode somente fazer dessa forma
// valores padrão caso a chave não exista
console.log(nome, sobrenome, idade);


// caso quissesmos que tivesse um nome diferente:
const { nome: teste = '', sobrenome: teste2 } = pessoa;
console.log(teste, teste2)

// para pegar um objeto dentro de outro objeto:
const { endereco: { rua = 12345, numero }} = pessoa;
console.log(rua, numero)

// operador rest
const { nome: n, ...resto } = pessoa;
console.log(resto)