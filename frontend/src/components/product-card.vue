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
      //-img(:src="`${product.photo}`" width='100%' height='100%')
      .card-body
        h5.card-title {{product.name}} {{product.price}}
//-.reviews Reviews
         
</template>

<style>
.card {
  width: 35rem;
  padding: 5%;
  display: inline-block;
  margin: 20px;
}
</style>

<style lang="scss" scoped>
.card {
  padding: 2rem;
  border: 1px solid #333;
  background: #dd0;
  border-radius: 0.3rem;
}
</style>
