<template>
  <div class="container">
    <div class="section-grid">
      <div v-for="News in AllNews" :key="News.id" class="section-item">
        <a :href="News.url">
          <div class="section-image">
            <img
              class="card-img-top"
              :src="News.urlToImage"
              alt="Card image cap"
            />
          </div>
          <div class="section-info">
            <h5>{{ News.title }}</h5>
            <small>{{ News.author }}</small>
          </div>
        </a>
      </div>
    </div>
    <footer>
      <div class="container">
        <div class="footer-grid">
          <div class="footer-item">
            <h2>NewsLetter</h2>
            <p></p>
          </div>
          <div class="footer-item">
            <h2>Information</h2>
            <p>Home</p>
          </div>
          <div class="footer-item">
            <h2>Help</h2>
            <p>Contact us</p>
          </div>
          <div class="footer-item">
            <h2>Contact</h2>
            <ul class="foot">
              <li>Facebok</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Line</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  async asyncData ({ app }) {
    const ResNews = await app.$axios.$get('/api/top-headlines?country=us')
    return { AllNews: ResNews.articles }
  }
}
</script>

<style></style>
