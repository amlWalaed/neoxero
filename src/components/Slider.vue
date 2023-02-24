<script setup>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import { ChevronRightIcon , ChevronLeftIcon} from '@heroicons/vue/24/outline'
import { inject } from 'vue';
const numberOfSlides = inject('numberOfSlides')
const options = {
    arrows: true,
    rewind: true,
    pagination: false,
    gap: "1.5rem",
    drag: "free",
    type: "loop",
    focus: "center",
    perPage: numberOfSlides,
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
            perPage: 1,
        },
    }
};
</script>
<template>
    <Splide :options="options" :has-track="false">
        <SplideTrack>
                <slot  />
            </SplideTrack>
            <div class="splide__arrows absolute -top-9 right-0 flex gap-4 font-bold">
                <button class="splide__arrow splide__arrow--prev text-blacklight flex gap-2">
                    <ChevronRightIcon  class="rounded-full border border-blacklight w-3 p-1 "/> 
                    <div>
                        Previsous
                    </div>
                </button>
                <button class="splide__arrow splide__arrow--next flex gap-2 text-primary">
                    <div>
                        Next
                    </div>
                    <ChevronRightIcon  class="rounded-full border border-primary text-primary w-3 p-1" /> 
                </button>
               
            </div>
    </Splide>
</template>
<style scoped>
.splide__arrow svg{
    fill: none;
}
.splide__arrow {
    background-color: white;
    border: none;
    width: fit-content;
    align-items: center;
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    opacity: 1;
    padding: 0;
    transform: translateY(0);
    width: fit-content;
    z-index: 1;
    border-radius: none;
}
.splide__arrow--next , .splide__arrow--prev{
    right: 0;
    left: 0;
    position: relative;
}
</style>