var app = require("./config/server")

require("./app/routes/noticia")(app);
require("./app/routes/formulario_inclusao_noticia")(app);
require("./app/routes/home")(app);

app.listen(3000, function () {
    console.log("Servidor rodando com express.");
    // console.log(msg);
    // console.log(msg());
});