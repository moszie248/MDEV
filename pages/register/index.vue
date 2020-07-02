<template>
  <div>
    <div class="login-page">
      <div class="form">
        <h1>REGISTER</h1>
        <form @submit.prevent="registerUser">
          <label for="email">Email</label>
          <input :disabled="Loading" id="email" type="text" name="email" v-model="form.email" >
          <label for="pass">password</label>
          <input :disabled="Loading" id="pass" type="password" name="pass" v-model="form.pass" >
          <button type="submit" :disabled="Loading">submit</button>
          <p class="message">Already registered? <a href="/login">Sign In</a></p>
        </form>
      </div>
    </div>

    <!-- <div class="login-page"> -->
    <!-- <div class="form">
      <form class="register-form" @submit.prevent="registerUser">
        <input
          :disabled="Loading"
          :v-model="form.email"
          id="email"
          type="text"
          name="email">
        <input
          :disabled="Loading"
          :v-model="form.pass"
          id="pass"
          type="password"
          name="pass">
        <button type="submit" :disabled="Loading">submit</button>
        <p class="message">Already registered? <a href="/login">Sign In</a></p>
      </form>
    </div> -->
    <!-- </div> -->
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
    async registerUser () {
      await this.$store.dispatch('authenticateUser', {
        email: this.form.email,
        password: this.form.pass,
        returnSecureToken: true
      })
    }
  }
}
</script>

<style></style>
