<script setup>
import AppLayout from '../layout/AppLayout.vue';
defineProps({
    displayReverse:false
})
</script>
<template>
    <div :class="'flex-row-reverse'" class="bg-babyBlue my-6">
        <AppLayout>
            <div :class="{'flex-row-reverse': displayReverse} "  class=" flex max-sm:flex-col-reverse gap-4 justify-between items-center text-center">
                <div class="self-end">
                    <slot name="photo">
                        <img src="/images/02.png"/>
                    </slot>
                </div>
                <div class="text-blacklight flex flex-col justify-center">
                    <slot name="text">
                        <div class="uppercase relative">
                            <h2 class="font-bold text-6xl ">Winter</h2>
                            <div class="absolute -top-0 -my-7 right-0 text-sm text-white">
                                <img src="/images/graph.png" class="w-20">
                                <div class="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    sales
                                </div> 
                            </div>
                            <div class="tracking-widest ml-6 text-lg leading-3">collection</div>
                        </div>
                        <div class="my-6">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, temporibus.
                        </div>
                        <a href="#" class="border-dashed border border-blacklight rounded-lg w-fit m-auto p-4 text-primary text-6xl">
                            50%OFF
                        </a>

                    </slot>
                </div>
            </div>
        </AppLayout>
    </div>
</template>