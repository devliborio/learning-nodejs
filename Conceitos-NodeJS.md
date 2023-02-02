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

