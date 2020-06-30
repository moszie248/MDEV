<template>
  <div class="container">
    <!-- <div class="header-top">
      <h1>M.2DEV</h1>
      <ul class="menu">
        <li>
          <nuxt-link to="/">
            Today News
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/profile/profile">
            Profile
          </nuxt-link>
        </li>
        <li>
          <a href="https://github.com/moszie248">
            comming
          </a>
        </li>
      </ul>
    </div> -->
    <header>
      <figure class="brand">Responsive</figure>
      <nav class="menu">
        <input type="checkbox" id="menuToggle" />
        <label class="menu-icon"><i class="fa fa-bars"/></label>
        <ul>
          <a
            href="http://stackoverflow.com/questions/9191803/why-does-z-index-not-work"
            ><li>Home</li></a
          >
          <a href="#"><li>Sobre</li></a>
          <a href="#"><li>Serviços</li></a>
          <a href="#"><li>Equipe</li></a>
          <a href="#"><li>Contato</li></a>
        </ul>
      </nav>
    </header>
    <Nuxt />
  </div>
</template>

<style></style>
