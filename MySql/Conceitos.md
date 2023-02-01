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
>
> Agora para visualizarmos a estrutura de uma tabela que já foi criada podemos usar o seguinte comando:
>
>       DESCRIBE <nome da tabela>;
>
> Agora para inserir algum dado dentro da tabela usamos este tipo de comando:
>
> Para inserir dados precisamos passar o nome da tabela onde dentro do nome vamos dizer quais campos vamos inserir esses valores novos que vamos criar, e depois de dizer quais campos, fazemos o comando `VALUES` que é onde colocaremos **RESPECTIVAMENTE** nossos valores que serão inseridos.
>
>       INSERT INTO <nome da tabela>(<campo1>,<campo2>,<campo3>) VALUES(<x-campo1>,<y-campo2>,<z-campo3>);
>
> Este comando serve para listar os dados de uma tabela, perceba que colocamos um `*` esse simbolo serve para dizer que queremos listar **TODOS** os dados de uma tabela especifica.
>
>       SELECT * FROM <nome da tabela>;
>
> Para especificar uma consulta no MYSQL usamos essa estrutura de comando (WHERE)
>
>       SELECT * FROM <nome da tabela> WHERE <nome da coluna> = <valor que deseja buscar>;