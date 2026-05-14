class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            configurable: false,
            enumerable: true,
            value: cpfEnviado.replace(/\D+/g, '')
        }) 
    }

    isSequencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    gerarNovoCpf() {
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito01 = this.geraDigito(cpfParcial);
        const digito02 = this.geraDigito(cpfParcial + digito01);

        this.novoCpf = cpfParcial + digito01 + digito02;
    }

    geraDigito(cpfParcial) {
        let total = 0;
        let reverso = cpfParcial.length + 1;

        for (let i of cpfParcial) {
            total += reverso * Number(i);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.isSequencia()) return false;

        this.gerarNovoCpf();
        
        return this.novoCpf === this.cpfLimpo;
    }
}

const validaCpf = new ValidaCPF('483.571.980-82')

if (validaCpf.valida()) {
    console.log('CPF VÁLIDO');
} else {
    console.log('CPF INVÁLIDO')
}