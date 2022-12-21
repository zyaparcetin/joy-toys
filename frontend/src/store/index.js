/* eslint-disable no-undef */
/* eslint-disable no-useless-catch */
import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

//import io from 'socket.io-client'

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL
axios.defaults.withCredentials = true

Vue.use(Vuex)

// eslint-disable-next-line no-unused-vars
//const socket = io(process.env.VITE_APP_BASE_URL)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
})
