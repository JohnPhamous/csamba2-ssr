<template>
  <div id="overview" class="overview section py-4">
    <h2 class="section-title text-center my-5">About C-SAMBA</h2>
    <div class="features py-4 mb-4">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h3>About</h3>
            <img class="img-thumbnail" src="../../static/img/wttb.png"/>
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
              <div class="col-md-2 col-md-offset-2 d-flex align-items-center col-sm-1">
                <img class="collaborator" src="../../static/img/collaborators/ucr.jpg" alt="UCR">
              </div>

              <div class="col-md-2 d-flex align-items-center col-sm-1">
                <img class="collaborator" src="../../static/img/collaborators/cicese.png" alt="CICESE">
              </div>

              <div class="col-md-2 d-flex align-items-center col-sm-1">
                <img class="collaborator" src="../../static/img/collaborators/inaoe.jpg" alt="INAOE">
              </div>

              <div class="col-md-2 d-flex align-items-center col-sm-1">
                <img class="collaborator" src="../../static/img/collaborators/unam.png" alt="UNAM">
              </div>

              <div class="col-md-2 d-flex align-items-center col-sm-1">
                <img class="collaborator" src="../../static/img/collaborators/ucsd.jpg" alt="UCSD">
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
.img-thumbnail {
  width: 350px;
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

