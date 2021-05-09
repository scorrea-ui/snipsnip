import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    snippets: JSON.parse(localStorage.getItem("snippets") || "[]"),
  },
  mutations: {
    SUBMIT_CODE(state, payload) {
      state.snippets = state.snippets.concat(payload);
      window.localStorage.setItem("snippets", JSON.stringify(state.snippets));
    },
    EDIT_CODE(state, payload) {
      const index = state.snippets.findIndex(
        (snippet: { id: string }) => snippet.id === payload.id
      );
      state.snippets[index] = payload;
      window.localStorage.setItem("snippets", JSON.stringify(state.snippets));
    },
    DELETE_CODE(state, id) {
      state.snippets = state.snippets.filter((snippet: { id: string }) => snippet.id !== id);
      window.localStorage.setItem("snippets", JSON.stringify(state.snippets));
    },
  },
  actions: {
    submitCode({ commit }, payload) {
      commit("SUBMIT_CODE", payload);
    },
    editCode({ commit }, payload) {
      commit("EDIT_CODE", payload);
    },
    deleteCode({ commit }, id) {
      commit("DELETE_CODE", id);
    },
  },
  modules: {},
});
