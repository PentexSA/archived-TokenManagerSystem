let mysql = require('mysql');
function createDBconnection(){
    return mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : 'assismenina123',
            database : "TMS"
        });
}

module.exports = ()=> createDBconnection

