function teste(n1, n2) {
    try {
        if (n2 == 0) {
            throw "Não é possivel dividir por zero"
        }

        if (n1 == undefined) {
            throw "Informe numero 1"
        }

        let x = n1 / n2
    } catch (err) {
        console.log(`Erro: ${err}`)
    }
}

//teste(undefined, 1)

function pegaDadosArray() {
    let a = [1, 2, 3, 4, 5, 6] //0 1 2 3 4 5 
    try {
        let i = 6
        if (i >= a.length) {
            throw "Indice de array inválido"
        }
        let x = a[i]
        console.log(x)
    } catch (err) {
        console.log(err)
    }
}

pegaDadosArray()