<template>
  <div id="produtos">

    <p>Caso queira ser assinante do nosso plano de membros {{nome}}, você só pagará um preço exclusivo e limitado de <span class="price">${{preco}}</span> sendo na modalidade {{tempo}}</p>
    <p>Para ser um assinante envie seu e-mail através do formulário abaixo e depois clique em assinar para aproveitar os 14 dias de teste gratis!</p>

    <input type="email" :value="email"><br><br> <!-- Para usar uma variável do JS dentro do atributo de algum input de formulário use o ":" na frente do seu atributo e insira o a variável dentro do atributo | ONE WAY | -->
    <input type="email" v-model="email2"><br><br> <!-- Usando o método | TWO WAY | para manipular dados usando data binding-->

    <button type="submit">Assinar!</button>

    <p>Seu e-mail: <span class="email">{{email}}</span> foi recebido com sucesso!</p>
    <p>Seu e-email2: <span class="email2">{{email2}}</span> foi recebido com sucesso</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
        nome: "UserHelp Plus+",
        preco: 50.99,
        tempo: "mensal",
        email: "liborio.ofc@gmail.com",
        email2: "v-model@gmail.com"
    };
  },
};
</script>

<style scoped>

    #produtos{
      font-family: sans-serif;
      padding: 1%;
    }

    .price{
        font-weight: bold;
    }

    .email{
      font-weight: bold;
    }

    .email2{
      font-weight: bold;
    }
</style>

