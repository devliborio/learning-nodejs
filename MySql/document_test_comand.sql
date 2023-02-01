-- Estrutura de criação de tabela com colunas
CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT(3)
);

-- Inserindo dados em uma tabela
INSERT INTO usuarios(nome, email, idade) VALUES(
 "Guilherme Libório Machado",
 "email@teste.com",
 21
);

-- Comando para selecionar dados de uma tabela
SELECT * FROM usuarios;

-- Especificando (dando uma condição) uma consulta no MYSQL (WHERE)
SELECT * FROM usuarios WHERE idade = 21;

-- Deletando registros em uma tabela especifica, OBS: Sempre use o WHERE pois sem ele pode ter o risco de você deletar uma tabela inteira, então sempre use o WHERE para dar uma condição
DELETE FROM usuarios WHERE nome = "Cellbit";
