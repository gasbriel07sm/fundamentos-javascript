
const texto = document.querySelector('.container h1');
const data = new Date();

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}
function diaSemana (diaSemana) {
    switch (diaSemana) {
        case 0:
            return "domingo"
        case 1:
            return "segunda-feira"
        case 2:
            return "terça-feira"
        case 3:
            return "quarta-feira"
        case 4:
            return "quinta-feira"
        case 5:
            return "sexta-feira"
        case 6:
            return "sábado"
        default:
            return "dia não cadastrado"                            
    }
}
function mes (mes) {
    switch (mes) {
        case 0:
            return "janeiro"
        case 1:
            return "fevereiro"
        case 2:
            return "março"
        case 3:
            return "abril"
        case 4:
            return "maio"
        case 5:
            return "junho"
        case 6:
            return "julho"
        case 7:
            return "agosto"
        case 8:
            return "setembro"
        case 9:
            return "outubro"
        case 10:
            return "novembro"
        case 11:
            return "dezembro"                    
        default:
            return "dia não cadastrado"                            
    }
}
function criarData(data) {
    const nomeDia = diaSemana(data.getDay());
    const nomeMes = mes(data.getMonth());
    return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${data.getHours()}:${zeroAEsquerda(data.getMinutes())}`
}

texto.innerHTML = criarData(data);