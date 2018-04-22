module.exports = ()=>{
  return ProdutosBanco;
}
class ProdutosBanco{
    constructor(connection){
        this.connection = connection;
    }
    lista(callback) {
        return this.connection.query('select * from produtos',callback);
    }
    salvar(produtos,callback){
        return this.connection.query('INSERT INTO produtos SET ?',produtos,callback);
    }
    delete(id,callback){
        return this.connection.query('DELETE from produtos WHERE id = (?)',[id.id],callback);
    }
    recuperar(id,callback){
        return this.connection.query('SELECT id from logins WHERE id = (?)',[id.id],callback);
    }
}