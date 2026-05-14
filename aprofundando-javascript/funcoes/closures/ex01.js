// Crie uma função criarSaudacao que receba um nome e retorne outra função.

//const criarSaudacao = nome => {
//    return function() {
//       return console.log(`Olá, ${nome}`);
//    }
//}

const criarSaudacao = nome => () => console.log(`Olá, ${nome}`);

const saudarGabriel = criarSaudacao('Gabriel');
saudarGabriel(); 