const express = require('express')
const app = express()
var cors = require('cors')

var dados = require('./dbprodutos')

/**Middleware para utilizar urlencoded */
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

/**middleware cors*/
app.use(cors());

app.get('/produtos', (req, res) => {
    res.status(200).send(dados)
})

app.post('/produtos', (req, res) => {
    let ob = {
        id: dados.length + 1,
        descricao: req.body.descricao,
        preco: req.body.preco,
        estoque: req.body.estoque
    }
    dados.push(ob)
    res.status(201).send(ob)
})

app.put('/produtos/:idproduto', (req, res) => {
    let idproduto = req.params.idproduto;
    let produtoAlterado = {}
    for (let prod of dados) {
        if (prod.id == idproduto) {
            prod.descricao = req.body.descricao
            prod.preco = req.body.preco
            prod.estoque = req.body.estoque
            produtoAlterado = prod
        }
    }
    res.status(200).send(produtoAlterado)
})

app.get('/produtos/:idproduto', (req, res) => {
    let idproduto = req.params.idproduto
    let produtoRetornado = {}
    for (let prod of dados) {
        if (prod.id == idproduto) {
            produtoRetornado = prod;
            break;
        }
    }
    res.status(200).send(produtoRetornado)
})

app.delete('/produtos/:idproduto', (req, res) => {
    let idproduto = req.params.idproduto
    let posicao = 0
    for (let prod of dados) {
        if (prod.id == idproduto) {
            break
        }
        posicao++
    }
    dados.splice(posicao, 1)
    res.status(204).send()

})

app.listen(8081, () => console.log('Aplicação em execução na url http://localhost:8081'))