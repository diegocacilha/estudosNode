var app = require('./config/express')();
var http = require('http').Server(app);//modulo http pode receber uma express
var sio = require('socket.io')(http);//socket.io recebe um server http
var port = process.env.PORT || 3000;

app.set('io', sio);//set global

http.listen(port, function(){
  console.log(`Servidor escutando na porta ${ port }`);
});
