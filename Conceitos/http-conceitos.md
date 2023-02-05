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
### Estrutura de um servidor HTTP no Node.js

>       var http = require("http");
>
>       http.createServer(function(req,res),{ res.end("resposta ao cliente") }).listen(<porta>);
>
>       console.log("Meu servidor está rodando!")