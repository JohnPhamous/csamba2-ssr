<template>
  <div>
    <Hero :hero="'/img/hero/Hero-Home.png'">
      <h1 class="text-white">C-SAMBA Fiber and Development and Coupling</h1>
    </Hero>
    <div class="people section">
      <h2 class="section-title-primary text-center">Fiber Development and Coupling</h2>
      <div class="container">
        <p style="margin-top:30px;">
          The goal of the Window to the Brain transparent cranial implant is to provide chronic optical access to the brain for therapeutic and diagnostic applications. The transparency of the implant allows for light to pass directly through the bulk of the material, which may be appropriate for shallow targets (e.g. in the cortex). For deeper targets, optical fibers implanted in the brain and coupled to waveguides written through the sample will be utilized. We are currently developing several different optical fibers for use with the Window the the Brain, including optical fibers for delivering and receiving light, optical fiber microheaters for therapeutic applications, as well as other fiber-based diagnostic sensors. This effort is lead by the collaborating laboratory of Juan Hernandez-Cordero at UNAM in Mexico City, Mexico.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import Hero from '../../components/Hero-Small'

export default {
  components: {
    Hero
  }
}
</script>
