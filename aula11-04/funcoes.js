function soma(n1, n2) {
    let resultado = n1 + n2
    console.log(resultado)
}

//invocar a função
soma(10, 20)

function somaComRetorno(n1, n2) {
    let resultado = n1 + n2
    return resultado
}

var retorno = somaComRetorno(30, 40)
console.log(retorno)

function somaArray(numeros) {
    let resultado = 0
    for (let i = 0; i < numeros.length; i++) {
        resultado = resultado + numeros[i]
    }
    return resultado
}

var pesos = [10, 20, 30, 40]
console.log(somaArray(pesos))