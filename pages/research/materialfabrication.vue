<template>
  <div>
    <Hero :hero="'/img/hero/Hero-Home.png'">
      C-SAMBA Material Fabrication
    </Hero>
    <div class="people section">
      <h2 class="section-title-primary text-center">Material Fabrication</h2>
      <div class="container">
        <div class="research-figure float-left">
          <img class="research-img figure-img img-fluid rounded" src="/img/research/CAPAD.png" alt="Current-Activated Pressure-Assisted Densification (CAPAD) uses electric current to rapidly heat YSZ nanopowder while it is pressed in a die to form a fully densified YSZ sample. The rapid heating allows for densification to be completed in minutes, thus limiting grain growth and maintaining a nanocrystalline structure.">
          <figcaption class="figure-caption">Current-Activated Pressure-Assisted Densification (CAPAD) uses electric current to rapidly heat YSZ nanopowder while it is pressed in a die to form a fully densified YSZ sample. The rapid heating allows for densification to be completed in minutes, thus limiting grain growth and maintaining a nanocrystalline structure.</figcaption>
        </div>
        <p>
          The Window to the Brain implants are produced by densifying Yttria-Stabilized Zirconia (YSZ) nanopowder into a bulk ceramic material. To accomplish this densification, while still maintaining a nanocrystalline microstructure, we use a process called Current-Activated Pressure-Assisted Densification (CAPAD). CAPAD allows us to maintain the nanocrystalline structure by reducing the densification time (on the order of 10 minutes), thereby preventing grain growth. This is important for a few reasons: mechanically it allows us to maintain the nanocrystalline structure which results in increased toughness, while optically, the nanocrystalline structure is the reason why our material is transparent while conventional micro-crystalline YSZ is opaque. The nano-sized grains and pores between these grains result in less scattering of light compared to microcrystalline grains and pores. This reduction in light scattering allows more light to pass through the sample, imparting transparency.
        </p>
        <p>
          In addition to grain size, the composition of the material also has a significant impact on several of its properties. We are fabricating several different compositions of YSZ, including 3 molar% Yttria, 6 molar%, and 8 molar%. Different compositions have different benefits, such as increased transparency, toughness, and aging resistance, and thus the optimal WttB formulation will need to balance these competing factors.
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
