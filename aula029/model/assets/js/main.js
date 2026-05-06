
const texto = document.querySelector('.container h1');
const data = new Date();

// texto.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'})

function getNomeMes(numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    return meses[numeroMes];
}

function getDiaSemana(diaSemana) {
    const diasSemana = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
    return diasSemana[diaSemana];
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function criarData (data) {
    const nomeDia = getDiaSemana(data.getDay());
    const nomeMes = getNomeMes(data.getMonth())
    return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ` +
           `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
}

texto.innerHTML = criarData(data)