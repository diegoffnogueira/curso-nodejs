module.exports = function (application) {

    application.get("/noticias", function (req, res) {

        var conn = application.config.dbConnection();
        var noticiasDAO = new application.app.models.NoticiasDAO(conn);

        noticiasDAO.getNoticias(function (error, result) {
            res.render("noticias/noticias", {
                noticia: result
            });
        });

    });

};