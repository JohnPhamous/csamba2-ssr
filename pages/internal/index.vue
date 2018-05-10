<template>
  <div class="people section py-4">
    <h3 class="section-title text-center m-5">C-SAMBA Internal</h3>
    <div class="container">
      <div class="row">

        <div class="col-md-3">
          <h2>Forms</h2>
          <div class="list-group">
            <a
              v-for="form in forms"
              :key="form.file"
              class="list-group-item"
              :href="`/docs/${form.file}`"
            >
             {{ form.name }}
            </a>
          </div>
        </div>

        <div class="col-md-4">
          <h2>Communications</h2>
          <div class="list-group">
            <router-link
              class="list-group-item"
              to="/people"
            >
              Lab Personnel List
            </router-link>
            <a
              class="list-group-item"
              href="https://csamba.slack.com/"
              target="_blank"
            >
              Slack Channel
            </a>
          </div>
        </div>

        <div class="col-md-4">
          <h2>Tooling and Capabilities</h2>
          <div class="list-group">
            <router-link
              class="list-group-item"
              to="/internal/infrastructure"
              target="_blank"
            >
              Equipment List
            </router-link>
            <router-link
              class="list-group-item"
              to="/internal/capabilities"
              target="_blank"
            >
              Capabilities
            </router-link>
          </div>
        </div>

        <div class="col-md-4">
          <h2>Documents</h2>
          <div class="list-group">
            <a
              class="list-group-item"
              href="#"
            >
              New Member Onboarding
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  created: function () {
    if (!this.$store.state.isLoggedIn) {
      this.$router.push('/')
    }
  },
    data: function() {
        return {
            forms: [
                {
                    name: 'UCR GSA Student Travel Grant',
                    file: 'travel_grant.pdf'
                }
            ]
        }
    }
}
</script>

<style>
  .footer {
    position: absolute !important;
  }
</style>
