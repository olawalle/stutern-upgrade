import Vue from "vue";
import Vuex from "vuex";
import * as mutationTypes from './mutationTypes'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    homeTopData: {}
  },
  mutations: {
    [mutationTypes.HOME_TOP_DATA] (state, data) {
      state.homeTopData = data
    }
  },
  actions: {}
});
