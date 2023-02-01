const express = require("express"); // * Importando o Express no nosso arquivo raiz.
const app = express(); // * Iniciando o Express.

app.get("/", function (req, res) {

    res.send("<h2>Bem vindo ao meu site com Express</h2>");

});// * Criando nossa primeira rota onde o primeiro parâmetro é o "nome da rota" e o segundo parâmetro geralmente definimos o que essa rota faz, então criamos uma função que possui aqueles dois parâmetros padrões (requisição e resposta). Em toda rota que criarmos temos que obrigatóriamente devolver uma resposta. Outro ponto importante sobre rotas é que você pode só pode enviar uma resposta uma UNICA VEZ.

app.get("/blog", function (req, res) {

    res.send("Bem vindo ao meu Blog!");

});

app.get("/canal/youtube", function (req, res) {

    res.send("Bem vindo ao meu canal!");

});

app.get("/ola/:nome", function (req, res) {

    var nome = req.params.nome
    res.send("<h1>Oi " + nome + "</h1>");

}) // * REQ => DADOS ENVIADOS PELO USUARIO // * RES => RESPOSTA QUE VAI SER ENVIADA PARA O USUARIO.

app.get("/lugar/:empresa/:endereco", function (req, res) {

    var empresa = req.params.empresa;
    var endereco = req.params.endereco;
    res.send("Voce é da " + empresa + " do " + endereco);

}) // * Aqui estamos criando multiplos parâmetros e devolvendo os mesmos dados que o usuário requisitou na URL como resposta no document da pagina.

app.get("/deep/:login?/:senha?", function (req, res) {

    var login = req.params.login;
    var senha = req.params.senha;

    if (login && senha) {
        res.send("O seu login é: " + login + "<br>" + "A sua senha é: " + senha + "<br><br>" + "<h4>Bem vindo ao culto...</h4>")
    } else {
        res.send("<h4>Você é um interditado</h4>")
    }

}) // * Estamos criando um rota para aprender a utilização de parâmetros não obrigatorios, nele mesmo se você não passar os parâmetros a rota ainda continua ativa e não depende exclusivamente deles para funcionar

app.get("/loja/:camiseta?", function (req, res) {

    var querryParam = req.query["produto"];
    if(querryParam){
        res.send("Meu produto é : " + querryParam)
    } else {
        res.send("Nenhum produto selecionado")
    }

}) // * Criamos uma nova rota para testar o querry params, perceba que ele é totalmente opcional, o usuario pode acessar essa rota passando ou não o querry params, ele é totalmente dinamico. Para criar um querry params ná URL usamos: ?<nome qualquer>=<conteudo do nome qualquer>

app.listen(2001, function (erro) {
    if (erro) {
        console.log("Ocorreu algum erro!");
    } else {
        console.log("Servidor Rodando Normalmente");
    }
}) // * Essa função que estamos criando é executada toda vez que o servidor é iniciado e ela recebe um parâmetro chamado "erro" então se ocorrer algum erro a gente recebe esse parâmetro.