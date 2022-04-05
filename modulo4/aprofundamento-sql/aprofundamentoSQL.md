<p align="center">
  <a href="#Questão1">Questão1</a>   |   
  <a href="#Questão2">Questão2</a>   |   
  <a href="#Questão3">Questão3</a>   |  
  <a href="#Questão4">Questão4</a>   |  
  <a href="#Questão5">Questão5</a>   |  
  <a href="#Questão6">Questão6</a>   |   
</p>

<h2 id="Questão1">Questão 1 </h2>

<h4>A) ALTER TABLE Actor DROP COLUMN salary; deletaria a coluna de salário da tabela de Atores..</h4>
<h4>B) ALTER TABLE Actor CHANGE gender sex VARCHAR(6); mudaria o nome da coluna "gender" para "sex"</h4>
<h4>C) ALTER TABLE Actor CHANGE gender gender VARCHAR(255); mudaria a gender para poder ter até mais caracteres.</h4>
<h4>D)ALTER TABLE Actor CHANGE gender gender VARCHAR(100);</h4>

<h2 id="Questão2">Questão 2 </h2>
<h4>A)UPDATE Actor SET name = "Montenegro Fernada" WHERE id = "004";</h4>
<h4>B)UPDATE Actor SET name = "JULIANA PAES" WHERE id = "005"; UPDATE Actor SET name = "Juliana Paes" WHERE id = "005";</h4>
<h4>C)UPDATE Actor SET name = "Paes Juliana",birth_date = "1980-01-01",salary = 300000,gender = "male" WHERE id = "005";</h4>
<h4>D)Aparece como 0 rows afetadas quando o id não existe.</h4>

<h2 id="Questão3">Questão 3 </h2>
<h4>A)DELETE FROM Actor WHERE name = "Fernanda Montenegro";</h4>
<h4>B)DELETE FROM Actor WHERE gender = "male" AND salary > 1000000</h4>

<h2 id="Questão4">Questão 4 </h2>
<h4>A)SELECT MAX(salary) FROM Actor;</h4>
<h4>B)SELECT MIN(salary) FROM Actor WHERE gender = "female";</h4>
<h4>C)SELECT COUNT(*) FROM Actor WHERE gender = "female";</h4>
<h4>D)SELECT SUM(salary) FROM Actor;</h4>

<h2 id="Questão5">Questão 5 </h2>
<h4>A)SELECT COUNT(*), gender FROM Actor GROUP BY gender; é responsavel por somar o total de atores e atrizes e separa-los por gender</h4>
<h4>B)SELECT id, name FROM Actor ORDER BY name DESC;</h4>
<h4>C)SELECT * FROM Actor ORDER BY salary ASC;</h4>
<h4>D)SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;</h4>
<h4>E)SELECT AVG(salary), gender FROM Actor GROUP BY gender;</h4>

<h2 id="Questão6">Questão 6 </h2>
<h4>A)ALTER TABLE Movie ADD COLUMN playing_limit_date DATE;</h4>
<h4>B)ALTER TABLE Movie CHANGE rating rating FLOAT NOT NULL;</h4>
<h4>C)UPDATE Movie SET playing_limit_date = "2022-05-02" WHERE id = "003";
      UPDATE Movie SET playing_limit_date = "2020-05-02" WHERE id = "004";</h4>
<h4>D)DELETE FROM Movie WHERE id = "001";
UPDATE Movie SET synopsis = "Teste sinopse" WHERE id="002";
Apareceu que foi afetado 0 Rows por que o o campo id foi deletado.</h4>
