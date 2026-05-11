function meuEscopo() {

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    /*
    form.onsubmit = function (evento) {
        evento.preventDefault();
    };
    */

    const pessoas = [];

    function criarPessoa(nome, sobrenome, peso, altura) { 
        return {nome, sobrenome, peso, altura}
    };

    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');    
        pessoas.push(criarPessoa(nome.value, sobrenome.value, peso.value, altura.value));

        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} == ${Number(peso.value).toFixed(2)} kg com ${Number(altura.value).toFixed(2)} m.  </p><br/>`
        
        console.log(pessoas);
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();