<script setup>
import Navbar from "@/components/Navbar.vue"
import NavLink from "@/components/NavLink.vue"
import ServicesSection from '@/components/ServicesSection.vue';
import FooterSection from '@/components/FooterSection.vue';
import Gallary from '@/components/Gallary.vue'
</script>

<template>
      <Navbar/>
      <NavLink />
      <router-view></router-view>
      <ServicesSection/>
      <Gallary/>
      <FooterSection/>
</template>

<style scoped>

</style>
