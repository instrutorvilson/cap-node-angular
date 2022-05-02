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

app.listen(8081, () => console.log('Aplicação em execução na url http://localhost:8081'))