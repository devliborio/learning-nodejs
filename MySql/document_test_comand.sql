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

-- Especificando uma consulta no MYSQL
SELECT * FROM usuarios WHERE idade = 21;