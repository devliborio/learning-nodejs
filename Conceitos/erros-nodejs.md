### Erros no geral

> Caso ocorre esse erro:
>
>       Error: listen EADDRINUSE: address already in use :::(numeroDaPorta)
>
> Basta matar o processo do PID que está atribuído a porta em questão desse jeito no Linux:
>
>       sudo lsof -i :3000
>       kill -9 {PID}
>
> E desse jeito no windows:
>
>       C:\Windows\System32> taskkill /F /IM node.exe
>
>
> Em caso de erro na execução do nodemon, sobre script use essa sintaxe ao executar ele:
>
>       npx nodemon ...