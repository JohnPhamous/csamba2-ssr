<template>
  <div id="overview" class="overview section">
  <h2 class="section-title-primary text-center">About
	<span class="flr"> C-SAMBA </span>
  </h2>
    <div class="features py-4 mb-4">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <img class="img-thumbnail" src="../../static/img/wttb.png"/>
          </div>

          <div class="col-md-8">
            <p class="bg-text-primary" style="font-family: 'Open Sans'; font-size: 16px; font-weight: 400;">
              Stemming from multidisciplinary, international collaboration among material scientists, engineers, biologists, clinicians, and students from the University of California, Riverside and 3 top institutions in Mexico, the Center for the Synthesis of Advanced Materials for Biomedical Applications (C-SAMBA) seeks to synthesize, characterize, and test a new generation of nanocrystalline opto-ceramic materials for bioapplications.
            </p>

            <p class="bg-text-secondary" style="font-family: 'Open Sans'; font-size: 16px; font-weight: 400;">
              The primary application of these efforts is the development of a Window to the Brain (WttB) cranial implant, the transparency of which will allow for laser-based diagnosis and treatment of a wide variety of brain pathologies, without repeated craniectomies.
            </p>
          </div>
        </div>
      </div>
    </div>
    <h3 class="section-title-secondary text-center" style="font-size: 18px; letter-spacing: 7px">RESEARCH</h3>
      <div class="col-md-12 text-center d-flex" style="font-family: 'Open Sans'; font-size: 16px; font-weight: 400;">
        <div class="research-row-primary">
          <nuxt-link to="/research/manufacturing">Manufacturing</nuxt-link>
          <span> | </span>
          <nuxt-link to="/research/nanopowdersynthesis">Nanopowder Synthesis</nuxt-link>
          <span> | </span>
          <nuxt-link to="/research/materialfabrication">Material Fabrication</nuxt-link>
          <span> | </span>
          <nuxt-link to="/research/materialcharacterization">Material Characterization</nuxt-link>
          <span> | </span>
          <nuxt-link to="/research/fiber">Fiber Development and Coupling</nuxt-link>
        </div>
      </div>
      <div class="col-md-12 text-center d-flex" style="font-family: 'Open Sans'; font-size: 16px; font-weight: 400;">
        <div class="research-row-primary secondary-color">
          <nuxt-link to="/research/laser">Laser-written Photonic Structures</nuxt-link>
          <span> | </span>
          <nuxt-link to="/research/biocompatability">Biocompatability</nuxt-link>
          <span> | </span>
          <nuxt-link to="/research/opticalimagingandtherapy">Optical Imaging and Therapy</nuxt-link>
        </div>
      </div>
      <div class="col-md-12 text-center d-flex mb-5" style="font-family: 'Open Sans'; font-size: 16px; font-weight: 400;">
        <div class="research-row-primary">
          <nuxt-link to="/research/ceramicwelding">Ceramic Welding</nuxt-link>
          <span> | </span>
          <nuxt-link to="/research/opticalcavitation">Optical Cavitation</nuxt-link>
          <span> | </span>
          <nuxt-link to="/research/laserprocessing">Laser Processing</nuxt-link>
        </div>
      </div>



    <h3 class="section-title-primary text-center" style="margin-bottom: 0rem; font-size: 18px; letter-spacing: 7px">COLLABORATORS</h3>
      <div class="col-md-12 collaborators">
        <div class="row justify-content-center">
          <div class="col-md-2 col-md-offset-2 d-flex align-items-center col-sm-1">
            <img class="collaborator" src="../../static/img/collaborators/ucr.png" alt="UCR">
          </div>

          <div class="col-md-2 d-flex align-items-center col-sm-1">
            <img class="collaborator" src="../../static/img/collaborators/inaoe.png" alt="INAOE">
          </div>

		  <div class="col-md-2 d-flex align-items-center col-sm-1">
            <img class="collaborator" src="../../static/img/collaborators/cicese.png" alt="CICESE">
          </div>

          <div class="col-md-2 d-flex align-items-center col-sm-1">
            <img class="collaborator" src="../../static/img/collaborators/unam.png" alt="UNAM">
          </div>

          <div class="col-md-2 d-flex align-items-center col-sm-1">
            <img class="collaborator" src="../../static/img/collaborators/ucsd.png" alt="UCSD">
          </div>
        </div>

      </div>
  </div>
</template>

<style scoped>
@media (max-width: 550px) {
  .collaborator {
    margin-bottom: 80px;
  }
}
.d-flex {
  justify-content: center;
}
.secondary-color {
  background: #0078D7 !important;
  margin-top: 0px !important;
}
.research-row-primary {
  background: #1a1a1a;
  margin-top: 50px;
  width: -moz-fit-content;
  padding: 5px 10px;
}
.research-row-primary a {
  color: white;
}
.research-row-primary span {
  color: white;
}
.collaborator {
  width: 62%;
}
.img-thumbnail {
  width: 350px;
}
.collaborators {
  background: #262626;
  padding: 40px;
}
</style>

<script>

import wttb from '~/static/img/wttb.png'

export default {
  components: {
    wttb
  },
  computed: {
    researchThemes () {
      return this.$store.state.researchThemes
    }
  },
  data: function () {
    return {
    }
  }
}
</script>
