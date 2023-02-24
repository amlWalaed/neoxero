<script setup>
import { onMounted, watch , ref } from 'vue';
let date_1 = new Date('5/25/2023');
let date_2 = new Date();
let days = ref()
let seconds = ref(60)
let munites = ref(60)
let hours = ref(60)
// function watchNum(watchval, changedVal) {
//     watch(watchval, (newVal) => {
//         if (newVal == 0)
//         console.log(newVal)
//             watchval.value = 60
//             changedVal.value -= 1
//     })
// }
// watchNum(seconds, munites)
function getDays(date_1, date_2) {
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
}
let intervalID= null
onMounted(() => {
    days.value = getDays(date_1,date_2)
    setInterval(() => {
        seconds.value -= 1
    }, 1000)
})
watch(seconds , (newSec)=>{
    if(newSec <= 0 &  munites.value != 0 ){
        seconds.value=60
        munites.value-=1
    }else{
        clearInterval(intervalID)
    }
})
watch(munites , (newMun)=>{
    if(newMun <= 0 & hours.value !=0 ){
        munites.value=60
        hours.value-=1
    }
})
watch(hours , (newHours)=>{
    if(newHours <= 0 & days.value!=0){
        hours.value=60
        days.value-=1
    }
})
watch(days , (newDays)=>{
    if(newDays <= 0){
        days.value-=1
    }
})


</script>
<template>
    <div class="flex justify-center">
        <div class="flex items-center flex-col">
            <span class="text-lg lg:text-5xl font-bold">{{ days }} : </span>
            <span class="text-primary">Days</span>
        </div>
        <div class="flex items-center flex-col">
            <span class="text-lg lg:text-5xl font-bold"> {{ hours }} : </span>
            <span class="text-primary">Hours</span>
        </div>
        <div class="flex items-center flex-col">
            <span class="text-lg lg:text-5xl font-bold"> {{ munites }} :</span>
            <span class="text-primary">Munites</span>
        </div>
        <div class="flex items-center flex-col">
            <span class="text-lg lg:text-5xl font-bold">{{ seconds }}</span>
            <span class="text-primary">Seconds</span>
        </div>
    </div>
</template>