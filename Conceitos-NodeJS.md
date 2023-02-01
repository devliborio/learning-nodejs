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

### **NODEMON**

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
