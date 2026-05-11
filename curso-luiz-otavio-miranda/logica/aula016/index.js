// ARRAYS - coleção de coisas
// criar arrays:
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos)

console.log([0]); // acessar por meio de indices

alunos[0] = 'Eduardo'; // editar alguma posição do array
console.log(alunos);

alunos.push('Hello'); // adicionando um elemento no final dele
alunos.unshift('Luiza'); // adicionando um elemento no início

console.log(alunos.length) // tamanho do array

alunos.pop() // remove o ultimo elemento do array - podemos salvar um elemento removido do array

delete alunos[0];
console.log(alunos) // remover um elemento deixando o índice vazio usamos delete

// fatiar um array
console.log(alunos.slice(0, 3));

console.log(typeof alunos); // array é considerado um objeto