/** Crie uma constructor function Produto.

Ela deve ter:

nome
preco
quantidade

E um método:
calcularTotal()
*/

function Produto(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;

    this.calcularTotal = () => this.quantidade * this.preco ;
}

const produto = new Produto('Notebook', 2500, 2); 
const total = produto.calcularTotal();

console.log(`TOTAL: ${total.toFixed(2)}`);