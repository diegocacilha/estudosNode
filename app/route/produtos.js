/*
 * Arquivo de configuração das rotas do projeto
 */

module.exports = function(app){
    app.get('/produtos', function(req, res){
        var conn = app.infra.connectionFactory();
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

    app.post('/produto', function(req, res){
        console.log('POST');
    });
};