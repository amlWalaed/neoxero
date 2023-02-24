<script setup>
import AppLayout from '../layout/AppLayout.vue';
import { TruckIcon , ShoppingBagIcon ,ShieldCheckIcon , PhoneArrowDownLeftIcon} from '@heroicons/vue/24/outline'
</script>
<template>
    <AppLayout>
        <div class="grid md:grid-cols-4 gap-2">
            <div class="flex flex-col justify-center items-center">
                <TruckIcon class="w-10 text-primary mb-4"/>
                <h3 class="text-lg text-blacklight font-bold" >
                    payment & delivery
                </h3>
                <p class="text-blacklight">
                    free shipping for orders over $50
                </p>
            </div>
            <div class="flex flex-col justify-center items-center">
                <ShieldCheckIcon class="w-10 text-primary mb-4"/>
                <h3 class="text-lg text-blacklight font-bold" >
                    secure payment
                </h3>
                <p class="text-blacklight">
                    100% secure payment gateway
                </p>
            </div>
            <div class="flex flex-col justify-center items-center">
                <ShieldCheckIcon class="w-10 text-primary mb-4"/>
                <h3 class="text-lg text-blacklight font-bold" >
                    secure payment
                </h3>
                <p class="text-blacklight">
                    100% secure payment gateway
                </p>
            </div>
            <div class="flex flex-col justify-center items-center">
                <PhoneArrowDownLeftIcon class="w-10 text-primary mb-4"/>
                <h3 class="text-lg text-blacklight font-bold" >
                    quality support
                </h3>
                <p class="text-blacklight">
                    always online feedback 24/7
                </p>
            </div>
        </div>

    </AppLayout>
</template>