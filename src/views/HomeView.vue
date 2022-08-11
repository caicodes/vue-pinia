<template>
  <div class="home">
    <div class="mx-auto max-w-screen-md text-3xl">
      <h1>Home</h1>
    </div>
    <span class="text-9xl font-thin mx-auto flex justify-center ">{{ counter }}</span>
    <div class="btn-group justify-center">
      <button @click="decreaseCounter" class="btn btn-lg ">-</button>
      <button @click="increaseCounter" class="btn btn-lg">+</button>
    </div>
    <button class="btn btn-md btn-accent mx-auto justify-center flex my-8">Reset</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const counter = ref(0)

const increaseCounter = () => {
  counter.value++
}

const decreaseCounter = () => {
  counter.value--
}
</script>

