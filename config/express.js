var port = 3000;
var express = require('express');
var app = express();

module.exports = function(){
    //set() seta as variÃ¡veis para o ambiente. EJS tem uma variÃ¡vel chamada view engine
    //els é o nome da engine que foi intalada para o projeto.
    app.set('view engine', 'ejs');
    app.listen(port, function(req, res){
        console.log('Servidor rodando na porta ' + port);
    });
    return app;
};

