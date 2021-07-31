import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

require('./store/subscriber')

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@/assets/style.css'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'
axios.defaults.headers.common['Authorization'] = "Bearer "+ localStorage.getItem('token')

const app = createApp(App)
store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
    app.use(router);
    app.use(store);
    app.mount('#app');
})
