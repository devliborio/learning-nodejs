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
---
### **Data Binding**

> É uma técnica geral que une duas fontes de dados / informações e as mantém em sincronia em um processo que estabelece uma conexão entre UI da aplicação e a logica de negocio.
>
> Existem dois tipos de Data Binding: **One way** e **Two way**.
>
> No **One way** você basicamente pega um dado que vem do back-end e liga no front-end, exemplificando para a realidade do vue.js você define uma função `data(){}` no seu script e por exemplo dentro dela retorna uma variável `nome: "Guilherme"`, usando o One way você pode chamar essa variável para dentro de um atributo de um input para formulário usando essa sintaxe aqui:
>
>     <input type="text" :value="nome">   // Usando sempre o ":" para que seja possível definir uma variável dentro do atributo.
>
>       ou
>
>     <input type="text" value="{{nome}}"
> 
> Ambas acima são técnicas One way, agora perceba que essa Data Binding é de um caminho só, pois esse serve só para leitura, ele não tem a capacidade de modificar o dado.
>
> No **Two way** diferente do One way você tem a capacidade de modificar o dado, porem ele não funciona em todos os atributos, ele tem mais foco em formulários, checkbox, select e etc...
>
> Agora para aplicar o Two way data binding é bem simples, em vez de usar o `value=""` dentro do input você vai usar algo chamado `v-model=""` dessa forma:
>
>     <input type="checkbox v-model="<nome da variável>">
>
> Com isso as alterações nesse campo vão ser alteradas em tempo real no andamento da aplicação.
---

### **Props no Vue.js**

> Props é um atributo Vue.js personalizado para passar dados de componentes pais para filhos.
>
> Isso é muito importante para lembrar: você não poderá compartilhar dados entre componentes usando props, a menos que sua intenção seja passar os dados de um componente pai para um componente filho.
>
> Exemplo de prop:
>
>     <template>
>
>       <Cliente descricao="Ele é muito bom em Node.js" nome="Guilherme"> 
>       // Esses atributos dentro da tag componente "Cliente" são as props.
>
>     </template>
>
>     import Cliente from './components/cliente'
>
> Só que não é apenas isso, você também precisa criar um objeto no script do seu componente, onde será definido as variáveis que irão receber os dados vindo da atributo que você definiu no seu componente.
>
>     <script> 
>
>      exports default { 
>       data() {
>
>           return {
>              // nome: "Guilherme Libório", | Evite usar nome de variáveis iguais para não ocorrer erro de key duplicated |
>              idade: 21,
>              sexo: "Masculino"
>         }
>     },
>           props: { // Aqui você define o nome do atributo e o tipo dele
>              nome: String,
>              idade: Number,
>              sexo: String   
>        }
>     }
>
>     </script>
---
### **Diretivas do Vue.js**

> As diretivas são tags especiais adicionadas ao seu elemento HTML e que lá vai se aplicar algum comportamento especial definido pela função. Ainda não ficou tão claro assim? Na prática termos algumas diretivas tais como: `v-model`, `v-if`, `v-else`, `v-for`, entre outras.
>
> Ao definir um `v-if`ou quaisquer outras diretivas temos que se atentar que ao definir uma prop boolean por exemplo, ou numérica devemos usar o ":" na frente do atributo para evitar erros de invalid prop pois se passarmos um atributo assim -> `atributo = "true"`, na verdade esse trip é uma string ele não converte para boolean, então devemos usar dessa forma -> `:atributo="true"`
>
> Adendo importante ao usar o `v-if`, ao usar essa diretiva automaticamente se a condição for falsa ele destrói a tag em questão e caso um dia ela venha a ser verdadeira ela será reconstruída, caso seja da opção do desenvolvedor não optar por essa opção, pode-se usar outra diretiva chamada `v-show` que somente mostra ou esconde o elemento usando o atributo `display` do CSS, uma observação é que no `v-show` não existe um `v-else` caso você queira que algo ocorra se a condição for falsa ou verdadeira.
>
> A diretiva `v-for` serve basicamente para percorrer uma lista de itens dentro de um array, ele é usado como um atributo normal dentro da tag HTML, dessa forma:
>
>      <div v-for="item in array" :key="chave-identificadora"> </div>
>
> Agora perceba que para usar o `v-for` você precisa definir outro atributo chamado `key` que serve basicamente como um identificador para diferenciar os itens dentro do array, um adendo é que esse identificador você coloca diretamente dentro do item do array.