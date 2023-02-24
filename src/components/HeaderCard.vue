<script setup>
</script>
<template>
    <div class="text-blacklight text-center">
        <h2 class="font-bold text-4xl mb-4 capitalize">
            <slot name="title">

            </slot>

        </h2>
        <p class="text-blacklight text-center capitalize">
            <slot name="text">

            </slot>
        </p>
        <ul class="flex gap-4 uppercase justify-center max-sm:text-xs text-sm">
            <slot name="links">

            </slot>
        </ul>
    </div>
</template>