### **VPS (Servidor virtual privado)** 

> É basicamente um computador que você aluga e tem total controle dele, você pode fazer basicamente o que quiser.
>
> Entretando ele é um servidor que é voltado principalmente para hospedagem de aplicações.
>
> Diferente de uma **`hospedagem compartilhada`** que é mais enchuta e não deixa você ter liberdade, a vps te da total controle do que você deseja usar na seu máquina virtual.
---
### **Aprendendo Deploy**

> Use uma plataforma de VPS da sua escolha no caso sempre opito pela digital ocean
>
> Apois isso se cadastre siga todos financeiros e depois quando for criar sua vps você escolhe a região mais perto de você, e chega na parte de autenticação, chegando nessa parte você moralmente como um praticante de tecnologia escolha a opção SSH para gerar sua autenticação
>
> para gerar sua chave ssh é bem simples, faça esse comandos no seu terminal
>
>       ssh-keygen
>
> Vai aparecer uma janela para que você confirme o caminho para onde vão ficar as duas chaves tanto a publica quanto a privada
>
>       Generating public/private rsa key pair. Enter file in which to save the key (/Users/USER/.ssh/id_rsa):
>
> Após aparecer isso você aperta `ENTER`
>
> **Depois de feito isso vai ter outro retorno pedindo pra vocẽ cadastra uma `passphrase` e vocẽ cria.** (**GUARDE ELA COM CUIADO POIS VC PRECISA DELA PARA DESBLOQUEAR A CHAVE PRIVADA**)
>
> Após isso já esta feito e basta você copiar o conteudo do arquivo onde está armazenada a chave pública assim:
>
>       cat ~/.ssh/id_rsa.pub
>
> E para a chave privada:
>
>       cat ~/.ssh/id_rsa
>
> Agora entenda como funciona a relação de chave publica e chave privada:
>
>       Imagine um cadeado, um cadeado tem o corpo dele em si e tambem tem a chave, digamos que você chega na sua cas e tem lá um cadeado na sua porta, bom vocẽ está vendo o cadeado exposto, porem pra você abrir o cadeado vocẽ precisa de uma chave que só você tem, então quando você coloca a chave no corpo do cadeado você consegue abrir ele.
>
>       Agora entendemdo melhor isso no caso do SSH, é como se o corpo do cadeado fosse a chave publica e a chave a chave privada.
---