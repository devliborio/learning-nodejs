<p>
    <h2 align="center">Conceitos MYSQL</h2>
</p>

### **Conexão em Servidor (CMD)**
>
> Para se conectar em um servidor é preciso seguir essa sintaxe de comando
>
>     mysql -h <servidor> -u <usuario-root> -p
>
> `-h` = Esse parâmetro requisita em qual servidor você deseja se conectar.
>
> `-u` = Esse parâmetro requisita o usuário root.
>
> `-p` = Esse parâmetro requisita a senha root.

---

### **Comandos Iniciais MYSQL**
>
>Use este comando para que o terminal do MYSQL te retorne todos os bancos de dados que existem no seu MYSQL:
>
>       SHOW DATABASES;
>
>
> Comando que  serve para criar um banco de dados no seu MYSQL:
>
>       CREATE DATABASE <nome do seu banco>;
>
>
> Comando que serve para que você possa acessar qualquer banco de dados no MYSQL:
>
>       USE <nome do banco de dados>;
>
> Comando que serve para mostrar todas as tabelas que existem no seu Banco de Dados:
>
>       SHOW TABLES;
>
> Comando que serve para criar tabelas dentro do seu banco de dados.
>
> - Onde dentro dos parenteses vamos criar as colunas dessa tabela. 
>
> - Primeiro criamos o seu nome e depois o tipo dessa coluna. 
>
> - Após escolher o tipo da coluna podemos definir o número de caracteres maximo que queremos aceitar dentro da tabela.
>
> - Para criar outras colunas dentro da tabela é só usar a virgula `,`
>
>       CREATE TABLE( coluna_a VARCHAR(50), coluna_b VARCHAR(100), coluna_c INT() );
    
