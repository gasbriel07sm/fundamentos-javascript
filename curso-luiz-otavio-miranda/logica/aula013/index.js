let umaString = 'Um \"texto\"'; // escapando o caractere com aspas
umaString = 'Um \\espaçamento\\'; // escapando barra invertida
umaString = 'Um \'espaçamento\''; // \' escapa aspas simples
umaString = 'Um \t\t espaçamento'; // \t causa um espaçamento

// maiúscula 
console.log(umaString.toUpperCase());

// minúscula
console.log(umaString.toLowerCase());

// Strings são indexadas
umaString = 'Um texto';
console.log(umaString[4]); // visualizar a letra na posição 4, lembrando que começa do 0
// algo fora do range retorna undefined
console.log(umaString.charAt(5)); // outra forma de visualizar o elemento de alguma posição
// algo fora do range retorna um valor vazio
console.log(umaString.concat(", em um lindo dia"));
// o método concat() significa a mesma coisa que o sinal de + (concatenando valores)

// pesquisando por um indice 
console.log(umaString.indexOf('texto')); // retorna o índice que começa o que foi passado
console.log(umaString.indexOf('texto', 3)); // retorna o índice que começa a palavra que foi passado por parametro a partir do indice passado no segundo parâmetro
console.log(umaString.lastIndexOf('texto')); // retorna o índice que começa o que foi passado contando do final para o primeiro 

// expressões regulares
console.log(umaString.match(/[a-z]/g)); // retorna todas as letras minusculas
console.log(umaString.search(/[a-z]/g)); // retorna quando foi encontrado
console.log(umaString.replace('Um', 'Outra')); // retorna todas as letras minusculas

// tamanho total da string
console.log(umaString.length);

// fatiar
console.log(umaString.slice(2, 6)); // o ultimo parametro nao é incluso, pode utilizar negativo, que começa do final
console.log(umaString.substring(umaString.length - 5, umaString.length - 1));

// dividir com base em um caractere
console.log(umaString.split(" ")); // dividir com base no espaço, o segundo parâmetro será o limite estabelecido

