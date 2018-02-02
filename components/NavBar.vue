<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <nuxt-link class="navbar-brand" to="/">
        C-SAMBA
      </nuxt-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item"
            v-for="n in navItems"
            :key="n.name"
          >
            <nuxt-link class="nav-link"
              :to="n.link"
              active-class="active"
              exact
            >
              {{ n.name }}
            </nuxt-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto" v-if="!this.$store.state.isLoggedIn">
          <li class="nav-item">
            <span class="nav-link" @click="logingIn = true" >Login</span>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto" v-else>
          <li class="nav-item">
            <nuxt-link
              class="nav-link"
              to="/internal"
              active-class="active"
            >
              Internal
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="modal" :class="{ active: logingIn }" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">C-SAMBA Internal Login</h5>
              <button type="button" class="close" @click="logingIn = false" >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <label>Password</label>
              <input
                placeholder="Enter your password"
                type="password"
                class="form-control"
                v-model="password"
                :class="{ 'is-invalid': error }"
              />
              <div class="invalid-feedback">
                Invalid password. Please contact the project manager.
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" @click="login">Login</button>
              <button type="button" class="btn btn-secondary" @click="logingIn = false">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  methods: {
    login() {
      if (this.password === this.$store.state.password) {
        this.$store.state.isLoggedIn = true
        this.logingIn = false
        this.$router.push('/internal')
      }
      else {
        this.error = true
      }
      console.log(this.error)
    }
  },
  data: function () {
    return {
      logingIn: false,
      error: false,
      password: '',
      navItems: [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'People',
          link: '/people'
        },
        {
          name: 'Publications',
          link: '/publications'
        },
        {
          name: 'Research',
          link: '/research'
        },
        {
          name: 'Events',
          link: '/events'
        },
        {
          name: 'News Archive',
          link: '/newsarchive'
        },
        {
          name: 'Funding',
          link: '/funding'
        },
        {
          name: 'Outreach',
          link: '/outreach'
        },
        {
          name: 'Contact',
          link: '/contact'
        }
      ]
    }
  }
}
</script>

<style>
.active {
  display: block;
}
</style>
