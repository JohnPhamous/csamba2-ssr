<template>
  <div>
    <Hero :hero="'/img/hero/Hero-Home.png'">
      C-SAMBA Material Characterization
    </Hero>
    <div class="people section">
      <h2 class="section-title-primary text-center">Material Characterization (Optical, Mechanical, Aging/Wear)</h2>
      <div class="container">
        <p>
          While conventional microcrystalline YSZ has been widely used in many medical and industrial applications and its properties are well documented, the nanocrystalline structure of our samples affect several of its properties (e.g. optical, mechanical, thermal, and aging). Moreover, we are working with several compositions of YSZ with differing stabilizer content, as well as varying grain size, and thus must thoroughly characterize these various properties for our specific samples.
        </p>

        <h2 class="section-title-secondary text-center">Optical Properties</h2>
        <p>
          The YSZ Window to the Brain samples are fabricated using Current-Activated Pressure-Assisted Densification (CAPAD), which is a reducing environment. In this environment, oxygen leaves lattice sites within the YSZ, and light scattering by these oxygen vacancies makes the sample appear opaque. Oxygen vacancies are removed from the sample by annealing, or by laser irradiation of the samples, which causes them to appear transparent. The specific parameters used during annealing or laser irradiation affect the resulting optical properties of the sample. Changing the composition of the sample, by altering the molar% of Yttria, also affects the optical properties.
        </p>
        <p>
          Optical characterization techniques we use include spectroscopy (transmittance, reflectance, absorbance), and Miller Matrix Imaging (MMI) to characterize polarization changes in light passing through the sample.
        </p>

        <h2 class="section-title-secondary text-center">Mechanical Properties</h2>

        <div class="research-figure float-right">
          <img class="research-img figure-img img-fluid rounded" src="/img/research/characterization2.png" alt="Indentation in ceramic sample for measurement of Vickers hardness.">
          <figcaption class="figure-caption">Indentation in ceramic sample for measurement of Vickers hardness.</figcaption>
        </div>

        <p>
          The nanocrystalline microstructure of our samples have a significant impact on the mechanical properties of the bulk implants. Additionally, different compositions of YSZ (e.g. 3 molar% Y, 6 molar% Y, 8 molar% Y) have different crystal phases, such as cubic, tetragonal, or monoclinic. These phases also have a significant impact on the mechanical properties.
        </p>
        <p>
          To characterize the mechanical properties of our samples, we use nanoindentation and other mechanical testers to measure hardness, elastic modulus, indentation, scratch and wear.
        </p>

        <h2 class="section-title-secondary text-center">Thermal Properties</h2>
        <div class="research-figure float-left">
          <img class="research-img figure-img img-fluid rounded" src="/img/research/characterization1.png" alt="Thermal infrared imaging of a ceramic sample during photothermal heating.">
          <figcaption class="figure-caption">Thermal infrared imaging of a ceramic sample during photothermal heating.</figcaption>
        </div>
        <p>
          The nanocrystalline microstructure of our samples have a significant impact on the mechanical properties of the bulk implants. Additionally, different compositions of YSZ (e.g. 3 molar% Y, 6 molar% Y, 8 molar% Y) have different crystal phases, such as cubic, tetragonal, or monoclinic. These phases also have a significant impact on the mechanical properties.
        </p>
        <p>
          To characterize the mechanical properties of our samples, we use nanoindentation and other mechanical testers to measure hardness, elastic modulus, indentation, scratch and wear.
        </p>

        <h2 class="section-title-secondary text-center">Aging Resistance</h2>
        <p>
          Although YSZ possesses excellent mechanical and biocompatibility properties, low-temperature aging of conventional microcrystalline YSZ has been a problem in the past. Specifically, phase transformation from cubic and/or tetragonal grains to monoclinic phase has resulted in deterioration of the mechanical properties, causing premature failure of orthopedic implants. This past issue prompted the creation of an ISO standard for aging characterization of YSZ ceramics intended for implantation (ISO 13356-2008).
        </p>
        <p>
          In compliance with this standard, we conduct simulated low-temperature aging studies on our Window to the Brain samples. The simulated aging is conducted at 134C and 2 bar pressure in a saturated steam environment. Following aging for 36 hours (simulating in vivo aging for 72+ years in the body), we assess phase transformation using X-ray Diffraction and Raman Spectroscopy. Optical and Mechanical properties are also evaluated after aging.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import Hero from '../../components/Hero'

export default {
  components: {
    Hero
  }
}
</script>
