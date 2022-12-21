<script>
import { mapState } from 'vuex'
export default {
  name: 'ProductCard',
  props: ['product'],
  data() {
    return {}
  },
}
</script>

<template lang="pug">
.box
  h1 {{ product.name }} ({{ product.price }})
 
</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 1px solid #333;
  background: #dd0;
  border-radius: 0.3rem;
}
</style>
