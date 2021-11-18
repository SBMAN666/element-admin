import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import './styles/index.scss'
// 用户鉴权
import './permission.js'

const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).mount('#app')
