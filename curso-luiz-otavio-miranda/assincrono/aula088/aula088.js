function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(false)

        setTimeout(() => {
        resolve(msg.toUpperCase() + '- Passe na promise');
         }, tempo)
    })
}

// Promise.all , Promise.race , Promise.resolve , Promise.reject

const promises = [
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
]

// retorna todos
//Promise.all(promises)
//.then(valor => console.log(valor))
//.catch(e => console.log(e));

// "corrida"
//Promise.race(promises)
//.then(valor => console.log(valor))
//.catch(e => console.log(e));

//function baixaPagina() {
//    const emCache = false;
//
//    if (emCache) {
//        return Promise.resolve('Página em cache')
//    } else {
//        return esperaAi('Baixei a página', 3000)
//    }
//}

function baixaPagina() {
    const emCache = true;
//

    if (emCache) {
        return Promise.reject('Página em cache')
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina()
.then(dados => console.log(dados))
.catch(e => console.log(e))