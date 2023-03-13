<template>
  <div id="app">
    <Cliente/>
    <hr>
    <Produto/>
    <hr>
    <Assinatura/>
  </div>
</template>

<script>
import Cliente from './components/Cliente'
import Produto from './components/Produto'
import Assinatura from './components/Assinatura'
export default {
  name: "App",
  components: {
    Cliente,
    Produto,
    Assinatura
  }
}
</script>

<style>
</style>
