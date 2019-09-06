module.exports.noticias = function (application, req, res) {
    var conn = application.config.dbConnection();
    var noticiasDAO = new application.app.models.NoticiasDAO(conn);

    noticiasDAO.getNoticias(function (error, result) {
        res.render("noticias/noticias", {
            noticia: result
        });
    });
};

module.exports.noticia = function (application, req, res) {
    var conn = application.config.dbConnection();
    var noticiaDAO = new application.app.models.NoticiasDAO(conn);

    noticiaDAO.getNoticia(function (error, result) {
        res.render("noticias/noticia", {
            noticia: result
        });
    });
};