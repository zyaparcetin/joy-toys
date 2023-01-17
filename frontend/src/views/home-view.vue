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
  background-image: url('https://as1.ftcdn.net/v2/jpg/04/06/96/06/1000_F_406960680_62qFoiz279oVKe48yFCdmvq10F0hrcMo.jpg');
  //background-image: linear-gradient(rgba(0, 0, 0, 0.11), rgba(0, 0, 0, 0.11)), url('../assets/toys1.jpg');
  //https://as1.ftcdn.net/v2/jpg/04/06/96/06/1000_F_406960680_62qFoiz279oVKe48yFCdmvq10F0hrcMo.jpg
  // https://www.shutterstock.com/image-photo/frame-kids-toys-on-blue-600w-1500465974.jpg
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
  text-align: center;
  color: rgb(96, 13, 205);
  align-self: auto;
  font-size: 60px;
  font-weight: 600;
  line-height: 70px;
  margin-bottom: 40rem;
}
</style>
