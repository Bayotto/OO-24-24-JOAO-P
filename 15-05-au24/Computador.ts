import { CartaUno } from "./Carta";
import { Jogador } from "./Jogador";


export class Computador extends Jogador {

    
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

    jogarUmaCartaPC():CartaUno | undefined{
        console.log(`O computador jogo a carta ${this.maoCartas}`)
        return this.maoCartas[this.maoCartas.length-1]
        
    };
}