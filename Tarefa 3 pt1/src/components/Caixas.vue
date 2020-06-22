<template>
  <div id="caixa">
      <div class="caixinhas" v-for="(caixa, index) in caixinhas" :key="index" :style="caixa.cor">
          {{caixa.titulo}}
      </div>
  </div>
</template>

<script>
export default {
    name: "Caixas",
    computed:{
        caixinhas(){
            return this.$store.state.caixinhas
        }
    }
}
</script>

<style>
    #caixa{
        width: 400px;
        height: 130px;
        border: 2px solid black;
        margin: 30px auto 10px auto;
        display: flex;
        flex-wrap: wrap;
        background-color: white;
    }
    .caixinhas{
        width: 50px;
        height: 50px;
        border: 2px solid black;
        margin: 5px 0 0 5px;
        text-align: center;
        line-height: 50px;
        user-select: none;
        cursor: pointer;

    }
</style>