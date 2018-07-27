var app = require('./config/express')();
var rotaProdutos = require('./app/route/produtos')(app);


app.get('/', function(req, res){
    res.render('index');
});