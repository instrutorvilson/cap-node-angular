const express = require('express')
const app = express()

var pg = require('pg')
var consString = "postgres://vaaxwosutwatns:8997e0f6cbef74356d04198c9c52d3bf92611b167a0b8319846bed5dac75e9c3@ec2-107-22-238-112.compute-1.amazonaws.com:5432/d1unpjaoivanab"

const pool = new pg.Pool({ connectionString: consString, ssl: { rejectUnauthorized: false } })

app.get('/', (req, res) => {
    pool.connect((err, client) => {
        if (err) {
            return res.status(401).send('Conexão não autorizada')
        }
        res.status(200).send('conectado com sucesso')
    })
})

/** create table usuarios (email varchar(50), senha varchar(200), perfil varchar(15)) */

app.get('/criartabelausuario', (req, res) => {
    pool.connect((err, client) => {
        if (err) {
            return res.status(401).send('Conexão não autorizada')
        }
        var sql = 'create table usuarios (email varchar(50), senha varchar(200), perfil varchar(15))'
        client.query(sql, (error, result) => {
            if (error) {
                return res.status(401).send('Operação não autorizada')
            }
            res.status(200).send(result.rows)
        })
    })
})

app.listen(8081, () => console.log('aplicação em execução na url http://localhost:8081'))