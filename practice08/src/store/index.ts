import { createStore } from "vuex";

export default createStore({
  state: {
    name: "one",
  },
  getters: {
    getName: (state) => state.name,
  },
  mutations: {
    setName: (state, name) => (state.name = name),
  },
  actions: {},
  modules: {},
});
