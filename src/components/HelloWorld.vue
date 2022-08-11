<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings text-center">
    <h1 class="text-2xl">{{ msg }}</h1>
    <h3>
      HelloWorld.vue message...
      <a class="btn" target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a class="btn" target="_blank" href="https://vuejs.org/">Vue 3</a>.
    </h3>
  </div>
</template>