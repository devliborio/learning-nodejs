### **O que é Node.JS?**

> É um interpretador JavaScript, que roda fora dos navegadores. (LADO DOS SERVIDORES)  
>
>* Com o JS rodando fora dos navegadores é possível:
>
>    * 1 - Criar aplicações moveis
>    * 2 - Criar aplicações WEB com o backend
>    * 3 - Criar aplicações desktop
>    * 4 - Entre outras coisas...
---
### **Porque usar Node.JS?**

> * Muito leve.
> * Muito rápido.
> * Muito fácil
> * Usa Javascript.
> * tem um dos maiores ecossistemas do mundo.
> * está sendo utilizado fortemente no mercado.
---
### **Onde ele é usado?**

> * Netflix
> * PayPal
> * Uber
---
### **O que são módulos?**

> Nada mais é do que pedaços do seu programa
>
> - Para que eles servem?
>
>   * Ele serve para separar o seu código em vários arquivos.
>   * Ele também serve para utilizar algumas bibliotecas.
---
### **O que são parâmetros em rotas?**

> Parâmetros são formas de passar valores dinâmicos diretos na sua rota.
>
> Observações que ao atribuir uma parâmetro a uma rota, você só consegue acessar essa rota acompanhando o parâmetro junto a ela.
>
> Para adicionar um parâmetro não obrigatório use está sintaxe: 
>
>       /rota/:parâmetro?  
>
> Caso queira um obrigatório use: 
>
>       /rota/:parâmetro 
---
### **Oque é NPM?**

>Basicamente significa Node Package Manager (Gerenciador de Pacotes do Node)
>
> Sempre que você instala o Node.JS o NPM vem junto, mas para checar se realmente está instalado na sua maquina digite `npm -v` e ele retornara a versão de NPM se instalado.
>
> É fortemente recomendado que ao começar um projeto Node.JS, você digite na linha de comando `npm init`, fazendo isso você vai iniciar um projeto Node.JS (NPM). 
> Fazemos isso porque é mais fácil gerenciar instalação de bibliotecas no projeto.
>
> O arquivo `package.json` fala **TUDO** sobre seu projeto e tbm fala quais bibliotecas estão instaladas nele.
---
### **Nodemon**

> O nodemon
>É estreitamente recomendado que instalemos o nodemon para que quando houver qualquer alteração no código do nosso servidor, ele automaticamente reinicie o servidor para aplicar as alterações.
>
> Instalamos ele da seguinte forma: npm install `nodemon -g` (o `-g` significa que queremos instalar essa biblioteca globalmente.)
> Depois de instalar o nodemon, é recomendado que iniciemos o servidor usando `nodemon <nome do arquivo>.js`
---
### **Arquitetura e Organização de aplicação Node.js**

> Organização por domínios (partes diferentes), vamos organizar o arquivo principal da nossa aplicação em domínios.
>
> Por exemplo eu teria uma pasta onde eu iria guardar todos meus arquivos relacionados a **login** e outra pasta com todos os arquivos relacionados a **painel administrativo**, até que fossem criadas todas as pastas para fundamentar o nosso arquivo principal.
>
> Esse é o tipo de organização mais comum que você vai achar no nodejs.
>
> **O que é um controller?**
>
> Controller é o nome do arquivo que a gente vai dá onde vai ficar toda a nossa lógica da nossa aplicação, onde vão ficar nossas rotas.
---
