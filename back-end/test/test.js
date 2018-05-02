let express = require('../app/config/express')();
let request = require("supertest")(express);

describe('#JsonController', ()=> {
    it('#Cadastro de usuario valido',(done)=>{
        request.post('/cadastra')
        .send({login:"aaa", senha:"baa"})
        .expect(200,done);
        done();
    });
    it('#Verificação de usuario no banco de dados',(done)=>{
        request.post('/login')
        .send({login:"aaa", senha:"baaa"})
        .expect(200,done);
        done();
        
    });
});

