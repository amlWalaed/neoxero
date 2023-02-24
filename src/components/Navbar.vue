<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import { UserIcon , ShoppingBagIcon , XMarkIcon , Bars3Icon } from '@heroicons/vue/24/outline'
import {ref} from "vue"
import AppLayout from '@/layout/AppLayout.vue';
let show = ref(false)
const links = [
    { name: 'top item' },
    { name: 'hot deals' },
    { name: 'man\'s' },
    { name: 'women\'s' },
]
</script>
<template>
    <AppLayout>
        <nav class="flex justify-between items-center">
            <div class="font-extrabold text-4xl">Bango</div>
            <div class="relative mx-1 md:w-1/3">
                <input type="text" class="w-full h-full bg-babyBlue rounded-full py-2 px-3 focus:ring-1 ring-primary focus:outline-none"/>
                <MagnifyingGlassIcon class="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-2 text-primary"/>
            </div>
            <div class="text-sm text-gray-600 justify-between md:gap-4 flex">
                <div class="flex items-center justify-between gap-1">
                    <UserIcon class="w-7 h-7"/>
                    <span class="truncate max-sm:hidden">MY ACCOUNT</span>
                </div>
                <div class="flex items-center justify-between gap-1 relative">
                    <ShoppingBagIcon class="w-7 h-7"/>
                    <span class="truncate max-sm:hidden">Cart</span>
                    <span class="rounded-full text-center text-xs text-white bg-primary absolute -top-2 right-0 mx-4 h-[15px] w-[15px]">1</span>
                </div>
            </div>
            <button @click="show = true" class="inline md:hidden">
                <Bars3Icon class="w-7 h-7" />
            </button>
            <Transition
            enter-from-class="bottom-full opacity-0"
            enter-to-class="bottom-0"
            enter-active-class="transition-all duration-700"
            leave-active-class="transition-all duration-700"
            leave-from-class="bottom-0"
            leave-to-class="bottom-full opacity-0"
            >
                <div v-if="show" class="fixed inset-0 w-full flex flex-col text-xl bg-slate-100 z-50">
                    <div class="flex justify-between w-full p-6">
                        <div class="font-extrabold text-4xl">
                            Bango
                        </div>
                        <XMarkIcon class="w-10" @click="show=false"/>
                    </div>
                    <ul class="grid gap-5 mx-6">
                        <li> home</li>
                        <template v-for="link in links">
                            <li v-text="link.name"></li>
                        </template>
                    </ul>
                </div>
            </Transition>
        </nav>
    </AppLayout>
</template>