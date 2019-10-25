const filmes = require("../models/filmes.json")

exports.get = (req, res) => {
    res.status(200).send(filmes) 
}

exports.getById = (req, res) => {
    const id = req.params.id
    const respId = filmes.find(item => item.id == id)
    
    if (!respId) return res.status(204).send('Filme não encontrado.')
    
    res.status(200).send(respId)
}
 exports.getDuracao = (req, res) => {
    const filmeDuracao = filmes.filter(item => item.duracao > 120)

    res.status(200).send(filmeDuracao.map(item => item.titulo))
 }

exports.getGenero = (req, res) => {
    const genero = filmes.filter(item => item.genero == genero)
    res.status(200).send(genero.genero)
}