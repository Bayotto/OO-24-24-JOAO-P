import { CartaUno } from "./Carta";

export class baralhoUno {
  cartaUno: Array<CartaUno>;

  constructor() {
    this.cartaUno = [
      new CartaUno("azul", "1"),
      new CartaUno("azul", "2"),
      new CartaUno("azul", "3"),
      new CartaUno("azul", "4"),
      new CartaUno("azul", "5"),
      new CartaUno("azul", "6"),
      new CartaUno("azul", "7"),
      new CartaUno("azul", "8"),
      new CartaUno("azul", "9"),
      new CartaUno("azul", "0"),
      new CartaUno("vermelho", "1"),
      new CartaUno("vermelho", "2"),
      new CartaUno("vermelho", "3"),
      new CartaUno("vermelho", "4"),
      new CartaUno("vermelho", "5"),
      new CartaUno("vermelho", "6"),
      new CartaUno("vermelho", "7"),
      new CartaUno("vermelho", "8"),
      new CartaUno("vermelho", "9"),
      new CartaUno("vermelho", "0"),
      new CartaUno("verde", "1"),
      new CartaUno("verde", "2"),
      new CartaUno("verde", "3"),
      new CartaUno("verde", "4"),
      new CartaUno("verde", "5"),
      new CartaUno("verde", "6"),
      new CartaUno("verde", "7"),
      new CartaUno("verde", "8"),
      new CartaUno("verde", "9"),
      new CartaUno("verde", "0"),
      new CartaUno("amarelo", "1"),
      new CartaUno("amarelo", "2"),
      new CartaUno("amarelo", "3"),
      new CartaUno("amarelo", "4"),
      new CartaUno("amarelo", "5"),
      new CartaUno("amarelo", "6"),
      new CartaUno("amarelo", "7"),
      new CartaUno("amarelo", "8"),
      new CartaUno("amarelo", "9"),
      new CartaUno("amarelo", "0"),
      new CartaUno("vermelho", "Inverter"),
      new CartaUno("verde", "Inverter"),
      new CartaUno("azul", "Inverter"),
      new CartaUno("amarelo", "Inverter"),
      new CartaUno("vermelho", "Bloquear"),
      new CartaUno("verde", "Bloquear"),
      new CartaUno("amarelo", "Bloquear"),
      new CartaUno("azul", "Bloquear"),
      new CartaUno("amarelo", "Mais 2"),
      new CartaUno("vermelho", "Mais 2"),
      new CartaUno("verde", "Mais 2"),
      new CartaUno("azul", "Mais 2"),
      new CartaUno("preto", "Mais 4")
    ];
  }

  baralhoInicial() {
    return this.cartaUno;
  }

  embaralharCarta(): void {
    this.embaralhar(this.cartaUno);
  }

  private embaralhar(lista: Array<CartaUno>) {
    for (let indice = lista.length; indice; indice--) {
      const indiceAleatorio = Math.floor(Math.random() * indice);
      const elemento = lista[indice - 1];
      lista[indice - 1] = lista[indiceAleatorio];
      lista[indiceAleatorio] = elemento;
    }
  }

  comprarUmaCarta(): CartaUno{
    return this.cartaUno.shift();
  }

  baralhoVazio(): boolean {
    return this.cartaUno.length === 0;
  }
}

/*
exemplo: 

const caralho = new baralhoUno();
console.log(caralho.cartaUno)
caralho.embaralharCarta()
console.log(caralho.cartaUno)
*/