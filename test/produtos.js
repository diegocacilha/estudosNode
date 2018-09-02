var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController', function(){
  it('#listagem json', function(done){//o done serve pra finalizar a execução do mocha
    request.get('/produtos')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
  it('#cadastro inválido de produto', function(done){
    request.post('/produtos')
    .send({titulo:'1259877', descricao:'novo livro'})
    .expect(400, done);
  });
});
