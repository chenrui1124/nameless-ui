import '@css'

import { createApp } from 'vue'
import view from './view.vue'
import router from './router'

createApp(view).use(router).mount('#app')
