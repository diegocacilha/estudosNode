/*
 * Arquivo de configuração das rotas do projeto
 */

module.exports = function(app){
    app.get('/produtos', function(req, res){
        var conn = app.infra.connectionFactory();
        var produtosBanco = new app.infra.produtosBanco(conn);

        produtosBanco.lista(function(err, result){
            res.render('produtos/lista', {lista: result});
        });
        conn.end();
    });

    app.get('/produtos/:id', function(req, res){
        var conn = app.infra.connectionFactory();
        conn.query('select * from produtos where id='+req.params.id, function(err, result){
            res.send(result);
        });
        conn.end();

    });

    app.post('/produto', function(req, res){
        console.log('POST');
    });
};
