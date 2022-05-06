var jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const decode = jwt.verify(req.body.token, process.env.JWTKEY)
        req.usuario = decode
        next()
    } catch (error) {
        return res.status(401).send({ message: "falha na autenticação" })
    }

}