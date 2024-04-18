function pessoa(nome, sobrenome, anoNascimento) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.anoNascimento = anoNascimento;
}

function livro(titulo, autor, anoPublicacao, genero) {
  this.titulo = titulo;
  this.autor = autor;
  this.anoPublicacao = anoPublicacao;
  this.genero = genero;
}

const pessoa1 = new pessoa("Gustavo", "Moritani", 1997);

const livro1 = new livro(
  "O problema dos três corpos",
  "Cixin Liu",
  2008,
  "ficção científica"
);

const livro2 = new livro("Duna", "Frank Herbert", 1965, "ficção científica");

const livro3 = new livro(
  "Memórias póstumas de Brás Cubas",
  "Machado de Assis",
  1881,
  "Literatura experimental"
);

const listaDeLivros = [livro1, livro2, livro3];

function buscarLivrosPorGenero(listaDeLivros, generoDesejado) {
  const livrosDoMesmoGenero = [];

  listaDeLivros.forEach(function (livro) {
    if (livro.genero === generoDesejado) {
      livrosDoMesmoGenero.push(livro);
    }
  });

  return livrosDoMesmoGenero;
}

const generoDesejado = prompt("qual gênero de livros quer buscar?");

const livrosDoMesmoGenero = buscarLivrosPorGenero(
  listaDeLivros,
  generoDesejado
);

console.log("Livros do gênero", generoDesejado + ":");
livrosDoMesmoGenero.forEach(function (livro) {
  console.log(livro.titulo + " - " + livro.autor);
});
