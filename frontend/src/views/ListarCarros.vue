<template>
  <div>
    <v-container fluid>
      <v-card>
        <v-toolbar flat color="white">
          <v-text-field flat solo full-width single-line hide-details clearable v-model="busca" max-width="300px" prepend-inner-icon="search" label="Buscar Carro"></v-text-field>
          <v-btn color="primary" @click="novoCarro({router : $router})">Novo Carro</v-btn>
        </v-toolbar>
        <v-data-table :headers="headers" :items="carros" :search="busca" :loading="carregando" class="elevation-1">
          <template slot="items" slot-scope="props">
            <td>{{ props.item.marca }}</td>
            <td>{{ props.item.ano }}</td>
            <td>{{ props.item.valor }}</td>
            <td class="justify-center layout px-0">
              <v-icon class="mr-2" @click="editarCarro({carro : props.item, router : $router})">edit</v-icon>
              <v-icon @click="remover(props.item)">delete</v-icon>
            </td>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
</div>
</template>

<script>

  import {mapState, mapGetters, mapActions} from 'vuex';

  export default {
    data () {
      return {
        headers: [
          { text: 'Marca', value: 'marca' },
          { text: 'Ano', value: 'ano' },
          { text: 'Valor', value: 'valor' },
          { text: 'Ações', value: 'name', align:'center',  sortable: false }
        ],
        busca: ''
      }
    },

    computed: {
        ...mapState('carro', {
            carros: 'carros',
            carregando: 'carregando'
        })
    },

    methods: {
        ...mapActions('carro', {
            carregarCarros: 'carregar',
            editarCarro: 'editar',
            novoCarro: 'novo'
        }),

        remover(carro){
            
            this.$store.dispatch('carro/remover', carro);
        }
    },

    created(){
      //chamada a action através do dispatch
      this.carregarCarros();
    }
  }
</script>