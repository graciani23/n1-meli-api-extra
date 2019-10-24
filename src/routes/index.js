const express = require("express")
const router = express.Router()

router.get('/', function(req, res) {
    res.status(200).send({
        title: "API Filmes",
        version: "0.0.1",
        author: "Graciani Sousa"
    })
})

module.exports = router