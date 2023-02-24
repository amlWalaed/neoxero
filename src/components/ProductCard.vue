<script setup>
import { onMounted } from 'vue';
import { StarIcon  } from '@heroicons/vue/24/solid'
import { HeartIcon , ShoppingCartIcon } from '@heroicons/vue/24/outline'
const props = defineProps({
    product:Object
})

</script>
<template>
    <div class="overflow-hidden rounded-lg">
        <div class="relative overflow-hidden image-product ">
            <HeartIcon class="w-7 absolute top-0 right-0 m-2"/>
            <div class="absolute top-0 left-0 bg-blueGray text-white p-2 font-bold text-">
                {{ product.discountPercentage.toFixed() }} %
            </div>
            <img :src="product.thumbnail" :atl="product.title" class="h-72 w-full"/>
            <div class="absolute -bottom-20 max-sm:text-xs w-full bg-primary text-white p-4 flex justify-center items-center gap-4 shopping-cart transition-all duration-700">
                <ShoppingCartIcon class="w-5"/>
                <span>Add To Cart</span>
            </div>
        </div>
        <div>
            <div class="flex gap-2 justify-center mb-3 mt-1">
                <StarIcon class="w-5 text-yellow-500"/>
                <span class="font-bold text-blacklight">{{ product.rating }}</span>
            </div>
            <div class="text-center text-blacklight">
                <h2 class="text-sm">{{ product.title }}</h2>
                <div class="flex gap-2 justify-center font-bold">
                    <span class="text-primary  relative line-through before:absolute before:top-1/2 before:h-[0.25px] before:w-full before:bg-primary">${{ product.price  }}</span>
                    <span>${{ product.price }}</span>
                </div>
            </div>
        </div>

    </div>
</template>
<style>

.image-product:hover .shopping-cart{
   bottom: 0;
}
</style>