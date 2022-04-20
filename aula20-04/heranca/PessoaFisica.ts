import Pessoa from './Pessoa'

class PessoaFisica extends Pessoa{
    cpf:string;
    constructor(id: number, nome: string, contato: string, cpf: string){
        super(id, nome, contato)
        this.cpf = cpf
    }

    display():string{
        let p:string = super.display()        
        return `${p} cpf: ${this.cpf}`
    }

    salvar(): boolean {
        console.log('Salvando pessoa fisica');
        return true;
    }
}

let pf = new PessoaFisica(2,'mercado livre','mercado@livre.com','123.456.789-90');
console.log(pf.display())
