/** Crie uma função chamada executarOperacao.

Ela deve receber:
numero1
numero2
operacao

A operação pode ser:
'+'
'-'
'*'
'/'
'**'

Exemplo:

executarOperacao(10, 5, 'multiplicar'); // 50

Faça uma versão com function declaration e outra com arrow function. 
*/

console.log('\n------------------------------------------------------------')
console.log('FUNCTION DECLARATION\n')

function executarOperacao(n1, n2, operacao) {
    const mensagem = `O resultado da operação (${operacao}) entre os números ${n1} e ${n2} é igual a `;
    if (operacao === '+' || operacao.toLowerCase() === 'soma') return `${mensagem} ${n1 + n2}`;
    if (operacao === '-' || operacao.toLowerCase() === 'subtracao') return `${mensagem} ${n1 - n2}`;
    if (operacao === '*' || operacao.toLowerCase() === 'multiplicacao') return `${mensagem} ${n1 * n2}`;
    if (operacao === '/' || operacao.toLowerCase() === 'divisao') return `${mensagem} ${n1 / n2}`;
    if (operacao === '**' || operacao.toLowerCase() === 'exponenciacao') return `${mensagem} ${n1 ** n2}`;
    return `Operação não encontrada ou cadastrada!`;
}

const n1 = 10;
const n2 = 5;

console.log(executarOperacao(n1, n2, '+'));
console.log(executarOperacao(n1, n2, '-'));
console.log(executarOperacao(n1, n2, '*'));
console.log(executarOperacao(n1, n2, '/'));
console.log(executarOperacao(n1, n2, '**'));
// OU
//console.log(executarOperacao(10, 5, 'soma'));
//console.log(executarOperacao(10, 5, 'subtracao'));
//console.log(executarOperacao(10, 5, 'multiplicacao'));
//console.log(executarOperacao(10, 5, 'divisao'));
//console.log(executarOperacao(10, 5, 'exponenciacao'));


// usando arrow function

console.log('\n------------------------------------------------------------')
console.log('ARROW FUNCTION\n')

const executaOperacao = (a1, a2, operacao) => {
    const mensagem = `O resultado da operação (${operacao}) entre os números ${a1} e ${a2} é igual a `;
    if (operacao === '+' || operacao.toLowerCase() === 'soma') return `${mensagem} ${a1 + a2}`;
    if (operacao === '-' || operacao.toLowerCase() === 'subtracao') return `${mensagem} ${a1 - a2}`;
    if (operacao === '*' || operacao.toLowerCase() === 'multiplicacao') return `${mensagem} ${a1 * a2}`;
    if (operacao === '/' || operacao.toLowerCase() === 'divisao') return `${mensagem} ${a1 / a2}`;
    if (operacao === '**' || operacao.toLowerCase() === 'exponenciacao') return `${mensagem} ${a1 ** a2}`;
    return `Operação não encontrada ou cadastrada!`;
}

const a1 = 10;
const a2 = 5;

console.log(executarOperacao(a1, a2, '+'));
console.log(executarOperacao(a1, a2, '-'));
console.log(executarOperacao(a1, a2, '*'));
console.log(executarOperacao(a1, a2, '/'));
console.log(executarOperacao(a1, a2, '**'));

