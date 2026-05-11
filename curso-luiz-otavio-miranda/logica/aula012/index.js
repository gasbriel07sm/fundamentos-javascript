let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
console.log(varA, varB, varC);

// método básico (variável temporária)
let temp;
temp = varA;
varA = varB;
varB = varC;
varC = temp;
console.log(varA, varB, varC);

// método com vetor
varA = 'A'; //B
varB = 'B'; //C
varC = 'C'; //A
[varA, varB, varC] = [varB, varC, varA]; 
console.log(varA, varB, varC);
