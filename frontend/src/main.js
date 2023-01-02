import 'bootstrap'
//import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
