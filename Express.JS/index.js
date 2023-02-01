const express = require("express"); // * Importando o Express no nosso arquivo raiz.
const app = express(); // * Iniciando o Express.


app.get("/", function(req,res){
    res.send("Bem vindo ao meu site com Express")
}); 
// * Criando nossa primeira rota onde o primeiro parâmetro é o "nome da rota" e o segundo parâmetro geralmente definimos o que essa rota faz, então criamos uma função que possui aqueles dois parâmetros padrões (requisição e resposta). Em toda rota que criarmos temos que obrigatóriamente devolver uma resposta. Outro ponto importante sobre rotas é que você pode só pode enviar uma resposta uma UNICA VEZ.







app.listen(2001,function(erro){ // * Essa função que estamos criando é executada toda vez que o servidor é iniciado e ela recebe um parâmetro chamado "erro" então se ocorrer algum erro a gente recebe esse parâmetro.
    if(erro){
        console.log("Ocorreu algum erro!")
    } else{
        console.log("Servidor Rodando Normalmente")
    }
})