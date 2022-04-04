<h1 id= "top" align="center" "><img width =600px src="https://user-images.githubusercontent.com/94841376/161636713-4c0c7466-5907-4561-b197-3083fa99a606.png" />
</h1>
  

  
<p align="center">
  <a href="#Questão1">Questão1</a> &#xa0;|&#xa0; 
  <a href="#Questão2">Questão2</a> &#xa0;|&#xa0; 
  <a href="#Questão3">Questão3</a> &#xa0;|&#xa0;
  <a href="#Questão4">Questão4</a> &#xa0;|&#xa0;
  <a href="#Questão5">Questão5</a> &#xa0;|&#xa0;
  <a href="#Questão6">Questão6</a> &#xa0;|&#xa0;
  <a href="#Questão7">Questão7</a> &#xa0;|&#xa0;
</p>

<h2 id="Questão1">Questão 1 </h2>

<h4> A) varchar(n) é ultilizado para definir entre parenteses a quantidade de caracteres que uma variavel deve ter, not null garante que uma coluna não admite valores NULL, ja o tipo DATE representa um formato de data(YYYY-MM-DD), PRIMARY KEY define que Toda tabela possuirá uma, e somente uma, chave primária.</h4>
<h4> B) DataBases permite obter informações sobre os bancos de dados, tabelas e colunas, Show Tables é usado para exibir todas as tabelas em um banco de dados afim para tornar a formatação mais fácil</h4>
<h4> C) O comando DESCRIBE Actor mostra as informacoes do actor como nome e seus dados </h4>

 
 <h2 id="Questão2">Questão 2</h2>
 <h4> A) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
   12000000,
  "1963-08-23", 
   "female"
); 
   </h4>
<h4> B) Erro duplicada para a chave 'PRIMÁRIA' ocorreu por que a primary key não era unica</h4>
<h4> C) erro: Quantidade de colunas não corresponde à quantidade da linha 1. O erro ocorreu pois tinha alguns campos que não estavam definidos como por exemplo, os valores do campo data de nascimento  </h4>
<h4> D) erro: Campo 'nome' não tem um valor. Ocorreu esse erro pois o campo 'nome' não tem valor e está dando null .
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);</h4>
        
<h4>E) Erro: Valor de data incorreto. Esse erro ocorreu devido o valor data estar sem aspas.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);</h4>
<h4> F) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Andrew Garfield",
  1000000,
  "1983-08-20", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "chris evans",
  400000,
  "1981-06-13", 
  "male"
);</h4>


<h2 id="Questão3">Questão 3</h2>
 A)
SELECT * FROM Actor
WHERE gender = "male";

B)
SELECT salary FROM Actor
WHERE name = "Andrew Garfield";

C)
O resultado veio null pois não tem atores ou atrizes sem o campo gênero, e na criação foi definido que o valor gênero como NOT NULL.

D)
SELECT id, name, salary FROM Actor
WHERE salary <= 400000;

E)
Erro 1054. 'nome' não foi encontrado no campo da lista.
Não existe nome e sim name .

SELECT id, name from Actor 
WHERE id = "004";


<h2 id="Questão4">Questão 4</h2>
A)
A query mostra (SELECT) da tabela Actor (FROM Actor) onde tem nome que começa com A ou com J (WHERE (name LIKE "A%" OR name LIKE "J%")) e que tenha o salário
maior que 300 000 (AND salary > 300000).

B)
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

C)
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

D)
SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") 
AND salary BETWEEN 350000 AND 900000;

<h2 id="Questão5">Questão 5</h2>
A)
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
	name VARCHAR(255) NOT NULL, 
	synopsis TEXT NOT NULL, 
	release_date DATE NOT NULL,
	rating INT NOT NULL
);

B)
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES (
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);

C)
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES (
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2021-12-27",
    10
);


D)
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES (
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);

E)
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES (
	"004",
    "Bingo: O Rei das Manhãs",
    "Augusto sempre sonhou com o estrelato e finalmente tem sua chance ao se tornar Bingo, um palhaço apresentador de um programa infantil. Mas a cláusula no contrato não permite que a identidade do palhaço seja revelada, deixando Augusto com frustração de ser o homem anônimo mais famoso do Brasil.",
    "2012-01-20",
    7
);
 <h2 id="Questão6">Questão 6</h2>
A)
SELECT id, name, rating FROM Movie
WHERE id = "001";

B)
SELECT * FROM Movie
WHERE name = "Bingo: O Rei das Manhãs";

C)
SELECT id, name, synopsis FROM Movie
WHERE rating >= 7;

<h2 id="Questão7">Questão 7</h2>
 A)
SELECT * FROM Movie
WHERE name LIKE "%vida%";

B)
SELECT * FROM Movie
WHERE name LIKE "%TERMO DE BUSCA%" 
OR synopsis LIKE "%TERMO DE BUSCA%";

C)
SELECT * FROM Movie
WHERE release_date < "2020-05-04";

D)
SELECT * FROM Movie
WHERE release_date < "2020-05-04" 
AND (name LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%") 
AND rating > 7;
