import Vuex from 'vuex'

// eslint-disable-next-line no-unused-vars
const createStore = () => {
  return new Vuex.Store({
    state: {
      AllNews: []
    },
    mutations: {
      setNews (state, AllNews) {
        state.AllNews = AllNews
      }
    },
    actions: {
      async loadNews ({ commit }, apiUrl) {
        const { articles } = await this.$axios.$get(apiUrl)
        commit('setNews', articles)
      }
    },
    getters: {
      AllNews: state => state.AllNews
    }
  })
}

export default createStore
