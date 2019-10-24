const express = require("express")
const router = express.Router()
const controller = require("../controllers/filmesController")

router.get('/filmes', controller.get)
router.get('/filmes/genero/:nome', controller.getGenero)
router.get('/filmes/:id', controller.getById)



module.exports = router