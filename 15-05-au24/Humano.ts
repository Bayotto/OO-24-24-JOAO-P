import { CartaUno } from "./Carta";
import { Jogador } from "./Jogador";
const rs = require("readline-sync");

export class Humano extends Jogador {
  constructor() {
    super();
  }

  receberUmacarta(item: CartaUno): void {
    this.maoCartas.unshift(item);
  }

  jogarUmaCarta(): CartaUno | undefined {
    return this.maoCartas.pop();
  }

  cartasNaMao(): number {
    return this.maoCartas.length;
  }

  escolherQualCartaJogar(): CartaUno | undefined {
    if (this.maoCartas.length > 0) {
      for (let i = 0; i < this.maoCartas.length; i++) {
        console.log(i + 1 + " " + this.maoCartas[i].getCor() + " " + this.maoCartas[i].getValor());
      }
      let opcao: number = -1;
      while (opcao > this.maoCartas.length || opcao < 0) {
        opcao = rs.questionInt("Qual carta você quer jogar?");
      }
      return this.maoCartas.splice(opcao, 1)[0];
    }
  }
}
