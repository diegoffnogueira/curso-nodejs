var mysql = require("mysql");

var connMysql = function () {
    console.log('Conexão com o bd foi estabelecida.');
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Mysql2019!",
        port: "3306",
        database: "portal_noticias"
    });
};

module.exports = function () {
    console.log('O autoload carregou o módulo de conexão com o bd.');
    return connMysql;
};