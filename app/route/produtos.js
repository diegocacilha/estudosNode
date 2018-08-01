/*
 * Arquivo de configuração das rotas do projeto
 */
module.exports = function(app){
    app.get('/produtos', function(req, res){
      var conn = app.infra.connectionFactory();
      var produtosDAO = new app.infra.ProdutosDAO(conn);

      produtosDAO.lista(function(err, result){
          res.render('produtos/lista', {lista: result});
      });
      conn.end();
    });

    app.get('/produtos/form', function(req, res){
      res.render('produtos/form');
    });

    app.get('/produtos/:id', function(req, res){
      var conn = app.infra.connectionFactory();
      conn.query('select * from produtos where id='+req.params.id, function(err, result){
          res.send(result);
      });
      conn.end();

    });

    app.post('/produtos', function(req, res){
      var produto = req.body;
      
      var conn = app.infra.connectionFactory();
      var produtosDAO = new app.infra.ProdutosDAO(conn);
      produtosDAO.salva(produto, function(err, result){
        res.redirect('/produtos');//redirect after post (redirecione após um post)
      });
    });
};
