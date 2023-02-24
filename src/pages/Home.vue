<script setup>
import AppLayout from '@/layout/AppLayout.vue';
import HeroSection from '@/components/HeroSection.vue';
import ProductSection from '@/components/ProductSection.vue';
import Poster from '@/components/Poster.vue';
import TopWeek from '@/components/TopWeek.vue';
import Brands from "@/components/Brands.vue"
import Article from '@/components/Article.vue'
import StopWatch from '@/components/StopWatch.vue';
import { RouterLink } from 'vue-router';
let links = ['clothing' , 'shoes & boots' , 'accessories']
</script>
<template>
<HeroSection/>
      <ProductSection title="new arrival" :links="links"/>
      <Poster/>
      <TopWeek/>
      <Poster :displayReverse="true">
        <template #photo>
          <img src="/images/04.png"/>
        </template>
      </Poster>
      <ProductSection title="trending items" :links="links"/>
      <RouterLink :to="{name:'products'}" class="mx-auto block text-center text-blacklight relative w-fit before:absolute before:bottom-0 before:h-[0.75px] before:w-full before:bg-blacklight">Load More</RouterLink>
      <div class="max-w-7xl mx-auto">
        <Poster :displayReverse="true">
          <template #photo>
            <img src="/images/03.png"/>
          </template>
          <template #text>
            <div class="grid gap-4 p-8">
              <h2 class="uppercase text-3xl font-semibold" >deal of the day</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ducimus!</p>
              <StopWatch/>
              <a href="#" class="underline">browser now</a>
            </div>
          </template>
        </Poster>
      </div>
      <Brands/>
      <AppLayout>
        <div class="flex justify-between gap-4 max-sm:flex-col">
          <Article />
          <Article />
        </div>
      </AppLayout>
</template>