<template>
  <div>
    <Hero :hero="'/img/hero/Hero-Misc.png'">WHAT WE DO.</Hero>
    <div class="people section">
      <h2 class="section-title-primary text-center">C-SAMBA Research</h2>
      <table class="table table-responsive">
        <tbody>
          <tr
            v-for="r in internalResearch"
            :key="r.name"
          >
            <td>
              <a :href="r.link">{{ r.name }}</a>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 class="section-title-secondary text-center">OTHER RESEARCH</h2>
      <table class="table table-responsive">
        <tbody>
          <tr
            v-for="r in externalResearch"
            :key="r.name"
          >
            <td>
              <a :href="r.link">{{ r.name }}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
tr:nth-child(odd) {
  padding: 2rem 1rem;
  color: white;
  background: linear-gradient(to right, #1a1a1a, #007bff);
  border: none;
}
tr:nth-child(even) {
  padding: 2rem 1rem;
  color: white;
  background: linear-gradient(to right, #1a1a1a, #003d7e);
  border: none;
}
td {
  border: none;
  text-transform: uppercase;
  letter-spacing: 5px;
  padding: 3em;
}
td a {
  color: white;
}
.table {
  margin-bottom: 0;
}
p {
  margin-bottom: 0px;
}
</style>

<script>
import Hero from '../../components/Hero'
export default {
  components: {
    Hero
  },
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
