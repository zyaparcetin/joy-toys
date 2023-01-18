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
    .col.product-list
      
      .card.col-12.mt-2(v-for="product in this.products")
        .col.img-container
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
.card-img-top {
  height: 24rem;
  object-fit: cover;
}
.product-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  grid-auto-rows: minmax(60px, auto);
  /* .img-container {
    position: relative;
    height: 13rem;
    width: 20rem;
    .card-img-top {
      display: block;
      width: 100%;
      height: 13rem;
      object-fit: cover;
    } 
  }*/
}
</style>
