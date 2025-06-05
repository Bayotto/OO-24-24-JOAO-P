import { baralhoUno } from "./BaralhoUno";
import { Humano } from "./Humano";
import { CartaUno } from "./Carta";
import { Computador } from "./Computador";
import { Jogador } from "./Jogador";


const everton = new Humano()
const IA = new Computador()





const baralhudo = new baralhoUno();
console.log(baralhudo.cartaUno)
baralhudo.embaralharCarta()
console.log(baralhudo.cartaUno)
console.log(baralhudo.comprarUmaCarta())
const cartaComprada = baralhudo.comprarUmaCarta()
IA.receberUmacarta(cartaComprada);
//everton.cartasNaMao()
//IA.cartasNaMao()





// :)






