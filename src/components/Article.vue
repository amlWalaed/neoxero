<script setup>
import { ArrowRightIcon , ChatBubbleLeftIcon } from '@heroicons/vue/24/outline'
</script>
<template>
    <div class="border border-gray-300 rounded-sm grid grid-cols-2 mb-10">
        <div>
            <img src="/images/03.jpg" class="h-full"/>
        </div>
        <div class="text-blacklight flex flex-col gap-8 p-6">
            <h2 class="capitalize truncate text-3xl font-bold">9 most awesome lake with natuere</h2>
            <span class="uppercase"><span class=" truncate text-primary">traveling</span>jan 10 , 2021 </span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste qui quas cum, itaque eum soluta?</p>
            <div class="flex justify-between">
                <a href="#" class="flex gap-1">continue reading <ArrowRightIcon class="w-5"/> </a>
                <div class="flex gap-1">
                    <ChatBubbleLeftIcon class="w-5"/>
                    <span>9</span>
                </div>
            </div>
        </div>

    </div>
</template>