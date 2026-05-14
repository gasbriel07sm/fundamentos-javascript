/** Crie uma função criarContador.

Ela deve retornar um objeto com três métodos:
incrementar()
decrementar()
verValor()

Exemplo:
const contador = criarContador();

contador.incrementar();
contador.incrementar();
contador.decrementar();

console.log(contador.verValor()); // 1

A variável do contador não pode ser acessada diretamente de fora. 
*/


const criarContador = (n) => {
    return {
        incrementar() { n++ },
        decrementar() { n-- },
        verValor() { return n }  
    }
}

const valor = 10;
const contador = criarContador(valor);

contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.decrementar();

console.log(contador.verValor()); 
