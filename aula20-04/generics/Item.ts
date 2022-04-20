import { IDaoGenerica } from "./InterfaceGenerica";
import Produto  from "./Produto";

export default class Item implements IDaoGenerica<Item>{
    produto: Produto
    preco: number;
    qtde: number;
    constructor(produto: Produto, preco: number, qtde: number){
        this.produto = produto;
        this.preco = preco;
        this.qtde = qtde;
    }
    salvar(): boolean {
        throw new Error("Method not implemented.");
    }
    excluir(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    consultarTodos(): Item[] {
        throw new Error("Method not implemented.");
    }
    consultarPeloId(id: number): Item {
        throw new Error("Method not implemented.");
    }
    alterar(objeto: Item): boolean {
        throw new Error("Method not implemented.");
    }
 }

