var mysql = require("mysql");

module.exports = function () {
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Mysql2019!",
        port: "3306",
        database: "portal_noticias"
    });
}