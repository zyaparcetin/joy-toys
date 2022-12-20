import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL


Vue.use(Vuex)

const socket = io(process.env.VITE_APP_BASE_URL)

const mutations = {
  SET_USER: 'set user',
  SET_PRODUCT: 'set product',
}

const store = new Vuex.Store({
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
    /*async fetchUserOrders(store, id) {
      const userOrders = await axios.get(`/api/orders/user/${id}`)
      return userOrders.data
    },*/

      // PRODUCT 
  
      /* async filterProducts(store, fPrice, FFuel, FGear) {
        const filteredProduct = await axios.post('/api/products/filter', fPrice, FFuel, FGear)
        return filteredProduct.data     
      },
      async fetchCompanyProducts(store, id) {
        const companyProducts = await axios.get(`/api/products/company/${id}`)
        return companyProducts.data
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
        return user.data
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
    
  modules: {},
})

export default async function init() {
  await store.dispatch('fetchSession')
  await store.dispatch('fetchProducts')
  return store
}
