const {
    check,
    validationResult
} = require('express-validator');

module.exports = function (application) {

    application.get("/formulario_inclusao_noticia", function (req, res) {
        res.render("admin/form_add_noticia", {
            validacao: {},
            noticia: {}
        });
    });

    application.post("/noticias/salvar",
        [
            check('titulo').not().isEmpty().withMessage('O titulo é obrigatório.').isLength({
                max: 10
            }).withMessage('O titulo está muito grande.'),
            check('resumo').not().isEmpty().withMessage('O resumo é obrigatório.').isLength({
                min: 10,
                max: 100
            }).withMessage('O resumo deve ter entre 10 e 100 caracteres.'),
            check('autor').not().isEmpty().withMessage('O autor é obrigatório.'),
            check('data_noticia').not().isEmpty().withMessage('A data é obrigatória.'),
            check('noticia', 'A notícia é obrigatória.').not().isEmpty()
        ],
        function (req, res) {
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

        });
};