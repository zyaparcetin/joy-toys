<script>
import { mapActions } from 'vuex'

export default {
  name: 'all-products',
  data() {
    return {
      products: [],
    }
  },
  methods: {
    ...mapActions(['fetchProducts']),
  },
  async created() {
    this.products = await this.fetchProducts()
  },
}
</script>

<template lang="pug">  
.row
  h1 Our Products
  //- h1 {{this.products}}
  .col(v-if = "this.products === null")
    h1 No Products 
  .col
    .card.col-12.col-sm-6.col-md-4.col-lg-3.mt-2(v-for="pr in this.products")
      .card-body
        router-link(:to="`/products/${pr._id}`")
          h6.card-title {{ pr.name }}
        h6.card-text Price : {{ pr.price }} € 
        button.btn.btn-primary(v-if="user" @click="buy(pr)") Buy Now
</template>
<style scoped>
.card {
  background-color: #dfe8f1;
}
.search-bar-button {
  max-width: 200px;
  padding: 10px;
}
.center {
  margin: auto;
  width: 50%;
  padding: 10px;
}
label {
  text-align: center;
  padding-left: 10px;
}
</style>
