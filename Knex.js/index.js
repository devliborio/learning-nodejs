//** Para saber a forma crua de um comando do knex use: console.log(query.toQuery());
const database = require("./database");

/*
//! Usando o comando INSERT com query builder!
let dados = [
        
        {
            nome: "Ark survival",
            preco: 99.99
        },

        {
            nome: "Bayonetta",
            preco: 80
        },

        {
            nome: "the forest",
            preco: 35.45
        },

        {
            nome: "Far cry - New Dawn",
            preco: 26.89
        }
]


let query1 = database.insert(dados).into("games")
                       .then(data => console.log(data))
                          .catch(err => console.log(err));
*/


/*
//! Usando o comando SELECT com query builder!
let query2 = database.select("*").table('games')
                        .then(data => console.log(data);
                          .catch(err => console.log(err));
*/


/*
//! Usando o comando WHERE com query builder!
let query3 = database.select(["nome", "preco"])
                        .where({nome: "GTA V"})
                            .where({id: 14})  // Na forma crua ele adiciona automaticamente o 'and'
                                .table("games").then(data => console.log(data)).catch(err => console.log(err));


let query4 = database.select(["nome", "preco"])
                             .whereRaw("nome = 'Far cry 3' && preco > 10") // Para realizar operações condicionais como (!=, <=...) 
                                .table("games").then(data => console.log(data)).catch(err => console.log(err));


//** Uma dica importante é, na maioria das vezes não use dois tipos de where, por questões de organização e maior controle da sua query.
*/


/*
//! Caso você queira fazer uma query que o knexjs não te dê muita flexibilidade, você pode usar uma função do knex chamada raw que deixa você criar comandos SQL de forma crua, como é demonstrado abaixo:
let query5 = database.raw("SELECT * FROM games")
            .then(data => console.log(data))
                .catch(err => console.log(err));
*/


/*
//! Usando o comando DELETE com query builder
let query6 = database.where({id: 12})
                        .delete()
                            .table("games")
                                .then(data => console.log(data))
                                    .catch(err => console.log(err)); 
// Se ele retornar 1 é a quantidade de registros que ele deletou!
*/


/*
//! Usando o comando UPDATE  com query builder
let query7 = database.where({ id: 14})
                        .update({ preco: 170 })
                            .table("games")
                                .then(data => console.log(data))
                                    .catch(err => console.log(err));
*/

/*
//! Usando o Order By para ordenar os dados da sua query
let  query8 = database.select()
                        .table("games")
                            .orderBy("preco", "desc") // Decrescente = desc, Crescente = asc
                                .then(data => console.log())
                                    .catch(err => console.log(err));

let query9 = database.select()
                        .table("games")
                            .orderBy("nome", "asc")
                                .then(data => console.log(data))
                                    .catch(err => console.log(err));
*/


/*
//! Criando INSERT's associados que é basicamente você inserir um registro que tem relacionamento com outro registro
database.insert({nome: "Ubisoft",game_id: 15})
            .table("estudios")
                .then(data => console.log(data))
                    .catch(err => console.log(err));
*/


//! Usando JOIN para relacionamentos de tabelas
database.select(["estudios.id as estudio_id", "estudios.nome as estudio_nome", "games.id", "games.nome"]) // O "as" renomeia o campo caso tenha conflito de nomes nas tabelas.
            .table("games")
                .innerJoin("estudios", "estudios.game_id", "games.id")
                    .then(data => console.log())
                        .catch(err => console.error(err));  

//! Usando JOIN com WHERE em relacionamentos de tabelas
database.select("games.*", "estudios.nome as estudio_nome")
            .table("games")
                .innerJoin("estudios", "estudios.game_id", "games.id")
                    .where("games.id", 15)
                        .then(data => console.log(data))
                            .catch(err => console.error(err));