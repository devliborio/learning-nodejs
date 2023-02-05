### **EJS (Embedded JavaScript templating)**

> É um template engine que serve para renderizar códigos HTML no Node.JS.
>
> Para criar um arquivo EJS primeiramente você precisa criar uma pasta chamada `views` no diretório raiz do seu projeto, só pode ser essa pasta porque é a pasta padrão que o Node.JS busca os arquivos HTML / EJS. Agora dentro dele criar seus arquivos com a extensão `.ejs`
>
> Agora para carregar o `EJS` no seu arquivo Node.JS você precisa usar a seguinte linha de código:
>
>       app.set("view engine","ejs"); 
>
> Agora para lincar isso no seu arquivo principal Node, provalvelmente `index.js` você tem que puxar ele dentro de uma rota isso é obvio, entretanto normalmente para enviarmos uma resposta para o usuario usamos o método `res.send()` só que para enviarmos nosso código `.ejs` usamos o seguinte método de envio `res.render()` já que ele é um renderizador afinal. Entretanto não basta somente isso, você agora precisa sinalizar qual arquivo você quer chamar, agora fica fácil é só usar essa estrutura de código:
>
>       res.render("<nomedoseuarquivo>");
>
> Outra recurso bastante util do EJS é poder chamar variaveis do javascript para o mundo HTML usando a tag `<%= %>`.
>
> Para enviar essas variaveis do arquivo index.js do Node para o mundo HTML usando o EJS, você precisa definir um objeto como segundo parâmetro no método `res.render()` da seguinte forma:
>
>       res.render("<arquivo.ejs>",{nomeQueVaiUsarnoEjs: variavelDoJS})
>
> Você também pode misturar a tag `<%= %>` com as tags padrões do HTMl como um `<p>` ou um `<h1>`.
>
> Agora vamos falar sobre como usar **ESTRUTURAS CONDICIONAIS** no EJS, diferente da forma de usar variaveis, o uso da tag é diferente onde não precisamos definir o `=` logo após abrir a tag podemos simplesmente fazer desse jeito `<% %>`.
>
> Agora para criar uma condição é bem simples veja:
>
>       <% if(algumacoisa == true){ %> 
>           façaalgumacoisa
>       <% } else { %> 
>           senãofaçaisso
>       <% } %>
>
> Agora que já falamos das estruturas condicionais, vamos ver um pouco sobre as **ESTRUTURAS DE REPETIÇÃO** com EJS, e para demonstrar vamo trabalhar esse exemplo com o método `forEach()` (para cada), fazemos o seguinte para fazer isso no EJS:
>
>       <% array.forEach(function(itemArray) { %>
>               <%= itemArray.nomePrincipal0 %>
>               <%= itemArray.nomePrincipal1 %> 
>       <% }) %>
>
>
> Agora vamos falar sobre reutilizar HTML com **Partials** usando EJS.
>
> Para usa-lo é recomendado que você crie uma pasta `partials` na sua pasta `views` onde você criará um arquivo para cada pedaço de HTML que você irá reutilizar.
>
> E nessa pasta você vai criar os arquivos para qual iram receber os pedaços do código que você quer salvar como por exemplo: `header.ejs` `footer.ejs` `navbar.ejs` `form.ejs`
>
> E após criado seus compenentes que são nada mais que pedações do seu código você pode importar eles para onde você quiser da seguinte forma:
>
>       <%- include( 'partials/nomedoarquivo.ejs' ) %>