import { createStore } from "vuex";

const DEFAULT_LANG = "ru";

export default createStore({
  state: {
    lang: localStorage.getItem("lang") || DEFAULT_LANG,
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
