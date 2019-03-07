import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router';

let _api = axios.create({
  baseURL: 'https://dragon-duel.herokuapp.com/api'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dragons: [],
    activeDragon: {},
    champions: [],
    activeChampion: {},
    game: {}
  },
  mutations: {
    setDragons(state, data) {
      state.dragons = data
    },
    setActiveDragon(state, data) {
      state.activeDragon = data
    },
    setChampions(state, data) {
      state.champions = data
    },
    setGame(state, data) {
      state.game = data
    }
  },
  actions: {

    //get all dragons
    getDragons({ commit, dispatch }) {
      _api.get('/dragons')
        .then(res => {
          commit('setDragons', res.data)
        })
    },

    /*
      //get one dragon by id
      setActiveDragon({ commit, dispatch }) {
        _api.get('/dragons/:id')
          .then(res => {
            commit('setActiveDragon', res.data)
          })
      },
      */

    //get all champions
    getChampions({ commit, dispatch }) {
      _api.get('/champions')
        .then(res => {
          commit('setChampions', res.data.splice(0, 4))
        })
    },

    //game
    startGame({ commit, dispatch }, payload) {
      _api.post('/games', payload)
        .then(res => {
          commit('setGame', res.data.game)
          router.push({ name: 'Game', params: { gameId: res.data.game._id } })
        })
    }


  }
})
