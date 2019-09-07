module.exports.index = function (application, req, res) {

    var conn = application.config.dbConnection();
    var noticiasDAO = new application.app.models.NoticiasDAO(conn);

    noticiasDAO.getCincoUltimasNoticias(function (error, result) {
        res.render("home/index", {noticias: result});
    });

};