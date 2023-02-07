### Erros no geral

> Caso ocorre esse erro:
>
>       Error: listen EADDRINUSE: address already in use :::(numeroDaPorta)
>
> Basta matar o processo do PID que está atribuido a porta em questão desse jeito no linux:
>
>       sudo lsof -i :3000
>       kill -9 {PID}
>
> E desse jeito no windows:
>
>       C:\Windows\System32>taskkill /F /IM node.exe
