const express = require("express")
const router = express.Router()
const controller = require("../controllers/filmesController")

router.get('/filmes', controller.get)
router.get('/filmes/duracao', controller.getDuracao)
router.get('/filmes/lancamento', controller.getLancamento)
router.get('/filmes/:id', controller.getById)
router.get('/filmes/genero/:nome', controller.getGenero)


module.exports = router