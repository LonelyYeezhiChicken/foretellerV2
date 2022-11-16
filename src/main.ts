import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//import zhTw from 'element-plus/dist/locale/lang/zh-tw.min.mjs'
//import i18n from './lang/index'
import router from './router/index'
import App from './App.vue'


const app = createApp(App)

app.use(router)
    // .use(i18n)
    .use(ElementPlus)
    .use(createPinia())
    .mount('#app')