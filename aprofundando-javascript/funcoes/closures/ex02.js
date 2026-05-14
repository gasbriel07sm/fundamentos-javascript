/** Crie uma função criarMultiplicador.
    Ela deve receber um número multiplicador e retornar uma função que recebe outro número. 
*/

//const criarMultiplicador = n => {
//    return function(num) {
//        return n * num;
//    }
//}

const criarMultiplicador = mult => num => mult * num;

const duplicar = criarMultiplicador(2);
const triplicar = criarMultiplicador(3)

console.log(duplicar(3));
console.log(triplicar(3));

