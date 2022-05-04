const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

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

/**insert into usuarios(email,senha,perfil)values($1,$2,$3) */
/**[req.body.email,req.body.senha,req.body.perfil] */

/**insert into usuarios(email,senha,perfil)
 * values(req.body.email,req.body.senha,req.body.perfil) */

app.post('/usuario', (req, res) => {
    pool.connect((err, client) => {
        if (err) {
            return res.status(401).send('Conexão não autorizada')
        }
        client.query('select * from usuarios where email = $1', [req.body.email], (error, result) => {
            if (error) {
                return res.status(401).send('Operação não autorizada')
            }

            if (result.rowCount > 0) {
                return res.status(200).send('Registro já existe')
            }

            var sql = 'insert into usuarios(email, senha, perfil) values ($1,$2,$3)'
            client.query(sql, [req.body.email, req.body.senha, req.body.perfil], (error, result) => {
                if (error) {
                    return res.status(403).send('Operação não permitida')
                }
                res.status(201).send({
                    mensagem: 'criado com sucesso',
                    status: 201
                })
            })
        })
    })
})

app.get('/usuario', (req, res) => {
    pool.connect((err, client) => {
        if (err) {
            return res.status(401).send("Conexão não autorizada")
        }
        client.query('select * from usuarios', (error, result) => {
            if (error) {
                return res.status(401).send('Operação não autorizada')
            }
            res.status(200).send(result.rows)
        })
    })
})

app.get('/usuario/:email', (req, res) => {
    pool.connect((err, client) => {
        if (err) {
            return res.status(401).send("Conexão não autorizada")
        }
        client.query('select * from usuarios where email = $1', [req.params.email], (error, result) => {
            if (error) {
                return res.status(401).send('operação não permitida')
            }
            res.status(200).send(result.rows[0]) /**[{},{}]*/
        })
    })
})
app.delete('/usuario/:email', (req, res) => {
    pool.connect((err, client) => {
        if (err) {
            return res.status(401).send('Conexão não autorizada')
        }
        client.query('delete from usuarios where email = $1', [req.params.email], (error, result) => {
            if (error) {
                return res.status(401).send('operação não autorizada')
            }
            res.status(200).send({ message: 'registro excluido com sucesso' })
        })
    })
})




app.listen(8081, () => console.log('aplicação em execução na url ht tp://localhost:8081'))