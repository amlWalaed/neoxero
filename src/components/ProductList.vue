<script setup>
import Slider from './Slider.vue';
import ProductCard from './ProductCard.vue';
import axios from "@/BaseUrl.js"
import { onMounted, ref  } from "vue"
import {SplideSlide} from '@splidejs/vue-splide';

let products = ref([])
async function fetchProducts(){
    products.value = await axios.get('products/').then(({data})=> data.products)
}
onMounted(()=>{
    fetchProducts()
})
</script>
<template>
    <div class="my-20"  v-if="products.length">
        <Slider>
            <template v-for="product in products" :key="product.id">
                <SplideSlide>
                    <ProductCard :product="product">
                </ProductCard>
            </SplideSlide>
        </template>
    
        </Slider>
    </div>
</template>