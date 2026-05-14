/** Crie uma função executar que recebe outra função como parâmetro e executa essa função.
Depois faça o mesmo usando arrow function.
*/

const executar = (f, nome) => console.log(f(nome));
const saudar = nome => `Olá, ${nome}`;

executar(saudar, 'Gabriel');