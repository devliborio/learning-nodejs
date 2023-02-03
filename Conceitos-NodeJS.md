<p>
<h2 align="center">Conceitos Node.JS</h2>
</p>

### **O que é Node.JS?**

> É um interpretador JavaScript, que roda fora dos navegadores. (LADO DOS SERVIDORES)  
>
>* Com o JS rodando fora dos navegadores é possivel:
>
>    * 1 - Criar aplicações moveis
>    * 2 - Criar aplicações WEB com o backend
>    * 3 - Criar aplicações desktop
>    * 4 - Entre outras coisas...

---

### **Porque usar Node.JS?**

> * Muito leve.
> * Muito rapido.
> * Muito facil
> * Usa Javascript.
> * tem um dos maiores ecossistemas do mundo.
> * está sendo ultilizazdo fortemente no mercado.

---

### **Onde ele é usado?**

> * Netflix
> * PayPal
> * Uber

---

### **O que é HTTP**

>Imagine que em um dia um certo usuario chamado Jonas tem um trabalho da faculdade pra fazer, ai Jonas vai até o google e faz uma pesquisa, ele pesquisa sobre o trabalho dele no google e o google retorna essa pesquisa pra ele.
>
> VOCE JA PAROU PRA PENSAR COMO É POSSIVEL QUE JONAS EM CASA ATRAVÉS DE UMA PESQUISA CONSIGA SE CONECTAR COM O SERVIDOR DA GOOGLE?
>
> O Jonas só consegue se conectar com o servidor da google atraves de um cara chamado **HTTP**
>
> **Agora o que raios é esse HTTP??**
>
> Ele nada mais é do que um **PROTOCOLO** de transferencia de dados na web.
>
> No caso de exemplo acima o jonas manda uma requisião de pesquisa para o google, pedindo um resultado da mesma para ele.
>
> O HTTP funciona basciamente como transferencia de dados atraves de requisições e respostas.

---

### **O que são modulos?**

> Nada mais é do que pedaços do seu programa
>
> - Para que eles servem?
>
>   * Ele serve para separar o seu código em varios arquivos.
>   * Ele também serve para utlilizar algumas bibliotecas.

---

### **O que é um FrameWork?**

> Ele nada mais é do que uma Super Bliblioteca que te ajuda bastante a construir uma aplicação WEB BACKEND com o Node.JS
>
>Para aprender NodeJS vamos ultilizar o framework Express.JS, por ser mais robusto, popular, simples e facil de se construir aplicaões web backend.

---

### **Oque é NPM?**

>Basicamente significa Node Package Manager (Gerenciador de Pacotes do Node)
>
> Sempre que você instala o Node.JS o NPM vem junto, mas para checar se realmente está instalado na sua maquina digite `npm -v` e ele retornara a versão de NPM se instalado.
>
> É fortemente recomendado que ao começar um projeto Node.JS, você digite na linha de comando `npm init`, fazendo isso você vai iniciar um projeto Node.JS (NPM). 
> Fazemos isso porque é mais facil gerenciar instalação de bibliotecas no projeto.
>
> O arquivo `package.json` fala **TUDO** sobre seu projeto e tbm fala quais biblioteas estão instaladas nele.

---

### **Express.JS**

> Para instalar esse framework (super biblioteca) no seu projeto basta usar este comando: `npm install express --save` (o `--save` é um comando de instalação do NPM que vai salvar os arquivos do express na sua pasta do seu projeto.)

---

### **Nodemon**

>É estreitamente recomendado que instalemos o nodemon para que quando houver qualquer alteração no código do nosso servidor, ele automaticamente reinicie o servidor para aplicar as alterações.
>
> Instalamos ele da seguinte forma: npm install `nodemon -g` (o `-g` significa que queremos instalar essa biblioteca globalmente.)
> Depois de instalar o nodemon, é recomendado que iniciemos o servidor usando `nodemon <nome do arquivo>.js`

---

### **O que são parametros em rotas?**

> Parametros são formas de passar valores dinamicos diretos na sua rota.
>
> Observações que ao atribuir uma parametro a uma rota, você só consegue acessar essa rota acompanhamdo o parametro junto a ela.
>
> Para adicionar um parâmetro não obrigatorio use está sintaxe: 
>
>       /rota/:parametro?  
>
> Caso queira um orbigatorio use: 
>
>       /rota/:parametro 

---

