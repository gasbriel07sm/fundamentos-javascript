import Animal from './Animal.js' 
class Cachorro extends Animal {
    // como o construtor não está fazendo nada além de repassar os args da classe pai, podemos omitir o construtor
    //constructor(nome) {
    //    super(nome);
    //}

    fazerSom() {
        return `${this.nome} faz: Au au!`;
    }
}
const animal = new Animal("Bicho")
const dog = new Cachorro("Rex")

console.log(animal.fazerSom());
console.log(dog.fazerSom());
//
console.log(dog instanceof Cachorro)
console.log(dog instanceof Animal)