module.exports = function (app) {

    app.get("/noticias", function (req, res) {

        var mysql = require("mysql");

        var connection = mysql.createConnection({
            host: "localhost",
            user: "diego",
            password: "1234",
            port: "3306",
            database: "portal_noticias"
        });

        connection.connect();

        connection.query('select * from noticias', function (error, result) {
            console.log(error);
            console.log(result);
            res.send(result);
        });

        // res.render("noticias/noticias")

    });

};

