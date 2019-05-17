import Vue from 'vue'
import Vuex from 'vuex'

import axios from '@/util/axios';

import carro from './modules/carro';

Vue.use(Vuex)

export default new Vuex.Store({
  
  modules: {
    carro
  },

  state: {
    snackbar: {
      show: false,
      text: '',
      color: '',
    },
  },

  actions: {

  },

  mutations: {
    setMensagemErro(state, mens){
      state.snackbar.text = mens;
      state.snackbar.color = 'red';
      state.snackbar.show = true;
    },
    setMensagemSucesso(state, mens){
      state.snackbar.text = mens;
      state.snackbar.color = 'green';
      state.snackbar.show = true;
    }
  }
})
