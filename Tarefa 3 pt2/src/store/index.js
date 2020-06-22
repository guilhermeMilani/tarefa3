import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas:[
        {descricao:"Química"},
        {descricao:"Sociologia"},
        {descricao: "Matemática"
    }]
  },
  mutations:{
    adicionarTarefa(state, descricao){
        state.tarefas.push(descricao)
    }
  },
  actions: {
  },
  modules: {
  }
})
