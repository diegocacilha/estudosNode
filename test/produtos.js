var express = require('../config/express')();//faz o Mocha iniciar um server
var request = require('supertest')(express);//então é passado o express como parâmetro pro Mocha

describe('#ProdutosController', function(){
  it('#listagem json', function(done){//o done serve pra finalizar a execução do mocha
    request.get('/produtos')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
  it('#listagem html', function(done){//o done serve pra finalizar a execução do mocha
    request.get('/produtos')
    .set('Accept', 'text/html')
    .expect('Content-Type', /html/)
    .expect(200, done);
  });
  it('#cadastro formulário html', function(done){//o done serve pra finalizar a execução do mocha
    request.get('/produtos/form')
    .set('Accept', 'text/html')
    .expect('Content-Type', /html/)
    .expect(200, done);
  });
  it('#cadastro inválido de produto', function(done){
    request.post('/produtos')
    .send({titulo:'1259877', descricao:'novo livro'})
    .expect(302, done);
  });
});
