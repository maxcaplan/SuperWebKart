import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import Networking from "./modules/networking.js";

export default new Vuex.Store({
  state: {
    name: null,
  },
  actions: {
    setName({ commit }, name) {
      commit("SET_NAME", name);
    },
  },
  mutations: {
    SET_NAME(state, name) {
      state.name = name;
    },
  },
  modules: {
    Networking,
  },
});
