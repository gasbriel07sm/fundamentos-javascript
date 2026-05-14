/** Crie uma função apresentarPessoa que receba:
nome
idade
cidade

E retorne:
Meu nome é Gabriel, tenho 20 anos e moro em Araxá. 
*/
console.log('\n------------------------------------------------------------')
console.log('FUNCTION DECLARATION\n')

function apresentarPessoa(nome, idade, cidade) {
    return `Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}`;
} 

console.log(apresentarPessoa('Gabriel', 20, 'Araxá'));

// utilizando arrow function
console.log('\n------------------------------------------------------------')
console.log('ARROW FUNCTION\n')

const apresentacao = (nome, idade, cidade) => `Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}`;

console.log(apresentacao('Gabriel', 20, 'Araxá'));