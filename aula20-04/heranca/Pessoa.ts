import { IDao } from "../interfaces/interfaces";

abstract class Pessoa implements IDao{
    id: number;
    nome: string;
    contato: string;
    constructor(id: number, nome: string, contato: string){
        this.id = id;
        this.nome = nome;
        this.contato = contato
    }

    /**métodos abstratos não podem ter implementtaçaõ */
    abstract salvar(): boolean;
    abstract alterar(objeto: string): boolean;
    abstract excluir(id: number): void;
    abstract consultar(): string[];
    abstract consultarPorId(id: number): string;

    display():string{
        return `Id: ${this.id} Nome: ${this.nome} Contato: ${this.contato}`
    }
}

export default Pessoa