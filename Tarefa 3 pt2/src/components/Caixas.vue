<template>
  <div id="Form">
  <input id="texto" type="text" placeholder="Adicionar Tarefa" v-model="novaTarefa">
  <button id="botao" @click="adicionarTarefa">Aplicar</button>
  </div>
</template>

<script>
export default {
    name: "Caixas",
    data: function(){
        return{
            novaTarefa: ''
        }
    }, methods:{
        adicionarTarefa: function(){
            this.$store.commit('adicionarTarefa',{descricao: this.novaTarefa})
        }
    }
}
</script>

<style>
        #botao{
       width: 60px;
       height: 30px;
       color: black;
       outline: none;
       cursor: pointer;
       margin: 0px 5px;
       border: 2px black solid;
    }
    
    #texto{
        margin: 90px 0 0 27%;
        height: 25px;
        width: 200px;
        border: black 2px solid;
    }
    #Form{
        background: white;
        width: 500px;
        height: 200px;
        margin: 80px 0px 0px 35%;
        border: 2px black solid;
        
    }
</style>