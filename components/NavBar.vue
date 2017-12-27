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

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Login</a>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
  data: function () {
    return {
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
