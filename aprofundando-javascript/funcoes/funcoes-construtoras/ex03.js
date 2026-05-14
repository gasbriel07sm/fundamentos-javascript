/** Crie uma constructor function Aluno.
Ela deve receber:
nome
notas

Onde notas é um array.
Adicione métodos:
calcularMedia()
verificarSituacao()

Regras:
Média maior ou igual a 7: Aprovado
Média entre 5 e 6.9: Recuperação
Média menor que 5: Reprovado
*/

function Aluno(nomes, notas) {
    this.nomes = nomes;
    this.notas = notas;

    this.calcularMedia = () => {
        let totalNotas = 0;
        notas.forEach(x => totalNotas += x);
        
        return totalNotas / notas.length;
    } 

    this.verificarStatus = () => {
        if (this.calcularMedia() >= 7) return `Aprovado`;
        if (this.calcularMedia() >= 5 && this.calcularMedia() < 7) return `Recuperação`;
        if (this.calcularMedia() < 5) return `Reprovado`;
    }
}

const aluno = new Aluno('Gabriel', [6, 6, 6]);
const media = aluno.calcularMedia();
const status = aluno.verificarStatus(); 

console.log(`MEDIA: ${media.toFixed(2)}`);
console.log(`STATUS: ${status}`);