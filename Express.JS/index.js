const express = require("express"); // * Importando o Express no nosso arquivo raiz.
const app = express(); // * Iniciando o Express.

app.listen(2001,function(erro){ // Essa função que estamos criando é executada toda vez que o servidor é iniciado e ela recebe um parâmetro chamado "erro" então se ocorrer algum erro a gente recebe esse parâmetro.
    if(erro){
        console.log("Ocorreu algum erro!")
    } else{
        console.log("Servidor Rodando Normalmente")
    }
})