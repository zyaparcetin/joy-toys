//import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
store.dispatch('fetchSession')
const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
