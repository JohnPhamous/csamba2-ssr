<template>
  <div>
    <Hero :hero="'/img/hero/Hero-Home.png'">
      C-SAMBA Manufacturing
    </Hero>
    <div class="people section">
      <h2 class="section-title-primary text-center">Manufacturing</h2>
      <div class="container">
        <div class="research-figure pull-left">
          <img class="research-img figure-img img-fluid rounded" src="/img/research/microneedles.png" alt="Microneedles">
          <figcaption class="figure-caption">Titanium micropillar array fabricated by titanium deep reactive ion etching (Ti DRIE), which is an intermediate step in the microneedle array fabrication process.</figcaption>
        </div>
        <p>
          Titanium is the material of choice for many implants, and will be used as a frame to hold the Window to the Brain transparent YSZ implant and anchor it to the skull. Titanium is is also used for creating microneedle devices for optical clearing agent injection.
        </p>
        <p>
          Titanium foil is bonded to the ceramic WttB implant through diffusion bonding. Diffusion bonding is accomplished with the use of the <nuxt-link to="/research/materialfabrication">CAPAD (current-activated pressure-assisted densification)</nuxt-link> machine created by Dr. Javier Garay, PhD at UC Riverside. The titanium frames will allow for the WttB to be easily anchored to the skull using common dentistry practices (e.g. titanium screws). The implants are expected to cause very little inflammation because they do not apply a constant load to the body. The titanium-YSZ bonds are assessed via pressure burst tests to confirm adequate strength.
        </p>
        <p>
          Titanium microneedle devices are fabricated by applying the MEMS methods. The titanium microneedle devices are used to inject an optical clearing agent into the scalp. This makes the scalp temporarily transparent so <nuxt-link to="/research/opticalimageandtherapy">light-based imaging and therapeutics</nuxt-link> can be performed through the Window to the Brain non-invasively without having to displace the scalp.
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
