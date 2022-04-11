//função anonima
let z = function(n1, n2) { return n1 + n2 }

//arrow function
let x = (n1, n2) => { return n1 + n2 }


//invocar
console.log(z(10, 20));
console.log(x(10, 20));

//arrow com somente um parametro
/*
   Pessoa
   -------------
   nome: string
   fone: string
   -------------
   salvar()

   Pessoa p = New Pessoa()
   p.nome
   p.fone
   p.salvar()
*/
let y = n1 => { return n1 * n1 }

function consultar() {
    fetch("url")
        .then(x => x.text())
        .then(data => display(data))

    fetch("url")
        .then(function(x) { return x.text() })
}