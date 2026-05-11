// factory - fábrica de objetos
criaPessoa = (nome, sobrenome, idade) => { return {nome, sobrenome, idade} }

const pessoa1 = criaPessoa('Luiz', 'Otavio', 25)
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

const pessoa2 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
    },

    incrementaIdade() { 
        this.idade++
    }
}

pessoa2.fala();
pessoa2.incrementaIdade();
pessoa2.fala();

