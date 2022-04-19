type Contato = {
    id: number;
    nome: string;
    fone: string;
    email: string;
    ativo: boolean
}

var ct: Contato =  {id:0,nome:'',fone:'',email:'', ativo: false};
ct.id = 10;
ct.nome = "Maria";
ct.fone = "1234-6789";
ct.email = "maria@gmail.com";
ct.ativo = false

console.log(ct)