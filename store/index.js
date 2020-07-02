import Vuex from 'vuex'
// eslint-disable-next-line no-unused-vars
import md5 from 'md5'
import db from '~/plugins/firestore'
import { saveUserData, clearUserData } from '~/utils'

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
      },
      clearToken: state => (state.Token = ''),
      clearUser: state => (state.user = null)
    },
    actions: {
      async loadNews ({ commit }, apiUrl) {
        const { articles } = await this.$axios.$get(apiUrl)
        commit('setNews', articles)
      },
      async authenticateUser ({ commit }, userPayload) {
        try {
          commit('setLoading', true)
          const authUserData = await this.$axios.$post(`/${userPayload.action}/`,
            {
              email: userPayload.email,
              password: userPayload.password,
              returnSecureToken: userPayload.returnSecureToken
            })
          let user
          if (userPayload.action === 'register') {
            const avatar = `http://gravatar.com/avatar/${md5(authUserData.email)}?d=identicon`
            user = { email: authUserData.email, avatar }
            await db.collection('users').doc(userPayload.email).set(user)
          } else {
            const loginRef = db.collection('users').doc(userPayload.email)
            const loggedInUser = await loginRef.get()
            user = loggedInUser.data()
          }
          // eslint-disable-next-line no-console
          commit('setUser', user)
          commit('setToken', authUserData.idToken)
          commit('setLoading', false)
          saveUserData(authUserData, user)
        } catch (err) {
          // eslint-disable-next-line no-console
          console.log(err)
          commit('setLoading', false)
        }
      },
      setLogoutTimer ({ dispatch }, interval) {
        setTimeout(() => dispatch('logoutUser'), interval)
      },
      logoutUser ({ commit }) {
        commit('clearToken')
        commit('clearUser')
        clearUserData()
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
