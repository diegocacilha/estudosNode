var express = require('express');
var app = express();
var port = 3000;

//set() seta as variÃ¡veis para o ambiente. EJS tem uma variÃ¡vel chamada view engine
//els é o nome da engine que foi intalada para o projeto.
app.set('view engine', 'ejs');

app.get('/produtos', function(req, res){
//    res.send('olá mundo!');
    ///lista Ã© o arquivo EJS (a extensÃ£o foi omitida, pois o mÃ³dulo EJS identifica a extensÃ£o)
    res.render('produtos/lista');
});

app.listen(port, function(req, res){
    console.log('Servidor rodando na porta ' + port);
});