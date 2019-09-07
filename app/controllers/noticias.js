module.exports.noticias = function (application, req, res) {
    var conn = application.config.dbConnection();
    var noticiasDAO = new application.app.models.NoticiasDAO(conn);

    noticiasDAO.getNoticias(function (error, result) {
        res.render("noticias/noticias", {
            noticias: result
        });
    });
};

module.exports.noticia = function (application, req, res) {
    var conn = application.config.dbConnection();
    var noticiaDAO = new application.app.models.NoticiasDAO(conn);

    var id_noticia = req.query;

    noticiaDAO.getNoticia(id_noticia, function (error, result) {
        res.render("noticias/noticia", {
            noticia: result
        });
    });
};