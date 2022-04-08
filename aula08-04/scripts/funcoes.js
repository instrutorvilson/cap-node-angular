function ola() {
    // console.log('Hello world')
    alert("Hello world")
}

function oi(nome) {
    alert(`Ola ${nome}`)
}

function validaIdade(idade) {
    if (idade < 18) {
        console.log("Vc é menor de idade")
    } else {
        console.log('Vc é  maior de idade')
    }
}

function retornaSituacao(media) {
    let situacao = "Aprovado"
    if (media < 7) {
        situacao = "Reprovado"
    }
    return situacao
}

//inferencia de tipos
function retornaReprovado(media) {
    return media < 7
}

function montaNome(nome, sobrenome, idade) {
    var msg = "maior"

    if (idade < 18) {
        msg = "menor"
    }

    return `${nome} ${sobrenome} você tem ${idade} 
    anos, portanto você é ${msg} de idade.`
}
/*
ola()
validaIdade(46)

var retorno = retornaSituacao(8)
console.log(retorno)

var retornoBooleano = retornaReprovado(6)
console.log(retornoBooleano)*/