<script setup>
import {ref} from 'vue'
import axios from "@/BaseUrl.js"
import { XMarkIcon  , ArrowPathIcon} from '@heroicons/vue/24/outline';
let open = ref(false)
let product = ref(null)
let loading = ref(false)
let message = ref(false)
async function sendData(){
    loading.value = true
    await axios.post('products/add',{title:product.value}).then((data)=> {
        console.log(data.status)
        if(data.status ==200) {
            message.value=true
            setTimeout(()=>{
                message.value= false
            }, 5000)
        }
    })
    loading.value = false   
}
</script>
<template>
    <button class="block mx-auto my-10 rounded bg-primary text-white px-3 py-2 hover:opacity-70" @click="open = true">add products</button>
    <Teleport to="body">
        <div class=" z-30" v-if="open">
            <div class="fixed inset-0 h-screen w-full bg-black bg-opacity-50" @click="open =false"></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-8 flex flex-col justify-center gap-5 max-w-4xl md:w-1/">
                <XMarkIcon class="w-5 relative -right-[100%] -top-5 " @click="open=false"/>
                <input type="text" v-model="product" class=" rounded ring-gray-400 focus:ring-1 border-b-2 border-gray-400 outline-none text-blacklight p-2" placeholder="place enter product name " />
                <div class="text-green-900 text-sm font-bold text-center transition-all duration-700" :class="{'block opacity-100':message,'hidden opacity-0 ':!message}" >it was added successfully</div>
                <button class="block mx-auto my-5 bg-primary text-white px-3 py-2 hover:opacity-70 disabled:bg-gray-700" @click="sendData()" :disabled="loading">
                    <span v-if="!loading" >add</span>
                    <span v-else><ArrowPathIcon class="w-5 animate-spin "/></span>
                </button>
            </div>
        </div>
    </Teleport>
</template>