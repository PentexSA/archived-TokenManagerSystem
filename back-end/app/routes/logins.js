module.exports = (app)=>{
    let connection = app.infra.connectionFactory();
    let bancoFunc = new app.infra.bancoFunc(connection);
    console.log('Listando....')
    
    app.post("/cadastra", (req, res,next) => {
        
        let cadastro = req.body;
      
        req.assert('login', 'deve ser preenchido').notEmpty();
        req.assert('senha', 'deve ser preenchida').notEmpty(); 
        let err = req.validationErrors();
        console.log(`erro:${err}`)
        if(err){
            res.format({
                json : () =>{
                    res.status(400).json(err)
                    }
            });
            return;
        }
        bancoFunc.salvar(cadastro,(err,results)=>{
            if (err){
                console.log(err);
                }
            });
        });
    }