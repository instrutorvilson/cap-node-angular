const express = require('express')
const app = express()

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

app.listen(8081, () => console.log('Aplicação em execução na url http://localhost:8081'))