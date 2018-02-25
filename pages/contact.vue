<template>
  <div>
    <h2 class="section-title-primary text-center">C-SAMBA Contact</h2>
    <Hero :hero="'/img/hero/Hero-Misc.png'">
        For more information on C-SAMBA's research, please contact <a href="mailto:gaguilar@engr.ucr.edu">Dr. Guillermo Aguilar</a> or <a href="mailto:dhalaney@engr.ucr.edu">David Halaney</a>.
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
