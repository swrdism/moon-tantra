import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import navHeader from '@/components/NavHeader.vue'

import './scss/style.scss'
import * as bootstrap from 'bootstrap'

createApp(App)
    .component('navHeader', navHeader)
    .use(router)
    .mount('#app')
