<template>

  <div> <!-- classe condicional -->
      <div :class="{'cliente': !isPremium, 'cliente-premium': isPremium}">
        <hr>
        <p>
          - Nome: {{cliente.nome}}<br><br>
          - Idade: {{cliente.idade}}<br><br>
          - Classe: {{cliente.classe}}<br><br>
          - Profissão: {{cliente.profissao}}
        </p><hr>
      </div><br>
  </div>

</template>

<script>
export default { // Quando você cria um componente você precisa exportar ele para que ele seja usado em outro componentes se for o seu caso!
  data() {
    return {
      numero: "(71) 6666-9999"
    };
  },

  props: {
      cliente: Object,
      isPremium: Boolean // Usando classes condicionais!
  }

};
</script>


<style scoped> /*Esse scoped define que esse estilo vai ser aplicado somente para esse componente em especifico e não aos outros da pagina!*/
  .cliente p{
    font-family: sans-serif;
    width: 30%;
    height: 200px;
    padding-top: 10px;
    padding-left: 10px;
  }

  .title_cliente{
    text-align: center;
    background-color: none;
  }

  .cliente-premium{ /* Classe condicional boolean */
      background-color: rgb(7, 23, 34);
      color: rgb(226, 226, 226);
      width: 30%;
      height: 200px;
      padding-top: 10px;
      padding-left: 10px;
  }
</style>