<template>
  <div>
    <Hero/>
    <Overview/>
    <FeaturedPublications/>
  </div>
</template>

<script>
import Hero from '~/components/Home/Hero.vue'
import Overview from '~/components/Home/Overview.vue'
import FeaturedPublications from '~/components/Home/FeaturedPublications.vue'

export default {
  components: {
    Hero,
    Overview,
    FeaturedPublications
  }
}
</script>
