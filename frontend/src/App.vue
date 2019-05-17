<template>
  <v-app>
    <Meu-Menu></Meu-Menu>
    <v-content>
    </v-content>
  </v-app>
</template>

<script>

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
  }
}
</script>
