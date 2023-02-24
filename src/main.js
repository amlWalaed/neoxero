import { createApp } from 'vue'
import router from './routes';
import './style.css'
import App from './App.vue'
import VueSplide from '@splidejs/vue-splide';
createApp(App).use(router).use( VueSplide ).mount('#app')
