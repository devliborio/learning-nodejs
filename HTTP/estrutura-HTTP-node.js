var http = require("http"); // Fazendo isso estou carregando o módulo HTTP do Node.js aqui nesta variavel. Esté módulo já vem incluso no proprio Node.js.

http.createServer(function(requisicao, resposta){
    resposta.end("<h1>Bem vindo ao meu site!</h1><h3>TextoAleatorio.txt</h3>") // Toda vez que fizermos uma modificaão no servidor, temos que reiniciar.
}).listen(2108); // Para criar um servidor HTTP no Node.Js.

console.log("Meu servidor está rodando!!");

// Para o servidor rodar de fato temos que primeiro ativar ele na maquina local e dps tentar obter uma acesso atraves do localhost:porta na web, se não inicializarmos ele na nossa maquina, ele nunca vai estabelecer conexão na pagina!!!