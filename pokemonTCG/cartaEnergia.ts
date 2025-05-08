import { Carta } from "./carta";

class CartaEnergia extends Carta {
    valor: number;

    constructor(nome: string, tipo: string, valor: number) {
        super(nome, tipo); // Chama o construtor da classe mãe
        this.valor = valor;
    }

    exibirCarta(): void {
        super.exibirCarta(); // Exibe as propriedades da classe mãe
        console.log(`Valor: ${this.valor}`);
    }
}

