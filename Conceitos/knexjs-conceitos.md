### **O que é o Knex.js?**

> O knex.js é basicamente um query builder, que podemos definir por uma ferramenta para construção, manipulação e visualização de consultas sobre o banco de dados.
>
> Existem 3 abordagens para se trabalhar com SQL em JS por exemplo, vamos entender elas:
>
> - A primeira é usando as queries cruas, desse jeito:
>
>       "SELECT * FROM post;"
>
> A maior problemática dessa abordagem é que vai haver uma mistura de código JS com código SQL e isso pode tornar seu código ilegível para outros programadores. Uma lib que serve para lidar com esse tipo de metodologia é o mysql2
>
> - A segunda abordagem é usando ORM'S onde você vai definir Models, e através desses Models você vai manipular o banco de dados, então por exemplo podemos definir um Model que representa uma tabela de artigos. Feito uso podemos exportar esse Model para o código onde queremos manipular ele e usar ele dessa forma por exemplo:
>
>       Artigos.create( { title: "Como fazer.." } );
>
> Então basicamente ela vai abstrair essa metodologia de queries para orientação a objetos. Umas das desvantagens de usar ORM é a falta de flexibilidade, também tem a problemática de performance, então nem sempre os códigos gerados por ORM são performáticos.
>
> - Agora a terceira abordagem é a Query Builders, ele basicamente vai misturar um pouco desses dois mundos acima, então exemplificando para um melhor entendimento, ele vai permitir que você digite manipule o banco de dados sem usar a linguagem SQL propriamente dita, ou seja:
>
>       banco.select().table("post") --> SELECT * FROM post;
>
> Basicamente a primeira sintaxe quer dizer exatamente a mesma coisa que a segunda que é a maneira crua de se manipular. Então o objetivo do query builder é somente gerar queries pra você, somente isso!
>
> - Diferente das ORM's com queries builders você tem MUITA flexibilidade para fazer as queries que você quiser, como por exemplo:
>
>       banco.select()
>         .where({id: 7})
>           .orWhere({title: "JS"})
>               .orderBy({"title"})
>                   .table("post")