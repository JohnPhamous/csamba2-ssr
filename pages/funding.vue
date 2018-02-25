<template>
  <div>
    <h2 class="section-title-primary text-center">C-SAMBA Funding</h2>
    <Hero :hero="'/img/hero/Hero-Misc.png'">
      <strong>C-SAMBA</strong> is supported in part by research grants from the <strong>National Science Foundation</strong>.
    </Hero>
  </div>
</template>

<script>
import Hero from '../components/Hero-Small'

export default {
  components: {
    Hero
  }
}
</script>
