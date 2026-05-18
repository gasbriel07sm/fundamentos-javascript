class ContaBancaria {
    #saldo
    constructor(saldo) {
        if (typeof saldoInicial !== 'number' || saldoInicial < 0) {
            throw new Error('Saldo inicial inválido');
        }
        this.saldo = saldo;
    }

    get saldo() {
        return this.#saldo;
    }

    depositar(valor) {
        if (typeof valor !== 'number' || valor <= 0) throw new Error('Depósito negado (valor menor que 0)');
        this.saldo += valor;
        console.log('Depósito realizado com sucesso, ' + this.verSaldo())
    }

    verSaldo() {
        return `Saldo: R$ ${this.saldo.toFixed(2)}`
    }
}

const conta = new ContaBancaria(500);
console.log(conta.verSaldo());

conta.depositar(250)
conta.depositar(100)
console.log(conta.verSaldo());
// conta.#saldo      
// conta.#saldo = 0  