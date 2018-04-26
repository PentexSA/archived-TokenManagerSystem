module.exports = ()=>{
  return bancoFunc;
}
class bancoFunc{
    constructor(connection){
        this.connection = connection;
    }
    lista(callback) {
        return this.connection.query('select * from usuarios',callback);
    }
    salvar(json,callback){
        return this.connection.query('INSERT INTO usuarios SET ?',json,callback);
    }
    delete(id,callback){
        return this.connection.query('DELETE from produtos WHERE id = (?)',[login.login],callback);
    }
    recuperar(id,callback){
        return this.connection.query('SELECT login from usuarios WHERE login = (?)',[login.login],callback);
    }
}