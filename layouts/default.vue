<template>
  <div class="container">
    <div class="header-top">
      <h1 to="/">M2DEV</h1>
      <ul class="menu">
        <!-- <input type="checkbox" id="menuToggle" />
          <label class="menu-icon"><span>x</span></label> -->
        <!-- <li>
          <nuxt-link to="/">
            News
          </nuxt-link>
        </li> -->
        <!-- <li>
            <nuxt-link to="/profile/profile">
              Profile
            </nuxt-link>
          </li> -->
        <li v-if="isAuthenticated">
          <img :src="user.avatar">
        </li>
        <li v-if="isAuthenticated">
          <a>{{ user.email }}</a>
        </li>
        <li v-if="isAuthenticated">
          <!-- <nuxt-link>
            Logout
          </nuxt-link> -->
          <button @click="logoutUser">logout</button>
        </li>
        <!-- <li v-if="isAuthenticated==false">
          <nuxt-link to="/login">
            Login
          </nuxt-link>
        </li>
        <li v-if="isAuthenticated==false">
          <nuxt-link to="/register">
            register
          </nuxt-link>
        </li> -->
      </ul>
    </div>
    <Nuxt />
  </div>
</template>
<script>
export default {
  computed: {
    user () {
      return this.$store.getters.user
    },
    isAuthenticated () {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    logoutUser () {
      this.$store.dispatch('logoutUser')
      setTimeout(() => this.$router.push('/register/'), 100)
    }
  }
}
</script>
<style></style>
