<template>
  <v-app>
    <v-snackbar :timeout="snackbar.color == 'red' ? 30000 : 9000" bottom multi-line :color="snackbar.color" v-model="snackbar.show">{{ snackbar.text }}
      <v-btn dark flat @click.native="snackbar.show = false" icon> 
        <v-icon>close</v-icon>
      </v-btn>
    </v-snackbar>
    <Meu-Menu></Meu-Menu>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import {mapState} from 'vuex';
import MeuMenu from '../src/components/Menu';

export default {
  name: 'App',
  components: {
    MeuMenu
  },
  data () {
    return {
      //
    }
  },
  computed: {
    ...mapState({
      snackbar: 'snackbar'
    })
  },
}
</script>
