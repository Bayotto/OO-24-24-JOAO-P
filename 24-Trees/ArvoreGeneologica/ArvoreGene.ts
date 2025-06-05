import { Pessoa } from "./Pessoa";
import { Relacionavel } from "./Relacionavel";
import { NodeT } from "../trees";

export class ArvoreGenealogica extends NodeT<Pessoa>{
  raiz: Pessoa;

  constructor(raiz: Pessoa) {
    super();
    this.raiz = raiz;
  }

  adicionarFilho(pai: Pessoa, filho: Pessoa): void {
    pai.filhos.push(filho); 
  }

  encontrarPessoa(nome: string): Pessoa | undefined {
    return this._buscarPessoa(this.raiz, nome);
  }

  private _buscarPessoa(pessoa: Pessoa, nome: string): Pessoa | undefined {
    if (pessoa.nome === nome) return pessoa;

    for (const filho of pessoa.filhos) {
      const encontrada = this._buscarPessoa(filho, nome);
      if (encontrada) return encontrada;
    }

    return undefined;
  }
}