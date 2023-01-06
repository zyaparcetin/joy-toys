<script>
import { mapActions } from 'vuex'
import Navbar from './components/nav-bar.vue'
export default {
  name: 'App',
  components: { Navbar },
  methods: {
    ...mapActions(['logout', 'fetchSession']),
    /* async doLogout() {
      await this.logout()
      this.$router.push('/login')
    },
    async created() {
      await this.fetchSession()
    }, */
  },
}
</script>
<template lang="pug">
#app
  #nav
    Navbar
    //-router-link(to="/login") Login
    //-router-link(to="/register") Register
    //-a(@click="doLogout" href="#") Logout 
    //-bir seyler eklemeli miyim mesela product-card?
  router-view
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 1rem;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
