### **API**

> É meio que um software ou biblioteca que serve para permitir que alguma coisa se comunique com outra coisa, então podemos dizer que API é uma camada de comunicação, é uma interface de comunicação entre uma ou mais coisas.
>
> Um exemplo disso é a API do YouTube, que ao você se comunicar com ela, ela retorna por exemplo uma listagem de videos, ou listagem de canais do YouTube, ou até se comunicar com ela para realizar uploads de videos que estão no seu sistema para o site do YouTube.
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
> - Um aplicativo android se comunicando com um serviço de pagamento do PagSeguro.
>
> - Um jogo que está rodando no Xbox-one se comunicando com uma API do YouTube ou API da twitch.
---
### **REST**

> Antes de definir REST, é bom entendermos que antes de existir ele os web services não tinha padronização, logo se você tivesse um sistema e quisesse implementar um web service nele, você teria que estudar o padrão do mesmo e configurar seu sistema para conseguir implementar esse mesmo web service, o problema é que cada web service tinham padrões diferentes.
>
> Então entendido isso, o REST é basicamente um padrão de desenvolvimento de web services.
>
> Dito isso o padrão de arquitetura REST tem algumas regras para ser criado:
>
> - Deve seguir a arquitetura **Cliente Servidor** (O REST não pode ser cliente e servidor ao mesmo tempo).
>
> - **Statles** (Significa que você não deve guardar estado do cliente, ou seja se o cliente te manda uma requisição pra sua API REST você pega essa requisição, responde e esquece o cliente, então você não deve guardar dados daquela requisição no seu sistema).
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
>          Já essa é a forma correta e uniforme de se estruturar rotas na sua API REST, a diferença pra os não uniformes é que utilizamos os verbos (get, delete, put, patch).
>
> Falando agora sobre os tipos de retorno REST, podemos ver que diferente do padrão SOAP que só tem possibilidade de retornar em .xml o REST retorna em mais diversidade de tipos como: .json, .xml, .pdf, .png / .jpg e diversos outros tipos de arquivos.
---
### **REST OU RESTFUL**

>  Restful é quando você implementa uma API REST seguindo todas as padronizações, todas as regras que citamos acima, geralmente ela é aplicada de API's mais complexas e robustas.. 
>
> Porém você também pode criar uma API REST seguindo somente algumas das regras e ainda assim ela será uma API REST, geralmente o modelo mais casual de API's é esse onde você cria uma API REST que segue somente algumas das normas da comunidade.
>
> Agora vamos ver o que torna uma API REST em uma API RESTFUL, bom para que ela possa se tornar restful ela precisa passar por alguns níveis, e abaixo irei explicar o que são cada um deles:
>
> - O level 0 (Onde toda manipulação do seu WebService está focado em somente um endpoint, em uma única rota, por exemplo você tem uma e-comerce onde em uma rota ele retorna tudo sobre o seu sistema: todos os produtos, todos os fornecedores e etc...)
>
> - O level 1 (Onde você divide as coisas em recursos, os recursos são basicamente as entidades da sua API por exemplo: 
>   
>       https://meusite.com/clientes -> Clientes é uma entidade (Um recurso)
>
>       https://meusite.com/categorias -> Categorias é uma entidade também, basicamente é esse o conceito de recursos.
>
>   * Então para ficar claro a sua API vai ter diversos endpoints(rotas) para cada entidade.
> ---
> - O level 2 (É quando você utiliza os verbos http, se você utiliza os verbos http de forma correta, o post para criação de recursos, delete para deletar algo, put para edição, get para enviar dados para o cliente você já está no level 2).
>
> - O leve 3 (Hypermedia Controls, também chamado de HATEOAS, que é quando você faz uma requisição para uma API, e além de te retornar os dados, ela retorna uma tabela de links, das ações que eu posso fazer com tal conteúdo, por exemplo nessa tabela vai constar o link da rota que você deve seguir para, deletar, excluir, seguir etc...)
---