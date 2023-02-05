### **Sequelize para Bancos de dados com Node.JS**

> A melhor maneira de se trabalhar com bancos de dados com Node.JS é usando uma biblioteca chamada `Sequelize`.
>
> Com o `Sequelize` você consegue fazer qualquer tipo de manipulação no seu banco de dados SQL.
>
> O `Sequelize` faz todo o processo de conexão, manipulação do banco de dados tudo dentro do Node.js, então atraves de códigos JS você consegue manipular seu banco de dados.
>
> Deixendo o processo de conversão de códigos JS para o `Sequelize` porque ele iria pegar eses códigos e converter para o formato SQL automaticamente.
>
> Entendido para que serve o `Sequelize` vamos ver como é feita a instalação dele. Basicamente você só precisa executar esse comando para instalar essa biblioteca no seu projeto, abra ele no seu terminal de comando e execute:
>
>       npm install --save sequelize
>
> Entretando o sequelize depende de outra biblioteca para funcionar corretamente, então após executar o comando acima, utilize o seguinte:
>
>       npm install --save mysql2
>
> Para criar iniciar uma conexão `Sequelize` com MYSQL precisamos seguir alguns passos dentro do seu editor de código:
>
> - Primeiro crie um banco de dados no seu MYSQL.
>
> - Agora crie uma pasta no seu projeto chamada `database`
>
> - Crie um arquivo `.js` de conexão com o nome que preferir `nomedoarquivo.js`
>
> - Agora importe o `Sequelize` para esse arquivo usando este padrão de código:
>
>       const Sequelize = require("sequelize");
>
> - E vamos criar a conexão de fato agora, é bem simples:
>
>       const conection = new Sequelize("nomeDoBanco","usuarioRoot","senhaDoBanco",{host: 'ondeEstaOSeuBanco', dialect: 'qualOTipoDeBanco'});
>       
> - Agora exporte a conexão para usar no seu projeto:
>
>       module.exports = conection;
>
> Agora vamos entender como podemos autenticar essa conexão no Node.JS e novamente vamos seguir uns passos para entender como realizar essa verificação:
>
> - Primeiro abra seu editor de código e navegue até sua arquivo principal `index.js` 
>
> - Após isso importe a conexão que foi feita acima
>
>       const conection = require("./database/conection");
>
> - Agora vamos criar o código de autenticação
>
>       conection.authenticate().then(() =>{ console.log("Conexão feita no banco de dados!"); }).catch((msgErro) =>{ console.log(msgErro); });
>
> Caso sua autenticação falhe e retorne no console o seguinte erro `Client does not support authentication protocol requested by server; consider upgrading MySQL client` você deve seguir os seguinte passos para solucionar o problema:
>
> - Abra seu MySQL workbench e vá até `Create New SQL file`
>
> - Após fazer isso você vai executar esse código abaixo:
>
>       ALTER USER 'root'@'host' IDENTIFIED mysql_native_password BY 'yourPassword'
>
> Vamos entender o que esse código está fazendo, basicamente ele está **alterando o modo de autenticação criptografado do usuario root do seu servidor MySQL para uma autenticação de senha plana (sua senha atual)**.
---
> #### **Model Sequelize** 
>
> Para criar uma tabela no Node.JS usando javascript usamos um padrão chamado `model` que é uma representação da sua tabela como um OBJETO javascript, um `model` é um arquivo `.js` que é criado dentro da pasta `database` que recebe códigos javascript para criar uma tabela, para gerar isso vamos seguir esse passo a passo:
>
> - Primeiro crie seu arquivo com o padrão de letra maiuscula na primeira letra para ser legivel que isso se trata de um `model`.
>
> - Após isso vamos começar a codar:
>
>   * Importe o sequelize no seu arquivo
>
>          const Sequelize = require("sequelize");
>
>   * Agora vamos importar a conexão com o banco de dados
>
>           const conection = require("suaconexao");
>
>   * Feito isso vamos criar a tabela com JS
>
>           const Nomedaconst = conection.define('nomeDaTabela',{ nomeDaColuna:{ type: Sequelize.TIPODACOLUNA, allowNull: false }, nomeDaColuna:{ type: Sequelize.TIPODACOLUNA, allowNull: false } });
>
> Perceba que é bem simples, uma observação é que esse `allowNull: false` serve para que o usuário não consiga enviar o formulario em branco.
>
> - Depois de feito isso basta abaixo do código acima fazer o seguinte:
>
>   * Execute esses códigos para sincronizar o código feito acima no banco de dados
>
>           Nomedaconst.sync({force: false});
>
>           module.exports = Nomedaconst;
>
> Esse `force: false` significa que ele não ira forçar a criação da tabela caso ela já exista.
>
>  - Agora para executar TUDO isso que acabamos de fazer devemos realizar o seguinte:
>
>       * Importar o model para o `index.js` do seu projeto
>
>               const Nomedaconst = require("./database/ArquivoModel.js");
---