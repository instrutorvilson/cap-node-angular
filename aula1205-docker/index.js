const express = require('express')
const app = express()
const HOST = "0.0.0.0"
const PORT = "8080"

app.get('/', (req, res) => {
    res.status(200).send({ mensagem: "ola mundo" })
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na url http://${HOST}:${PORT}`)
})