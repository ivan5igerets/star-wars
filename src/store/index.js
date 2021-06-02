import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api/apiPeople'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    peoples: [],
    isLoading: false,
    countOfPeople: 0,
  },
  mutations: {
    SET_PEOPLES(state, peoples) {
      state.peoples = peoples
    },
    SET_LOADING(state, status) {
      state.isLoading = status
    },
    SET_COUNT_OF_PEOPLE(state, count) {
      state.countOfPeople = count
    }
  },
  actions: {
    FETCH_PEOPLES({commit}, page) {
      commit('SET_LOADING', true)
      api(page)
      .then(res => {
        commit('SET_PEOPLES', res.data.results)
        commit('SET_LOADING', false)
        commit('SET_COUNT_OF_PEOPLE', res.data.count)
      })
      .catch(err => {
        commit('SET_LOADING', false)
        console.log(err)
      })
    }
  },
  getters: {
    GET_PEOPLES(state) {
      return state.peoples
    },

    GET_COUNT_PEOPLE(state) {
      return state.countOfPeople
    },

    GET_LOADING_STATUS(state) {
      return state.isLoading
    }
  },
  modules: {
  }
})
