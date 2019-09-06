module.exports.formulario_inclusao_noticia = function (application, req, res) {
    res.render("admin/form_add_noticia", {
        validacao: {},
        noticia: {}
    });
};

module.exports.noticias_salvar = function (validationResult, application, req, res) {
    var noticia = req.body;
    // res.send(noticias);

    var errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).render('admin/form_add_noticia', {
            validacao: errors.array(),
            noticia: noticia
        });
    }

    var conn = application.config.dbConnection();
    var noticiasDAO = new application.app.models.NoticiasDAO(conn);

    noticiasDAO.salvarNoticia(noticia, function (error, result) {
        res.redirect('/noticias');
    });
};