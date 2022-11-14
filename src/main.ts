import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import './style.css'
import i18n from './lang/index'
import router from './router/index'
import App from './App.vue'


const app = createApp(App)

app.use(router)
    .use(i18n)
    .use(ElementPlus)
    .use(createPinia())
    .mount('#app')