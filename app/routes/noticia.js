module.exports = function (app) {

    app.get("/noticia", function (req, res) {

        var conn = app.config.dbConnection();

        conn.query('select * from noticias where id_noticia = 1', function (error, result) {
            res.render("noticias/noticia", {
                noticia: result
            });
        });

    });

};