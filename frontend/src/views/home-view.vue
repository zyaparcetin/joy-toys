<script setup()>
//import UserCard from '@/components/user-card.vue'
//import ProductCard from '@/components/product-card.vue'
//import CartIcon from '@/components/addtoCart.vue'
//import axios from 'axios'
//import { mapActions } from 'vuex'

export default {
  name: 'HomeView',
}
</script>

<template lang="pug">
main.hero-image
  h1.hero-text Welcome to Joy Toys!
</template>

<style lang="scss" scoped>
.hero-image {
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(rgba(0, 0, 0, 0.11), rgba(0, 0, 0, 0.11)), url('../assets/toys.jpg');
  min-height: 50em;
  height: 50%;
  align-self: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  align-items: flex-start;
  justify-content: center;
}
.hero-text {
  text-align: start;
  color: rgb(96, 13, 205);
  align-self: center;
  font-size: 70px;
  font-weight: 600;
  line-height: 70px;
  margin-bottom: 40rem;
}
</style>
