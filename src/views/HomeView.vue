<template>
  <div class="home flex justify-start flex-col items-center ">
    <div class="bg-base-300 rounded-xl bg-opacity-50 p-8 w-96">
      <!-- page title -->
      <div class="mx-auto max-w-screen-md text-3xl text-center mb-4 justify-center">
        <h1>{{ pageStore.title }}</h1>
      </div>
      <!-- app title -->
      <h2 class="text-center mb-0 text-xl">{{ pageStore.appTitle }}</h2>
      <!-- count -->
      <span class="text-9xl font-thin mx-auto flex justify-center mb-4">{{ storeCounter.count }}</span>
      <!-- storeCounter actions -->
      <div class="btn-group justify-center mb-4">
        <button @click="storeCounter.decreaseCounter(2)" class="btn btn-lg ">--</button>
        <button @click="storeCounter.decrementCount" class="btn btn-lg ">-</button>
        <button @click="storeCounter.incrementCount" class="btn btn-lg">+</button>
        <button @click="storeCounter.increaseCounter(2)" class="btn btn-lg">++</button>
      </div>
      <!-- oddOrEven from storeCounter.oddOfEven -->
      <div class="mb-4 text-center uppercase text-xs">{{ storeCounter.oddOrEven }}</div>
      <!-- title edit -->
      <div class="form-control mb-8 gap-2">
        <label class="input-group mx-auto ">
          <span class="bg-primary text-primary-content font-bold uppercase w-1/2">Page Title</span>
          <input v-model="pageStore.title" type="text" placeholder="New App title..." class="input input-bordered" />
        </label>
        <label class="input-group mx-auto">
          <span class="bg-primary text-primary-content font-bold uppercase w-1/2">App Title</span>
          <input v-model="pageStore.appTitle" type="text" placeholder="New App title..." class="input input-bordered" />
        </label>
        <label class="input-group mx-auto">
          <span class="bg-primary text-primary-content font-bold uppercase w-1/2">Count</span>
          <input v-model="storeCounter.count" type="text" placeholder="New App title..." class="input input-bordered" />
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useCounterStore } from '../stores/counter';
import { usePageStore } from '../stores/page';

const storeCounter = useCounterStore()
const pageStore = usePageStore()

// looking to get this watcher in the store..
// for now, this is working...
watch(() => storeCounter.count, (newCount) => {
  if (newCount === 20) {
    alert('yo yo, bout to hit 20')
  }
})
</script>

