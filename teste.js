const filmes =
[
    {
        "id": "1",
        "titulo": "Coringa",
        "sinopse": " Joaquin Phoenix, Robert De Niro, Zazie Beetz",
        "dtLancamento": "10-03-2019",
        "duracao": "122",
        "genero": ["suspense", "drama"]
    },
    {
        "id": "2",
        "titulo": "Malevola",
        "sinopse": " Angelina Jolie, Elle Fanning, Harris Dickinson",
        "dtLancamento": "10-17-2019",
        "duracao": "119",
        "genero": ["fantasia", "aventura"]
    },
    {
        "id": "3",
        "titulo": "Zumbilandia",
        "sinopse": " Woody Harrelson, Jesse Eisenberg, Emma Stone",
        "dtLancamento": "10-24-2019",
        "duracao": "124",
        "genero": ["comedia", "terror", "acao"]
        },
    {
        "id": "4",
        "titulo": "Projeto Gemini",
        "sinopse": "Will Smith, Mary Elizabeth Winstead, Clive Owen",
        "dtLancamento": "10-10-2019",
        "duracao": "117",
        "genero": ["acao", "ficao"]
    }
]

const filmeDuracao = filmes.filter(item => item.duracao > 120)
filmeDuracao.map(item => {
    console.log(item.titulo)
})



