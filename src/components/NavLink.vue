<script setup>
import AppLayout from '@/layout/AppLayout.vue';
import { Bars3Icon, ScissorsIcon } from '@heroicons/vue/24/outline'
import { ref } from "vue"
const links = [
    { name: 'top item' },
    { name: 'hot deals' },
    { name: 'man\'s' },
    { name: 'women\'s' },
]
let show = ref(false)
</script>
<template>
    <AppLayout>
        <div class="flex justify-between text-blacklight items-center">
            <ul class="capitalize gap-4 hidden md:flex">
                <li class="flex items-center gap-1 font-bold">
                    <Bars3Icon class="w-5 h-5" /> home
                </li>
                <template v-for="link in links">
                    <li v-text="link.name"></li>
                </template>
            </ul>
            
            <div class="flex gap-4 max-sm:text-xs max-sm:text-center">
                <div>Get Up to <span class="font-bold">30%OFF</span> for Your 1st Order</div>
                <div class="flex gap-2 items-center">
                    |
                    <ScissorsIcon class="w-5 h-5" />
                    PROMO CODE
                </div>
    
            </div>
    
        </div>
    </AppLayout>
</template>