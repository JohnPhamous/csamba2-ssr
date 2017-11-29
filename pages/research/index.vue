<template>
  <div class="people section py-4">
    <h3 class="section-title text-center m-5">C-SAMBA Research</h3>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h3>Window to the Brain Research</h3>
          <p class="text-muted">C-SAMBA's Window to the Brain focuses on 8 areas:</p>
          <div class="list-group">
            <a class="list-group-item"
              v-for="r in internalResearch"
              :key="r.name"
              :href="r.link"
            > 
              {{ r.name }}
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <h3>Other Research</h3>
          <p class="text-muted">C-SAMBA also conducts research in the following areas:</p>
          <div class="list-group">
            <a class="list-group-item"
              v-for="r in externalResearch"
              :key="r.name"
              :href="r.link"
            > 
              {{ r.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    internalResearch () {
      return this.$store.state.researchThemes.filter((theme) => (
        !theme.external
      ))
    },
    externalResearch () {
      return this.$store.state.researchThemes.filter((theme) => (
        theme.external
      ))
    }
  }
}
</script>
