var app = require('./config/express')();

app.get('/produtos', function(req, res){
    //res.send('olá mundo!');
    ///lista Ã© o arquivo EJS (a extensÃ£o foi omitida, pois o mÃ³dulo EJS identifica a extensÃ£o)
    res.render('produtos/lista');
});

app.get('/', function(req, res){
    res.render('index');
});