import { createApp } from 'vue'
import App from './App.vue'
import ToastPlugin from 'vue-toast-notification'

import 'vue-toast-notification/dist/theme-sugar.css'
import './index.css'

const app = createApp(App)

app.use(ToastPlugin).mount('#app')
