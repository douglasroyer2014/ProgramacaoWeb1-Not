class Filme {
    constructor(titulo,ano,genero){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero
    }
}

var filmes = [
    new Filme("O poço","2020","Terror"),
    new Filme("Mulan","2019","Ação"),
    new Filme("Coringa","2019","Drama"),
    new Filme("Parasita","2020","Comédia"),
    new Filme("Milagre na cela 7","2020","Drama"),
    new Filme("Corra!","2020","Terror"),    
    new Filme("O Homem Invisível","2020","Terror")
];


function criarLista(){
    
    var tabela = document.getElementById("tabelaFilmes");

    for (var i = 0; i < filmes.length; i++) {
        var linha = document.createElement("tr");
        var titulo = document.createElement("td");
        var ano = document.createElement("td");
        var genero = document.createElement("td");

        titulo.textContent = filmes[i].titulo;
        ano.textContent = filmes[i].ano;
        genero.textContent = filmes[i].genero;

        linha.appendChild(titulo);
        linha.appendChild(ano);
        linha.appendChild(genero);

        tabela.appendChild(linha);
    }

}
