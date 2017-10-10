import Vue from 'vue'
import Vuex from 'vuex'
import { fetchFoodsToAvoid } from './api'

Vue.use(Vuex)

const state = {
  birthday: '',
  foodsToAvoid: []
}

const mutations = {
  setBirthday (state, birthday) {
    state.birthday = birthday
  },
  setFoodsToAvoid (state, foodsToAvoid) {
    state.foodsToAvoid = foodsToAvoid
  }
}

const actions = {
  fetchFoodsToAvoid ({ commit, state }) {
    fetchFoodsToAvoid(state.birthday).then(data => {
      commit('setFoodsToAvoid', data.foodsToAvoid)
    })
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
