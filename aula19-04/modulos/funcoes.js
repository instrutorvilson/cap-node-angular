var soma = function(n1, n2) {
    return n1 + n2
}

var subtracao = (n1, n2) => { return n1 - n2 }


var multiplicacao = function(n1, n2) {
    try {
        if ((n1 === undefined) | (n2 === undefined)) {
            throw "Informe um valor para n1 e n2"
        }
    } catch (err) {
        return err
    }
    return n1 * n2
}

var divisao = (n1, n2) => {
    try {
        if (n1 === undefined | n2 === undefined) {
            throw "n1 e n2 devem ser informados"
        }

        if (n2 === 0) {
            throw 'O divisor nao deve ser zero'
        }
    } catch (err) {
        return err
    }
    return n1 / n2
}

var chamadaFuncao = function(res) {
    res.write('<h1>Testando funcao soma</h1>')
    res.write(`100 + 50 = ${soma(100,50)}`)
    res.write('<hr>')

    res.write('<h1>Testando funcao subtracao</h1>')
    res.write(`100 - 50 = ${subtracao(100,50)}`)
    res.write('<hr>')

    res.write('<h1>Testando funcao multiplicacao</h1>')
    res.write(`100 * 50 = ${multiplicacao(100,50)}`)
    res.write('<hr>')

    res.write('<h1>Testando funcao divisao</h1>')
    res.write(`100 * 50 = ${divisao(100,0)}`)
    res.write('<hr>')
}

module.exports = { soma, subtracao, multiplicacao, divisao, chamadaFuncao }