/**
 * Objeto Date
 */

const data = new Date();
console.log(data.toString());

// criar data -> new Date(); -> data atual
// criar data -> ano, mes, dia, hora, minuto, seg

const data2 = new Date(2026, 5, 6, 15, 14, 60);
console.log(data2.toString());

const data3 = new Date('2019-04-20 20:20:59');
console.log(data3.toString());

// dia
console.log('Dia ', data.getDate())
console.log('Mês ', data.getMonth() + 1)
console.log('Ano ', data.getFullYear())
console.log('Hora ', data.getHours())
console.log('Min ', data.getMinutes())
console.log('Seg ', data.getSeconds())
console.log('ms ', data.getMilliseconds())
console.log('Dia semana ', data.getDay())

console.log(Date.now()); // outra forma de instanciar a data

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}
 
function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora =zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data10 = new Date();
console.log(formataData(data10));

