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
.container
  .card-container
    .row
      //- .col-5
      //-   img(:src="`${product.photo}`" width='100%' height='100%')
      .col-7
        h3 {{ product.name }}
        h5 Product Price: {{ product.price }} €
        //- button.btn.btn-primary(v-if="user" @click="buy(product)") Buy
  //- .row.reviews Reviews
  //-   .col
  //-     h5(v-show="!product.revs.length") No reviews yet!
  //-     #product-reviews(v-for="review in product.revs")
  //-       h6 User name :  {{review.user.name}}
  //-       h6 Review : {{review.review}}
  //-       button.btn.btn-primary(v-if="review.user.email === user.email" @click="deleteRev(review)")  Delete review 
</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 1px solid #333;
  background: #dd0;
  border-radius: 0.3rem;
}
</style>
