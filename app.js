fetch('http://localhost:3000/filmes?_expand=produtora')
.then((req) => req.json())
.then((data) => mostraFilmes(data));

function mostraFilmes(filmes) {
    const htmlFilmes = filmes.map(
        (filme) => `
        <h2>${filme.titulo}</h2>
        <h4>Roteiro: ${filme.roteiro}</h4>
        <h4>Roteiro: ${filme.produtora.nome}</h4>
        <img src="${filme.imagem}" alt="Imagem de capa do filme" />`
    );

    document.getElementById("app").innerHTML = htmlFilmes;
}