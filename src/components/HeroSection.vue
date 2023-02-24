<script setup>
import AppLayout from '@/layout/AppLayout.vue';
import axios from '@/BaseUrl.js'
import { ArrowRightIcon , ChevronRightIcon , BriefcaseIcon} from '@heroicons/vue/24/outline'
import { onMounted, onBeforeMount, ref } from 'vue';
import { Splide, SplideSlide ,SplideTrack } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import { ArrowRightCircleIcon } from '@heroicons/vue/24/solid';
let categories = ref(null)
async function fetchCategories() {
    categories.value = await axios.get('products/categories/').then(({data}) => data)
}
onMounted(() => {
    fetchCategories()
})
onBeforeMount(() => {

})
const options = {
    arrows: true,
    rewind: true,
    pagination: false,
    gap: "1.5rem",
    drag: "free",
    type: "loop",
    focus: "center",
    perPage: 5,
    perMove: 1,
    snap: true,
    autoplay: true,
    interval: 2000,
    autoScroll: {
        speed: 10,
        pagination: false,
    },
    breakpoints: {
        640: {
            perPage: 2,
        },
    }
};
</script>
<template>
    <div class="bg-babyBlue mb-40">
        <AppLayout>
            <div class="relative">
                <div class="flex justify-between items-center max-sm:flex-col p-1 ">
                    <div class="text-blacklight mb-6">
                        <h1 class="font-bold text-4xl">Jeans Jacket For Women</h1>
                        <p class=" my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                            maxime velit non delectus dicta, quibusdam consectetur tenetur cum eveniet adipisci?</p>
                        <a href="#" class="border border-blacklight rounded p-1 md:p-3 flex gap-4 w-fit ">Go to Home
                            <ArrowRightIcon class="w-5 text-primary" />
                        </a>
                    </div>
                    <div>
                        <img src="images/01.png" />
                    </div>

                </div>
                <div class="absolute -bottom-[4rem] left-0 right-0 p-4 shadow-2xl bg-white">
                    <div class="relative bg-white" v-if="categories">
                        <Splide :options="options" aria-label="categories" :has-track="false">
                            <SplideTrack>
                                <template v-for="category in categories">
                                    <SplideSlide>
                                        <BriefcaseIcon class="font-thin w-14 mx-auto"/>
                                        <h2 class="text-primary relative w-fit mx-auto  before:absolute before:bottom-1 before:h-[0.5px] before:w-full before:bg-primary text-center font-bold">{{ category }}</h2>
                                        <p class="text-gray-500 text-sm text-center ">Branding , Products</p>
                                    </SplideSlide>
                                </template>
                            </SplideTrack>
                            <div class="splide__arrows">
                                <button class="splide__arrow splide__arrow--prev"><ChevronRightIcon/></button>
                                <button class="splide__arrow splide__arrow--next"><ChevronRightIcon/></button>
                            </div>
                        </Splide>
                    </div>
                </div>
            </div>
        </AppLayout>
    </div>
</template>
<style>
.splide__arrow svg{
    fill: none;
}
.splide__arrow {
    background-color: white;
    border-radius: 50%;
    border: 1px solid black;
}
.splide__list{

}
</style>