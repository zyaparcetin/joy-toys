<script setup()>
//import UserCard from '@/components/user-card.vue'
import ProductCard from '@/components/product-card.vue'
//import CartIcon from '@/components/addtoCart.vue'
//import axios from 'axios'
export default {
  components: {
    //UserCard,
    ProductCard,
    //CartIcon,
  },
  data() {
    return {
      users: [],
      products: [],
    }
  },
  /*async created() {
    const usersRequest = await axios.get('http://localhost:4444/api/users')
    this.users = usersRequest.data
  },
  async created() {
    const productsRequest = await axios.get('http://localhost:4444/api/users/products')
    this.products = productsRequest.data
  },*/
}
</script>

<template lang="pug">
//- .box
//- CartIcon
 
//- .productbox  
   h1 New offers
   product-card(v-for="product in products"  :product="product")
 
//-  // ProductCard
//- user-card(v-for="user in users" :user="user") 
//-   ProductCard
//-   ProductCard
//-   ProductCard
</template>

<style>
.box {
  background-color: rgb(234, 114, 208);
  width: 200%;
  height: 60px;
  margin: auto;
}
.productbox {
  margin: 3% 15% 7%;
}
</style>
