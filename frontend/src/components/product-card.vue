<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  data() {
    return {}
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    buy(product) {
      // Send a request to the server to add the item to the cart
      // Update the stock and any other necessary actions
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
      button.btn.btn-primary.position-absolute.bottom-10.end-0( @click="buy(product)") Buy Now
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
