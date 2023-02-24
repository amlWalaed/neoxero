<script setup>
import AppLayout from '../layout/AppLayout.vue';
import ProductList from "@/components/ProductList.vue"
import Header from './HeaderCard.vue';
import { provide } from 'vue';
provide('numberOfSlides', 2)
</script>
<template>
    <AppLayout>
        <div class="">
            <div class="py-10">
                <Header>
                    <template #title>
                         top peak of week
    
                    </template>
                    <template #text>
                        top best weakly sakes products
                    </template>
                    
                </Header>
            </div>
            <div class="flex max-md:flex-col-reverse gap-4 my-7">
                <div class="relative">
                    <img src="/images/03.jpg" class="h-full"/>
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded grid place-content-center text-center p-4 gap-3 text-primary">
                        <p class="capitalize tracking-wider">most popular products</p>
                        <h2 class="uppercase text-4xl">this week</h2>
                        <a href="#" class=" text-blacklight  relative w-fit mx-auto  before:absolute before:bottom-1 before:h-[0.5px] before:w-full before:bg-blacklight">Shop All</a>
                    </div>
                </div>
                <div class="md:w-1/2">
                    <ProductList />
                </div>

            </div>
        </div>
    </AppLayout>
</template>