import { ArvoreGenealogica } from "./ArvoreGene";
import { Pessoa } from "./Pessoa";
import { Relacionavel } from "./Relacionavel";

const avô = new Pessoa("Laudinor", "Appelt","23-11-1950","Masculino",)
const avó = new Pessoa("Ledi","Desbesel","2-705-1956","Feminino",)
const mãe = new Pessoa("Denise", "Desbesel Appelt","20-02-1985","Feminino",)
const filho = new Pessoa("João Pedro", "Desbesel Appelt","24-07-2007","Masculino",)  

const arvore1 = new ArvoreGenealogica(avô)
const arvore2 = new ArvoreGenealogica(avó)
filho
console.log(filho.adicionarRelacao(mãe))
console.log(arvore1,filho,mãe,avó)