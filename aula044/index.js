try {
    console.log('Abri um arquivo');
} 
catch (e) {
    console.log("Erro")
    //executado quando há erros
}
finally {
    console.log("Fechar arquivo")
    //será executado sempre
}

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('ESPERANDO INSTÂNCIA DE DATE')
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try {
    const hora = retornaHora(111);
    console.log(hora)
}
catch(e) {
    // tratando o erro.
}
finally {
    console.log('ok')
}