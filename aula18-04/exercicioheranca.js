class Pessoa {
    constructor(nome, contato) {
        this.nome = nome
        this.contato = contato
    }

    display() {
        console.log(`Dados Pessoa: Nome: ${this.nome} Contato: ${this.contato}`)
    }
}

let p1 = new Pessoa('Jose', 'jose@gmail.com')
    //p1.display()

/**Criar classe filha de Pessoa */
class PessoaFisica extends Pessoa {
    constructor(nome, contato, cpf) {
        super(nome, contato)
        this.cpf = cpf
    }

    show() {
        this.display();
        console.log(`Cpf: ${this.cpf}`)
    }

    display() {
        console.log(`Dados Pessoa Fisica: Nome: ${this.nome} Contato: ${this.contato} Cpf: ${this.cpf}`)
    }
}

/*let pf1 = new PessoaFisica('123.456.789-10')
pf1.show()*/
let pf2 = new PessoaFisica('ana', 'ana@gmail.com', '123.456.988-90')
    //pf2.display()

/**Segunda filha de pessoa */
class PessoaJuridica extends Pessoa {
    constructor(nome, contato, cnpj) {
        super(nome, contato)
        this.cnpj = cnpj
    }
    display() {
        console.log(`Dados Pessoa Juridica: Nome: ${this.nome} Contato: ${this.contato} Cnpj: ${this.cnpj}`)
    }
}

let pj1 = new PessoaJuridica('mercado livre', 'mercadolivre@gmail', '123.0001/4')
pj1.display()