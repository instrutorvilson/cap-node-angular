abstract class Pessoa{
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

    display():string{
        return `Id: ${this.id} Nome: ${this.nome} Contato: ${this.contato}`
    }
}

export default Pessoa