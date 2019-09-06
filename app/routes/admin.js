const {
    check,
    validationResult
} = require('express-validator');

module.exports = function (application) {

    application.get("/formulario_inclusao_noticia", function (req, res) {
        application.app.controllers.admin.formulario_inclusao_noticia(application, req, res);
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
            application.app.controllers.admin.noticias_salvar(validationResult, application, req, res);
        });
};