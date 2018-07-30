var port = 3000;
var express = require('express');
var app = express();

//set() seta as variáveis para o ambiente. EJS tem uma variável chamada view engine
//ejs é o nome da engine que foi instalada para o projeto.
app.set('view engine', 'ejs');
//o caminho passado aqui é apartir de quem chamou engine, no caso index.js
//config da pasta onde ficarão as rotas
app.set('views', './app/views');

app.listen(port, function(req, res){
    console.log('Servidor rodando na porta ' + port);
});
module.exports = function(){
    return app;
};
