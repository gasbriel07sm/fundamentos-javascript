class Pessoa {
    #nome
    #idade
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    get nome() {
        return this.#nome;
    }

    set nome(nome) {
        if (!nome) throw new Error('Nome inválido')
        this.#nome = nome;
    }

    get idade() {
        return this.#idade;
    }

    set idade(idade) {
        this.#idade = idade;
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`
    }
}

const p1 = new Pessoa("Ana", 30)
const p2 = new Pessoa("Carlos", 25)

console.log(p1.apresentar());
console.log(p2.apresentar());

//console.log(p1.#nome);

