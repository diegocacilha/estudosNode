var port = 3000;
var express = require('express');
var load = require('express-load');
var app = express();
var bodyParser = require('body-parser');

//use() insere um middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//set() seta as variáveis para o ambiente. EJS tem uma variável chamada view engine
//ejs é o nome da engine que foi instalada para o projeto.
app.set('view engine', 'ejs');
//o caminho passado aqui é apartir de quem chamou engine, no caso index.js
//config da pasta onde ficarão as views
app.set('views', './app/views');

app.listen(port, function(req, res){
    console.log('Servidor rodando na porta ' + port);
});
module.exports = function(){
    //carrega as módulos automaticamente
    //cwd é o ponto de onde o express-load começa a procurar as rotas
	load('route', {cwd: 'app'})//carrega os módulos relacionados as rotas
		.then('infra')//correga os módulos relacionados ao DAO
		.into(app);//declara a pasta onde o load() deve iniciar as buscas por módulos

    return app;
};
