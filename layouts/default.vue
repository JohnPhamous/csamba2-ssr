<template>
  <div class="csamba-landing-page--1">
    <NavBar/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    NavBar,
    Footer
  }
}
</script>
