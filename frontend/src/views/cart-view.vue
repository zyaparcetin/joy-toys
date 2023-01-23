<script>
import { mapState } from 'vuex'
export default {
  name: 'cart-view',
  data() {
    return {}
  },
  computed: {
    ...mapState(['user']),
  },
}
</script>

<template lang="pug">
.container
  .row
    h1 My Cart
    .col(v-if = "user.cart === null")
      h1 No Items in Cart
    .col.product-list
      
      .card.col-12.mt-2(v-for="product in user.cart")
        .col.img-container
          img.card-img-top.pt-1(:src="`${product.photo}`" :alt="`${product.name}`")
        .col
          .card-body
            //-router-link(:to="`/products/${product._id}`")
              h6.card-title {{ product.name }}
            h6.card-text Price : {{ product.price }} € 
            button.btn.btn-primary(@click="checkout") Checkout
</template>
