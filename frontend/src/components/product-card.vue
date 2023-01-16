<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  data() {
    return {}
  },
}
</script>

<template lang="pug">
.card
  img.card-img-top.pt-1(:src="product.photo")
  .card-body
    h5.card-title {{product.name}} {{product.price}}
    p.card-text it's a super toy
    .position-relative
      button.btn.btn-primary.position-absolute.bottom-10.end-0( @click="buy(product)") Buy Now
//-.reviews Reviews
         
</template>

<style lang="scss" scoped>
.card {
  width: 35rem;
  padding: 2rem;
  border: 1px solid #333;
  background: #dd0;
  border-radius: 0.3rem;
  margin: auto;
  margin-top: 18px;
}
</style>
