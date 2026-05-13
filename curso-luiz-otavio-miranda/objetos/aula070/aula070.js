// objeto literal é feito com {}

// um objeto é formado com chave e valor
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

// console.log(pessoa['nome']); >> notação com colchetes
console.log(pessoa.nome);
console.log(pessoa.sobrenome);

// new Object(); >> criando array por meio de construtor

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';

console.log(pessoa);
console.log(pessoa1);

// apagar alguma chave
console.log('-----------')
delete pessoa1.nome
console.log(pessoa1);

// métodos -> funções dentro dos objetos (acessos a informações dentro dos objetos)

const pessoa2 = new Object();
pessoa2.nome = 'Luiz';
pessoa2.idade = 30;
pessoa2.falarNome = function() {
    return `${this.nome} está falando seu nome`
}
pessoa2.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa2.getDataNascimento());

for (let chave in pessoa2) {
    console.log(chave + ": " + pessoa2[chave]);
}


// TIPOS DE FUNÇÕES PARA CRIAR OBJETOS
// FACTORY FUNCTIONS
console.log("\nFACTORY FUNCTION \n")
function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otavio');
console.log(p1.nomeCompleto)

// CONSTRUCTION FUNCTIONS
console.log("\CONSTRUCTION FUNCTION \n")
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Object.freeze(this); >> trava o objeto
}

// new cria um objeto vazio {} <- this (atrela this a função) e retorna this também (retorna o objeto)
const p = new Pessoa('Luiz', 'Miranda');
console.log(p);
 