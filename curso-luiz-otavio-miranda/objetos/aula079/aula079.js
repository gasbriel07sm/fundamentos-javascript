const falar = {
    falar() {
        console.log(`${this.nome} falando`)
    }
}

const comer = {
    beber() {
        console.log(`${this.nome} bebendo`)
    },
}

const beber = {
    comer() {
        console.log(`${this.nome} comendo`)
    },
}
const pessoaPrototype = {...falar, ...comer, ...beber};

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1);
console.log(p1.falar())