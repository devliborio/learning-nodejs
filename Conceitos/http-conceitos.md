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
### **Estrutura de um servidor HTTP no Node.js**

>       var http = require("http");
>
>       http.createServer(function(req,res),{ res.end("resposta ao cliente") }).listen(<porta>);
>
>       console.log("Meu servidor está rodando!")
---
### **Verbos HTTP**

> São formas de dizer como que você deseja fazer uma requisição ao servidor, basicamente são formas diferentes de você realizar uma requisição.
>
> Agora irei listar os 5 Verbos HTTP mais utilizados:
>
> - **GET** (Retornar dados de um servidor, usado em links e da suporte a cache).
>
> - **POST** (Criar novos itens no servidor, usado em formularios). 
>
> - **PUT** (Serve para atualizar completamente algum dado, usado em formularios).
>
> - **PATCH** (Ele é parecido com o PUT mas só vai atualizar algo parcialmente, uma caracteristica especifica do item, por exemplo tem um produto em uma loja em vez de atualizar o produto inteiro, você atualiza somente o preço, mas o nome e as outras caracteristicas continuam as mesmas, usado geralmente me formularios).
>
> - **DELETE** (Serve basciamente para deletar itens no servidor usado em formularios e links).
---


