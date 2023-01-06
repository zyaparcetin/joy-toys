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
  router-view
</template>
