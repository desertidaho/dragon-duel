import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let _api = axios.create({
  baseURL: 'https://dragon-duel.herokuapp.com/api'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dragons: [],
    activeDragon: {},
    champions: [],
    activeChampion: {}
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
    getGames({ commit, dispatch }) {
      _api.get('/games')
        .then(res => {
          commit('setGames', res.data.data)
        })
    }


  }
})
