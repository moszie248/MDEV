import Vuex from 'vuex'

// eslint-disable-next-line no-unused-vars
const createStore = () => {
  return new Vuex.Store({
    state: {
      AllNews: [],
      Loading: false,
      Token: ''
    },
    mutations: {
      setNews (state, AllNews) {
        state.AllNews = AllNews
      },
      setLoading (state, Loading) {
        state.Loading = Loading
      },
      setToken (state, Token) {
        state.Token = Token
      }
    },
    actions: {
      async loadNews ({ commit }, apiUrl) {
        const { articles } = await this.$axios.$get(apiUrl)
        commit('setNews', articles)
      },
      async authenticateUser ({ commit }, userPayload) {
        try {
          commit('setLoading', true)
          const authUserData = await this.$axios.$post('/register/', userPayload)
          // eslint-disable-next-line no-console
          console.log(authUserData)
          commit('setToken', authUserData.idToken)
          commit('setLoading', false)
        } catch (err) {
          // eslint-disable-next-line no-console
          console.log(err)
          commit('setLoading', false)
        }
      }
    },
    getters: {
      AllNews: state => state.AllNews,
      Loading: state => state.Loading,
      isAuthenticated: state => !!state.Token
    }
  })
}

export default createStore
