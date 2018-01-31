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
            <a 
              class="list-group-item"
              href="#"
            >
              Lab Personnel List
            </a>
            <a 
              class="list-group-item"
              href="https://csamba.slack.com/"
            >
              Slack Channel
            </a>
          </div>
        </div>

        <div class="col-md-4">
          <h2>Infrastructure</h2>
          <div class="list-group">
            <a 
              class="list-group-item"
              href="https://docs.google.com/spreadsheets/d/1Oypm_4GnhOXOegZoDozKgAwNhoNVrJetzyv81lsFp2U/edit?usp=sharing"
            >
              Equipment List
            </a>
            <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS306DYnoaKPIfou5P1PyS9niu3DioFq84VrfunOeUuY3v4T8xmmI5OJ83Rh-7NIm3L1Ts2CiWJbYDl/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
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
    data: function() {
        return {
            forms: [
                {
                    name: 'Student Travel Grant',
                    file: 'travel_grant.pdf'
                }
            ]
        }
    }
}
</script>
