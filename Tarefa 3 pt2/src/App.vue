<template>
  <div id="app">
    <Caixas/>
    <lista/>
  </div>
</template>

<script>
import Caixas from "./components/Caixas.vue"
import lista from "./components/lista.vue"

export default {
  name: 'App',
  components: {
    Caixas, lista
  }, data:function(){
    return{        
    }
  }
}
</script>

<style>
</style>
