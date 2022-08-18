<template>
  <div
    class="mx-auto max-w-screen-md text-3xl text-center mb-20 flex flex-col gap-4 w-96"
  >
    <h1>{{ pageStore.pageTitle }}</h1>
    <input
      v-model="pageStore.pageTitle"
      placeholder="Auto-focused here..."
      class="input input-bordered"
      v-autofocus
    />
  </div>
</template>

<script setup>
import { vAutofocus } from "../directives/vAutofocus";
import { usePageStore } from "../stores/page";
const pageStore = usePageStore();
</script>
