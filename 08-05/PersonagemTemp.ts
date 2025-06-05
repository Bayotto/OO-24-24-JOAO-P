export class PersonagemTemporal{
    nome:string;
    universo:string;
    assinaturaTemporal:number;

    constructor(nomeConst:string,universo:string,assinaturaTemporal:number){
        this.nome = nomeConst
        this.universo = universo
        this.assinaturaTemporal = assinaturaTemporal
    };

    exibirInformações():void{
        console.log(this)
    }

    
}

let perso = new PersonagemTemporal("Homem Aranha","Terra",2)

perso.exibirInformações()
