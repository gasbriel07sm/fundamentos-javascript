export default class Animal {
    constructor(nome) {
        this.nome = nome
    }

    fazerSom() {
        return `${this.nome} faz: Som genérico`;
    }
}