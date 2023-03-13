### **O que é o Vue.js?**

> O vue.js é um framework reativo que vem para simplificar o código deixando ele mais limpo e legível, ele funciona com a metodologia Single Page Application (SPA) que basicamente funciona como uma forma mais dinâmica de construir uma aplicação front-end, por exemplo você não iria precisar ao acessar uma rota especifica da sua aplicação, recarregar a pagina inteira pra isso, ele iria te redirecionar para essa rota de forma dinâmica.
---
### **DOM com o Vue.js**

> O VUE assim como outros frameworks trabalham diretamente ligados ao DOM
---
### **VUE CLI**

> Para poupar tempo de configuração de projetos Vue.js você pode simplesmente instalar o vue cli através do NPM que ele irá facilitar muito toda a parte de configuração de projetos no vue. Execute esse comando abaixo:
>
>     npm install -g @vue/cli 
>
> Para criar um projeto usando o VUE CLI basta você ir no prompt de comando e digitar o seguinte comando:
>
>     vue create <nome do projeto>
>
> Depois de criado seu projeto usando o VUE CLI você pode rodar ele com o comando: 
>
>       npm run serve
---
### **O que são componentes?**

> Componentes são parte de um todo. Dentro da programação por exemplo, ao fazer um projeto grande ou mediano, é de extrema importância prezar pela organização do seu código e deixar ele o mais legível e arquitetado possível, para que outros programadores possam ler de forma mais simples e direta
>
> Então com o conceito de componentes você separa seu código em varias partes, essas partes são chamadas de componentes, em que cada componente é responsável por uma função do seu projeto, então dito isso a junção de todos os componentes basicamente forma a estrutura do seu projeto por completo.
---

### **Componentes no Vue.js**

> Os componentes no vue.js são divididos em três partes:
>
> - **o Template**: que é basicamente onde você vai escrever código HTML do seu projeto.
>
> - **O Script**: Onde você vai escrever a lógica do seu projeto, dentro do script sempre você precisara definir o `export default{}` para exportar o seu componente, assim possibilitando que ele seja importado em outro componente do seu projeto.
>
> - **O Style**: Onde você vai definir o estilo do seu projeto, dentro do Style definimos um atributo chamado `scoped` onde ele define basicamente que as alterações de estilo são especifica só para o componente em questão.
>
> Lembrando que essas 3 partes são somente definidas **no componente em questão** que está sendo criado!
---
### **Interpolação no Vue.js**

> Para usar a interpolação no vue basta definir o simbolo que chama ele que é esse aqui: {{}}
>
> E dentro desse simbolo você pode executar quaisquer operações JS dentro do HTML `(<template>)`, entretanto ele é mais utilizado para receber dados de alguma entidade do código, dados que sejam relevantes para  ele, geralmente a estrutura que é criada dentro da tag `(<script>)` do componente é essa aqui:
>
>     Data(){
>       return{
>         info1: "Gabriel",
>         info2: 2,    
>         info3: "M",
>         info4: 12
>       }   
>     }

