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
### **API**

> É meio que um sotware ou biblioteca que serve para permitir que alguma coisa se comunique com outra coisa, então podemos dizer que API é uma camada de comunicação, é uma interface de comunicação entre uma ou mais coisas.
>
> Um exemplo disso é a API do youtube, que ao você se comunicar com ela, ela retorna por exemplo uma listagem de videos, ou listagem de canais do youtube, ou até se comunicar com ela para realizar uploads de videos que estão no seu sistema para o site do youtube.
---
### **Status Code**

> Serve basicamente o que ocorreu na sua requisição, se ela foi bem sucedida, se teve algum erro, se ela ficou coo não autorizada e etc.
>
> É uma forma de você dizer pra quem fez uma requisição pra sua API o que aconteceu, na hora que você enviar a resposta (caso ocorra um erro ou não).
>
> <a href="https://pt.wikipedia.org/wiki/Lista_de_c%C3%B3digos_de_estado_HTTP">Clique aqui para ver uma lista de todos os status codes.</a>
---
### **Web Services**

> É basicamente uma API que roda na Web, e funciona através do protocolo HTTP.
>
> Então podemos definir um API que roda na web como um **web service**.
>
> Sendo assim, ele serve para prover uma camada de comunicação com outras coisas, por exemplo:
>
> - Um aplicativo android se comunicando com um serviço de pagamento do pagseguro.
>
> - Um jogo que está rodando no Xbox-one se comunicando com uma API do youtube ou API da twitch.
---
### **REST**

> Antes de definir REST, é bom entedermos que antes de existir ele os web services não tinha pradronização, logo se você tivesse um sistema e quisesse implementar um web service nele, você teria que estudar o padrão do mesmo e configurar seu sistema para conseguir implementar esse mesmo web service, o problema é que cada web service tinham padrões diferentes.
>
> Então entendido isso, o REST é basicamente um padrão de desenvolvimento de web services.
>
> Dito isso o padrão de arquitetura REST tem algumas regras para ser criado:
>
> - Deve seguir a arquitetura **Cliente Servidor** (O REST não pode ser cliente e servidor ao mesmo tempo).
>
> - **Statles** (Significa que você não deve guardar estado do cliente, ou seja se o cliente te manda uma requisição pra sua API REST você pega essa requisição, responde e esqueçe o cliente, então você não deve guardar dados daquela requisição no seu sistema).
>
> - **Cacheável** (Pra uma API ser REST ela tem que ter a possibilidade de permitir cache, então em algumas situações você vai precisar fazer cache de informações na sua API, o cache basicamente serve para que você possa economizar dados de processamento do seu servidor, é algo voltado pro desempenho, entretanto a maioria das API convencionais não trabalham com esse sistema de cache).
>
> - **Saber trabalhar com camadas** (Isso significa que não importa se você colocar um proxy, um firewall, um middleware ou qualquer outra coisa entre a requisição(cliente) e a resposta(API) a sua API vai pouco se importar se tem algo entre ele e o cliente, ela só vai funcionar como ela deve funcionar).
>
> - Interface uniforme e direta (As rotas da sua API tem que ser uniforme e direta, para ser mais pratico vamos entender esses exemplos abaixo)
>
>   * **Interface não uniforme:** 
>       
>           https://meusite.com/getCliente/todos
>           https://meusite.com/deletarClientes/peloId/1
>           https://meusite.com/clientes/peloId/1
>           https://meusite.com/editar/clientes/peloId/2
>          
>          Essa é a forma incorreta de você declarar seus endpoints(rotas) em uma API REST.
>
>   * **Interface uniforme:** 
>       
>          GET = https://meusite.com/clientes
>          DELETE = https://meusite.com/cliente/1
>          GET = https://meusite.com/cliente/1
>          PUT = https://meusite.com/cliente/2
>
>          Já essa é a forma correta e uniforme de se estruturar rotas na sua API REST, a diferença pra os não uniformes é que ultilizamos os verbos (get, delete, put, patch).
>
> Falando agora sobre os tipos de retorno REST, podemos ver que diferente do padrão SOAP que só tem possibilidade de retornar em .xml o REST retorna em mais diversidade de tipos como: .json, .xml, .pdf, .png / .jpg e diversos outros tipos de arquivos.