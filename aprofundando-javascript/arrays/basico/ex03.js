// Crie um array de objetos chamado alunos.
/** Exiba o nome do primeiro aluno.
    Exiba a nota do último aluno.
    Altere a nota da Ana para 7.
    Adicione um novo aluno.
    Remova o último aluno.
    Exiba o array final. 
*/

const alunos = [
  { nome: 'Gabriel', nota: 8 },
  { nome: 'Ana', nota: 6 },
  { nome: 'Carlos', nota: 9 },
  { nome: 'Marina', nota: 5 }
];

console.log(alunos[0].nome);
console.log(alunos[alunos.length - 1].nome);

alunos[1].nota = 7;
console.log(alunos);

alunos.push({ nome: 'Antônio', nota: 10});
console.log(alunos);

alunos.pop();
console.log(alunos);