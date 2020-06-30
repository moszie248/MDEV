<template>
  <div class="container">
    <div class="header-top">
      <h1>M.2DEV</h1>
      <ul class="menu">
        <!-- <input type="checkbox" id="menuToggle" />
          <label class="menu-icon"><span>x</span></label> -->
        <li>
          <nuxt-link to="/">
            Today News
          </nuxt-link>
        </li>
        <!-- <li>
            <nuxt-link to="/profile/profile">
              Profile
            </nuxt-link>
          </li> -->
        <li>
          <nuxt-link to="/login">
            Login
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/register">
            Logout
          </nuxt-link>
        </li>
      </ul>
    </div>
    <Nuxt />
  </div>
</template>

<style></style>
