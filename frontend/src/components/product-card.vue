<!-- eslint-disable no-undef -->
<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'ProductCard',
  props: ['product'],
  data() {
    return {}
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    ...mapActions(['fetchProducts', 'addToCart', 'fetchSession']),

    async addProductToCart(product) {
      console.log(product)
      if (!this.user) {
        alert('You need to Log-In to add this product to cart!')
        this.$router.push('/login')
      }
      await this.addToCart(product._id)
      await this.fetchSession()
    },
  },
}
</script>

<template lang="pug">
.card
  img.card-img-top.pt-1(:src="product.photo")
  .card-body
    h5.card-title {{product.name}} {{product.price}}
    p.card-text Its super fluffy and soft fur invites you for a cuddle and hug.
    .position-relative
      button.btn.btn-primary.position-absolute.bottom-10.end-0( @click="addProductToCart(product)") Add to Cart
//-.reviews Reviews
         
</template>

<style lang="scss" scoped>
.card {
  width: 35rem;
  padding: 2rem;
  border: 1px solid #333;
  background: lightblue;
  border-radius: 0.3rem;
  margin: auto;
  margin-top: 18px;
}
</style>
