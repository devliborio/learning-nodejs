<template>
  <div id="produtos">

    <p>Caso queira ser assinante do nosso plano de membros {{nome}}, você só pagará um preço exclusivo e limitado de <span class="price">${{preco}}</span> sendo na modalidade {{tempo}}</p>

    <p>Para ser um assinante envie seu e-mail através do formulário abaixo e depois clique em assinar para aproveitar os 14 dias de teste gratis!</p>

    <input type="email" :value="email"><br><br> <!-- Para usar uma variável do JS dentro do atributo de algum input de formulário use o ":" na frente do seu atributo e insira o a variável dentro do atributo  -->

    <button type="submit">Assinar!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        nome: "UserHelp Plus+",
        preco: 50.99,
        tempo: "mensal",
        email: "liborio.ofc@gmail.com"
    };
  },
};
</script>

<style scoped>
    .price{
        font-weight: bold;
    }
</style>

