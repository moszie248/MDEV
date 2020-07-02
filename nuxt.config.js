export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  router: {
    middleware: 'check-auth'
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '~/plugins/axios' },
    { src: '~/plugins/firestore' }
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    credentials: true,
    proxy: true
  },
  proxy: {
    '/api/': {
      target: 'https://newsapi.org/v2',
      pathRewrite: { '^/api/': '' }
    },
    '/register/': {
      target: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDTQ-cgs06Wc6VecIjoqObxQUsHSLbMi1A',
      pathRewrite: { '^/register/': '' }
    },
    '/login/': {
      target: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDTQ-cgs06Wc6VecIjoqObxQUsHSLbMi1A',
      pathRewrite: { '^/login/': '' }
    }
  },
  env: {
    NEWS_API_KEY: '7f32f26ecfb54c70b18ffe2afbf4210e'
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
}
