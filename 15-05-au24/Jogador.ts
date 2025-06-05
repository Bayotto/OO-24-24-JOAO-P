import { CartaUno } from "./Carta"
import { baralhoUno } from "./BaralhoUno"

export abstract class Jogador {
    maoCartas:Array<CartaUno>

    
    receberUmacarta(item:CartaUno):void{
        this.maoCartas.unshift(item)
    };

    jogarUmaCarta():CartaUno | undefined{
       return this.maoCartas.pop();
    };  
    
     //verificar 
     cartasNaMao():number{
        return this.maoCartas.length
    };
};    

