const express = require('express');
const app = express();

app.get("/", function(req, res){
	res.sendFile(_dirname + "/html/index.html");
});

app.get("/sobre", function(req, res){
	res.sendFile(_dirname + "/html/sobre.html");
});

app.get('/blog', function(req,res){
	res.send("Bem vindo ao meu blog!");
});

app.get('/ola/:cargo/:nome/:cor', function(req, res){
	res.send("<h1>Ola "+req.params.nome+"</h1>");
	res.send("<h2> Seu cargo e: "+req.params.cargo+'</h2>')
	res.send("<h3> Sua cor favorita e: "+req.params.cor+"</h3>");
})



app.listen(8081, function(){console.log("Servidor Rodando!");});
