const express = require('express')
const app = express()

var dados = require('./db')

/**Middleware para utilizar urlencoded */
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send("olha mundo")
})

app.get('/contatos', (req, res) => {
    res.send("serviço de contato")
})

app.get('/contatos/:idcontato', (req, res) => {
    let idcontato = req.params.idcontato
    res.status(200).send({ idcontato: idcontato })
})

app.post('/contatos', (req, res) => {
    res.status(201).send({
        id: '1',
        nome: 'Maria',
        fone: '123-4567',
        email: 'maria@gmail.com'
    })
})

app.delete('/contatos/:idcontato', (req, res) => {
    let idcontato = req.params.idcontato
    res.status(204).send();
})

app.post('/produtos', (req, res) => {
    res.status(201).send({
        id: req.body.id,
        descricao: req.body.descricao,
        preco: req.body.preco,
        estoque: req.body.estoque
    })
})

app.put('/produtos/:idproduto', (req, res) => {
    let idproduto = req.params.idproduto
    res.status(202).send({
        id: req.body.id,
        descricao: req.body.descricao,
        preco: req.body.preco,
        estoque: req.body.estoque,
        alterado: idproduto
    })
})

/**Clientes */
app.get('/clientes', (req, res) => {
    res.status(200).send(dados)
})

app.get('/clientes/:idcliente', (req, res) => {
    let idcliente = req.params.idcliente
    let clienteretornar = {}
    for (let i of dados) {
        if (i.id == idcliente) {
            clienteretornar = i
        }
    }
    res.status(200).send(clienteretornar)
})

app.post('/clientes', (req, res) => {
    let ob = {
        id: req.body.id,
        nome: req.body.nome,
        fone: req.body.fone,
        limiteCredito: req.body.limiteCredito
    }
    dados.push(ob)
    res.status(201).send(ob)
})

app.delete('/clientes/:idcliente', (req, res) => {
    let idcliente = req.params.idcliente
    let posicao = 0
    for (let i of dados) {
        if (i.id == idcliente) {
            break;
        }
        posicao++;
    }
    dados.splice(posicao, 1)
    res.status(204).send();
})

app.put('/clientes/:idcliente', (req, res) => {
    let idcliente = req.params.idcliente
    let clienteAlterado = {}
    for (let i of dados) {
        if (i.id == idcliente) {
            i.nome = req.body.nome
            i.fone = req.body.fone
            i.limiteCredito = req.body.limiteCredito
            clienteAlterado = i
        }
    }
    res.status(200).send(clienteAlterado)
})

app.listen(8081, () => console.log('Aplicação em execução na url http://localhost:8081'))