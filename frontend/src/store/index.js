/* eslint-disable no-undef */
/* eslint-disable no-useless-catch */
import axios from 'axios'

import { createStore } from 'vuex'

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL
axios.defaults.withCredentials = true

const mutations = {
  SET_USER: 'set user',
  SET_PRODUCT: 'set product',
}

export default createStore({
  state: {
    user: null,
    products: null,
    reviews: null,
  },
  mutations: {
    [mutations.SET_USER](state, user) {
      state.user = user
    },
    [mutations.SET_PRODUCT](state, products) {
      state.products = products
    },
    /*setFilteredProducts( state, filteredProds) {
      state.products= filteredProds      
     }*/
  },
  actions: {
    //USER
    async fetchUser(store, id) {
      const userRequest = await axios.get(`/api/users/${id}`)
      return userRequest.data
    },
    async fetchUsers() {
      const usersRequest = await axios.get('/api/users')
      return usersRequest.data
    },
    async fetchProducts() {
      const productsRequest = await axios.get('/api/products')
      return productsRequest.data
    },
    /*async fetchUserOrders(store, id) {
      const userOrders = await axios.get(`/api/orders/user/${id}`)
      return userOrders.data
    },*/

    // PRODUCT

    /* async filterProducts(store, fPrice) {
        const filteredProduct = await axios.post('/api/products/filter', fPrice)
        return filteredProduct.data     
      },
      async fetchProducts({commit}) {
        const productsRequest = await axios.get('/api/products')
        commit(mutations.SET_PRODUCT, productsRequest.data)
        return productsRequest.data
      },
      async fetchProduct(store, id) {
        const productRequest = await axios.get(`/api/products/${id}`)
        return productRequest.data
      },
      async addProduct(store, product) {
        await axios.post('/api/products', product)
      },
      async editProduct(store, product) {
        await axios.patch(`/api/products/update/${product.id}`, product)
      },
      async deleteProduct(store, id) {
        return await axios.delete(`/api/products/${id}`)
      },*/

    async fetchSession({ commit }) {
      const user = await axios.get('/api/account/session')
      commit(mutations.SET_USER, user.data || null)
    },
    async login({ commit }, credentials) {
      try {
        const user = await axios.post('/api/account/session', credentials)
        commit(mutations.SET_USER, user.data)
      } catch (e) {
        throw e
      }
    },
    async register(store, user) {
      return axios.post('/api/account', user)
    },
    async logout({ commit }) {
      await axios.delete('/api/account/session')
      commit(mutations.SET_USER, null)
    },

    //REVIEW?
  },
  modules: {},
})

/*export default async function init() {
  await store.dispatch('fetchSession')
  await store.dispatch('fetchProducts')
  return store
}*/
