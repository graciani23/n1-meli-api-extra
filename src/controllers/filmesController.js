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
    const generoNome = req. params.nome
    const genero = filmes.filter(item => item.genero.indexOf(generoNome) > -1)
    res.status(200).send(genero)
}

function transformaDataLanc(data) {
    const dataLancSplitada = data.split('/');
    const novaDataLanc = new Date(dataLancSplitada[2], dataLancSplitada[1] - 1, dataLancSplitada[0]);

    return novaDataLanc
}


exports.getLancamento = (req, res) => {
    filmes.forEach(item => item.dtLancamento = transformaDataLanc(item.dtLancamento))

    const hoje = new Date();
    const lancamentos = filmes.filter(item => item.dtLancamento > hoje)

    res.status(200).send(lancamentos)
}