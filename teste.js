const filmes =
[
    {
        "id": "1",
        "titulo": "Coringa",
        "sinopse": " Joaquin Phoenix, Robert De Niro, Zazie Beetz",
        "dtLancamento": "27/10/2019",
        "duracao": "122",
        "genero": ["suspense", "drama"]
    },
    {
        "id": "2",
        "titulo": "Malevola",
        "sinopse": " Angelina Jolie, Elle Fanning, Harris Dickinson",
        "dtLancamento": "26/10/2019",
        "duracao": "119",
        "genero": ["fantasia", "aventura"]
    },
    {
        "id": "3",
        "titulo": "Zumbilandia",
        "sinopse": " Woody Harrelson, Jesse Eisenberg, Emma Stone",
        "dtLancamento": "24/10/2019",
        "duracao": "124",
        "genero": ["comedia", "terror", "acao"]
        },
    {
        "id": "4",
        "titulo": "Projeto Gemini",
        "sinopse": "Will Smith, Mary Elizabeth Winstead, Clive Owen",
        "dtLancamento": "10/10/2019",
        "duracao": "117",
        "genero": ["acao", "ficao"]
    }
]





function transformaDataLanc(date) {
    const dataLancSplitada = date.split('/');
    const novaDataLanc = new Date(dataLancSplitada[2], dataLancSplitada[1] - 1, dataLancSplitada[0]);

    return novaDataLanc
}



    filmes.forEach(item => item.dtLancamento = transformaDataLanc(item.dtLancamento))

    const hoje = new Date();
    const lancamentos = filmes.filter(item => item.dtLancamento > hoje)
    console.log(lancamentos)