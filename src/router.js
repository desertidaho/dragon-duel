import Vue from 'vue'
import Router from 'vue-router'
import DragonDuel from './views/DragonDuel.vue'
//import Dragon from './components/Dragon.vue'
//import Champion from './components/Champion.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DragonDuel',
      component: DragonDuel,
      props: true
    }
  ]
})