### **EJS (Embedded JavaScript templating)**
>
> É um template engine que serve para renderizar códigos HTML no Node.JS.
>
> Para criar um arquivo EJS primeiramente você precisa criar uma pasta chamada `views` no diretório raiz do seu projeto, só pode ser essa pasta porque é a pasta padrão que o Node.JS busca os arquivos HTML / EJS. Agora dentro dele criar seus arquivos com a extensão `.ejs`
>
> Agora para carregar o `EJS` no seu arquivo Node.JS você precisa usar a seguinte linha de código:
>
>       app.set("view engine","ejs"); 
>
> Agora para lincar isso no seu arquivo principal Node, provalvelmente `index.js` você tem que puxar ele dentro de uma rota isso é obvio, entretanto normalmente para enviarmos uma resposta para o usuario usamos o método `res.send()` só que para enviarmos nosso código `.ejs` usamos o seguinte método de envio `res.render()` já que ele é um renderizador afinal. Entretanto não basta somente isso, você agora precisa sinalizar qual arquivo você quer chamar, agora fica fácil é só usar essa estrutura de código:
>
>       res.render("<nomedoseuarquivo>");
>
> Outra recurso bastante util do EJS é poder chamar variaveis do javascript para o mundo HTML usando a tag `<%= %>`.
>
> Para enviar essas variaveis do arquivo index.js do Node para o mundo HTML usando o EJS, você precisa definir um objeto como segundo parâmetro no método `res.render()` da seguinte forma:
>
>       res.render("<arquivo.ejs>",{nomeQueVaiUsarnoEjs: variavelDoJS})
>
> Você também pode misturar a tag `<%= %>` com as tags padrões do HTMl como um `<p>` ou um `<h1>`.
>
> Agora vamos falar sobre como usar **ESTRUTURAS CONDICIONAIS** no EJS, diferente da forma de usar variaveis, o uso da tag é diferente onde não precisamos definir o `=` logo após abrir a tag podemos simplesmente fazer desse jeito `<% %>`.
>
> Agora para criar uma condição é bem simples veja:
>
>       <% if(algumacoisa == true){ %> 
>           façaalgumacoisa
>       <% } else { %> 
>           senãofaçaisso
>       <% } %>
>
> Agora que já falamos das estruturas condicionais, vamos ver um pouco sobre as **ESTRUTURAS DE REPETIÇÃO** com EJS, e para demonstrar vamo trabalhar esse exemplo com o método `forEach()` (para cada), fazemos o seguinte para fazer isso no EJS:
>
>       <% array.forEach(function(itemArray) { %>
>               <%= itemArray.nomePrincipal0 %>
>               <%= itemArray.nomePrincipal1 %> 
>       <% }) %>
>
>
> Agora vamos falar sobre reutilizar HTML com **Partials** usando EJS.
>
> Para usa-lo é recomendado que você crie uma pasta `partials` na sua pasta `views` onde você criará um arquivo para cada pedaço de HTML que você irá reutilizar.
>
> E nessa pasta você vai criar os arquivos para qual iram receber os pedaços do código que você quer salvar como por exemplo: `header.ejs` `footer.ejs` `navbar.ejs` `form.ejs`
>
> E após criado seus compenentes que são nada mais que pedações do seu código você pode importar eles para onde você quiser da seguinte forma:
>
>       <%- include( 'partials/nomedoarquivo.ejs' ) %>
---

### **Manipulando arquivos estaticos no ExpressJS**
>
> Arquivos estaticos são arquivos que o backend não processa como imagens, css, códigos javascript do frontend
>
> Agora tem uma forma de processarmos isso, e para manipular arquivos estaticos no ExpressJS é bem simples, no seu arquivo principal do Node basta vc definir a seguinte linha de comando:
>
>     app.use(express.static("public"));
>
> Note que um padrão adotado pela comunidade é criar a pasta `public` no diretório do seu projeto.

---

### **Sequelize para Bancos de dados com Node.JS**
>
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
>
><br>
>
> #### **Model** 
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
>   * Execute esse código código para sincronizar o código feito acima no banco de dados
>
>           Nomedaconst.sync({force: false});
>
> Esse `force: false` significa que ele não ira forçar a criação da tabela caso ela já exista.
>
>  - Agora para executar TUDO isso que acabamos de fazer devemos realizar o seguinte:
>
>       * Importar o model para o `index.js` do seu projeto
>
>               const Nomedaconst = require("./database/ArquivoModel.js");