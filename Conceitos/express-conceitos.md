### **O que é um FrameWork?**

> Ele nada mais é do que uma Super Bliblioteca que te ajuda bastante a construir uma aplicação WEB BACKEND com o Node.JS
---
### **Express.JS**

> É um frameword para Node.js
> Para instalar esse framework (super biblioteca) no seu projeto basta usar este comando: `npm install express --save` (o `--save` é um comando de instalação do NPM que vai salvar os arquivos do express na sua pasta do seu projeto.)
---
### **Manipulando arquivos estaticos no ExpressJS**

> Arquivos estaticos são arquivos que o backend não processa como imagens, css, códigos javascript do frontend
>
> Agora tem uma forma de processarmos isso, e para manipular arquivos estaticos no ExpressJS é bem simples, no seu arquivo principal do Node basta vc definir a seguinte linha de comando:
>
>     app.use(express.static("public"));
>
> Note que um padrão adotado pela comunidade é criar a pasta `public` no diretório do seu projeto.
---

### **Router**

> O que é um router?
>
> `Router()` é um método do expressjs que permite você a criar rotas em arquivos diferentes do `index.js` que é o arquivo principal 