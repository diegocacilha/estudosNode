/*
 * Arquivo de configuração das rotas do projeto
 */
module.exports = function(app){
    app.get('/produtos', function(req, res){
        var mysql = require('mysql');
        var conn = mysql.createConnection({
            host: 'leonardo',
            user: 'leonardo',
            password: 'leonardo',
            database: 'wester_tutom_001'
        });
        
        conn.query('select * from produtos', function(err, result){
            res.send(result);
        });
        conn.end();
        //res.send('olá mundo!');
        ///lista Ã© o arquivo EJS (a extensÃ£o foi omitida, pois o mÃ³dulo EJS identifica a extensÃ£o)
        //res.render('produtos/lista');
    });
};