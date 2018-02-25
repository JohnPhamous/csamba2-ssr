<template>
  <div>
    <Hero :hero="'/img/hero/Hero-Home.png'">
      C-SAMBA Optical Cavitation
    </Hero>
    <div class="people section">
      <h2 class="section-title-primary text-center">Optical Cavitation</h2>
      <div class="container">
        <div class="research-figure pull-left">
          <img class="research-img figure-img img-fluid rounded" src="/img/research/shadowgraph.png" alt="Shadowgraph image showing cavitation bubble at its maximum diameter of 2mm.">
          <figcaption class="figure-caption">Shadowgraph image showing cavitation bubble at its maximum diameter of 2mm.</figcaption>
        </div>
        <p>
          Cavitation is a process in which a vapor bubble is formed in a liquid followed by its collapse and emission of a strong shock-wave. Our research focuses on the optical method of inducing these bubbles: a laser is focused into an absorptive liquid, causing it to superheat and form a bubble. This process introduces rapid and strong changes in mechanical, thermal and optical properties of the environment where the nucleation occurs. We aim to take advantage natural agitation and convection that occurs during the collapsing stage as a means of inducing localized and temporary enhanced cooling on a boundary. We have implemented a non-intrusive technique called Planar Laser-Induced Fluorescence (PLIF) to measure the temperature field around a single bubble. A temperature drop is observed directly after bubble collapse approaching relatively close to initial conditions. Current work includes studying the temperature variations due to simultaneous bubble pattern formations.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '../../components/Hero'

export default {
  components: {
    Hero
  }
}
</script>
