<template>
  <div>
    <div class="login-page">
      <div class="form">
        <h1>LOGIN</h1>
        <form @submit.prevent="loginUser">
          <label for="email">Email</label>
          <input :disabled="Loading" id="email" type="text" name="email" v-model="form.email" >
          <label for="pass">password</label>
          <input :disabled="Loading" id="pass" type="password" name="pass" v-model="form.pass" >
          <button type="submit" :disabled="Loading">submit</button>
          <p class="message">Not registered?<a href="/register">Create an account</a></p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
export default {
  middleware: 'auth',
  data: () => ({
    form: {
      email: '',
      password: ''
    }
  }),
  computed: {
    Loading () {
      return this.$store.getters.Loading
    },
    isAuthenticated () {
      return this.$store.getters.isAuthenticated
    }
  },
  watch: {
    isAuthenticated (value) {
      if (value) {
        // eslint-disable-next-line no-console
        console.log(value)
        setTimeout(() => this.$router.push('/'), 500)
      }
    }
  },
  methods: {
    async loginUser () {
      await this.$store.dispatch('authenticateUser', {
        action: 'login',
        email: this.form.email,
        password: this.form.pass,
        returnSecureToken: true
      })
    }
  }
}
</script>

<style></style>
