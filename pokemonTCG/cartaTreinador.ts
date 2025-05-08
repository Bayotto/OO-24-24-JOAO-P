import { Carta } from "./carta";

class CartaTreinador extends Carta {
    descricao: string;

    constructor(nome: string, tipo: string, descricao: string) {
        super(nome, tipo); // Chama o construtor da classe mãe
        this.descricao = descricao;
    }

    exibirCarta(): void {
        super.exibirCarta(); // Exibe as propriedades da classe mãe
        console.log(`Descrição: ${this.descricao}`);
    }
}