import Vue from 'vue'
import Router from 'vue-router'
import ListarCarros from '../views/ListarCarros.vue'
import FormularioCarro from '../views/FormularioCarro';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/carros',
      name: 'listarCarros',
      component: ListarCarros
    },
    {
      path: '/carros/novo',
      name: 'formularioNovoCarro',
      component: FormularioCarro
    },
    {
      path: '/carros/editar',
      name: 'formularioEditarCarro',
      component: FormularioCarro
    }
  ]
})
