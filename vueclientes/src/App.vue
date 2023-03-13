<template>
  <div id="app">
    <Cliente :nome="nomeDoMelhorCliente" :idade="40" profissao="Desenvolvedor Back-end"/>
    <hr>
    <Produto :showMsgOk="true"/>
    <hr>
    <Assinatura/>
  </div>
</template>

<script>

// Importação de componentes
import Cliente from './components/Cliente'
import Produto from './components/Produto'
import Assinatura from './components/Assinatura'

export default {
  name: "App",

// Variáveis que são enviadas para os componentes
  data(){
    return{
      nomeDoMelhorCliente: "Guilherme Libório Machado" // Definindo variável pela função dat() e passando ela para a prop nome dentro do componente cliente usando data biding one way!!
    }
  },

// Componentes
  components: {
    Cliente,
    Produto,
    Assinatura
  }
}

</script>

<style>
</style>
