<template>
  <div>
    <div class="login-page">
      <div class="form">
        <h1>LOGIN</h1>
        <form @submit.prevent="registerUser">
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
export default {
  middleware: 'auth',
  data: () => ({
    form: {
      email: '',
      password: ''
    }
  })
}
</script>

<style></style>
