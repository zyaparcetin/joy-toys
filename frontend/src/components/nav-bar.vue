<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'NavbarComponent',
  data() {
    return {
      searchQuery: '',
    }
  },
  methods: {
    ...mapActions(['logout']),
    async doLogout() {
      await this.logout()
      this.$router.push('/login')
    },
    ...mapActions(['search']),
    async doSearch() {
      await this.search(this.searchQuery)
    },
  },
  computed: {
    ...mapState(['user', 'searchResults']),
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
          router-link.nav-link(to="/cart")
             i.bi-cart(v-if="user") ({{user.cart.length}})
        li.nav-item
          a.nav-link(v-if="user" @click="doLogout" href="#") Logout
      form.d-flex(role='search')
        //-input.form-control.me-2(type='search' placeholder='Search' aria-label='Search')
        //-button.btn.btn-outline-success(type='submit') Search
        input.form-control.me-2(type='search' placeholder='Search' v-model="searchQuery" aria-label='Search')
        button.btn.btn-outline-success(type='submit' @click="doSearch") Search

</template>

<style lang="scss" scoped>
/* Add styles to the navbar */
nav#sticky-nav {
  background-color: #5c6ac4;
  padding: 0.5rem 0;
  height: 60px;
}
ul.navbar-nav {
  position: absolute;
  right: 0;
  top: 0;
}

/* Add styles to the brand text */
nav#sticky-nav .navbar-brand {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

/* Add styles to the navigation links */
nav#sticky-nav .navbar-nav .nav-item .nav-link {
  padding: 0.5rem 1rem;
  line-height: 2;
  color: white;
  font-size: 1.2rem;
  margin-right: 1rem;
}

/* Add styles to the active navigation link */
nav#sticky-nav .navbar-nav .nav-item .nav-link.router-link-active {
  background-color: #3f51b5;
  border-radius: 0.25rem;
}

/* Add styles to the search bar */
nav#sticky-nav form {
  position: absolute;
  left: 50%;
  transform: translateX(-80%);
  background-color: #3f51b5;
  padding: 0.5rem;
  border-radius: 0.25rem;
  width: 800px;
}

nav#sticky-nav form input {
  border: none;
  background-color: white;
  color: #333;
}
</style>
