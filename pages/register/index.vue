<template>
  <div>
    <h1>register</h1>
    <form @submit.prevent="registerUser">
      <label for="email">Email</label>
      <input :disabled="Loading" id="email" type="text" name="email" v-model="form.email" >
      <label for="pass">password</label>
      <input :disabled="Loading" id="pass" type="password" name="pass" v-model="form.pass" >
      <button type="submit" :disabled="Loading">submit</button>
    </form>
    <!-- <div :md-activate.sync="isAuthenticated">
      {{ form.email }} was successfully!
    </div> -->
  </div>
</template>

<script>
export default {
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
        setTimeout(() => this.$route.push('/'), 2000)
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
