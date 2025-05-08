import { Carta } from "./carta";

class CartaItem extends Carta {
    efeito: string;

    constructor(nome: string, tipo: string, efeito: string) {
        super(nome, tipo); // Chama o construtor da classe mãe
        this.efeito = efeito;
    }

    exibirCarta(): void {
        super.exibirCarta(); // Exibe as propriedades da classe mãe
        console.log(`Efeito: ${this.efeito}`);
    }
}