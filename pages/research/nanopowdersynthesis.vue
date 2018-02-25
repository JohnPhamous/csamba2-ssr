<template>
  <div>
    <Hero :hero="'/img/hero/Hero-Home.png'">
      <h1 class="text-white">C-SAMBA Nanopowder Synthesis</h1>
    </Hero>
    <h2 class="section-title-primary text-center">YSZ Nanopowder Synthesis</h2>
    <div class="container">
      <div class="research-figure float-left">
        <img class="research-img figure-img img-fluid rounded" src="/img/research/nano4.jpg" alt="TEM micrograph of yttria-stabilized zirconia nanoparticles, which are densified to create the Window to the Brain implant. ">
        <figcaption class="figure-caption">TEM micrograph of yttria-stabilized zirconia nanoparticles, which are densified to create the Window to the Brain implant.</figcaption>
      </div>
      <p>
        Five types of nanoparticles are utilized in the Window to the Brain project, as a precursor material for the implants, antibacterial coating for the implants, and as therapeutic agents for use through the Window to the Brain.
      </p>
      <p>
        Yttria-Stabilized Zirconia (YSZ) is an ideal material for the Window to the Brain implants due to its structural and optical properties, and its well-established biocompatibility. Initial YSZ samples were created by densifying YSZ nanopowder using Current-Activated Pressure-Assisted Densification (CAPAD), using commercially available powder with an initial grain size of 55 nm. CAPAD allows for very rapid densification, which limits grain growth and maintains the nanocrystalline structure of the implants. However, properties such as optical transparency and aging resistance may be improved further if even smaller precursor particle grains were used to produce the samples. The focus of our YSZ nanopowder synthesis studies are to produce smaller powder grains with control of properties such as purity and monodispersity.
      </p>
      <p>
        Nanopowder synthesis is an area where the group focuses on developing the next generation of researchers. The group uses a novel process to create the nanoparticles so it is a great experience for undergraduate researchers. C-SAMBA faculty and undergraduates work together to create 10 nm particles using an aerosol process. The current goal for the team is to scale up production of the nanopowders to 1 gram of nanopowder per day.
      </p>
    </div>
    <h2 class="section-title-secondary text-center" style="margin-top:100px;">Antibacterial Nanopowder Synthesis</h2>
    <div class="container">
      <div class="research-figure float-right">
        <img class="research-img figure-img img-fluid rounded" src="/img/research/nano3.png" alt="TEM micrograph of yttria-stabilized zirconia nanoparticles, which are densified to create the Window to the Brain implant. ">
        <figcaption class="figure-caption">TEM micrograph of a molybdenum carbide nanoparticle. The nanoparticle is coated in graphite layers for improved thermal properties.</figcaption>
      </div>
      <p>
        In addition to precursor nanopowder for the implant fabrication, the team also synthesizes nanoparticles for antibacterial coatings for the implants. This is an important aspect of the WttB because bacterial infections following implantation surgery are the leading cause of cranial implant failure. This is primarily due to E. coli infections.
      </p>
      <p>
        The team is currently synthesizing two types of nanoparticles for antibacterial applications. Both zinc oxide (ZnO) and molybdenum (Mo) nanoparticles possess antibacterial properties, while being biocompatible to host tissue. In addition to synthesizing the nanoparticles, the team is also conducting in vitro bacterial viability studies, as well as methods to coat the implant, such as (drop coating).
      </p>
      <p>
        ZnO nanoparticles possess antibacterial properties alone, and these properties are further enhanced by femtosecond laser irradiation. Molybdenum carbide nanoparticles encapsulated by graphitized carbon layers also possess antibacterial properties, with the added benefit of excellent thermal and chemical stability, making them appropriate for thermal management applications as well.
      </p>
      <p>
        Both of these nanoparticles are inexpensive to synthesize, making them ideal candidates for this application.
      </p>
    </div>
  </div>
</div>
</template>

<style scoped>
</style>

<script>
import Hero from '../../components/Hero-Small'

export default {
  components: {
    Hero
  }
}
</script>
