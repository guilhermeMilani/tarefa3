<template>
  <div id="lista">
      <div class="tarefasCaixas" v-for="(lista, index) in tarefas" :key="index">
        {{lista.descricao}}
      </div>
  </div>
</template>

<script>
export default {
    name:"lista",
    computed:{
        tarefas(){
            return this.$store.state.tarefas
        }
    }
}
</script>

<style>
    #lista{
        background-color: white;
        width: 500px;
        height: 200px;
        margin: 10px 0px 0px 35%;
        display: flex;
        flex-wrap: wrap;
        overflow: auto; 
        border: black 2px solid;
        
    }

    .tarefasCaixas{
        width: (tarefas);
        background: rgb(34,193,195); 
        background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(45,253,160,1) 100%);
        height: 50px;
        border: 2px solid black;
        margin: 20px 20px 0 10px;
        text-align: center;
        line-height: 50px;
        cursor: pointer;
        color: black; 
        overflow: hidden; 
    }
</style>