/** Crie uma função calcularDesconto que receba:
preco
porcentagemDesconto

Se a porcentagem não for enviada, o desconto padrão deve ser 10.

Exemplo:

calcularDesconto(100); // 90
calcularDesconto(100, 20); // 80 
*/
console.log('\n------------------------------------------------------------')
console.log('FUNCTION DECLARATION\n')

function calcularDesconto(preco, porcentagemDesconto = 10) {
    return preco * (1 - (porcentagemDesconto / 100));
}

console.log(`Valor com desconto: ${calcularDesconto(100).toFixed(2)}`);
console.log(`Valor com desconto: ${calcularDesconto(100, 20).toFixed(2)}`); 


// arrow function
console.log('\n------------------------------------------------------------')
console.log('ARROW FUNCTION\n')

const calculaDesconto = (preco, porcentagemDesconto = 10) => preco * (1 - (porcentagemDesconto / 100));

console.log(`Valor com desconto: ${calculaDesconto(100).toFixed(2)}`);
console.log(`Valor com desconto: ${calculaDesconto(100, 20).toFixed(2)}`); 