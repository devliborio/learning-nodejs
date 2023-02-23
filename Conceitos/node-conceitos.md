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
### **O que são modulos?**

> Nada mais é do que pedaços do seu programa
>
> - Para que eles servem?
>
>   * Ele serve para separar o seu código em varios arquivos.
>   * Ele também serve para utlilizar algumas bibliotecas.
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
### **Nodemon**

> O nodemon
>É estreitamente recomendado que instalemos o nodemon para que quando houver qualquer alteração no código do nosso servidor, ele automaticamente reinicie o servidor para aplicar as alterações.
>
> Instalamos ele da seguinte forma: npm install `nodemon -g` (o `-g` significa que queremos instalar essa biblioteca globalmente.)
> Depois de instalar o nodemon, é recomendado que iniciemos o servidor usando `nodemon <nome do arquivo>.js`
---
### **Arquitetura e Organização de aplicação Node.js**

> Organização por dominios (partes diferentes), vamos organizar o arquivo principal da nossa aplicação em dominios.
>
> Por exemplo eu teria uma pasta onde eu iria guardar todos meus arquivos relacionados a **login** e outra pasta com todos os arquivos relacionados a **painel administrativo**, até que fossem criadas todas as pastas para fundamentar o nosso arquivo principal.
>
> Esse é o tipo de organização mais comum que você vai achar no nodejs.
>
> **O que é um controller?**
>
> Controller é o nome do arquivo que a gente vai dá onde vai ficar toda a nossa lógica da nossa aplicação, onde vão ficar nossas rotas.
---
### **Status Code**

> Serve basicamente o que ocorreu na sua requisição, se ela foi bem sucedida, se teve algum erro, se ela ficou coo não autorizada e etc.
>
> É uma forma de você dizer pra quem fez uma requisição pra sua API o que aconteceu, na hora que você enviar a resposta (caso ocorra um erro ou não).
>
> <a href="https://pt.wikipedia.org/wiki/Lista_de_c%C3%B3digos_de_estado_HTTP">Clique aqui para ver uma lista de todos os status codes.</a>
---
### **Web Services**