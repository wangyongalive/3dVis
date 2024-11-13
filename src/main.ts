import { createApp } from 'vue'
import router from './router'
import '@/assets/style/base.scss'
import 'element-plus/dist/index.css';

// @ts-ignore
import App from './App.vue'

createApp(App).use(router).mount('#app')
