var http = require('http')
var fs = require('fs')

http.createServer(function(req, res) {

    fs.readFile('cadastro.html',
            function(err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data)
                return res.end()
            }
        )
        //res.end("<h1>Ola munfo</h1>")
    console.log("servidor rodando")
}).listen(8080)