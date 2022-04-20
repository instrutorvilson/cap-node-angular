import Pessoa from "./Pessoa";

class PessoaJuridica extends Pessoa{
    cnpj: string;
    constructor(id: number, nome: string, contato: string, cnpj: string){
        super(id, nome, contato)
        this.cnpj = cnpj
    }

    display(): string {
        return `${super.display()} Cnpj: ${this.cnpj}`
    }

   salvar(): boolean {
       console.log('salvando pessoa juridica')
       return true;
   }
}

let pj: PessoaJuridica;
pj = new PessoaJuridica(3,'mercado livre','mercado@livre.com','123.0001/4')
console.log(pj.display())




