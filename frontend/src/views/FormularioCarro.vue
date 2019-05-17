<template>
  <v-form v-model="valid" ref="formCarro" >
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <v-widget title="Informações do Carro">
            <div slot="widget-content">
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12 sm3>
                    <v-text-field label="Marca" v-model="carro.marca"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm3>
                    <v-text-field label="Ano" v-model="carro.ano"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm9>
                      <v-text-field label="Valor" v-model="carro.valor"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </div>
          </v-widget>
        </v-flex>
      </v-layout>
      <v-layout justify-end>
        <v-btn @click="limpar()">Cancelar</v-btn>
        <v-btn color="primary" :loading="carregando" @click="enviar()">{{textoBtnConfirmar}}</v-btn>
      </v-layout>
    </v-container>
  </v-form>  
</template>


<script>

import {mapState, mapGetters, mapActions} from "vuex";
import constantes from '../util/constantes';
import VWidget from '../components/VWidget';

export default {
  
  components:{
    VWidget
  },

  data: () => ({
    valid: false,
    constantes: constantes
  }),

  computed: {

    ...mapState('carro', {
      carro: 'carroAtual',
      carregando: 'carregando'
    }),
    
    ...mapGetters('carro', {
      estaEditando: 'estaEditando',
      textoBtnConfirmar: 'textoBtnConfirmar'
    })
  },

  methods: {
    
    enviar() {
        if (this.$refs.formCarro.validate()) {
            this.$store.dispatch('carro/salvar', {router: this.$router});
        }
    },

    limpar() {
      this.$store.dispatch('carro/cancelar', {router: this.$router});
    }
  }
};
</script>

<style scoped>
.container.grid-list-md .layout .flex{
  padding-top: 0px;
  padding-right: 4px;
  padding-bottom: 0px;
  padding-left: 4px;
}

</style>