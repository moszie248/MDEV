import Vuex from 'vuex'
// eslint-disable-next-line no-unused-vars
import md5 from 'md5'
import db from '~/plugins/firestore'

// eslint-disable-next-line no-unused-vars
const createStore = () => {
  return new Vuex.Store({
    state: {
      AllNews: [],
      Loading: false,
      Token: '',
      user: null
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
      },
      setUser (state, user) {
        state.user = user
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
          const avatar = `http://gravatar.com/avatar/${md5(authUserData.email)}?d=identicon`
          const user = { email: authUserData.email, avatar }
          await db.collection('users').doc(userPayload.email).set(user)
          commit('setUser', user)
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
      isAuthenticated: state => !!state.Token,
      user: state => state.user
    }
  })
}

export default createStore
