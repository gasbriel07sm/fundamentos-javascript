let num1 = 1;
let num2 = 2.5;

// converter para uma string (toString())
console.log(num1.toString() + num2);

// número binário
console.log(num1.toString(2));

// arredondar com casas decimais (toFixed())
let num = 10.54548446;
console.log(num.toFixed(2))

// verificar se um número é inteiro
console.log(Number.isInteger(num));

// verificar se é NaN
console.log(Number.isNaN(num * 'Ola'));

// Imprecisão, somente usar toFixed com Number
