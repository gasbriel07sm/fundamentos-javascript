// FUNÇÕES FÁBRICA (FACTORY FUNCTIONS)
// função dentro de um objeto -> método
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, sobrenome,

         get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando sobre nada') {return `${this.nome} está ${assunto}`},

        altura,
        peso,

        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2);
        }
    };
}

// transformar um método em um atributo -> (get)
// setar valores com (set)

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());