function livro(titulo, autor, anoPublicacao, genero) {
  this.titulo = titulo;
  this.autor = autor;
  this.anoPublicacao = anoPublicacao;
  this.genero = genero;
}

const generos = [
  "drama",
  "ficção científica",
  "romance",
  "policial",
  "literatura experimental",
];

const livro1 = new livro(
  "O problema dos três corpos",
  "Cixin Liu",
  2008,
  generos[1]
);

const livro2 = new livro("Duna", "Frank Herbert", 1965, generos[1]);

const livro3 = new livro(
  "Memórias póstumas de Brás Cubas",
  "Machado de Assis",
  1881,
  generos[4]
);

const listaDeLivros = [livro1, livro2, livro3];

function buscarLivrosPorGenero(listaDeLivros, generoDesejado) {
  const livrosDoMesmoGenero = [];
  if (generos.includes(generoDesejado)) {
    listaDeLivros.forEach(function (livro) {
      if (livro.genero === generoDesejado) {
        livrosDoMesmoGenero.push(livro);
      }
    });

    return livrosDoMesmoGenero;
  } else {
    console.log("Esse gênero nao consta no banco de dados");
  }
}

const generoDesejado = prompt("qual gênero de livros quer buscar?");

const livrosDoMesmoGenero = buscarLivrosPorGenero(
  listaDeLivros,
  generoDesejado
);
if (generos.includes(generoDesejado)) {
  console.log("Livros do gênero", generoDesejado + ":");
  livrosDoMesmoGenero.forEach(function (livro) {
    console.log(livro.titulo + " - " + livro.autor);
  });
}
