<template>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Equipadora</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat @click="mudarRota('/carros')">Carros</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
    
    name: 'Meu-Menu',
    data () {
        return {

        }
    },
    methods: {
        mudarRota(path){
            this.$router.push(path);
        }
    }
}
</script>
