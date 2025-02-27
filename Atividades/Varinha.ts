export class Varinha {
    private madeira!:string;
    private nucleo!:string;
    private tamanho!:string;


    setMadeira(madeiraRecebida:string):void {
        this.madeira = madeiraRecebida
    };
    setNucleo(nucleoRecebido:string):void {
        this.nucleo = nucleoRecebido
    };
    setTamanho(tamanhoRecebido:string):void {
        this.tamanho = tamanhoRecebido
    };


    
    getMadeira():string {
        return this.madeira
    };
    getNucleo():string {
        return this.nucleo
    };
    getTamanho():string {
        return this.tamanho
    };

    exibirDetalhes() {
        console.log(`Varinha de madeira de ${this.madeira}, nucleo de ${this.nucleo} e tamanho ${this.tamanho}.`)
    };
}

let varinha1:Varinha = new Varinha();
varinha1.setMadeira("Carvalho silvestre");
varinha1.setNucleo("Pelo de Unicornio");
varinha1.setTamanho("do Monte Everest");

varinha1.exibirDetalhes();