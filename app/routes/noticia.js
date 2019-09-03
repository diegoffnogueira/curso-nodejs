var dbConnection = require('../../config/dbConnection');
module.exports = function (app) {

    var conn = dbConnection();

    app.get("/noticias", function (req, res) {
        conn.query('select * from noticias', function (error, result) {
            // console.log(error);
            // console.log(result);
            // res.send(result);
            res.render("noticias/noticias", {
                noticia: result
            });
        });

        // res.render("noticias/noticias")

    });

};