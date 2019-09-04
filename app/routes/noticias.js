module.exports = function (application) {

    application.get("/noticias", function (req, res) {

        var conn = application.config.dbConnection();
        var noticiasModel = application.app.models.noticiasModel;

        noticiasModel.getNoticias(conn, function (error, result) {
            res.render("noticias/noticias", {
                noticia: result
            });
        });

    });

};