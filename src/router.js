import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/dragon-duel.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dragonDuel',
      component: dragonDuel
    }
  ]
})
