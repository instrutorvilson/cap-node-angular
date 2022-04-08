var nome = "Vilson"
console.log(nome)
nome = "Ana Maria"
var peso = 100
console.log(peso)

const preco = 7.89
console.log(preco)

let estoque = 100
console.log(estoque)

if (estoque < 200) {
    let desconto = estoque * 0.15
    console.log(desconto)
}

const cars = ["Saab", "Volvo", "BMW"];
cars.push('Fusca')
console.log(cars)
cars.unshift('bicicleta')
console.log(cars)
delete cars[2]
cars.pop()
console.log(cars)

cars.shift()
console.log(cars)

cars[1] = "Volvo"
console.log(cars)

var contato = {
    nome: "Jose",
    idade: 100,
    fone: "123-4567"
}
console.log(contato)

var x = function soma(n1, n2) { return n1 + n2 }
console.log(x(10, 20))

//principio da imutabilidade
var fruta = "maç"