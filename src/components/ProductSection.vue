<script setup>
import ProductList from './ProductList.vue';
import AppLayout from '../layout/AppLayout.vue';
import Header from './HeaderCard.vue';
import { provide } from 'vue';
defineProps({
    title:String,
    links:Array
})
provide('numberOfSlides' , 3)
</script>
<template>
    <AppLayout>
        <div class="pt-4 text-blacklight text-center">
            <Header>
                <template #title>
                    {{ title }}
                </template>
                <template #links>
                    <li class=" text-primary font-bold border-b-2 border-b-primary">All</li>
                    <template v-for="link in links">
                        <li >{{ link }}</li>
                    </template>
                </template>
            </Header>
        </div>
        <ProductList />
    </AppLayout>

</template>