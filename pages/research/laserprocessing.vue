<template>
  <div>
    <Hero :hero="'/img/hero/Hero-Home.png'">
      <h1 class="text-white">C-SAMBA Laser Processing</h1>
    </Hero>
    <div class="people section">
      <h3 class="section-title-primary text-center">Laser Processing</h3>
      <div class="container">
        <div class="research-figure pull-left">
          <img class="research-img figure-img img-fluid rounded" src="/img/research/laser-processing.png" alt="SEM of magnesium surface irradiated with nanosecond laser pulses resulting in increased absorption in the visible spectrum and hydrophobicity.">
          <figcaption class="figure-caption">SEM of magnesium surface irradiated with nanosecond laser pulses resulting in increased absorption in the visible spectrum and hydrophobicity.</figcaption>
        </div>
        <p>
          Laser processing is being studied for the purpose of altering material structure, properties and performance for specific applications. Focused femtosecond lasers with comparatively low energy, (nanoJoule), high repetition rate, (megaHertz) pulses can be used to damage or remove small volumes of material. Steel, silicon, tungsten carbide and yttria-stabilized zirconia have been micro-machined using this regime of laser irradiation. High energy nanosecond laser pulses can create micro and nano scale surface structures on structural and bio metals like Magnesium and Titanium, changing properties like absorption, color, composition, hydrophobicity and roughness. Finally, continuous wave laser heating of novel nanocrystalline binary metal alloy powders for enhanced laser densification is an ongoing effort in hopes of achieving 3D-printed nanocrystalline alloys or composites that maintain their strength-increasing nano grain size in elevated temperature environments.
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

<style scoped>
  .research-img {
    width: 150px;
  }
</style>
