/** Crie uma função construtora Pessoa.

Ela deve receber:
nome
idade
*/

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const pessoa1 = new Pessoa('Gabriel', 20);
console.log(pessoa1);