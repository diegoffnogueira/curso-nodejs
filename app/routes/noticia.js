module.exports = function (application) {

    application.get("/noticia", function (req, res) {

        var conn = application.config.dbConnection();
        var noticiaModel = application.app.models.noticiasModel;

        noticiaModel.getNoticia(conn, function (error, result) {
            res.render("noticias/noticia", {
                noticia: result
            });
        });

    });

};