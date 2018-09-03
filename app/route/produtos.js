/*
 * Arquivo de configuração das rotas do projeto
 */
module.exports = function(app){
    app.get('/produtos', function(req, res){
      var conn = app.infra.connectionFactory();
      var produtosDAO = new app.infra.ProdutosDAO(conn);

      produtosDAO.lista(function(err, result){
        res.format({
          html: function(){//Frontend solicita pelo Accept um text/html
            res.render('produtos/lista', {lista: result});
          },
          json: function(){//fronent envia Accept: application/json
            res.json(result);
          }
        });
      });
      conn.end();
    });

    app.get('/produtos/form', function(req, res){
      res.render('produtos/form', {errosValidacao:{}});
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
      //o express-validator add fn nas requisições
      var validador = req.assert('titulo', 'Titulo é obrigatório!');
      validador.notEmpty();//não pode ser vazio

      var erros = req.validationErrors();//retorna o(s) erro(s) se houver
      if(erros) {
        res.render('produtos/form', {errosValidacao: erros});
        return;
      }
      var conn = app.infra.connectionFactory();
      var produtosDAO = new app.infra.ProdutosDAO(conn);
      produtosDAO.salva(produto, function(err, result){
        if(err){
          console.log(err);
          res.send(500);
        }
        res.format({
          html: function(){
              res.redirect('/produtos');//redirect after post (redirecione após um post)
            },
          json: function(){
            res.send(201);
          }
        });
      });
    });
};
