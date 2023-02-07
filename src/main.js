import { createApp } from 'vue'
import App from './App.vue'
import router from './config/router.js'
import store from './config/store.js'

import './registerServiceWorker'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


const app = createApp(App)
//app.config.Vue.config.productionTip = false

app.use(BootstrapVue)
app.use(IconsPlugin)
app.use(router)
app.use(store)
app.mount('#app')
