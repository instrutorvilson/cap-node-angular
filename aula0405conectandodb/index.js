const express = require('express')
const app = express()

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
var pg = require('pg')
var consString = process.env.DATABASE_URL;
const login = require('./middleware/login')

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
            bcrypt.hash(req.body.senha, 10, (error, hash) => {
                if (error) {
                    return res.status(500).send({
                        message: 'Erro de autenticação',
                        erro: error.message
                    })
                }
                var sql = 'insert into usuarios(email, senha, perfil) values ($1,$2,$3)'
                client.query(sql, [req.body.email, hash, req.body.perfil], (error, result) => {
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

app.post('/usuario/login', (req, res) => {
    pool.connect((err, client) => {
        if (err) {
            return res.status(401).send("Conexão não autorizada")
        }
        client.query('select * from usuarios where email = $1', [req.body.email], (error, result) => {
            if (error) {
                return res.status(401).send('operação não permitida')
            }
            if (result.rowCount > 0) {
                //cripotgrafar a senha enviada e comparar com a recuperada do banco
                bcrypt.compare(req.body.senha, result.rows[0].senha, (error, results) => {
                    if (error) {
                        return res.status(401).send({
                            message: "Falha na autenticação"
                        })
                    }
                    if (results) { //geração do token
                        let token = jwt.sign({
                                email: result.rows[0].email,
                                perfil: result.rows[0].perfil
                            },
                            process.env.JWTKEY, { expiresIn: '1h' })
                        return res.status(200).send({
                            message: 'Conectado com sucesso',
                            token: token
                        })
                    }
                })
            } else {
                return res.status(200).send({
                    message: 'usuário não encontrado'
                })
            }
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

app.put('/usuario/:email', (req, res) => {
    pool.connect((err, client) => {
        if (err) {
            return res.status(401).send("Conexão não autorizada")
        }
        client.query('select * from usuarios where email = $1', [req.params.email], (error, result) => {
            if (error) {
                return res.status(401).send("Operação não permitida")
            }
            /**update usuarios set senha=$1, perfil=$2 where email=$3 */
            if (result.rowCount > 0) {
                var sql = 'update usuarios set senha=$1, perfil=$2 where email=$3'
                let valores = [req.body.senha, req.body.perfil, req.params.email]
                client.query(sql, valores, (error2, result2) => {
                    if (error2) {
                        return res.status(401).send("Operação não permitida")
                    }

                    if (result2.rowCount > 0) {
                        return res.status(200).send('registro alterado com sucesso')
                    }
                })
            } else
                res.status(200).send('usuario não encontrado')
        })
    })
})

app.post('/produto', login, (req, res) => {
    res.status(200).send('rota de inserção de produto')
})


app.listen(process.env.PORT || 8081, () => console.log(`http://localhost:8081`))