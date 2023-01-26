<script>
import { mapState } from 'vuex'
export default {
  name: 'cart-view',
  data() {
    return {}
  },

  /* methods: {
    ...mapActions(['deleteItem']),
  }, */

  computed: {
    ...mapState(['user']),
  },
}
</script>

<template lang="pug">
.container
  .row
    h1 My Cart
    .col(v-if = "user?.cart === null")
      h1 No Items in Cart
    .col.product-list
  .row  
      .card.col-12.mt-2.clearfix(v-for="product in user?.cart")
        .col.img-container
          img.card-img-top.pt-1(:src="`${product.photo}`" :alt="`${product.name}`")
        .col
          .card-body   
            h6 {{product.name}}    
            h6.card-text Price : {{ product.price }} € 
        .btn-group.d-flex.btn-group-spaced
            button.btn.btn-secondary -
            button.btn.btn-secondary 1
            button.btn.btn-secondary +
            button.btn.btn-danger.ml-auto(@click="deleteItem(product._id)") Delete
        .card-body
              p.card-text
                small.text-muted Last updated 3 mins ago


//- .card.mb-3(style='max-width: 540px;')
//- .row.g-0
//-   h1 My Cart
//-   .col-md-4(v-if = "user.cart === null")
//-     h1 No Items in Cart
//-     img.img-fluid.rounded-start(:src="`${product.photo}`" :alt="`${product.name}`")
//-   .col-md-8
//-     .card-body
//-       h5.card-title Card title
//-       p.card-text
//-         | This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
//-       p.card-text
//-         small.text-muted Last updated 3 mins ago

//- <template lang="pug">
//- .container
//-   .row
//-     h1 My Cart
//-     .col(v-if = "user.cart === null")
//-       h1 No Items in Cart
//-     .col.product-list
//-   .row  
//-       .card.col-12.mt-2(v-for="product in user.cart")
//-         .col.img-container
//-           img.card-img-top.pt-1(:src="`${product.photo}`" :alt="`${product.name}`")
//-         .col
//-           .card-body   
//-             h6 {{product.name}}    
//-             h6.card-text Price : {{ product.price }} € 
//-         .col-2
//-           .btn-group.btn-group-lg
//-             button.btn.btn-secondary -
//-             button.btn.btn-secondary 1
//-             button.btn.btn-secondary +
//-         .col-2
//-           button.btn.btn-danger(@click="deleteItem(product._id)") Delete

</template>

<style lang="scss" scoped>
.card {
  width: 35rem;
  padding: 2rem;
  border: 1px solid #333;
  background: lightgrey;
  border-radius: 0.3rem;
  margin: auto;
  margin-top: 18px;
}
.btn-group.d-flex {
  margin-right: 10px;
}
.button.btn.btn-danger.ml-auto {
  margin-left: 10px;
}
.btn-group-spaced {
  margin-right: 10px;
}
</style>
