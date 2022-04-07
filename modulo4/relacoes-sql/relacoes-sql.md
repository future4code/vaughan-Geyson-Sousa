<p align="center">
  <a href="#Questão1">Questão1</a>   |   
  <a href="#Questão2">Questão2</a>   |   
  <a href="#Questão3">Questão3</a>   |     
</p>

<h2 id="Questão1">Questão 1 </h2>

<h4>A) É uma primary key de uma outra tabela </h4>

<h4>B) CREATE TABLE Rating (
id VARCHAR(255) PRIMARY KEY,
comment_text TEXT NOT NULL,
score FLOAT NOT NULL,
movie_id VARCHAR(230),
FOREIGN KEY (movie_id) REFERENCES Films(id)
);

INSERT INTO Rating (id, comment_text, score, movie_id)
VALUES (
"002",
"Ruim",
1,
"004"</h4>

<h4> C) Ocorreu um erro por que não é possível fazer avaliação de um filme inexistente</h4>

<h4> D)ALTER TABLE Movie DROP COLUMN avaliacao;</h4>

<h4> E) Ocorreu um erro por que não é possivel apagar um item que está relacionado com outra tabela.</h4>

<h2 id="Questão2">Questão 2 </h2>

<h4>A)É uma tabela de elenco do filme, que possui uma coluna com id do filme e outra com o nome do ator. A mesma faz referência através de chave estrangeira entre a tabela de filmes e a tabela de atores.</h4>

<h4>B)INSERT INTO MovieCast (movie_id, actor_id) VALUE ("003", "001"), ("002", "003"), ("003", "006"), ("004", "007"), ("007", "005"), ("002", "001");</h4>

<h4>C)Ocorreu erro por que não é possível relacionar a tabela ao ator que não existe. </h4>

<h4>D)Ocorreu erro por que não tem como apagar um item que está relacionado com outra tabela.</h4>

<h2 id="Questão3">Questão 3 </h2>

<h4>A) È retornado duas tabelas Rating e Movie. ON é a condição para que a tabela de Movie se ligue com a tabela de Rating.</h4>

<h4>B) SELECT Movies.id, title, Rating.rate FROM Movies INNER JOIN Rating ON Movies.id = Rating.movie_id;</h4>

