var http = require('http')
var meumodulo = require('./modulos/funcoes')
var fs = require('fs')
var url = require('url')

//meumodulo.chamadaFuncao(res)

function cadastrar(res) {
    fs.readFile('cadastro.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data)
        res.end()
    })
}

function consultar(res) {
    fs.readFile('consulta.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data)
        res.end()
    })
}


http.createServer(function(req, res) {
    var adr = url.parse(req.url, true);
    if (adr.pathname === '/cadastro.html') {
        cadastrar(res)
    }

    if (adr.pathname === '/consulta.html') {
        consultar(res)
    }

}).listen(15000)

console.log('servidor rodando')