<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'all-products',
  data() {
    return {
      products: [],
    }
  },
  methods: {
    ...mapActions(['fetchProducts']),
    async buy() {
      if (!this.user) {
        alert('You need to Log-In to buy this product!')
        this.$router.push('/login')
      }
    },
  },
  computed: {
    ...mapState(['user', 'products']),
  },
  async created() {
    this.products = await this.fetchProducts()
  },
}
</script>

<template lang="pug">  
.container
  .row
    h1 Our Products
    //- h1 {{this.products}}
    .col(v-if = "this.products === null")
      h1 No Products 
    .col
      .card.col-12.col-sm-6.col-md-4.col-lg-3.mt-2(v-for="product in this.products")
        .col
          img.card-img-top.pt-1(:src="`${product.photo}`" :alt="`${product.name}`")
        .col
          .card-body
            router-link(:to="`/products/${product._id}`")
              h6.card-title {{ product.name }}
            h6.card-text Price : {{ product.price }} € 
            button.btn.btn-primary( @click="buy(product)") Buy Now
</template>
<style scoped>
.card {
  background-color: #dfe9f1;
}
/* .center {
  margin: auto;
  width: 50%;
  padding: 10px;
} */
</style>
