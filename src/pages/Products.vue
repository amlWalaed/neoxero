<script setup>
import ProductCard from '../components/ProductCard.vue';
import AppLayout from '../layout/AppLayout.vue';
import axios from "@/BaseUrl.js"
import { onMounted, ref  } from "vue"
import popUp from '@/components/popUp.vue'
let products = ref([])
async function fetchProducts(){
    products.value = await axios.get('products/').then(({data})=> data.products)
}
onMounted(()=>{
    fetchProducts()
})


</script>
<template>
    <AppLayout>
        <popUp/>
        <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-10">
            <template v-for="product in products" :key="product.id">
                <ProductCard :product="product"/>
            </template>
        </div>
    </AppLayout>
</template>