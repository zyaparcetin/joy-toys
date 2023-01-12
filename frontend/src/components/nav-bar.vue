<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'NavbarComponent',
  methods: {
    ...mapActions(['logout']),
    async doLogout() {
      await this.logout()
      this.$router.push('/login')
    },
  },
  computed: {
    ...mapState(['user']),
  },
}
</script>
<template lang="pug">
    
nav#sticky-nav.navbar.navbar-expand-lg.bg-primary
  .container-fluid
    a.navbar-brand(href='/') JoyToys
    button.navbar-toggler(type='button', data-bs-toggle='collapse', data-bs-target='#navbarNav', aria-controls='navbarNav', aria-expanded='false', aria-label='Toggle navigation')
      span.navbar-toggler-icon
    #navbarNav.collapse.navbar-collapse
      ul.navbar-nav.justify-content-end
        li.nav-item
          router-link.nav-link(v-if="!user" to="/login") Login
        li.nav-item
           router-link.nav-link(v-if="!user" to="/register") Register
        li.nav-item
          router-link.nav-link(to="/products") Products
        li.nav-item
          router-link.nav-link(to="/") 
            span.bi-cart
        li.nav-item
          a.nav-link(v-if="user" @click="doLogout" href="#") Logout
      form.d-flex(role='search')
        input.form-control.me-2(type='search' placeholder='Search' aria-label='Search')
        button.btn.btn-outline-success(type='submit') Search

</template>
