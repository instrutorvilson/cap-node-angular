import { IDaoGenerica } from "./InterfaceGenerica";

class Item implements IDaoGenerica<Item>{
    descricao: string;
    preco: number;
    qtde: number;
    constructor(descricao: string, preco: number, qtde: number){
        this.descricao = descricao;
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

