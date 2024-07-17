const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',  // ou o endereço do seu servidor MySQL
    user: 'root',
    port: 3306,
    password: 'postgres',
    database: 'controle_produtos'
});

module.exports = connection;