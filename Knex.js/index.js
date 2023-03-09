//** Para saber a forma crua de um comando do knex use: console.log(query.toQuery());
const database = require("./database");

/* 
//! Usando o comando INSERT com query builder!
let dados = [
        
        {
            nome: "God of war",
            preco: 200
        },

        {
            nome: "Uncharted",
            preco: 150
        },

        {
            nome: "GTA V",
            preco: 30.50
        },

        {
            nome: "Far cry 3",
            preco: 26.89
        }
]


database.insert(dados).into("games")
                       .then(data => console.log(data))
                          .catch(err => console.log(err));

*/


/*
//! Usando o comando SELECT com query builder!
database.select("*").table('games')
                        .then(data => console.log(data);
                          .catch(err => console.log(err));
*/


/*
//! Usando o comando WHERE com query builder!
let query = database.select(["nome", "preco"])
                        .where({nome: "GTA V"})
                            .where({id: 14})  // Na forma crua ele adiciona automaticamente o 'and'
                                .table("games").then(data => console.log(data)).catch(err => console.log(err));


let query2 = database.select(["nome", "preco"])
                             .whereRaw("nome = 'Far cry 3' && preco > 10") // Para realizar operações condicionais como (!=, <=...) 
                                .table("games").then(data => console.log(data)).catch(err => console.log(err));


//** Uma dica importante é, na maioria das vezes não use dois tipos de where, por questões de organização e maior controle da sua query.
*/


/*
//! Caso você queira fazer uma query que o knexjs não te dê muita flexibilidade, você pode usar uma função do knex chamada raw que deixa você criar comandos SQL de forma crua, como é demonstrado abaixo:
database.raw("SELECT * FROM games")
            .then(data => console.log(data))
                .catch(err => console.log(err));
*/


/*
//! Usando o comando DELETE com query builder
let query3 = database.where({id: 12})
                        .delete()
                            .table("games")
                                .then(data => console.log(data))
                                    .catch(err => console.log(err)); 
// Se ele retornar 1 é a quantidade de registros que ele deletou!
*/


/*
//! Usando o comando UPDATE  com query builder
let query4 = database.where({ id: 14})
                        .update({ preco: 170 })
                            .table("games")
                                .then(data => console.log(data))
                                    .catch(err => console.log(err));
*/