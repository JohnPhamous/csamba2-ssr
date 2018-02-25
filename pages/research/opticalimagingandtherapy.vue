<template>
  <div>
    <Hero :hero="'/img/hero/Hero-Home.png'">
      <h1 class="text-white">C-SAMBA Optical Imaging and Therapy</h1>
    </Hero>
    <div class="people section">
      <h2 class="section-title-primary text-center">Optical Imaging and Therapy</h2>
      <div class="container">
        <p style="margin-top:30px;">
          The goal of the Window to the Brain transparent cranial implant is to provide chronic optical access to the brain, to allow clinicians to perform optical imaging and therapy through the cleared scalp and implant without needing to open the skull. To develop an implant with the correct optical properties to facilitate these procedures, we are conducting in vivo optical imaging and therapy studies with several common procedures. These include Optical Coherence Tomography imaging (OCT), fluorescence imaging (for hemodynamic tracking and assessment of leukocyte recruitment), Laser Speckle Imaging (LSI), and Enhanced Backscatter imaging (EBS). These studies are conducted in mice, and all procedures have been approved by the Institutional Animal Care and Use Committee at the University of California, Riverside.
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
