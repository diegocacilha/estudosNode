var port = 3000;
var express = require('express');
var load = require('express-load');
var app = express();
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

//middleware que inclui o diretório com as bibliotecas do frontend
app.use(express.static('./app/public/'));//add locais estáticos

//use() insere um middleware
app.use(bodyParser.urlencoded({extended: true}));
//sempre será executado ao receber uma requisição
app.use(bodyParser.json());//body-parser aceita o tipo JSON
//valida os forms das requisições
app.use(expressValidator());

//set() seta as variáveis para o ambiente. EJS tem uma variável chamada view engine
//ejs é o nome da engine que foi instalada para o projeto.
app.set('view engine', 'ejs');
//o caminho passado aqui é apartir de quem chamou engine, no caso index.js
//config da pasta onde ficarão as views
app.set('views', './app/views');

app.set('title', 'My Site');

/*
  Comentado por conta do Socket.io.
  Por conta dele server iniciado pelo listen do http
*/
// app.listen(port, function(req, res){
//     console.log('Servidor rodando na porta ' + port);
// });

module.exports = function(){
    //carrega as módulos automaticamente
    //cwd é o ponto de onde o express-load começa a procurar as rotas
	load('route', {cwd: 'app'})//carrega os módulos relacionados as rotas
		.then('infra')//correga os módulos relacionados ao DAO
		.into(app);//declara a pasta onde o load() deve iniciar as buscas por módulos

		/*
			Redireciona o endpoint /<qualquerCoisa>
		*/
		app.use(function(req, res, next){
			res.status(404).render('erros/404');
			next();
		});
		/*
			Redireciona o endpoint /<qualquerCoisa>/<qualquerCoisa>
		*/
		app.use(function(err, req, res, next){
			//Somente enviroment production
			if(process.env.NODE_ENV == 'production'){
				res.status(500).render('erros/500');
				return;
			}
			next(err);
		});
    return app;
};
