class Temperatura {
    #celsius
    constructor(celsius) {
        this.#celsius = celsius;
    }

    get celsius() {
        return this.#celsius;
    }

    get fahrenheit() {
        return (this.#celsius * 1.8 + 32);
    }

    set fahrenheit(valor) {
        if (typeof valor !== 'number') throw new Error('Valor não correspondente');
        this.#celsius = (valor - 32) / 1.8;
    }
}

const t = new Temperatura(0)

console.log(t.fahrenheit) 
t.fahrenheit = 212         // seta em Fahrenheit
console.log(t.celsius)     // lê convertido de volta em Celsius
t.fahrenheit = 98.6
console.log(t.celsius.toFixed(1))