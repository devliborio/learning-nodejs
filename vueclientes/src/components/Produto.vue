<template>
  <div id="produtos">

    <p>Caso queira ser assinante do nosso plano de membros {{nome}}, você só pagará um preço exclusivo e limitado de <span class="price">${{preco}}</span> sendo na modalidade {{tempo}}</p>
    <p>Para ser um assinante envie seu e-mail através do formulário abaixo e depois clique em assinar para aproveitar os 14 dias de teste gratis!</p>

    <input type="email" :value="email"><br><br> <!-- Para usar uma variável do JS dentro do atributo de algum input de formulário use o ":" na frente do seu atributo e insira o a variável dentro do atributo | ONE WAY | -->
    <input type="email" v-model="email2"><br><br> <!-- Usando o método | TWO WAY | para manipular dados usando data binding-->

    <button :class="{'btn_default': !corBtn, 'btn_premium': corBtn}" @click="mudarCor($event)" type="submit">Assinar!</button>

    <p v-if="showMsgOk == true"> Seu e-mail: <span class="email">{{email}}</span> foi recebido com sucesso!</p>
    <p v-show="showMsgOk == true"> Seu e-email2: <span class="email2">{{email2}}</span> foi recebido com sucesso</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
        nome: "UserHelp Plus+",
        preco: 50.99,
        tempo: "mensal",
        email: "oneway.ofc@gmail.com",
        email2: "twoway@gmail.com",
        corBtn: false
    };
  },

  props: {
     showMsgOk: Boolean
  },

  methods: {
    mudarCor: function($event){
      this.corBtn = !this.corBtn // Para acessar uma variável dentro de um método deve-se utilizar o this., porque esse this. aponta para o componente que você está usando!
      console.log($event)
    }
  }
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

    .btn_default{
      background: black;
      color: yellow;
      font-family: sans-serif;
    }

    .btn_premium{
      background-color: darkred;
      color: ghostwhite;
      font-family: sans-serif;

    }
</style>

