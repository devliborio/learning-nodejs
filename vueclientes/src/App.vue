<template>
  <div id="app">
    <h1>VueClientes</h1>
    <Cliente/>
    <h2>Lista de Produtos</h2>
    <Produto/>
  </div>
</template>

<script>
import Cliente from './components/Cliente'
import Produto from './components/Produto'
export default {
  name: "App",
  components: {
    Cliente,
    Produto
  }
}
</script>

<style>
</style>
