<template>
  <div>
    <h2 class="section-title-primary text-center">	
		<span class="flr"> C-SAMBA </span>
	Contact</h2>
    <Hero :hero="'/img/hero/Hero-Contact.png'" class="ttl" style="font-size: 20px; padding-bottom: 5rem; letter-spacing: 2.9px;">
        For more information on C-SAMBA's research, please contact <a href="mailto:gaguilar@engr.ucr.edu"><strong>Dr. Guillermo Aguilar</strong></a> or <a href="mailto:dhalaney@engr.ucr.edu"><strong>David Halaney</strong></a>.
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
