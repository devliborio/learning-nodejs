<template>

  <div id="app">
    
    <h3 class="title">Clientes do Plano</h3>

    <div v-for="clienteItem in clientes" :key="clienteItem.id">
        <h5>Edição de cliente</h5>
        <input type="text" v-model="clienteItem.nome">
        <input type="text" v-model="clienteItem.profissao"><br><br>
        <Cliente :cliente="clienteItem" isPremium="true"/><hr>
    </div>

    <Produto :showMsgOk="true"/><hr>
    <Assinatura/>
  </div>

</template>

<script>
import Cliente from './components/Cliente'
import Produto from './components/Produto'
import Assinatura from './components/Assinatura'

export default {
  name: "App",

  data(){ // Variáveis que são enviadas para os componentes
    return{

      clienteGuilherme: { // Definindo variável pela função dat() e passando ela para a prop nome dentro do componente cliente usando data biding one way!!
        nome: "Guilherme Libório Machado",
        idade: 21,
        profissao: "Full Stack Developer",
        classe: "Premium"
      }, 

      clientes: [

        {
          id: 1, // Key
          nome: "Eunício Gonçalves",
          email: "euni_alves@gmail.com",
          idade: 54,
          profissao: "Master of JavaScript",
          classe: "Premium"
        },

        {
          id: 2, // Key
          nome: "Flávio Fagundes",
          email: "viofa_academy@gmail.com",
          idade: 32,
          profissao: "Front-end Developer",
          classe: "Premium"
        },

        {
          id: 3, // Key
          nome: "Fernanda Selva",
          email: "nanda_selvinha@gmail.com",
          idade: 19,
          profissao: "Product Manager",
          classe: "Premium"
        },

        {
          id: 4, // Key
          nome: "Ricardo Silveira",
          email: "ric_silveira@gmail.com",
          idade: 19,
          profissao: "Back-end Developer",
          classe: "Premium"
        }

      ]
    }
  },

  components: {
    Cliente,
    Produto,
    Assinatura
  }
}
</script>

<style scoped>
  body{
    background-color: antiquewhite;
  }

  .title{
    text-align: center;
  }
</style>
