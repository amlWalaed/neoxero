<script setup>
import AppLayout from '../layout/AppLayout.vue';
</script>
<template>
    <AppLayout>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-32 items-start my-24">
            <div class="grayscale hover:grayscale-0 transition-all duration-500">
                <img src="/images/graphicriver.png" alt="graphicriver"/>
            </div>
            <div class="grayscale hover:grayscale-0 transition-all duration-500">
                <img src="/images/codecanyou.png" alt="codecanyou"/>
            </div>
            <div class="grayscale hover:grayscale-0 transition-all duration-500">
                <img src="/images/envato.png" alt="envato"/>
            </div>
            <div class="grayscale hover:grayscale-0 transition-all duration-500"> 
                <img src="/images/themeforest.png" alt="themeforest"/>
            </div>
        </div>
    </AppLayout>
</template>