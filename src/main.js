import { createApp } from 'vue'
import 'normalize.css'
import './assets/styles/main.less'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
