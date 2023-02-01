/*

! O que é Node.js?

* É um interpretador JavaScript, que roda fora dos navegadores. (LADO DOS SERVIDORES)  

* Com o JS rodando fora dos navegadores é possivel:

    * 1 - Criar aplicações moveis
    * 2 - criar aplicações WEB com o backend
    * 3 - criar aplicações desktop
                           * E muitas outras coisas...


! PORQUE USAR NODE.JS?

* Muito leve.
* Muito rapido.
* Muito facil
* Usa Javascript.
* tem um dos maiores ecossistemas do mundo.
* está sendo ultilizazdo fortemente no mercado.

! ONDE ELE É USADO?

* Netflix
* PayPal
* Uber

! O que é HTTP?

* Imagine que em um certo dia um certo usuario chamado jonas tem um certo da trabalho da faculdade pra fazer, ai Jonas vai até o google e faz uma pesquisa, ele pesquisa sobre o trabalho dele no google e o google retorna essa pesquisa pra ele.

* VOCE JA PAROU PRA PENSAR COMO É POSSIVEL QUE JONAS EM CASA ATRAVÉS DE UMA PESQUISA CONSEGUE SE CONECTAR COM O SERVIDOR DA GOOGLE?

* O Jonas só consegue se conectar com o servidor da google atraves de um cara chamado **HTTP**

* Agora o que raios é esse HTTP??

! Ele nada mais é do que um PROTOCOLO de transferencia de dados na web.

* No caso de exemplo acima o jonas manda uma requisião de pesquisa para o google, pedindo um resultado da mesma para ele.

* O HTTP funciona basciamente como transferencia de dados atraves de requisições e respostas.

! O que são modulos?

* - Nada mais é do que pedaços do seu programa

! Para que eles servem?

* - Ele serve para separar o seu código em varios arquivos.
* - Ele também serve para utlilizar algumas bibliotecas.

! O que é um FrameWork?

* Ele nada mais é do que uma Super Bliblioteca que te ajuda bastante a construir uma aplicação WEB BACKEND com o Node.JS

* Em torno de todo o Curso de Formação Node.js vamos ultilizar o framework Express.JS, por ser mais robusto, popular, simples e facil de se construir aplicaões web backend com node.

! É FORMETEMENTE RECOMENDADO QUE AO COEMÇAR UM PROJETO NODE, VOCÊ DIGITE NA LINHA DE COMANDO (NPM INIT), FAZENDO ISSO VC VAI INICIAR UM PROJETO NODE.JS (NPM), fazemos isso porque é mais facil gerenciar instalação de bibliotecas no projeto.

* O arquivo package.json fala TUDO sobre seu projeto e tbm fala quais biblioteas estão instaladas nele.

! É estreitamente recomendado que instalemos o nodemon para que quando houver qualquer alteração no código do nosso servidor, ele automaticamente reinicie o servidor para aplicar as alterações.

* Instalamos ele da seguinte forma: npm install nodemon -g (o -g significa que queremos instalar essa biblioteca globalmente.)
* Depois de instalar o nodemon, é recomendado que iniciemos o servidor usando 'nodemon (e o arquivo do servidor).js'

! O que são parametros em rotas?

* Parametros são formas de passar valores dinamicos diretos na sua rota.
* Observações que ao atribuir uma parametro a uma rota, você só consegue acessar essa rota acompanhamdo o parametro junto a ela.
* Para ADICIONAR UM PARAMETRO NÃO OBRIGATORIO use está sintaxe: /rota/:parametro? | caso queira um orbigatorio use: /rota/:parametro |
*/