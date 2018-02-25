<template>
  <div>
    <Hero :hero="'/img/hero/Hero-Home.png'">
      C-SAMBA Lase-written Photonic Structures
    </Hero>
    <div class="people section">
      <h2 class="section-title-primary text-center">Laser-written Photonic Structures</h2>
      <div class="container">
        <p>
          Optical waveguides are channels in a material which spatially confine light, directing its propagation. Waveguides can be written onto materials via laser irradiation, where the laser changes the refractive index of the material. In nanocrystalline YSZ, the material of the Window to the Brain implant, it is possible to write waveguides using much lower laser power than for other materials, such as silicon. We have previously demonstrated waveguides written along the surface of the YSZ implants, and are now working on writing waveguides across the bulk of the implant. Ultimately, we aim to couple these waveguides to optical fibers to allow for greater optical penetration to deeper targets within the brain. We are also interested in writing diverging waveguide structures to increase the field of view for diagnostic imaging procedures (e.g. Optical Coherence Tomography imaging).
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
