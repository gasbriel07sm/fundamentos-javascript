function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function mostrarResultado(mensagem, valido) {
        resultado.textContent = mensagem;
        resultado.style.backgroundColor = valido ? '#4bb2c9' : '#ff6b6b';
        resultado.style.color = '#fff';
        resultado.style.padding = '10px';
        resultado.style.marginTop = '20px';
    }

    function calcularClassificacao(imc) {
        if (imc < 18.5) return 'ABAIXO DO PESO';
        if (imc < 25) return 'PESO NORMAL';
        if (imc < 30) return 'SOBREPESO';
        if (imc < 35) return 'OBESIDADE GRAU I';
        if (imc < 40) return 'OBESIDADE GRAU II';

        return 'OBESIDADE GRAU III';
    }

    form.onsubmit = function (evento) {
        evento.preventDefault();

        const peso = Number(document.getElementById('peso').value.replace(',', '.'));
        const altura = Number(document.getElementById('altura').value.replace(',', '.'));

        if (peso <= 0 || Number.isNaN(peso)) {
            mostrarResultado('Peso inválido', false);
            return;
        }

        if (altura <= 0 || Number.isNaN(altura)) {
            mostrarResultado('Altura inválida', false);
            return;
        }

        const imc = peso / (altura ** 2);
        const classificacao = calcularClassificacao(imc);

        mostrarResultado(`IMC = (${imc.toFixed(2)}) - ${classificacao}`, true);
    };
}

meuEscopo();
meuEscopo();