<script setup()>
//import UserCard from '@/components/user-card.vue'
import ProductCard from '@/components/product-card.vue'
//import CartIcon from '@/components/addtoCart.vue'
//import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  components: {
    //UserCard,
    ProductCard,
    //CartIcon,
  },
  data() {
    return {
      users: [],
      products: [],
    }
  },
  methods: {
    ...mapActions(['fetchProducts']),
    async created() {
      await this.fetchProducts()
    },
  },
}
</script>

<template lang="pug">
.main 
  h1 Welcome to Joy Toys!

</template>
