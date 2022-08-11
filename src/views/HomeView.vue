<template>
  <div class="home flex justify-start flex-col items-center ">
    <div class="bg-base-300 rounded-xl bg-opacity-50 p-8 w-96">
      <!-- page title -->
      <div class="mx-auto max-w-screen-md text-3xl text-center mb-10 justify-center">
        <h1> {{ appTitle }}</h1>
        <div> 🍍pinia~ {{ storeCounter.count }}</div>
      </div>
      <!-- counter -->
      <h2 class="text-center text-xl">{{ counterData.title }}</h2>
      <span class="text-9xl font-thin mx-auto flex justify-center ">{{ counterData.count }}</span>
      <div class="btn-group justify-center mb-4">
        <button @click="storeCounter.decreaseCounter(2)" class="btn btn-lg ">--</button>
        <button @click="storeCounter.decrementCount" class="btn btn-lg ">-</button>
        <button @click="storeCounter.incrementCount" class="btn btn-lg">+</button>
        <button @click="storeCounter.increaseCounter(2)" class="btn btn-lg">++</button>
      </div>

      <div class="mb-2 text-center">{{ oddOrEven }}</div>
      <div class="mb-2 text-center">🍍pinia~ {{ storeCounter.oddOrEven }}</div>
      <!-- title edit -->
      <div class="form-control mb-8">
        <label class="input-group mx-auto justify-center 
        ">
          <span class="bg-primary text-primary-content font-bold uppercase">Title</span>
          <input v-model="counterData.title" type="text" placeholder="New title..." class="input input-bordered"
            v-autofocus />
        </label>
        <!-- <button class="btn btn-accent justify-center flex mb-8 btn-md m-2 ">Update</button> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, watch, onMounted } from 'vue'
import { vAutofocus } from '@/directives/vAutofocus'
import { useCounterStore } from '../stores/counter';

const storeCounter = useCounterStore()

const appTitle = 'my yo yo app'


const counterData = reactive({
  count: 0,
  title: 'my yo-yos'
})

watch(() => counterData.count, (newCount) => {
  if (newCount === 20) {
    alert('yo yo, bout to hit 20')
  }
})

const oddOrEven = computed(() => {
  if (counterData.count % 2 === 0) return 'even'
  return 'odd'
})

onMounted(() => {
  console.log('do stuff for yo-yo')
})


</script>

