const usuarios = [
  { nome: 'Gabriel', idade: 20, ativo: true },
  { nome: 'Ana', idade: 17, ativo: true },
  { nome: 'Carlos', idade: 25, ativo: false },
  { nome: 'Marina', idade: 30, ativo: true },
  { nome: 'João', idade: 15, ativo: false }
];

// São maiores de idade.
// Estão ativos.

const usuariosFiltrados = usuarios.filter(x => x.idade >= 18 && x.ativo);
console.log(usuariosFiltrados);