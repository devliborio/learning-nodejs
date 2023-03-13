<template>
  <div id="cliente">
    <p> <span class="sp_1"> | QA |: </span> Olá {{ nome }}, seja bem vindo, vimos que sua idade de {{idade}} corresponde a nossas expectativas, ser um {{profissao}} vai muito além de talento! </p>
    <!-- SIMBOLO DE INTERPOLAÇÃO! -->
    <hr />
    <p> <span class="sp_2"> | You |: </span> Muito obrigado pelo retorno, fico muito feliz em agregar para o time, por favor ligue para o meu número {{numero}}, é uma honra ser escolhido por vocês!  </p>
  </div>
</template>

<script>
export default {
  // Quando você cria um componente você precisa exportar ele para que ele seja usado em outro componentes se for o seu caso!
  data() {
    return {
      nome: "Guilherme Libório Machado",
      idade: 21,
      profissao: "Full Stack Developer",
      numero: "(71) 6666-9999"
    };
  },
};
</script>


<style scoped>
/*Esse scoped define que esse estilo vai ser aplicado somente para esse componente em especifico e não aos outros da pagina!*/
  .sp_1, .sp_2{
    font-weight: bold;
  }

  #cliente p{
    font-family: sans-serif;
    padding: 1%;
  }
</style>