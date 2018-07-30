/*
 * Arquivo de configuração das rotas do projeto
 */
var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ispj4lqzx22',
    database: 'alura'
});

module.exports = function(app){
    app.get('/produtos', function(req, res){
        
        conn.query('select * from livros', function(err, result){
            res.render('produtos/lista', {lista: result});
        });
        //conn.end();
        //res.send('olá mundo!');
        ///lista Ã© o arquivo EJS (a extensÃ£o foi omitida, pois o mÃ³dulo EJS identifica a extensÃ£o)
        //res.render('produtos/lista');
    });
    
    app.get('/produtos/:id', function(req, res){
        conn.query('select * from livros where id='+req.params.id, function(err, result){
            res.send(result);
        });
        
    });
};