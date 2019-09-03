module.exports = function (app) {

    app.get("/noticias", function (req, res) {

        var conn = app.config.dbConnection();

        conn.query('select * from noticias', function (error, result) {
            res.render("noticias/noticias", {
                noticia: result
            });
        });

    });

};