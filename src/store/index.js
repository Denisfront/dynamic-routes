import { createStore } from "vuex";

export default createStore({
  state: {
    lang: localStorage.getItem("lang"),
  },
  getters: {},
  mutations: {
    changeLang(state, lang) {
      state.lang = lang;
    },
  },
  actions: {
    setLang({ commit }, lang) {
      console.log("store", lang);
      localStorage.setItem("lang", lang);
      commit("changeLang", lang);
    },
  },
  modules: {},
});
