const express = require("express")
const app = express()

app.all("*", function(req, res, next) {
    console.log("Passamos pelo app")
    next()
})

// Rotas
const index = require("./routes/index")
const filmes = require("./routes/filmesRoute")

app.use('/', index)
app.use('/', filmes)

module.exports = app