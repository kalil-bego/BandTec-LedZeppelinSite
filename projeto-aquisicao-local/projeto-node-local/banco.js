var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'estudos',
    password: 'Bandtec2020',
    database: 'users'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Conectado com sucesso!')
});



module.exports = connection;