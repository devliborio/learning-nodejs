<template>
  <div id="produtos">

    <p>Caso queira ser assinante do nosso plano de membros {{nome}}, você só pagará um preço exclusivo e limitado de <span class="price">${{preco}}</span> sendo na modalidade {{tempo}}</p>
    <button type="submit">Assinar agora!!</button>

  </div>
</template>

<script>
export default {
  data() {
    return {
        nome: "UserHelp Plus+",
        preco: 50.99,
        tempo: "mensal"
    };
  },
};
</script>

<style scoped>
    .price{
        font-weight: bold;
    }
</style>

