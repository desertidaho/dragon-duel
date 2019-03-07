import Vue from 'vue'
import Router from 'vue-router'
import DragonDuel from './views/DragonDuel.vue'
import Game from './views/Game.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DragonDuel',
      component: DragonDuel,
      props: true
    },
    {
      path: '/game/:gameId',
      name: 'Game',
      component: Game
    }
  ]
})
