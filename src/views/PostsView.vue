<template>
  <div
    class="mx-auto max-w-screen-md text-2xl text-center mb-20 flex flex-col gap-4 w-96"
  >
    <h1 class="texgt-4xl font-extrabold">{{ pageStore.postsTitle }}</h1>
    <ul>
      <li>
        <RouterLink :to="`/postDetail/${pageStore.postsTitle}-1`"
          >{{ pageStore.postsTitle }} 1</RouterLink
        >
      </li>
      <li>
        <RouterLink :to="`/postDetail/${pageStore.postsTitle}-2`"
          >{{ pageStore.postsTitle }} 2</RouterLink
        >
      </li>
      <li>
        <RouterLink :to="`/postDetail/${pageStore.postsTitle}-3`"
          >{{ pageStore.postsTitle }} 3</RouterLink
        >
      </li>
    </ul>
    <input
      v-model="pageStore.postsTitle"
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
