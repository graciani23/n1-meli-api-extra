const app = require("./src/app")
const port = 8085

app.listen(port, function() {
    console.log(`Servidor rodando na porta ${port}`)
})