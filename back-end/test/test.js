let express = require('../app/config/express')();
let request = require("supertest")(express);

describe('#JsonController', ()=> {
    it('#Cadastro de usuario valido',(done)=>{
        request.post('/cadastra')
        .send({login:"jeff", senha:"Headbanger"})
        .expect(200,done);
        done();
    });      
});

