module.exports = function (application) {

    application.get("/noticia", function (req, res) {

        var conn = application.config.dbConnection();
        var noticiaDAO = new application.app.models.NoticiasDAO(conn);

        noticiaDAO.getNoticia(function (error, result) {
            res.render("noticias/noticia", {
                noticia: result
            });
        });

    });

};