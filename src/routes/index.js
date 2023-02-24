import Home from '@/pages/Home.vue'
import {createRouter , createWebHistory} from 'vue-router'
const routes = [
    { path: '/', component: Home},
    { path: '/products', name:'products' , component:()=> import( /* webpackChunkName: "products" */ '@/pages/products.vue') },
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes
})
  export default router