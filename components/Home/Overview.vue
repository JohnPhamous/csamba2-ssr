<template>
  <div id="our-services" class="our-services section py-4">
    <h2 class="section-title text-center my-5">About C-SAMBA</h2>
    <div class="features py-4 mb-4">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h3>About</h3>
            <p>
              Stemming from multidisciplinary, international collaboration among material scientists, engineers, biologists, clinicians, and students from the University of California, Riverside and 3 top institutions in Mexico, the Center for the Synthesis of Advanced Materials for Biomedical Applications (C-SAMBA) seeks to synthesize, characterize, and test a new generation of nanocrystalline opto-ceramic materials for bioapplications. 
            </p>

            <p>
              The primary application of these efforts is the development of a Window to the Brain (WttB) cranial implant, the transparency of which will allow for laser-based diagnosis and treatment of a wide variety of brain pathologies, without repeated craniectomies. 
            </p>
          </div>

          <div class="col-md-4">
            <h3>Research Areas</h3>

            <div class="list-group">
              <a v-for="r in researchThemes"
                :key="r.name"
                :href="r.link"
                :class="{ 'list-group-item list-group-item-action': r.external,
                          'list-group-item list-group-item-action list-group-item-primary': !r.external }"
              > {{ r.name }}</a>
            </div>
          </div>

          <div class="col-md-12">
            <h3>Collaborators</h3>
          
            <div class="row justify-content-center">
              <div class="col-md-2 col-md-offset-2">
                <img class="collaborator" src="../../static/img/ucr.jpg" alt="UCR">
              </div>

              <div class="col-md-2">
                <img class="collaborator" src="../../static/img/cicese.png" alt="CICESE">
              </div>

              <div class="col-md-2">
                <img class="collaborator" src="../../static/img/inaoe.jpg" alt="INAOE">
              </div>

              <div class="col-md-2">
                <img class="collaborator" src="../../static/img/unam.png" alt="UNAM">
              </div>

              <div class="col-md-2">
                <img class="collaborator" src="../../static/img/ucsd.jpg" alt="UCSD">
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.collaborator {
  width: 100%;
}
</style>

<script>
export default {
  data: function () {
    return {
      researchThemes: [
        {
          name: 'Manufacturing',
          link: ''
        },
        {
          name: 'Nanopowder Synthesis',
          link: ''
        },
        {
          name: 'Material Fabrication',
          link: ''
        },
        {
          name: 'Material Characterization',
          link: ''
        },
        {
          name: 'Fiber Development and Coupling',
          link: ''
        },
        {
          name: 'Laser-Written Photonic Structures',
          link: ''
        },
        {
          name: 'Biocompatibility',
          link: ''
        },
        {
          name: 'Optical Imaging and Therapy',
          link: ''
        },
        {
          name: 'Ceramic Welding',
          link: '',
          external: true
        },
        {
          name: 'Optical Cavitation',
          link: '',
          external: true
        },
        {
          name: 'Laser Processing',
          link: '',
          external: true
        }
      ]
    }
  }
}
</script>

